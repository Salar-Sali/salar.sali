import { useNavigate } from "react-router-dom";

type Props = {
  id: string;
  title: string;
  category: string;
  date: string;
  img: string;
  alt: string;
};

function WorkCard({ id, title, category, date, img, alt }: Props) {
  const navigate = useNavigate();
  return (
    <div
      className="w-4/5 sm:w-1/3 md:w-1/4 ld:w-1/5 h-fit rounded-md shadow-md shadow-gray-500 bg-white 
      overflow-hidden
      flex flex-wrap
      hover:duration-1000 hover:ease-in-out
      hover:shadow-none
      font-open_sans"
    >
      <div className="h-[200px] overflow-hidden w-full">
        <img
          className="w-full object-cover object-center h-[200px] hover:scale-110 duration-1000 ease-in-out"
          src={`img/${img}`}
          alt={alt}
        />
      </div>
      <div className="lower-side w-full flex p-2 justify-between items-center">
        <div className="left-side w-3/4">
          <h2 className="font-bold capitalize mb-1">{title}</h2>
          <h4 className="text-sm">
            {category} - {date}
          </h4>
        </div>

        <span
          onClick={() => navigate(`${id}`)}
          className=" text-red-500 py-1 px-1 hover:text-red-300
          text-sm "
        >
          Read more
        </span>
      </div>
    </div>
  );
}

export default WorkCard;
