import ReactTypingEffect from "react-typing-effect";
import HomeCards from "../components/HomePage/HomeCards";
import MainTemplate from "./MainTemplate";

function HomePage() {
  return (
    <MainTemplate>
      <div
        className="bg-black w-full
      text-white font-medium 
      flex flex-col items-center gap-y-7 justify-center
      font-mono text-center"
      >
        <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl ">
          I am <span className="text-red-500">Salar Sali</span>
        </h2>
        <ReactTypingEffect
          className="text-base sm:text-xl md:text-3xl lg:text-5xl"
          staticText="I'm a"
          text={["frontend developer", "graphic designer"]}
          eraseDelay={2500} // time to wait before earsing
          speed={100} // the speed of typing
          eraseSpeed={100} // earsing speed
          typingDelay={500} // time to wait before start writing
        />
        <HomeCards />
      </div>
    </MainTemplate>
  );
}

export default HomePage;
