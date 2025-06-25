'use client';
import CustomRippleCursor from "./components/CustomCursor";
import DecryptedText from "./components/DecryptedText";
import { PagesStyles } from "./components/pagesstyles";



export default function Home() {
  return (
    <div>
      <CustomRippleCursor />

      <main className={`${PagesStyles.mainContainer}`}>
        <h1 className={`${PagesStyles.titles}`}>
          <DecryptedText
            text="Xscriptor"
            animateOn="view"
            sequential={true}
            revealDirection="center"
            speed={60}
            maxIterations={20}
            className=""
            encryptedClassName="text-gray-500"
            parentClassName="text-4xl font-bold tracking-wide"
          />
          <DecryptedText
            text="|"
            animateOn="view"
            sequential={true}
            revealDirection="center"
            speed={60}
            maxIterations={20}
            className=""
            encryptedClassName="text-gray-500"
            parentClassName="text-4xl font-bold tracking-wide"
          />
          <DecryptedText
            text="Code"
            animateOn="view"
            sequential={true}
            revealDirection="center"
            speed={60}
            maxIterations={20}
            className=""
            encryptedClassName="text-gray-500"
            parentClassName="text-4xl font-bold tracking-wide"
          />
        </h1>
      </main>
    </div>
  );
}
