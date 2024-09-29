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
import scss from '../assets/logos/scss.png';
import sql from '../assets/logos/sql.png';
import ts from '../assets/logos/ts.png';
import { Card } from '../types/card.types';

const cards = [
    { title: 'NodeJs', image: nodejs.src },
    { title: 'NextJs', image: nextjs.src },
    { title: 'React', image: react.src },
    { title: 'Docker', image: docker.src },
    { title: 'Typescript', image: ts.src },
    { title: 'NestJs', image: nestjs.src },
    { title: 'Angular', image: angular.src },
    { title: 'Java', image: java.src },
    { title: 'Kotlin', image: kotlin.src },
    { title: 'SQL', image: sql.src },
    { title: 'Git', image: git.src },
    { title: 'Scss', image: scss.src },
    { title: 'Lwjgl', image: lwjgl.src },
].map((card, id) => ({ id, ...card }) as const) satisfies Card[];

export const useCards = () => {
    return cards;
};
