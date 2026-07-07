import ShortenerGuest from "./shortenerGuest";
import AuthButton from "./authButton";
import { auth } from "@/auth";
import SignInButton from "./signInButton";
import SignOutButton from "./signOutButton";
import { sora } from "./ui/fonts";

async function Hero() {
  const session = await auth();

  const isLogged = !!session;
  return (
    <>
      <header className="mt-0 md:mt-4 mx-10 flex flex-col items-center">
        <h1
          className={`${sora.className} text-center my-2 md:my-8 text-2xl md:text-6xl`}
        >
          Acorta. Comparte. Analiza.
        </h1>
        <p className="text-center  text-base md:text-xl">
          Convierte enlaces largos en URLs inteligentes con estadísticas en
          tiempo real
        </p>
        {!isLogged && <SignInButton className="block md:hidden mt-4 mb-3" />}
      </header>

      <section className="flex justify-center mt-5 md:mt-10">
        <ShortenerGuest />
      </section>
    </>
  );
}

export default Hero;
