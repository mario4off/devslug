import ShortenerGuest from "./shortener-guest";
import { auth } from "@/auth";
import { sora } from "./ui/fonts";
import ShortenerAuthenticated from "./shortener-authenticated";
import { generateSlug } from "@/lib/utils/url";

async function Hero() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return (
      <>
        <header className=" mx-10 mt-4 flex flex-col items-center">
          <h1
            className={`${sora.className} text-center my-3 md:my-8 text-xl md:text-6xl`}
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
          <ShortenerAuthenticated initialSlug={generateSlug()} />
        </section>
      </>
    );
  }
}

export default Hero;
