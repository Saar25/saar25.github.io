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
import sass from '../assets/logos/sass.png';
import sql from '../assets/logos/sql.png';
import ts from '../assets/logos/ts.png';
import js from '../assets/logos/js.svg';
import cpp from '../assets/logos/cpp.svg';
import python from '../assets/logos/python.svg';
import html5 from '../assets/logos/html5.svg';
import mongodb from '../assets/logos/mongodb.svg';
import postgresql from '../assets/logos/postgresql.svg';

export const skills = [
    'nodejs',
    'nextjs',
    'react',
    'docker',
    'js',
    'ts',
    'C/C++',
    'html-css',
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
    'html-css': 'Html & Css',
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
    js: js.src,
    ts: ts.src,
    'C/C++': cpp.src,
    'html-css': html5.src,
    nestjs: nestjs.src,
    angular: angular.src,
    java: java.src,
    kotlin: kotlin.src,
    python: python.src,
    sql: sql.src,
    postgresql: postgresql.src,
    mongodb: mongodb.src,
    git: git.src,
    sass: sass.src,
    lwjgl: lwjgl.src,
} as const satisfies Record<(typeof skills)[number], string | null>;
