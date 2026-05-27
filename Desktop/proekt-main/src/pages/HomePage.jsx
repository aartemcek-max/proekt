import { Navigation } from '../App'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="hero">
          <h1>Место силы,<br />где рождается стиль</h1>
          <p>Удобная прическа, уютный стайлинг...</p>
        </section>
        {/* остальной контент из index.html */}
      </main>
    </>
  )
}