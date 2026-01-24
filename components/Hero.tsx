import ShortenerGuest from "./shortener-guest";

function Hero() {
  return (
    <>
      <header className="mt-0 md:mt-20 mx-10">
        <h1 className="text-center my-1 md:my-4 text-2xl md:text-5xl">
          Acorta. Comparte. Analiza.
        </h1>
        <p className="text-center  text-base md:text-xl">
          Convierte enlaces largos en URLs inteligentes con estadísticas en
          tiempo real
        </p>
      </header>
      <section className="flex justify-center my-6 md:my-12">
        <ShortenerGuest />
      </section>
    </>
  );
}

export default Hero;
