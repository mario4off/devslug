"use client";

import { useState } from "react";
import Copy from "./icons/copy";
import Check from "./icons/check";

function CopyButton({
  className = "",
  value = "",
  placeholder = "",
}: {
  className: string;
  value: string;
  placeholder: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={`flex justify-center ${className} `}>
      <button
        type="button"
        onClick={handleCopy}
        className="bg-slate-800 text-white rounded-l-md p-2 md:p-3 flex gap-2 "
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
        className={`text-sm md:text-base  truncate rounded-r-md w-full pl-5 bg-slate-700 ${value == "" ? "text-gray-900" : "transition-all duration-600 text-gray-200"} `}
        type="text"
        id="newUrl"
        readOnly
        value={value ?? ""}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CopyButton;
