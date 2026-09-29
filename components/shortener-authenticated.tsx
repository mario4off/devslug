"use client";

import LeftIconInput from "./ui/left-icon-input";
import Link from "./ui/icons/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FieldDescription } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { useActionState, useState } from "react";
import PrimaryButton from "./ui/primary-button";
import CopyButton from "./ui/copy-button";
import { UrlFormState } from "@/types/validations";
import { actions } from "@/lib/actions";
import { User } from "next-auth";

export default function ShortenerAuthenticated() {
  const slugLabel = (
    <p className="px-2 whitespace-nowrap">devslug.app.vercel /</p>
  );

  const [slug, setSlug] = useState("");
  const [destinationUrl, setDestinationUrl] = useState("");

  const INITIAL_STATE: UrlFormState = {
    data: { url: destinationUrl, slug: slug },
  };

  const [formState, formAction] = useActionState(
    actions.url.insertUrlAction,
    INITIAL_STATE,
  );

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
        <div className="flex flex-col gap-5 ">
          <RadioGroup className="my-2" defaultValue="option-one">
            <div className="flex  items-start gap-3 ">
              <RadioGroupItem
                className="mt-1"
                value="option-one"
                id="option-one"
              />
              <div>
                <Label htmlFor="option-one">Aleatorio</Label>
                <FieldDescription>
                  Crearemos un slug único para ti
                </FieldDescription>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <RadioGroupItem
                className="mt-1"
                value="option-two"
                id="option-two"
              />
              <div>
                <Label htmlFor="option-two">Personalizado</Label>
                <FieldDescription>Elige una URL personalizada</FieldDescription>
              </div>
            </div>
          </RadioGroup>

          <LeftIconInput
            placeholder="Escribe el slug"
            value={slug}
            icon={slugLabel}
            error={formState.errors?.slug}
            onChange={(e) => setSlug(e.target.value)}
          />
        </div>

        <CopyButton
          className="w-full my-2"
          value=""
          placeholder="Copia tu URL"
        />
        <div className="w-full flex justify-center">
          <PrimaryButton
            title="Crear URL"
            type="submit"
            disabled={!destinationUrl.trim() || !slug.trim()}
          />
        </div>
      </form>
    </div>
  );
}
