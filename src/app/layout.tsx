import { Inter } from "@next/font/google";
import Link from "next/link";
import "./globals.css";
import styles from "./page.module.css";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={inter.className}>
        <main className={styles.main}>
          {children}

          <div className={styles.grid}>
            <Link
              href="/app/a"
              className={styles.card}
              rel="noopener noreferrer"
            >
              <h2>
                Route A <span>-&gt;</span>
              </h2>
              <p>Go to route a</p>
            </Link>

            <Link
              href="/app/b"
              className={styles.card}
              rel="noopener noreferrer"
            >
              <h2>
                Route B <span>-&gt;</span>
              </h2>
              <p> Go to route b</p>
            </Link>

            <Link
              href="/app/c"
              className={styles.card}
              rel="noopener noreferrer"
            >
              <h2>
                Route C <span>-&gt;</span>
              </h2>
              <p>Go to route c</p>
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
