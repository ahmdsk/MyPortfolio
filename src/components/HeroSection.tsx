import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex justify-between items-center">
      <div className="basis-8/12 space-y-3">
        <h1 className="text-5xl font-bold text-zinc-700">
          Ahmad Shaleh Kurniawan
        </h1>
        <h3 className="text-2xl font-bold text-zinc-700">Fullstack Web Developer</h3>
        <p className="text-lg text-zinc-800">👋 Software Developer based in Bandar Lampung, Indonesia. Write code for fun and jobs. Passionate about PHP, Javascript, And Learn Kotlin.</p>
      </div>
      <div className="basis-4/12">
        <div className="flex justify-end">
          <Image src="https://avatars.githubusercontent.com/u/85729997?v=4" className="rounded-full w-1/2" alt="Ahmad" width={100} height={100} />
        </div>
      </div>
    </div>
  )
}
