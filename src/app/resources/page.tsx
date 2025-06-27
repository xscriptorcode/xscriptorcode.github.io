
import CustomRippleCursor from "@/app/components/CustomCursor";
import { PagesStyles } from "../components/pagesstyles";

export const metadata = {
  title: "Resources - XscriptorCode",
  description: "Utilities",
};


export default function Resources() {
  return (
      <main>
        <CustomRippleCursor />
        <h1 className={`${PagesStyles.titles}`}>X</h1>
      </main>
    
  );
}
