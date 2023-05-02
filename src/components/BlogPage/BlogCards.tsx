import BlogCard from "./BlogCard";

function BlogCards() {
  return (
    <div className="w-11/12  md:w-3/4 xl:w-4/6 flex flex-wrap justify-center gap-4 my-12">
      <BlogCard backgroundImage="ca.png" />
      <BlogCard backgroundImage="rendering.jpg" />
      <BlogCard backgroundImage="testing.jpg" />
      <BlogCard backgroundImage="rendering.jpg" />
      <BlogCard backgroundImage="testing.jpg" />
      <BlogCard backgroundImage="rendering.jpg" />
      <BlogCard backgroundImage="testing.jpg" />
      <BlogCard backgroundImage="rendering.jpg" />
      <BlogCard backgroundImage="testing.jpg" />
      <BlogCard backgroundImage="rendering.jpg" />
      <BlogCard backgroundImage="testing.jpg" />
      <BlogCard backgroundImage="rendering.jpg" />
      <BlogCard backgroundImage="testing.jpg" />
    </div>
  );
}

export default BlogCards;
