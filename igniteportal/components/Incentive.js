import FlipCard from "./Flipcard"
export default function Incentive() {
    const cards = [
        { front: "Incentive 1", back: "Details 1" },
        { front: "Incentive 2", back: "Details 2" },
        { front: "Incentive 3", back: "Details 3" },
        { front: "Incentive 4", back: "Details 4" }, { front: "Incentive 4", back: "Details 4" },
        { front: "Incentive 4", back: "Details 4" },
        { front: "Incentive 4", back: "Details 4" }, { front: "Incentive 4", back: "Details 4" },
        { front: "Incentive 4", back: "Details 4" },

    ];

    return (
        <section id="incentive">
            <div className="flex flex-col justify-center items-center mt-10 mb-10">
                <h1 className="text-4xl font-bold text-white">Incentives</h1>
                <main className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-32 gap-4 justify-center items-center min-h-screen bg-transparent pt-10">
                    {cards.map((card, index) => (
                        <FlipCard
                            key={index}
                            frontText={card.front}
                            backText={card.back}
                        />

                    ))}
                </main>
            </div>
        </section>
    );
}