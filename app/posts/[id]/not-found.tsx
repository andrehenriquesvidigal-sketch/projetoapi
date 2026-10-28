import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl p-4">
      <h1 className="text-3xl font-bold mb-4">Post não encontrado</h1>
      <p className="mb-4 text-2xl">Este post não existe.</p>
      <Link href="/posts" className="underline">Voltar à lista</Link>
    </main>
  );
}