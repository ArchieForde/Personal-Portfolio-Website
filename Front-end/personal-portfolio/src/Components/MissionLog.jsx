const facts = [
  "The Voyager Golden Record contains sounds and images selected to portray the diversity of life on Earth.",
  "A day on Venus is longer than a year on Venus.",
  "Saturn's moon Titan has a thicker atmosphere than Earth.",
  "The ISS travels at approximately 17,500 mph, orbiting Earth every 90 minutes.",
  "More than 23,000 objects larger than 10 cm are tracked in Earth's orbit.",
  "The Hubble Space Telescope has sent back over 1.5 million observations.",
  "Spacecraft use gravity assists to gain speed without fuel — like a slingshot around a planet.",
  "The Apollo missions returned 842 pounds of lunar rock and soil samples.",
];

export default function MissionLog() {
  return (
    <div className="hairline-top overflow-hidden">
      <div className="mission-log">
        <div className="mission-log-inner">
          {facts.map((fact, i) => (
            <span key={i} className="mx-8 font-mono text-xs text-muted/70 whitespace-nowrap">
              {fact}
            </span>
          ))}
          {facts.map((fact, i) => (
            <span key={`dup-${i}`} className="mx-8 font-mono text-xs text-muted/70 whitespace-nowrap">
              {fact}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
