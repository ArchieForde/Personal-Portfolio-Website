import SplitText from "../Components/SplitText";

export default function Home() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <SplitText
        text="Welcome to My Cyber Portfolio"
        className="text-5xl font-bold"
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
      <p className="mt-6 text-gray-400 text-lg">
        Exploring the intersection of <span className="text-cyan-400">React</span> ⚛️ and{" "}
        <span className="text-green-400">Cybersecurity</span> 🧠
      </p>
    </div>
  );
}
