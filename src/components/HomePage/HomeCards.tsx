import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faPeopleGroup,
  faMedal,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

import HomeCard from "./HomeCard";

function HomeCards() {
  return (
    <div
      className="mt-20 p-2  w-3/4 flex flex-wrap justify-center 
    gap-x-4 gap-y-8"
    >
      <HomeCard amount="02" category="awards">
        <FontAwesomeIcon icon={faAward} />
      </HomeCard>

      <HomeCard amount="10" category="clients">
        <FontAwesomeIcon icon={faPeopleGroup} />
      </HomeCard>

      <HomeCard amount="03" category="years experience">
        <FontAwesomeIcon icon={faMedal} />
      </HomeCard>

      <HomeCard amount="15" category="projects">
        <FontAwesomeIcon icon={faListCheck} />
      </HomeCard>
    </div>
  );
}

export default HomeCards;
