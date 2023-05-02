type Props = {
  title: string;
  content: string;
};
function Info({ title, content }: Props) {
  return (
    <div>
      <span className="font-bold capitalize text-md">{title}</span>:&nbsp;
      <span className="text-[#333] text-md">{content}</span>
    </div>
  );
}

export default Info;
