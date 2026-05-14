"use client";

import { useActionState } from "react";
import CopyButton from "./ui/copy-button";
import PrimaryButton from "./ui/primary-button";
import { actions } from "@/lib/actions";
import { type FormState } from "@/validations/url";

function ShortenerGuest() {
  const INITIAL_STATE: FormState = { data: { url: null } };
  const [formState, formAction] = useActionState(
    actions.url.insertUrl,
    INITIAL_STATE,
  );
  return (
    <div className="bg-zinc-950 w-5/6 md:w-auto border-zinc-300 border rounded-md p-12 flex flex-col items-center justify-center">
      <h2 className="text-center text-base md:text-xl">
        Introduce tu URL y consigue una versión acortada
      </h2>
      <form
        action={formAction}
        className=" w-5/6 flex flex-col gap-6 md:gap-10 justify-center items-center my-5 md:my-10"
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
        </div>
        <CopyButton
          className="w-full"
          value=""
          placeholder="Copia la nueva URL"
        />
        <PrimaryButton type="submit" title={"Acortar URL"} />
      </form>
      <div className="w-7/8  md:w-5/6 flex flex-col gap-5">
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
