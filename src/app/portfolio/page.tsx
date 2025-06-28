
import CustomRippleCursor from "@/app/components/CustomCursor";
import { PagesStyles } from "../components/pagesstyles";

export const metadata = {
  title: "Portfolio - XscriptorCode",
  description: "Here you can learn in detail about the knowledge and experience that my portfolio can bring to your project",
};


export default function Portfolio() {
  return (
    <div>
      <CustomRippleCursor />
      <main className={`${PagesStyles.mainContainer}`}> 
      </main>
      </div>
  );
}
