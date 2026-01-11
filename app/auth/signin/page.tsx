"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const SignIn = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const error = searchParams.get("error");

    if (error === "OAuthCallbackError") {
      router.push("/");
    }
  }, []);

  return <div></div>;
};

export default SignIn;
