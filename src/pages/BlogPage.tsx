import BlogContainer from "../components/BlogPage/BlogContainer";
import MainTemplate from "./MainTemplate";

function BlogPage() {
  return (
    <MainTemplate>
      <div className="bg-black w-full">
        <BlogContainer />
      </div>
    </MainTemplate>
  );
}

export default BlogPage;
