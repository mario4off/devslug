"use client";

import LeftIconInput from "./ui/left-icon-input";
import Link from "./ui/icons/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import PrimaryButton from "./ui/primary-button";

export default function ShortenerAuthenticated() {
  const slugLabel = (
    <p className="px-2 whitespace-nowrap">devslug.app.vercel /</p>
  );

  const [url, setUrl] = useState("");
  return (
    <div className="panel p-6 flex flex-col items-center gap-5">
      <div className="w-full">
        <h2 className="text-base ">Nuevo enlace</h2>
        <p className="text-sm text-slate-400">Crea una URL permanente</p>
      </div>

      <form action="" className="flex flex-col gap-4">
        <p>URL de destino</p>
        <LeftIconInput
          placeholder="Pega aquí la URL"
          value=""
          icon={<Link color="white" />}
          error={[]}
        />
        <p>¿Cómo quieres tu enlace? </p>
        <div className="flex flex-col gap-4 ">
          <RadioGroup defaultValue="option-one">
            <div className="flex  items-start gap-3">
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
            value=""
            icon={slugLabel}
            error={[]}
          />
        </div>
      </form>
      <PrimaryButton title="Crear URL" />
    </div>
  );
}
