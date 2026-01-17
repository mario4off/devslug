import ShortenerGuest from "./ShortenerGuest";

function Hero() {
  return (
    <>
      <header className="mt-20 mx-10">
        <h1 className="text-center my-4">Acorta. Comparte. Analiza.</h1>
        <p className="text-center text-xl">
          Convierte enlaces largos en URLs inteligentes con estadísticas en
          tiempo real
        </p>
      </header>
      <section className="flex justify-center my-12">
        <ShortenerGuest />
      </section>
    </>
  );
}

export default Hero;
