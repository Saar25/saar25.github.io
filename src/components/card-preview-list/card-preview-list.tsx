import { Card } from '../../types/card.types';
import { CardPreview } from '../card-preview/card-preview';
import styles from './card-preview-list.module.scss';

export interface CardPreviewListProps {
    cards: readonly Readonly<Card>[];
}

export const CardPreviewList = ({ cards }: CardPreviewListProps) => {
    return (
        <div className={styles['card-preview-list-container']}>
            {cards.map(card => (
                <CardPreview card={card} key={card.id} />
            ))}
        </div>
    );
};
