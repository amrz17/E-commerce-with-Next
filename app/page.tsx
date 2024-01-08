import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="flex justify-center items-center min-h-screen ">
        <Hero />
      </section>
    </main>
  );
}
