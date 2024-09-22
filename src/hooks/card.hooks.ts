import { Card } from '../types/card.types';
import angular from '../assets/logos/angular.png';
import nodejs from '../assets/logos/nodejs.png';
import java from '../assets/logos/java.png';
import kotlin from '../assets/logos/kotlin.svg';
import ts from '../assets/logos/ts.png';
import sql from '../assets/logos/sql.png';
import react from '../assets/logos/react.png';
import git from '../assets/logos/git.png';
import nestjs from '../assets/logos/nestjs.svg';
import scss from '../assets/logos/scss.png';
import lwjgl from '../assets/logos/lwjgl.svg';
import blender from '../assets/logos/blender.svg';

export const useCards = () => {
    return [
        { id: 0, title: 'Angular', image: angular.src },
        { id: 2, title: 'NodeJs', image: nodejs.src },
        { id: 3, title: 'Java', image: java.src },
        { id: 4, title: 'Kotlin', image: kotlin.src },
        { id: 5, title: 'Typescript', image: ts.src },
        { id: 6, title: 'SQL', image: sql.src },
        { id: 7, title: 'React', image: react.src },
        { id: 8, title: 'Git', image: git.src },
        { id: 9, title: 'NestJs', image: nestjs.src },
        { id: 10, title: 'Scss', image: scss.src },
        { id: 11, title: 'Lwjgl', image: lwjgl.src },
        { id: 12, title: 'Blender', image: blender.src },
    ] as const satisfies Card[];
};
