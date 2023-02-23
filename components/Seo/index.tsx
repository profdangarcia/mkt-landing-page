import { useRouter } from 'next/router';
import Head from 'next/head';

interface SeoProps {
  data: {
    title?: string;
    description?: string;
    thumbnail?: string;
  };
}

const Seo: React.FC<SeoProps> = ({
  data: { title, description, thumbnail },
}) => {
  const { asPath } = useRouter();
  const thumbnailImage = thumbnail || '';

  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
      />
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${asPath}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnailImage} />
      <meta name="twitter:image" content={thumbnailImage} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:domain" content={`${asPath}`} />
      <link href={`${asPath}`} rel="canonical" data-cy="canonical-link" />
      <title>{title}</title>
    </Head>
  );
};

export default Seo;
