import { Card } from '../../types/card.types';
import styles from './card-preview.module.scss';

export interface CardPreviewProps {
    card: Readonly<Card>;
}

export const CardPreview = ({ card }: CardPreviewProps) => {
    return (
        <div className={styles['card-preview-container']}>
            <div className={styles['card-preview-rotation']}>
                <div className={styles['card-preview-image-container']}>
                    <img className={styles['card-preview-image']} src={card.image} alt="logo" />
                </div>
                <span className={styles['card-preview-title']}>{card.title}</span>
            </div>
        </div>
    );
};
