import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link
        href="#"
        className="flex items-center justify-center gap-1"
        prefetch={false}
      >
        <Image
          src="/favicon.ico"
          alt="WinWin Window Tint Logo"
          width={32}
          height={32}
          className="mr-1"
        />
        <span className="font-headline text-xl font-bold uppercase tracking-wide text-primary">WinWin</span>
        <span className="font-headline text-xl font-bold uppercase tracking-wide">Window Tint</span>
      </Link>
      <nav className="ml-auto hidden lg:flex items-center gap-8">
        <Link
          href="#about"
          className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200 uppercase tracking-wider"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#services"
          className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200 uppercase tracking-wider"
          prefetch={false}
        >
          Services
        </Link>
        <Link
          href="#gallery"
          className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200 uppercase tracking-wider"
          prefetch={false}
        >
          Gallery
        </Link>
        <Button asChild className="glow-amber-sm hover:glow-amber transition-shadow duration-300">
          <a href="tel:+12105550199">
            (210) 555-0199
          </a>
        </Button>
      </nav>
      <div className="ml-auto lg:hidden">
        <Button asChild size="sm" className="glow-amber-sm">
          <a href="tel:+12105550199">
            Call Now
          </a>
        </Button>
      </div>
    </header>
  );
}
