import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NavbarWeb = () => {
  return (
    <nav className="z-50 bg-transparent fixed top-8 left-0 right-0 flex items-center justify-between h-16 px-[24px] md:px-4 md:px-20 !text-white w-full">
      <button className="flex-shrink-0">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="object-contain h-[30px] md:h-full w-[130px] md:w-auto"
          loading="eager"
          priority
        />
      </button>
      <div className="hidden md:flex items-center justify-end gap-4 md:gap-12">
        <Link href="/" className="hover:opacity-70 transition-opacity text-sm md:text-base">Home</Link>
        <Link href="/sobre-hawel" className="hover:opacity-70 transition-opacity text-sm md:text-base">Sobre Hawel</Link>
        <Link href="/contacto" className="hover:opacity-70 transition-opacity text-sm md:text-base">Contacto</Link>
        <Link href="/dashboard" className="hover:opacity-70 transition-opacity text-xs">Dashboard</Link>
      </div>
      <div className="block md:hidden flex items-center justify-end flex-1 gap-4 md:gap-8 lg:gap-12 ml-4">
        <Menu />
      </div>
    </nav>
  )
}

export default NavbarWeb;