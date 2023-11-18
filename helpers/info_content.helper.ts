import { InfoBlockInterface } from "interfaces/block.interface";
import { setLocale } from "./locale.helper";
import Icon1 from './icon1.svg';
import Icon2 from './icon2.svg';
import Icon3 from './icon3.svg';
import Icon4 from './icon4.svg';
import Icon5 from './icon5.svg';
import Icon6 from './icon6.svg';


export function clientContent(router: any): InfoBlockInterface[] {
    const clientContent1: InfoBlockInterface = {
        icon: Icon1,
        title: setLocale(router.locale).clients_block.title1,
        text: setLocale(router.locale).clients_block.text1,
    }

    const clientContent2: InfoBlockInterface = {
        icon: Icon2,
        title: setLocale(router.locale).clients_block.title2,
        text: setLocale(router.locale).clients_block.text2,
    }

    const clientContent3: InfoBlockInterface = {
        icon: Icon3,
        title: setLocale(router.locale).clients_block.title3,
        text: setLocale(router.locale).clients_block.text3,
    }

    const clientContent4: InfoBlockInterface = {
        icon: Icon4,
        title: setLocale(router.locale).clients_block.title4,
        text: setLocale(router.locale).clients_block.text4,
    }

    const clientContent5: InfoBlockInterface = {
        icon: Icon5,
        title: setLocale(router.locale).clients_block.title5,
        text: setLocale(router.locale).clients_block.text5,
    }

    const clientContent6: InfoBlockInterface = {
        icon: Icon6,
        title: setLocale(router.locale).clients_block.title6,
        text: setLocale(router.locale).clients_block.text6,
    }

    return [clientContent1, clientContent2, clientContent3, clientContent4, clientContent5, clientContent6];
}

export function partnerContent(router: any): InfoBlockInterface[] {
    const partnerContent1: InfoBlockInterface = {
        icon: Icon1,
        title: setLocale(router.locale).partners_block.title1,
        text: setLocale(router.locale).partners_block.text1,
    }

    const partnerContent2: InfoBlockInterface = {
        icon: Icon2,
        title: setLocale(router.locale).partners_block.title2,
        text: setLocale(router.locale).partners_block.text2,
    }

    const partnerContent3: InfoBlockInterface = {
        icon: Icon3,
        title: setLocale(router.locale).partners_block.title3,
        text: setLocale(router.locale).partners_block.text3,
    }

    return [partnerContent1, partnerContent2, partnerContent3];
}