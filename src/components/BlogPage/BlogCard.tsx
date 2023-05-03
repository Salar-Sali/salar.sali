import BlogCardUpperLayer from "./BlogCardUpperLayer";

type BlogCardProps = {
  backgroundImage: string;
};

function BlogCard({ backgroundImage }: BlogCardProps) {
  return (
    <div className="group w-[250px] h-[250px] relative">
      <img
        className="w-[250px] h-[250px] rounded-md shadow-sm shadow-slate-300 "
        src={`./img/${backgroundImage}`}
        alt={`${backgroundImage}`}
      />
      <div
        className="absolute top-0 left-0 w-full h-full 
        bg-black bg-opacity-0 group-hover:bg-opacity-60 z-10"
      />
      <BlogCardUpperLayer />
    </div>
  );
}

export default BlogCard;
