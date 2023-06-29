import GamesGrid from "@/components/games-grid";

export default function Home() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <GamesGrid />
    </section>
  );
}
