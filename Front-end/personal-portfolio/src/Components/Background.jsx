import FaultyTerminal from './FaultyTerminal';

export default function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <FaultyTerminal
        scale={2.5}
        gridMul={[2, 1]}
        digitSize={1.2}
        timeScale={1}
        pause={false}
        scanlineIntensity={1}
        glitchAmount={1}
        flickerAmount={1}
        noiseAmp={1}
        chromaticAberration={2}
        dither={0}
        curvature={0}
        tint="#00ff99"
        mouseReact={true}
        mouseStrength={0.5}
        pageLoadAnimation={true}
        brightness={1}
      />
    </div>
  );
}