import Link from "next/link";
import { Instagram, Star, MapPin, Clock, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="#" className="flex items-center gap-1" prefetch={false}>
              <span className="font-headline text-xl font-bold uppercase tracking-wide text-primary">WinWin</span>
              <span className="font-headline text-xl font-bold uppercase tracking-wide">Window Tint</span>
            </Link>
            <p className="text-foreground/40 leading-relaxed font-light">
              Professional window tinting for vehicles, homes, and businesses in San Antonio, TX.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="font-headline font-semibold text-foreground uppercase tracking-wider text-sm">Contact</h4>
            <div className="space-y-2.5 text-foreground/50 font-light">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>(210) 555-0199</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>San Antonio, TX</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Mon – Sat, 9am – 6pm</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="font-headline font-semibold text-foreground uppercase tracking-wider text-sm">Follow Us</h4>
            <div className="flex gap-3">
              <Link
                href="#"
                aria-label="Instagram"
                className="text-foreground/40 hover:text-primary transition-colors duration-200"
                prefetch={false}
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Google Reviews"
                className="text-foreground/40 hover:text-primary transition-colors duration-200"
                prefetch={false}
              >
                <Star className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border/30">
        <div className="container max-w-6xl mx-auto px-4 md:px-6 py-4 text-center text-xs text-foreground/30 font-light tracking-wider">
          © {new Date().getFullYear()} WinWin Window Tint. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
