interface Pillar {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const pillars: Pillar[] = [
  {
    title: "Education",
    subtitle: "Building Tomorrow's Tech Leaders",
    imageUrl:
      "https://images.unsplash.com/photo-1755548180507-6132101f1ad9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwdGVhY2hpbmclMjBncm91cCUyMHdvcmtzaG9wfGVufDF8fHx8MTc2NzQzODMyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Business",
    subtitle: "Unlocking Economic Opportunity",
    imageUrl:
      "https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBkaXZlcnNlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzY3NDM4MzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Digital Inclusion",
    subtitle: "Bridging the Digital Divide",
    imageUrl:
      "https://images.unsplash.com/photo-1646579885920-0c9a01cb7078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwdHJhaW5pbmclMjB3b3Jrc2hvcCUyMGdyb3VwfGVufDF8fHx8MTc2NzQzODMyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Advocacy and Tech Diplomacy",
    subtitle: "Shaping Policy at the Highest Levels",
    imageUrl:
      "https://images.unsplash.com/photo-1646369505567-3a9cbb052342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNwZWFrZXIlMjBhdWRpZW5jZSUyMHByZXNlbnRhdGlvbiUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzY3NDM4MzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export default function PillarsOfAction() {
  return (
    <div className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 font-bold">
            Our 4 Pillars of Action
          </h2>
        </div>
      </div>
    </div>
  );
}
