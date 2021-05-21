import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";
import styles from "@/styles/Layout.module.css";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>
          {title}
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </title>
      </Head>
      {router.pathname === "/" && <Showcase />}
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "SEO title hear",
  description: "SEO describe the page here",
  keywords: "SEO keywords here for the page",
};
