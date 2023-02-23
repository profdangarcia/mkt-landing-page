import { useRouter } from 'next/router';
import Head from 'next/head';
import config from '../../helpers/config';

const Seo: React.FC = () => {
  const { seo } = config;
  const { asPath } = useRouter();

  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
      />
      <meta property="og:title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${asPath}`} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.thumbnail} />
      <meta name="twitter:image" content={seo.thumbnail} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:domain" content={`${asPath}`} />
      <link href={`${asPath}`} rel="canonical" data-cy="canonical-link" />
      <title>{seo.title}</title>
    </Head>
  );
};

export default Seo;
