'use client';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
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
                modules={[Navigation, Autoplay]}
                loop={true}
                navigation={true}
                centeredSlides={true}
                autoplay={{ delay: 2500 }}
                slidesPerView={5}
            >
                {cards.map(card => (
                    <SwiperSlide className={styles['card-preview-list-swiper-slide']}>
                        <CardPreview card={card} key={card.id} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
