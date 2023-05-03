import { useNavigate } from "react-router-dom";

function BlogCardUpperLayer() {
  const navigate = useNavigate();

  return (
    <div
      className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]
      flex flex-col justify-center items-center w-3/4 gap-y-3 z-30
      opacity-0 group-hover:opacity-100
      duration-200 ease-in-out "
    >
      <h4 className="text-center w-full text-white font-bold">
        Clean Archetecture in React
      </h4>
      <span
        className="text-md font-medium
  bg-red-500/80 text-white px-2 py-1 rounded-md 
  hover:bg-red-500/95 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Read more
      </span>
    </div>
  );
}

export default BlogCardUpperLayer;
