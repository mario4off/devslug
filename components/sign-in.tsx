import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button className="bg-white" type="submit">
        Signin with Google
      </button>
    </form>
  );
}
