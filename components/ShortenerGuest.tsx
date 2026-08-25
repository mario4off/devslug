"use client";

import { useActionState } from "react";
import CopyButton from "./ui/CopyButton";
import PrimaryButton from "./ui/PrimaryButton";
import { actions } from "@/lib/actions";
import { type UrlFormState } from "@/types/validations";
import LinkSVG from "@/components/ui/icons/link";
import LeftIconInput from "./ui/LeftIconInput";
import { useEffect, useState } from "react";
import { sileo } from "sileo";

export default function ShortenerGuest() {
  const INITIAL_STATE: UrlFormState = { data: { url: null, userId: null } };
  const [formState, formAction] = useActionState(
    actions.url.insertUrl,
    INITIAL_STATE,
  );
  const host = process.env.NEXT_PUBLIC_SITE_URL;

  const [url, setUrl] = useState("");

  useEffect(() => {
    if (formState.success) {
      sileo.success({ title: "URL acortada correctamente" });
    }
  }, [formState]);

  return (
    <div className="bg-zinc-950 md:w-auto border-zinc-800 border rounded-md p-6 md:p-12  flex flex-col items-center justify-center">
      <h2 className="text-center text-base md:text-xl">
        Introduce tu URL y consigue una versión acortada
      </h2>
      <form
        action={formAction}
        className=" w-5/6 flex flex-col gap-7 md:gap-10 justify-center items-center my-5 md:my-10"
      >
        <LeftIconInput
          icon={<LinkSVG color="white" className="" />}
          error={formState.errors?.url}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <CopyButton
          className="w-full"
          value={
            formState.data?.slug != null
              ? `${host}/${formState.data?.slug}`
              : ""
          }
          placeholder="Copia la nueva URL"
        />
        <PrimaryButton
          type="submit"
          title={"Acortar URL"}
          disabled={!url.trim()}
        />
      </form>
      <div className=" mt-1 md:w-11/12 flex flex-col gap-6">
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
