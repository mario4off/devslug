"use client";

import LeftIconInput from "./ui/left-icon-input";
import Link from "./ui/icons/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FieldDescription } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { useActionState, useEffect, useState } from "react";
import PrimaryButton from "./ui/primary-button";
import CopyButton from "./ui/copy-button";
import { UrlFormState } from "@/types/validations";
import { actions } from "@/lib/actions";
import { normalizeSlugInput } from "@/lib/utils/url";
import { sileo } from "sileo";
import { Span } from "next/dist/trace";

export default function ShortenerAuthenticated({
  initialSlug,
}: {
  initialSlug: string;
}) {
  const [randomSlug] = useState(initialSlug);
  // const slugLabel = (
  //   <p className="px-2 whitespace-nowrap">devslug.app.vercel/{randomSlug}/</p>
  // );

  const host = process.env.NEXT_PUBLIC_SITE_URL;

  const [customSlug, setCustomSlug] = useState("");
  const [destinationUrl, setDestinationUrl] = useState("");
  const [slugOption, setSlugOption] = useState("random");
  const isCustom = slugOption == "custom";
  const finalSlug = isCustom ? `${randomSlug}-${customSlug}` : randomSlug;

  const INITIAL_STATE: UrlFormState = {
    data: { url: null, slug: null },
  };

  const [formState, formAction] = useActionState(
    actions.url.insertUrlAction,
    INITIAL_STATE,
  );

  useEffect(() => {
    if (formState.success) {
      sileo.success({ title: "URL acortada correctamente" });
    }
  }, [formState]);

  return (
    <div className="panel p-6 flex flex-col items-center gap-5">
      <div className="w-full">
        <h2 className="text-base ">Nuevo enlace</h2>
        <p className="text-sm text-slate-400">Crea una URL permanente</p>
      </div>

      <form action={formAction} className="flex flex-col gap-4">
        <p>URL de destino</p>
        <LeftIconInput
          placeholder="Pega aquí la URL"
          value={destinationUrl}
          onChange={(e) => setDestinationUrl(e.target.value)}
          icon={<Link color="white" />}
          error={formState.errors?.url}
        />
        <p>¿Cómo quieres tu enlace? </p>
        <div className="flex flex-col">
          <RadioGroup
            className="my-2 gap-5"
            defaultValue={slugOption}
            onValueChange={(value) => setSlugOption(value)}
          >
            <div className="flex  items-start gap-3 ">
              <RadioGroupItem
                className="mt-1"
                value="random"
                id="random-slug"
              />
              <div>
                <Label htmlFor="random-slug">Aleatorio</Label>
                <FieldDescription>
                  Crearemos un slug único para ti
                </FieldDescription>
              </div>
            </div>
            <div className="flex items-start gap-8">
              <RadioGroupItem
                className="mt-1"
                value="custom"
                id="custom-slug"
              />

              <div>
                <Label htmlFor="custom-slug">Personalizado</Label>
                <FieldDescription>Elige una URL personalizada</FieldDescription>
              </div>
              <div className="ms-4">
                <LeftIconInput
                  placeholder="Escribe el slug"
                  value={customSlug}
                  disabled={!isCustom}
                  error={formState.errors?.slug}
                  onChange={(e) =>
                    setCustomSlug(normalizeSlugInput(e.target.value))
                  }
                />
              </div>
            </div>
          </RadioGroup>
        </div>

        <CopyButton
          className="w-full my-2"
          value={
            formState.data?.slug != null
              ? `${host}/${formState.data?.slug}`
              : ""
          }
          placeholder="Copia tu URL"
        />
        <div className="w-full flex justify-center">
          <PrimaryButton
            title="Crear URL"
            type="submit"
            disabled={!destinationUrl.trim()}
          />
        </div>
        <input type="hidden" value={finalSlug} name="slug" />
      </form>
    </div>
  );
}
