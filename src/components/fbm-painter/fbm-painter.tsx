import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh, ShaderMaterial } from 'three';

const fragmentShader = `
#define NUM_OCTAVES 6

#define RANDOM(seed) (fract(sin(seed) * 43758.5453))

float random(float seed) {
    float root = 12.9898;
    return RANDOM(seed * root);
}

float random(vec2 seed) {
    vec2 root = vec2(12.9898, 78.233);
    return RANDOM(dot(seed, root));
}

float noise(vec2 seed) {
    vec2 i = floor(seed);
    vec2 f = fract(seed);
    
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    
    vec2 u = smoothstep(vec2(0), vec2(1), f);
    
    return mix(a, b, u.x) +
    (c - a) * u.y * (1.0 - u.x) +
    (d - b) * u.x * u.y;
}

float fbm(in vec2 st) {
    float hSin = sin(.5);
    float hCos = cos(.5);
    mat2 rot = mat2(
        +hCos, +hSin,
        -hSin, +hCos
    );
    
    float result = 0.0;
    float attenuation = 0.5;
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        result += attenuation * noise(st);
        st = rot * st * vec2(2) + vec2(100);
        attenuation *= 0.5;
    }
    return result;
}

uniform float u_time;

void main(void) {
    vec2 st = gl_FragCoord.xy * vec2(.006);
    
    vec2 q = vec2(0);
    q.x = fbm(st + 0.11 * u_time);
    q.y = fbm(st + vec2(1.0));
    
    vec2 r = vec2(0);
    r.x = fbm(st + vec2(1.) * q + vec2(1.7, 9.2) + vec2(0.150) * u_time);
    r.y = fbm(st + vec2(1.) * q + vec2(8.3, 2.8) + vec2(0.126) * u_time);
    
    float f = fbm(st + r);
    
    vec3 color = vec3(0.101961, 0.619608, 0.666667);
    
    color = mix(color, vec3(0.666667, 0.666667, 0.498039), clamp((f * f) * 4.0, 0.0, 1.0));
    
    color = mix(color, vec3(0.000000, 0.000000, 0.164706), clamp(length(q), 0.0, 1.0));
    
    color = mix(color, vec3(0.666667, 1.000000, 1.000000), clamp(length(r.x), 0.0, 1.0));
    
    color *= f * f * f + .6 * f * f + .5 * f;
    
    gl_FragColor = vec4(color, .1);
}`;

export const FbmPainter = () => {
    const mesh = useRef<Mesh>(null);

    useFrame(({ clock }) => {
        if (mesh.current) {
            const material = mesh.current.material as ShaderMaterial;

            material.uniforms.u_time = { value: clock.getElapsedTime() };
        }
    });

    return (
        <mesh ref={mesh}>
            <boxGeometry args={[100, 100, 1]} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                uniforms={{ u_time: { value: performance.now() % 100000 } }}
            />
        </mesh>
    );
};
