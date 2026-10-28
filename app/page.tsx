import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black text-2xl">
      <main className="flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1>
          Bem vindo a pagina do blog!
        </h1>
        <h2>
          Se clicar la em cima pode ir direto para os posts!
        </h2>
        <h3>
          clicando em cima do titulo dos posts pode ir ver o texto todo dos posts!
        </h3>
      </main>
    </div>
  );
}
