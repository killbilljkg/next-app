import AboutArca from "./About/AboutArca";
import Announcements from "./Announcements/Announcements";
import PressHero from "./PressHero/PressHero";
import News from "./News/News"
import Quotes from "./Quotes/Quotes";
import Cta from "./Cta/Cta";

export default function Press() {
  return (
    <>
    <PressHero />
    <AboutArca />
    <Announcements />
    <News />
    <Quotes />
    <Cta />
    </>
  );
}
