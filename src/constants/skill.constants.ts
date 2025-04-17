import angular from '../assets/logos/angular.png';
import docker from '../assets/logos/docker.svg';
import git from '../assets/logos/git.png';
import java from '../assets/logos/java.png';
import kotlin from '../assets/logos/kotlin.svg';
import lwjgl from '../assets/logos/lwjgl.svg';
import nestjs from '../assets/logos/nestjs.svg';
import nextjs from '../assets/logos/nextjs.svg';
import nodejs from '../assets/logos/nodejs.png';
import react from '../assets/logos/react.png';
import sass from '../assets/logos/scss.png';
import sql from '../assets/logos/sql.png';
import ts from '../assets/logos/ts.png';

export const skills = [
    'nodejs',
    'nextjs',
    'react',
    'docker',
    'js',
    'ts',
    'C/C++',
    'Html5',
    'Css5',
    'nestjs',
    'angular',
    'java',
    'kotlin',
    'python',
    'sql',
    'postgresql',
    'mongodb',
    'git',
    'sass',
    'lwjgl',
] as const satisfies string[];

export const skillNameDictionary = {
    nodejs: 'Node.js',
    nextjs: 'Next.js',
    react: 'React',
    docker: 'Docker',
    js: 'JavaScript',
    ts: 'TypeScript',
    'C/C++': 'C/C++',
    Html5: 'Html5',
    Css5: 'Css5',
    nestjs: 'Nest.js',
    angular: 'Angular',
    java: 'Java',
    kotlin: 'Kotlin',
    python: 'Python',
    sql: 'Sql',
    postgresql: 'PostgreSQL',
    mongodb: 'MongoDB',
    git: 'Git',
    sass: 'Sass',
    lwjgl: 'Lwjgl',
} as const satisfies Record<(typeof skills)[number], string>;

export const skillLogoDictionary = {
    nodejs: nodejs.src,
    nextjs: nextjs.src,
    react: react.src,
    docker: docker.src,
    js: null, //javascript.src,
    ts: ts.src,
    'C/C++': null,
    Html5: null, //Html5.src,
    Css5: null, //Css5.src,
    nestjs: nestjs.src,
    angular: angular.src,
    java: java.src,
    kotlin: kotlin.src,
    python: null, //python.src,
    sql: sql.src,
    postgresql: null, //postgresql.src,
    mongodb: null, //mongodb.src,
    git: git.src,
    sass: sass.src,
    lwjgl: lwjgl.src,
} as const satisfies Record<(typeof skills)[number], string | null>;
