import WorkCard from "./WorkCard";
import cards from "./cards.json";

function WorkCards() {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {cards.map((card) => {
        return (
          <WorkCard
            key={card.id}
            id={card.id}
            title={card.title}
            category={card.category}
            date={card.date}
            img={card.img}
            alt={card.alt}
          />
        );
      })}
    </div>
  );
}

export default WorkCards;
