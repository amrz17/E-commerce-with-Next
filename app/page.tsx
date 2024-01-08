import Header from "./components/Header";
import Hero from "./components/Hero";
import NewArrivals from "./newArrivals/page";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="flex flex-col justify-center items-center min-h-screen ">
        <Hero />
        <NewArrivals />
      </section>
    </main>
  );
}
