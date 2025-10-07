export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Protection, Privacy, and Perfection.
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At WinWin Window Tint, we are dedicated to providing our clients with the highest quality window films and installation services. Our expert technicians use precision techniques to ensure a flawless finish every time. We believe in enhancing your comfort and security, whether you're on the road or in your home, delivering a win-win solution for every customer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
