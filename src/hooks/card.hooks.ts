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
        { title: 'Angular', image: angular.src },
        { title: 'NodeJs', image: nodejs.src },
        { title: 'Java', image: java.src },
        { title: 'Kotlin', image: kotlin.src },
        { title: 'Typescript', image: ts.src },
        { title: 'SQL', image: sql.src },
        { title: 'React', image: react.src },
        { title: 'Git', image: git.src },
        { title: 'NestJs', image: nestjs.src },
        { title: 'Scss', image: scss.src },
        { title: 'Lwjgl', image: lwjgl.src },
        { title: 'Blender', image: blender.src },
    ] as const satisfies Card[];
};
