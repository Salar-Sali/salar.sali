import Info from "./Info";

function AboutInfo() {
  return (
    <div className="h-[150] flex flex-col justify-between">
      <Info title="name" content="Salar Sali" />
      <Info title="profile" content="fronend developer" />
      <Info title="email" content="salar.sali97 @ gmail.com" />
      <Info title="phone" content="+7 911 216 6580" />
    </div>
  );
}

export default AboutInfo;
