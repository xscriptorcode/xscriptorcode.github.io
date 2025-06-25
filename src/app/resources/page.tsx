
import CustomRippleCursor from "@/app/components/CustomCursor";
import { PagesStyles } from "../components/pagesstyles";

export default function Home() {
  return (
      <main>
        <CustomRippleCursor />
        <h1 className={`${PagesStyles.titles}`}>X</h1>
      </main>
    
  );
}
