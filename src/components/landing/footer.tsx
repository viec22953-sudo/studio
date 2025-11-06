import Link from "next/link";
import { Instagram, Star, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div className="flex flex-col gap-2 items-center">
           <Link
            href="#"
            className="flex items-center justify-center"
            prefetch={false}
          >
            <span className="text-2xl font-bold tracking-tight text-primary">
              WinWin
            </span>
            <span className="text-2xl font-bold tracking-tight">WindowTint</span>
          </Link>
          <p className="text-foreground/80 text-center">
            Your trusted partner for premium window tinting.
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center text-foreground/80">
          <h4 className="font-semibold text-foreground mb-2">Our Info</h4>
          <div className="flex items-center gap-2 justify-center">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Service Area: San Antonio, TX</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Clock className="w-4 h-4 text-primary" />
            <span>Hours: Mon-Sat, 9am - 6pm</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h4 className="font-semibold text-foreground mb-2">Follow Us</h4>
          <div className="flex gap-4">
            <Link
              href="#"
              aria-label="Instagram"
              className="text-foreground/80 hover:text-primary transition-colors"
              prefetch={false}
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              aria-label="Google Reviews"
              className="text-foreground/80 hover:text-primary transition-colors"
              prefetch={false}
            >
              <Star className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container text-center text-xs text-foreground/60 mt-8">
        © {new Date().getFullYear()} WinWinWindowTint. All Rights Reserved.
      </div>
    </footer>
  );
}
