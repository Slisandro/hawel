"use client";

import Image from "next/image"
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col gap-2 h-auto relative bg-black">
      <Navbar />
      <section className="h-[100vh] grid grid-cols-2 place-items-center p-20 text-white">
        <div className="col-span-1 w-full h-full flex flex-col items-start justify-center gap-8">
          <p className="text-6xl font-semibold text-start leading-[1.2]">
            La Inteligencia Artificial que vende y opera en tu
            <br />
            <span
              className="text-start"
              style={{
                background: "linear-gradient(to right, #5CF2F2, #58D4EC, #5FB7EC, #688FEE, #6F73EE, #7650F2, #8C43DD, #A34CC5, #AD50BA, #C65B9F, #DB638A, #EA6B79, #FB7269)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              distribuidora.
            </span>
          </p>
          <p className="text-2xl text-start leading-[1.4]">
            Incrementa tus ventas. Gestiona tus pedidos.
            <br />
            Ayuda a tus vendedores. Todo, por WhatsApp.
          </p>
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
            Conocer más
          </button>
        </div>
        <div className="">.</div>
      </section>
      <section className="h-[100vh] bg-blue-500">

      </section>
    </main>
  )
}

const Navbar = () => {
  return (
    <nav className="bg-transparent fixed top-4 w-full flex items-center justify-between h-16 px-20 !text-white">
      <button>
        <Image
          src="/hawel.webp"
          alt="Logo"
          width={100}
          height={100}
          className="object-contain h-full w-full"
          loading="eager"
        />
      </button>
      <div className="flex items-center justify-end flex-1 gap-12">
        <Link href="/">Home</Link>
        <Link href="/sobre-hawel">Sobre Hawel</Link>
        <Link href="/contacto">Contacto</Link>
      </div>
    </nav>
  )
}