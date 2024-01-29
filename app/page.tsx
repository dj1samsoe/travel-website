import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex items-center justify-center">
        <div className="flex w-full min-h-screen">
          <div
            className="w-1/3 min-h-screen bg-cover"
            style={{
              backgroundImage: "url('/hero1-1.png')",
              backgroundPosition: "center, center",
            }}
          >
            <div className="w-full h-full bg-black/50"></div>
          </div>
          <div
            className="w-1/3 min-h-screen bg-cover"
            style={{
              backgroundImage: "url('/hero2-2.png')",
              backgroundPosition: "center, center",
            }}
          >
            <div className="w-full h-full bg-black/50"></div>
          </div>
          <div
            className="w-1/3 min-h-screen bg-cover"
            style={{
              backgroundImage: "url('/hero3-3.png')",
              backgroundPosition: "center, center",
            }}
          >
            <div className="w-full h-full bg-black/50"></div>
          </div>
        </div>
      </section>
    </>
  );
}
