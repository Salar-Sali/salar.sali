import WorkCards from "./WorkCards";
import { WorkHeader } from "./WorkHeader";

function WorkContainer() {
  return (
    <div className="flex flex-col gap-y-4 w-full bg-black py-12 items-center justify-start font-mono">
      <WorkHeader />
      <WorkCards />
    </div>
  );
}

export default WorkContainer;
