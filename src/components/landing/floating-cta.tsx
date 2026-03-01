"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50 lg:hidden">
      <Button asChild size="lg" className="shadow-lg glow-amber">
        <Link href="#contact" prefetch={false}>
          Book Now
        </Link>
      </Button>
    </div>
  );
}
