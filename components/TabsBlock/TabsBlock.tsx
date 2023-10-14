import styles from './TabsBlock.module.css';
import { Htag } from 'components/Htag/Htag';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { useState } from 'react';
import { Tab } from 'components/Tab/Tab';


export const TabsBlock = (): JSX.Element => {
	const router = useRouter();

	const [flag1, setFlag1] = useState<boolean>(false);
	const [flag2, setFlag2] = useState<boolean>(false);
	const [flag3, setFlag3] = useState<boolean>(false);
	const [flag4, setFlag4] = useState<boolean>(false);

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
		title: setLocale(router.locale).settings,
		flag: flag3,
		setFlag: setFlag3,
	};

	const tab4 = {
		title: setLocale(router.locale).safety,
		flag: flag4,
		setFlag: setFlag4,
	};

	const tabs = [tab1, tab2, tab3, tab4];

	return (
		<div className={styles.tabsBlock}>
			<div className={styles.tabs}>
				<Htag tag='l' className={styles.tabsTitle}>{setLocale(router.locale).tabs}</Htag>
				<div className={styles.line} />
				{tabs.map(t => (
					<Tab key={t.title} title={t.title} text={t.title} flag={t.flag} setFlag={t.setFlag} />
				))}
			</div>
		</div>
	);
};