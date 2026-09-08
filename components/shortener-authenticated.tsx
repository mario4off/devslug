"use client";

import LeftIconInput from "./ui/left-icon-input";
import Link from "./ui/icons/link";

export default function ShortenerAuthenticated() {
  const slugLabel = (
    <p className="px-2 whitespace-nowrap">devslu.app.vercel /</p>
  );

  return (
    <div className="panel p-4 flex flex-col gap-4">
      <h2 className="text-base">Hola {}</h2>
      <form action="" className="flex flex-col gap-4">
        <LeftIconInput
          placeholder="Pega aquí la URL"
          value=""
          icon={<Link color="white" />}
          error={[]}
        />
        <div className="flex flex-col gap-2">
          <p>Personaliza tu enlace</p>
          <LeftIconInput
            placeholder="Escribe el slug"
            value=""
            icon={slugLabel}
            error={[]}
          />
        </div>
      </form>
    </div>
  );
}
