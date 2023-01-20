async function loadHeadData(): Promise<{ data: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "Hello, Next.js!" });
    }, 1000);
  });
}

export default async function Head() {
  const { data } = await loadHeadData();
  return (
    <>
      <title>{data}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}
