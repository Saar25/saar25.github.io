'use client';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from '../../types/card.types';
import { CardPreview } from '../card-preview/card-preview';
import styles from './card-preview-list.module.scss';

export interface CardPreviewListProps {
    cards: readonly Readonly<Card>[];
}

export const CardPreviewList = ({ cards }: CardPreviewListProps) => {
    return (
        <div className={styles['card-preview-list-container']}>
            <Swiper
                className={styles['card-preview-list-swiper']}
                modules={[Autoplay]}
                loop={true}
                centeredSlides={true}
                autoplay={{ delay: 2500 }}
                slidesPerView={4.5}
                breakpoints={{
                    0: {
                        slidesPerView: 1.5,
                    },
                    400: {
                        slidesPerView: 2,
                    },
                    1000: {
                        slidesPerView: 4,
                    },
                }}
            >
                {cards.map(card => (
                    <SwiperSlide className={styles['card-preview-list-swiper-slide']} key={card.id}>
                        <CardPreview card={card} key={card.id} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
