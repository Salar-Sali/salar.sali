import FixedHeader from "../components/common/FixedHeader";

type Props = {
  children: React.ReactNode;
};
export default function MainTemplate({ children }: Props) {
  return (
    <div>
      <div className="h-screen flex flex-col ">
        <FixedHeader />
        <div className="flex flex-1">{children}</div>
      </div>
    </div>
  );
}
