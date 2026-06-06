import Image from "next/image";

const menuItems = [
  {
    name: "The Night Market Bowl",
    note: "Charred greens, miso lentils, sesame roots, chili crisp, brown rice.",
  },
  {
    name: "After-Work Mezze Plate",
    note: "Smoky beans, herbed grains, pickled vegetables, tahini, warm flatbread.",
  },
  {
    name: "Midnight Citrus Roast",
    note: "Roasted squash, citrus tofu, fennel salad, fermented pepper sauce.",
  },
];

const locations = ["Berlin", "Hamburg", "Cologne", "Munich"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f0e6] text-[#161612]">
      <section className="relative min-h-screen overflow-hidden bg-[#181713] text-white">
        <Image
          src={`/omadiner-hero.png`}
          alt="A late-night vegan diner counter with a plated plant-based dinner."
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,12,9,0.93)_0%,rgba(13,12,9,0.78)_42%,rgba(13,12,9,0.18)_100%)]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between gap-4">
            <a
              href="#"
              aria-label="OMADiner home"
              className="flex h-20 w-20 items-center justify-center transition hover:scale-105"
            >
              <Image
                src="/9_11_nobg.png"
                alt="OMADiner logo"
                width={1024}
                height={1024}
                className="h-full w-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)]"
              />
            </a>
            <nav className="hidden items-center gap-6 text-sm font-medium text-white/80 md:flex">
              <a href="#menu" className="transition hover:text-white">
                Menu
              </a>
              <a href="#hours" className="transition hover:text-white">
                Hours
              </a>
              <a href="#origin" className="transition hover:text-white">
                Origin
              </a>
            </nav>
          </header>

          <div className="flex flex-1 items-center py-14">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex border border-[#ffca58]/60 bg-[#ffca58]/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ffd881]">
                Not yet established - prototype concept
              </p>
              <h1 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-normal sm:text-7xl lg:text-8xl">
                One meal. All night energy.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/82 sm:text-xl">
                OMADiner is a vegan one-meal-a-day diner chain concept built for the hours when dinner should feel deliberate, generous, and calm.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#menu"
                  className="inline-flex h-12 items-center justify-center bg-[#e7462d] px-6 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#ff6048]"
                >
                  Preview menu
                </a>
                <a
                  href="https://trainvent.com"
                  className="inline-flex h-12 items-center justify-center border border-white/45 px-6 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:border-white hover:bg-white/10"
                  target="_blank"
                  rel="noreferrer"
                >
                  Main site: Trainvent
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-3 pb-5 text-sm text-white sm:grid-cols-3">
            <div className="border border-white/20 bg-black/22 p-4 backdrop-blur">
              <p className="text-white/55">Opening window</p>
              <p className="mt-1 text-2xl font-black">20:00-24:00</p>
            </div>
            <div className="border border-white/20 bg-black/22 p-4 backdrop-blur">
              <p className="text-white/55">Format</p>
              <p className="mt-1 text-2xl font-black">One full meal</p>
            </div>
            <div className="border border-white/20 bg-black/22 p-4 backdrop-blur">
              <p className="text-white/55">Kitchen</p>
              <p className="mt-1 text-2xl font-black">100% vegan</p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-[#f6f0e6] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d33d27]">The offer</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal sm:text-5xl">A diner reduced to the decision that matters.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#4d493f]">
              Each night centers on one complete vegan plate, with seasonal variations and a counter-service rhythm designed for late workers, travelers, and slow eaters.
            </p>
          </div>
          <div className="grid gap-4">
            {menuItems.map((item) => (
              <article key={item.name} className="border border-[#1f1d17]/14 bg-white p-5 shadow-[0_12px_30px_rgba(31,29,23,0.08)]">
                <h3 className="text-2xl font-black">{item.name}</h3>
                <p className="mt-2 text-base leading-7 text-[#5b564b]">{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="hours" className="bg-[#171914] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffca58]">Hours</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal sm:text-5xl">Open only when the city gets hungry again.</h2>
          </div>
          <div className="grid content-start gap-5">
            <div className="border border-white/16 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-white/55">Every operating night</p>
              <p className="mt-2 text-5xl font-black text-[#ffca58]">20:00-24:00</p>
            </div>
            <p className="text-lg leading-8 text-white/72">
              The chain, menu, locations, and operating model are fictional at this stage. This page is a rough prototype for exploring a possible brand direction.
            </p>
          </div>
        </div>
      </section>

      <section id="origin" className="bg-[#e7462d] px-5 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-white/70">Possible cities</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {locations.map((location) => (
                <span key={location} className="border border-white/45 px-4 py-2 text-sm font-bold uppercase tracking-[0.12em]">
                  {location}
                </span>
              ))}
            </div>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/86">
            A side concept connected to Trainvent. For the established company and current work, visit{" "}
            <a className="font-black underline decoration-white/60 underline-offset-4" href="https://trainvent.com" target="_blank" rel="noreferrer">
              trainvent.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
