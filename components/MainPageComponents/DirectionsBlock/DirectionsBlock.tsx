import styles from './DirectionsBlock.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useResizeW } from 'hooks/useResize';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { DirectionsBlockInterface } from 'interfaces/block.interface';
import { DirectionsItem } from '../DirectionsItem/DirectionsItem';
import { Htag } from 'components/Htag/Htag';


export const DirectionsBlock = (): JSX.Element => {
    const router = useRouter();
    const width = useResizeW();

    const direction1: DirectionsBlockInterface = {
        image: '/direction1.webp',
        title: 'Москва',
        text: 'Текст 1',
    };

    const direction2: DirectionsBlockInterface = {
        image: '/direction2.webp',
        title: 'Сочи',
        text: 'Текст 2',
    };

    const direction3: DirectionsBlockInterface = {
        image: '/direction3.webp',
        title: 'Санкт-Петербург',
        text: 'Текст 3',
    };

    const direction4: DirectionsBlockInterface = {
        image: '/direction4.webp',
        title: 'Смоленск',
        text: 'Текст 4',
    };

    const direction5: DirectionsBlockInterface = {
        image: '/direction5.webp',
        title: 'Казань ',
        text: 'Текст 5',
    };

    const direction6: DirectionsBlockInterface = {
        image: '/direction6.webp',
        title: 'Владивосток',
        text: 'Текст 6',
    };

    const directions = [direction1, direction2, direction3, direction4, direction5, direction6];

    return (
        <div className={styles.directionsBlock}>
            <Htag tag='l' className={styles.title}>
                {setLocale(router.locale).popular_destinations}
            </Htag>
            <Swiper className={styles.swiper} style={ 
                    width > 1024 ? { width: 0.65 * width } : width > 580 ? { width: 0.75 * width } : { width: 0.85 * width }
                }
                modules={[Pagination, A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={ width > 1024 ? 3 : width > 580 ? 2 : 1 }
                loop={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            >
                {directions.map(d => (
                    <SwiperSlide key={d.title}>
                        <div className={styles.swiperItem}>
                            <DirectionsItem image={d.image} title={d.title} text={d.text} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};