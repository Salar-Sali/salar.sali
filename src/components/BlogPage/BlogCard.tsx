import { useNavigate } from "react-router-dom";

type BlogCardProps = {
  backgroundImage: string;
};

function BlogCard({ backgroundImage }: BlogCardProps) {
  const navigate = useNavigate();
  return (
    <div className="group w-[300px] h-[300px] relative">
      <img
        className="w-[300px] h-[300px] rounded-md shadow-md shadow-slate-300 "
        src={`./img/${backgroundImage}`}
        alt={`${backgroundImage}`}
      />
      <span
        className="absolute  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-xl font-bold bg-sky-500/80 text-white px-2 py-1 rounded-md 
        duration-200 ease-in-out opacity-0 group-hover:opacity-100
        cursor-pointer	"
        onClick={() => navigate("/")}
      >
        read more
      </span>
    </div>
  );
}

export default BlogCard;
