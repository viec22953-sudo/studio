"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export default function FloatingCTA() {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 lg:hidden">
      <Button asChild size="lg" className="shadow-lg">
        <Link href="#contact" prefetch={false}>
          Book Now
        </Link>
      </Button>
    </div>
  );
}
