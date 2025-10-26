import SplitText from "../Components/SplitText";

export default function Home() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen text-white bg-transparent z-10 pt-32">
      <SplitText
        text="Welcome to My Personal Portfolio"
        className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-snug text-center"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
        tag="h1"
      />
      <p className="mt-2 text-gray-300 text-lg text-lower max-w-xl px-1">
        Exploring the intersection of <span className="text-cyan-400">React</span> ⚛️ and{" "}
        <span className="text-green-400">Cybersecurity</span> 🧠
      </p>
    </div>
  );
}
