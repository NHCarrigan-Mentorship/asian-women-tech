import { NewsArticles } from "../data/news";

interface Headline {
  title: string;
  description: string;
  source: string;
  relatedProfileId: string;
}

export default function HeadlineSlider() {
  return (
    <div className="relative bg-gradient-to-br from-purple-900 to-pink-700 py-16 md:py-24 text-white overflow-hidden mt-12">
      <div className="mx-auto">
        <h2 className="text-4xl font-bold">Headline here</h2>
      </div>
    </div>
  );
}
