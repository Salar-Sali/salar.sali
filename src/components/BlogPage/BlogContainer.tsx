import BlogCards from "./BlogCards";

function BlogContainer() {
  return (
    <div className=" flex flex-col items-center justify-center p-2">
      <h3 className="text-3xl mt-10 font-bold text-white">Writing Corner</h3>
      <BlogCards />
    </div>
  );
}

export default BlogContainer;
