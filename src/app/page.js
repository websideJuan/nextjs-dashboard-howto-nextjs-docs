import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import HomePageContent from "@/components/homePage/HomePage";
import { Navbar } from "@/components/navbar/Navbar";

config.autoAddCss = false;

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HomePageContent />
    </>
  );
}
