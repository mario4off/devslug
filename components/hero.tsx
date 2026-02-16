import ShortenerGuest from "./shortener-guest";
import AuthButton from "./auth-button";
import { auth } from "@/auth";

async function Hero() {
  const session = await auth();

  const isLogged = !!session;
  return (
    <>
      <header className="mt-0 md:mt-4 mx-10 flex flex-col items-center">
        <h1 className="text-center my-2 md:my-4 text-2xl md:text-5xl">
          Acorta. Comparte. Analiza.
        </h1>
        <p className="text-center  text-base md:text-xl">
          Convierte enlaces largos en URLs inteligentes con estadísticas en
          tiempo real
        </p>
        <AuthButton isLogged={isLogged} className="my-10 block md:hidden" />
      </header>

      <section className="flex justify-center mt-5 md:mt-10">
        <ShortenerGuest />
      </section>
    </>
  );
}

export default Hero;
