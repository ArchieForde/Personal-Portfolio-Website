import Plasma from "./Plasma";

export default function Background() {
  return (
    <div className="w-full h-full bg-black">
      <Plasma
        color="#7b2ff7"  // Purple
        speed={0.5}
        direction="backward"
        scale={2.0}
        opacity={1.0}
        mouseInteractive={true}
      />
    </div>
  );
}