import Header from '@/components/Header'
import HeroSection from '../components/Hero'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
  

      <section id="products" className="mx-auto max-w-6xl px-6 py-28">
        <h2 className="text-2xl font-bold">Featured Models</h2>
        <p className="mt-2 text-white/70">Scroll back up to see the hero re-appear.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="h-40 rounded-xl bg-white/5" />
              <div className="mt-4 font-semibold">Premium Asset #{i + 1}</div>
              <div className="text-sm text-white/60">Instant download • Commercial use</div>
            </div>
          ))}
        </div>
      </section>

      <section id="upload" className="mx-auto max-w-6xl px-6 pb-40">
        <h2 className="text-2xl font-bold">Start Selling</h2>
        <p className="mt-2 text-white/70">Upload your models and earn instantly.</p>
      </section>

      
    </main>
  )
}
