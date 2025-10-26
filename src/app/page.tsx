import { Construction } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground items-center justify-center text-center p-4">
      <div className="space-y-4">
        <Construction className="h-16 w-16 mx-auto text-primary" />
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Under Construction
        </h1>
        <p className="max-w-[600px] text-foreground/80 md:text-xl">
          Our website is currently undergoing scheduled maintenance. We should be back online shortly. Thank you for your patience!
        </p>
      </div>
    </div>
  );
}
