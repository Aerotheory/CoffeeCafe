import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <p>Page not found...</p>
        <Link href="/">Go Back Home</Link>
      </div>
    </Layout>
  );
}
