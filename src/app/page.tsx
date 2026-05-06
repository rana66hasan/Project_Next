import Benefits from "./component/sections/Benefits";
import HeroSectionHome from "./component/sections/HeroSectionHome";
import Testimonials from "./component/sections/Testimonials";
import FAQ from "./component/sections/FAQ";
import NavigateSectionHero from "./component/sections/NavigateSectionHero";

export default function Home() {
  return (
    <div className="2xl:px-28 lg:px-7.5 flex flex-col 2xl:gap-50 gap-[37.5] max-md:gap-[20]">
      <HeroSectionHome/>
      <Benefits/>
      <Testimonials/>
      <FAQ/>
      <NavigateSectionHero/>
    </div>
  );
}
