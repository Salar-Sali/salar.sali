import Skills from "./Skills";
import { aboutMe } from "./aboutMe";

function Container() {
  return (
    <div className="max-h-screen-20 w-full bg-black flex justify-center items-center">
      {/* left and right */}
      <div
        className="w-4/5 md:w-3/5 border-2 border-black text-black p-3 m-3 
      flex flex-col md:flex-row  justify-between gap-x-4 gap-y-4"
      >
        {/* left - start */}
        <div className="left w-full md:w-1/2 flex flex-col gap-y-4">
          <div className="upper flex flex-col gap-y-2 md:flex-row md:gap-x-3">
            <img
              src="/img/about2.jpg"
              alt="salar"
              className="rounded-md hover:rotate-2 hover:scale-90 duration-150 ease-in-out"
            />
          </div>

          <div className="lower">
            <h2 className="font-bold text-red-500">My Skills:</h2>
            <Skills />
          </div>
        </div>
        {/* right */}
        <div className="right w-full md:w-1/2 text-xl leading-8	">
          <h2 className="font-bold text-red-500">About me:</h2>
          <div className="text-white">{aboutMe}</div>
        </div>
      </div>
    </div>
  );
}

export default Container;
