import { Card } from '../types/card.types';

export const useCards = () => {
    return [
        { title: 'Angular', image: 'src/assets/logos/angular.png' },
        { title: 'NodeJs', image: 'src/assets/logos/nodejs.png' },
        { title: 'Java', image: 'src/assets/logos/java.png' },
        { title: 'Kotlin', image: 'src/assets/logos/kotlin.svg' },
        { title: 'Typescript', image: 'src/assets/logos/ts.png' },
        { title: 'SQL', image: 'src/assets/logos/sql.png' },
        { title: 'React', image: 'src/assets/logos/react.png' },
        { title: 'Git', image: 'src/assets/logos/git.png' },
        { title: 'NestJs', image: 'src/assets/logos/nestjs.svg' },
        { title: 'Scss', image: 'src/assets/logos/scss.png' },
        { title: 'Lwjgl', image: 'src/assets/logos/lwjgl.svg' },
        { title: 'Blender', image: 'src/assets/logos/blender.svg' },
    ] as const satisfies Card[];
};
