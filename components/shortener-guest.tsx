import CopyButton from "./ui/copy-button";
import PrimaryButton from "./ui/primary-button";

function ShortenerGuest() {
  return (
    <div className="bg-zinc-950 w-4/5 border-zinc-300 border rounded-md p-5 md:p-10 md:px-0 flex flex-col items-center justify-center">
      <h2 className="text-center text-base md:text-xl">
        Introduce tu URL y consigue una versión acortada
      </h2>
      <form
        action=""
        className="flex flex-col gap-6 md:gap-10 justify-center items-center w-5/6 md:w-4/6 my-5 md:my-10"
      >
        <div className="flex justify-center w-full">
          <label
            className="bg-slate-800 text-white rounded-l-md p-3 flex gap-2"
            htmlFor="url"
          >
            🔗 <span className="hidden md:block">URL</span>
          </label>
          <input
            className="rounded-r-md w-full"
            type="text"
            name="url"
            id="url"
            placeholder="Pega aquí la URL"
          />
        </div>{" "}
        <CopyButton value="" />
        <PrimaryButton title={"Acortar URL"} />
      </form>
      <div className="flex flex-col items-center gap-2">
        <p className="text-center">
          ⏱️ La nueva URL tendrá una validez de 7 días.
        </p>
        <p className="text-center">
          🚀 Inicia sesión para mantener los enlaces y controlar tus métricas
        </p>
      </div>
    </div>
  );
}

export default ShortenerGuest;
