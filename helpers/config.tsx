import { ImBarcode, ImQrcode, ImCreditCard } from 'react-icons/im';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';

const config = {
  brand: 'MKT Landing Page',
  seo: {
    title: 'MKT Landing Page | CTA Helper',
    description: 'Uma página para divulgação de produtos',
    h1: 'MKT Landing Page',
    thumbnail: 'https://mkt-landing-page-livid.vercel.app/thumbnail.jpg',
  },
  cta: {
    videoId: '9w3o9NHXqu0',
    videoCta: 'Veja o vídeo de nossa solução',
    videoTitle: 'Nossa solução',
    videoCtaClick: 'Adquira agora nossa solução:',
    videoCtaButton: 'QUERO COMEÇAR!',
    checkoutUrl: 'https://www.google.com',
    ctaButton: 'QUERO APROVEITAR!',
  },
  results: {
    title: 'Métodos que dão resultados como esses:',
    items: [
      {
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        image: '/results/result1.png',
      },
      {
        info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
        image: '/results/result2.png',
      },
      {
        info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        image: '/results/result3.png',
      },
    ],
  },
  payments: [
    {
      text: 'Cartão',
      icon: <ImCreditCard />,
    },
    {
      text: 'Boleto',
      icon: <ImBarcode />,
    },
    {
      text: 'PIX',
      icon: <ImQrcode />,
    },
  ],
  about: {
    image: '/about.png',
    title: 'SOBRE NÓS',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
  },
  logo: '/logo.png',
  palette: {
    900: '#202020',
    800: '#009B9D',
    700: '#00CACA',
    600: '#F9F9F9',
  },
  socials: [
    {
      name: 'Facebook',
      icon: <BsFacebook />,
      url: '#',
    },
    {
      name: 'Instagram',
      icon: <BsInstagram />,
      url: '#',
    },
    {
      name: 'Whatsapp',
      icon: <BsWhatsapp />,
      url: '#',
    },
  ],
  whatsapp: {
    number: '999999999',
    message: 'Olá, vi seu trabalho pelo site MKT Landing Page!',
  },
};

export default config;
