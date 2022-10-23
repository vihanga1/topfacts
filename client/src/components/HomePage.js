import ArticleHeading from "./ArticleHeading";
import AritlcesSection from "./ArticlesSection";
import Features from "./Features";
import FeaturesHeading from "./FeaturesHeading";
import MainSection from "./MainSection";

export default function HomePage() {
  return (
    <div className="app">
      <MainSection />
      <FeaturesHeading />
      <Features />
      <ArticleHeading />
      <AritlcesSection />
    </div>
  );
}
