import Head from "expo-router/head";

type Props = {
  title: string;
  image: string;
  description?: string;
  ogurl?: string;
};

export function Meta({ title, description, image, ogurl }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      {description ? (
        <meta property="og:description" content={description} />
      ) : null}
      <meta property="og:image" content={image} />
      {ogurl ? <meta property="og:url" content={ogurl} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description ? (
        <meta name="twitter:description" content={description} />
      ) : null}
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
