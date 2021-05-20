import Head from "next/head";
import styles from "../styles/Layout.module.css";
export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>
          {title}
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </title>
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "SEO title hear",
  description: "SEO describe the page here",
  keywords: "SEO keywords here for the page",
};
