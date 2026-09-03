"use client";
import NavLink from "./ui/nav-link";
import LinkSVG from "@/components/ui/icons/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav>
      <ul className="list-none">
        <li>
          {pathname != "/" && (
            <NavLink route="/" text="Inicio">
              <Image
                src={"/icons/home.png"}
                width={20}
                height={20}
                alt="Icono de Inicio"
                className="inline sm:hidden"
              ></Image>
            </NavLink>
          )}
        </li>
        <li>
          {pathname != "/links" && (
            <NavLink route="/links" text="Mis Enlaces">
              <LinkSVG color="white" className="inline sm:hidden"></LinkSVG>
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
