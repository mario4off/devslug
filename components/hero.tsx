import ShortenerGuest from "./shortener-guest";
import { auth } from "@/auth";
import SignInButton from "./sign-in-button";
import { sora } from "./ui/fonts";
import { redirect } from "next/navigation";
import ShortenerAuthenticated from "./shortener-authenticated";

async function Hero() {
  const session = await auth();

  const isLogged = !!session;
  if (!isLogged) {
    return (
      <>
        <header className=" mx-10 flex flex-col items-center">
          <h1
            className={`${sora.className} text-center my-3 md:my-8 text-3xl md:text-6xl`}
          >
            Acorta. Comparte. Analiza.
          </h1>
          <p className="text-center  text-sm md:text-xl">
            Convierte enlaces largos en URLs inteligentes con estadísticas
          </p>
        </header>

        <section className="flex justify-center mt-3 md:mt-10">
          <ShortenerGuest />
        </section>
      </>
    );
  } else {
    return (
      <>
        <header className="my-2 mb-6 mx-10 flex flex-col items-center">
          <h1
            className={`${sora.className} text-center my-3 md:my-8 text-3xl md:text-6xl`}
          >
            Crea tu próximo enlace
          </h1>
          <p className="text-center  text-base md:text-xl">
            Personalízalo, consérvalo para siempre y sigue sus métricas.
          </p>
        </header>
        <section className="flex justify-center ">
          <ShortenerAuthenticated />
        </section>
      </>
    );
  }
}

export default Hero;
