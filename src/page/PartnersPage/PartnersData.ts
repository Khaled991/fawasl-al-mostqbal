import logo from '../../assets/Img/logo.svg';

export interface IPartnersData {
  logo: string | undefined;
  name: string | undefined;
  mobile: string;
  phoneNumber: string;
  email: string;
  CommercialRecord: string;
  address: string;
}

export const getNameAndLogoPartners = () =>
  partnersData.map(({ logo, name }) => ({ logo, name }));

export const partnersData: IPartnersData[] = [
  {
    logo: logo,
    name: 'فواصل المستقبل',
    mobile: '+٩٦٦٥٩٣٧٢٩١٨١٩',
    phoneNumber: '+٩٦٦٥٩٣٧٢٩١٨١٩',
    email: 'fawaslalmostaqbl@gmail.com',
    CommercialRecord: '٧٨٩-٤٥٦-١٢٣',
    address: '٦ ش صبر السمان متفرع من اللاشين',
  },
  {
    logo: logo,
    name: 'فواصل المستقبل2',
    mobile: '+٩٦٦٥٩٣٧٢٩١٨١٩',
    phoneNumber: '+٩٦٦٥٩٣٧٢٩١٨١٩',
    email: 'fawaslalmostaqbl@gmail.com',
    CommercialRecord: '٧٨٩-٤٥٦-١٢٣',
    address: '٦ ش صبر السمان متفرع من اللاشين',
  },
  {
    logo: logo,
    name: 'فواصل المستقبل 3',
    mobile: '+٩٦٦٥٩٣٧٢٩١٨١٩',
    phoneNumber: '+٩٦٦٥٩٣٧٢٩١٨١٩',
    email: 'fawaslalmostaqbl@gmail.com',
    CommercialRecord: '٧٨٩-٤٥٦-١٢٣',
    address: '٦ ش صبر السمان متفرع من اللاشين',
  },
  {
    logo: logo,
    name: 'فواصل المستقبل 4',
    mobile: '+٩٦٦٥٩٣٧٢٩١٨١٩',
    phoneNumber: '+٩٦٦٥٩٣٧٢٩١٨١٩',
    email: 'fawaslalmostaqbl@gmail.com',
    CommercialRecord: '٧٨٩-٤٥٦-١٢٣',
    address: '٦ ش صبر السمان متفرع من اللاشين',
  },
  {
    logo: logo,
    name: 'فواصل المستقبل 5',
    mobile: '+9665937291819',
    phoneNumber: '+9665937291819',
    email: 'info@fwasel.com',
    CommercialRecord: '123-456-789',
    address: '٦ ش صابر السمان',
  },
];
