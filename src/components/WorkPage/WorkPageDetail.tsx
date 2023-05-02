import { useParams } from "react-router-dom";
import MainTemplate from "../../pages/MainTemplate";
import cards from "./cards.json";

function WorkPageDetail() {
  const { id } = useParams();
  return (
    <MainTemplate>
      {cards.map((card) => {
        if (card.id === id)
          return (
            <div className=" flex items-start justify-center p-2 py-12 bg-black  text-white font-open_sans">
              <div
                key={card.id}
                className="w-5/6 md:w-2/4 flex flex-col items-center justify-center"
              >
                <h2 className="self-start	text-xl md:text-5xl py-4 text-red-500 capitalize">
                  {card.title}:
                </h2>
                <img
                  src={`../img/${card.img}`}
                  alt={card.alt}
                  className="w-full rounded-md pb-4"
                />
                <div className="text-md md:text-xl text-white">
                  {card.description}
                  {card.link && (
                    <a
                      target="_blank"
                      href={`${card.link}`}
                      className="text-red-500 text-md hover:text-red-400"
                      rel="noreferrer"
                    >
                      &nbsp;click here
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        return null;
      })}
    </MainTemplate>
  );
}

export default WorkPageDetail;
