import AboutBanner from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutMissionVision from "../components/about/AboutMissionVision";
import AboutValues from "../components/about/AboutValues";

function AboutUsPage() {
  return (
    <main className="bg-white">
      <AboutBanner />
      <AboutStory />
      <AboutMissionVision />
      <AboutValues />
    </main>
  );
}

export default AboutUsPage;


