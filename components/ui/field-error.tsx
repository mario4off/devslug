export default function FieldError({ error }: { error: String[] }) {
  if (!error?.length) return;

  return (
    <p className="text-red-500 mb-1 text-sm p-3 text-center">{error[0]}</p>
  );
}
