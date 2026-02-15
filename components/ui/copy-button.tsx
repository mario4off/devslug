"use client";

import { useState } from "react";
import Copy from "./icons/copy";
import Check from "./icons/check";

function CopyButton({ value = "" }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);

      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.log("error en la copia");
    }
  };

  return (
    <div className="flex justify-center w-full">
      <button
        type="button"
        onClick={handleCopy}
        className="bg-slate-800 text-white rounded-l-md p-3 flex gap-2 "
      >
        <Copy
          color="white"
          className={`transition-all duration-200 ${
            copied ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }`}
        />

        <Check
          color="#00ff7f"
          className={`absolute transition-all duration-200  ${
            copied ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        />
      </button>
      <input
        className="rounded-r-md w-5/6 md:w-3/6 p-3 bg-slate-700 text-gray-600"
        type="text"
        id="newUrl"
        readOnly
        value={value}
        placeholder="Copia la nueva URL"
      />
    </div>
  );
}

export default CopyButton;
