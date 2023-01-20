async function loadHeadData(): Promise<{ title: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ title: "Dynamic title" });
    }, 1000);
  });
}

export default async function Head() {
  const data = await loadHeadData();
  return (
    <>
      <title>{data.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}
