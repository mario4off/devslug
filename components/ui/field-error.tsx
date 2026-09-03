export default function FieldError({ error }: { error: String[] }) {
  if (!error?.length) return;

  return (
    <p
      id="url-eror"
      aria-live="polite"
      className="text-red-500 text-sm p-1 text-center"
    >
      {error[0]}
    </p>
  );
}
