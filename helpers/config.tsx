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
  presentation: {
    title: 'O que você irá receber:',
    items: [
      {
        title: 'Lorem Ipsum is simply',
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        image: '/presentations/presentation1.png',
      },
      {
        title: 'It is a long established',
        info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
        image: '/presentations/presentation2.png',
      },
      {
        title: 'There are many variations',
        info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        image: '/presentations/presentation3.png',
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
    plan1: '#009B9D',
    plan2: '#C23DF3',
    plan3: '#FCB353',
    success: '#43A047',
    error: '#FF1800',
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
  plans: {
    title: 'Encontre o plano certo para você:',
    items: [
      {
        title: 'Plano Mensal',
        subtitle: 'Cabe no seu bolso',
        price: '59,90',
        info: '',
        color: 'plan1',
        url: '#',
        highlight: false,
        benefits: [
          {
            text: 'Atendimento 24h via whatsapp',
            available: true,
          },
          {
            text: 'Planilha de treinos exclusiva',
            available: false,
          },
          {
            text: 'Guia de dieta',
            available: false,
          },
        ],
      },
      {
        title: 'Plano Trimestral',
        subtitle: 'Melhor custo benefício',
        price: '49,90',
        info: 'Total de R$ 149,70',
        color: 'plan2',
        url: '#',
        highlight: true,
        benefits: [
          {
            text: 'Atendimento 24h via whatsapp',
            available: true,
          },
          {
            text: 'Planilha de treinos exclusiva',
            available: true,
          },
          {
            text: 'Guia de dieta',
            available: false,
          },
        ],
      },
      {
        title: 'Plano Semestral',
        subtitle: 'A maior economia',
        price: '40,90',
        info: 'Total de R$ 245,40',
        color: 'plan3',
        url: '#',
        highlight: false,
        benefits: [
          {
            text: 'Atendimento 24h via whatsapp',
            available: true,
          },
          {
            text: 'Planilha de treinos exclusiva',
            available: true,
          },
          {
            text: 'Guia de dieta',
            available: true,
          },
        ],
      },
    ],
  },
  guarantee: {
    title: 'RISCO ZERO',
    image: '/guarantee.png',
    message:
      'O RISCO É TODO MEU: Se você cumprir todo o passo a passo que eu proponho no programa e ainda assim não vir resultados em até 03 meses, eu devolvo cada centavo do seu dinheiro!',
  },
  testimonial: {
    title: 'VEJA NOSSOS RESULTADOS',
    items: [
      {
        image: '/testimonials/testimonial.png',
        text: '',
        title: 'Testimonial 1',
      },
      {
        image: '/testimonials/testimonial.png',
        text: '',
        title: 'Testimonial 2',
      },
    ],
  },
};

export default config;
