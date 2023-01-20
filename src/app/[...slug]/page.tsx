export default async function Page({ params }: { params: { slug: string[] } }) {
  return <h1>You are on route: {params.slug.join("/")}</h1>;
}
