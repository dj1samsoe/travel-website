import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex w-full min-h-screen">
      <div
        className="w-full h-screen object-cover"
        style={{
          backgroundImage: "url('/hero-details.png')",
          backgroundPosition: "top, center",
        }}
      >
        <div className="w-full h-full bg-black/30 transition-all duration-200">
          <div className="w-full h-full flex items-center justify-center md:px-16 px-5">
            <Image
              src="/details-title.png"
              alt="logo"
              width={1000}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
