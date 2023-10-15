import styles from './PartnersBlock.module.css';
import { Htag } from 'components/Htag/Htag';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { PartnerItem } from 'components/PartnerItem/PartnerItem';



export const PartnersBlock = (): JSX.Element => {
	const router = useRouter();

	const partner1 = {
		title: 'Hotel Continental',
		address: 'Москва, Тверская ул., 22',
		image: '/Hotel1.webp',
	};

	const partner2 = {
		title: 'Марриотт Гранд',
		address: 'Москва, Тверская ул., 26/1',
		image: '/Hotel2.webp',
	};

	const partner3 = {
		title: 'Отель Метрополь',
		address: 'Москва, Театральный пр-д, 2',
		image: '/Hotel3.webp',
	};

	const partners = [partner1, partner2, partner3];

	return (
		<div className={styles.partnersBlock}>
			<Htag tag='xl' className={styles.partnersTitle}>{setLocale(router.locale).our_partners}</Htag>
			<div className={styles.partners}>
				{partners.map(p => (
					<PartnerItem key={p.title} title={p.title} address={p.address} image={p.image} />
				))}
			</div>
		</div>
	);
};