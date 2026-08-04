export default async function NotFound({
  searchParams,
}: {
  searchParams: Promise<{ reason?: string }>;
}) {
  const { reason } = await searchParams;

  console.log("Esta es la razon del not-found: ", reason);

  if (reason === "expired") {
    return (
      <section>
        <h1>La URL ha caducado</h1>
      </section>
    );
  } else {
    return (
      <section>
        <h1>La URL no existe</h1>
      </section>
    );
  }
}
