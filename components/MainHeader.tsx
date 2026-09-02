import Image from "next/image";
import { auth } from "@/auth";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdowMenu";
import Link from "next/link";
import NavLink from "./ui/NavLink";

export default async function MainHeader() {
  const session = await auth();

  const isLogged = !!session;

  return (
    <header className="w-full bg-gradient-to-b from-black flex items-center justify-between px-6 pt-3 shadow-2xl">
      <Link href={"/"}>
        <Image
          src="/logo.svg"
          width={250}
          height={95}
          loading="eager"
          className="h-auto w-[180px] sm:w-[250px]"
          alt="Logo devslug"
        />
      </Link>
      <div className="flex gap-4 items-center">
        {!isLogged ? (
          <SignInButton className="hidden md:flex" />
        ) : (
          <>
            <nav>
              <ul className="list-none">
                <li>
                  <NavLink text="Mis Enlaces"></NavLink>
                </li>
              </ul>
            </nav>
            <SignOutButton className="" />
          </>
        )}
      </div>
    </header>
  );
}
