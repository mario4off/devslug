"use client";

import { useActionState } from "react";
import CopyButton from "./ui/copyButton";
import PrimaryButton from "./ui/primaryButton";
import { actions } from "@/lib/actions";
import { type UrlFormState } from "@/types/validations";
import LinkSVG from "@/components/ui/icons/link";
import LeftIconInput from "./ui/leftIconInput";
import { useEffect } from "react";
import { sileo } from "sileo";

export default function ShortenerGuest() {
  const INITIAL_STATE: UrlFormState = { data: { url: null, userId: null } };
  const [formState, formAction] = useActionState(
    actions.url.insertUrl,
    INITIAL_STATE,
  );
  const host = process.env.NEXT_PUBLIC_SITE_URL;

  useEffect(() => {
    if (formState.success) {
      sileo.success({ title: "URL acortada correctamente" });
    } else if (formState.errors) {
      sileo.error({ description: formState?.message });
    }
  }, [formState]);

  return (
    <div className="bg-zinc-950 w-5/6 md:w-auto border-zinc-300 border rounded-md p-6 md:p-12  flex flex-col items-center justify-center">
      <h2 className="text-center text-base md:text-xl">
        Introduce tu URL y consigue una versión acortada
      </h2>
      <form
        action={formAction}
        className=" w-5/6 flex flex-col gap-6 md:gap-10 justify-center items-center my-5 md:my-10"
      >
        <LeftIconInput
          icon={<LinkSVG color="white" className="" />}
          error={formState.errors?.url}
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
        <PrimaryButton type="submit" title={"Acortar URL"} />
      </form>
      <div className=" md:w-10/12 flex flex-col gap-5">
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
