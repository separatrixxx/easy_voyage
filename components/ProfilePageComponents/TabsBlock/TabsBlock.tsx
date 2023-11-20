import { TabsBlockProps } from './TabsBlock.props';
import styles from './TabsBlock.module.css';
import { Htag } from 'components/Htag/Htag';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { useState } from 'react';
import { Tab } from 'components/ProfilePageComponents/Tab/Tab';


export const TabsBlock = ({ type }: TabsBlockProps): JSX.Element => {
	const router = useRouter();

	const [flag1, setFlag1] = useState<boolean>(false);
	const [flag2, setFlag2] = useState<boolean>(false);
	const [flag3, setFlag3] = useState<boolean>(false);
	const [flag4, setFlag4] = useState<boolean>(false);
	const [flag5, setFlag5] = useState<boolean>(false);
	const [flag6, setFlag6] = useState<boolean>(false);

	const tab1 = {
		title: setLocale(router.locale).my_reservations,
		flag: flag1,
		setFlag: setFlag1,
	};

	const tab2 = {
		title: setLocale(router.locale).ordered_services,
		flag: flag2,
		setFlag: setFlag2,
	};

	const tab3 = {
		title: setLocale(router.locale).technical_support,
		flag: flag3,
		setFlag: setFlag3,
	};

	const tab4 = {
		title: setLocale(router.locale).my_hotels,
		flag: flag4,
		setFlag: setFlag4,
	};

	const tab5 = {
		title: setLocale(router.locale).documents,
		flag: flag5,
		setFlag: setFlag5,
	};

	const tab6 = {
		title: setLocale(router.locale).staff,
		flag: flag6,
		setFlag: setFlag6,
	};

	const tabsGuest = [tab1, tab2, tab3];
	const tabsOwner = [tab4, tab5, tab6, tab3];

	return (
		<div className={styles.tabsBlock}>
			<div className={styles.tabs}>
				{type === 'guest' ? tabsGuest.map(t => (
					<Tab key={t.title} title={t.title} text={t.title} flag={t.flag} setFlag={t.setFlag} />
				)) : tabsOwner.map(t => (
					<Tab key={t.title} title={t.title} text={t.title} flag={t.flag} setFlag={t.setFlag} />
				))}
			</div>
		</div>
	);
};