import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex md:flex-row min-[300px]:flex-col justify-between items-center">
      <div className="md:basis-8/12 min-[300px]:w-full min-[300px]:order-last md:order-first space-y-3">
        <h1 className="text-5xl font-bold text-zinc-700 dark:text-white">
          Ahmad Shaleh Kurniawan
        </h1>
        <h3 className="text-2xl font-bold text-zinc-700 dark:text-slate-200">Fullstack Web Developer</h3>
        <p className="text-lg text-zinc-800 dark:text-slate-200">👋 Software Developer based in Bandar Lampung, Indonesia. Write code for fun and jobs. Passionate about PHP, Javascript, And Learn Kotlin.</p>
      </div>
      <div className="md:basis-4/12 min-[300px]:w-full">
        <div className="flex md:justify-end min-[300px]:justify-center min-[300px]:pb-7 md:pb-0">
          <Image src="https://avatars.githubusercontent.com/u/85729997?v=4" className="rounded-full md:w-1/2 min-[300px]:w-1/3" alt="Ahmad" width={100} height={100} />
        </div>
      </div>
    </div>
  )
}
