import { CardsContainer } from "./components/CardsContainer";
import { Hero } from "./components/Hero";

function App() {
  return (
    <main className="font-Poppins flex justify-center text-Grey-500">
      <section className="w-[296px] my-[80px] xl:w-[1100px]">
        <Hero />
        <CardsContainer />
      </section>
    </main>
  );
}

export default App;
