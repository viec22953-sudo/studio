import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <span className="text-xl font-bold tracking-tight text-primary">
          WinWin
        </span>
        <span className="text-xl font-bold tracking-tight">WindowTint</span>
      </Link>
      <nav className="ml-auto hidden lg:flex items-center gap-6">
        <Link
          href="#about"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#services"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Services
        </Link>
        <Link
          href="#gallery"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Gallery
        </Link>
        <Button asChild>
          <Link href="#contact" prefetch={false}>
            Get a Free Quote
          </Link>
        </Button>
      </nav>
      <div className="ml-auto lg:hidden">
         <Button asChild>
          <Link href="#contact" prefetch={false}>
            Get Quote
          </Link>
        </Button>
      </div>
    </header>
  );
}
