import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>
          {children}

          <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
            <Link href="/">
              <h2>
                Home <span>-&gt;</span>
              </h2>
            </Link>
            <Link href="/app/a">
              <h2>
                Route A <span>-&gt;</span>
              </h2>
            </Link>

            <Link href="/app/b">
              <h2>
                Route B <span>-&gt;</span>
              </h2>
            </Link>

            <Link href="/app/c">
              <h2>
                Route C <span>-&gt;</span>
              </h2>
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
