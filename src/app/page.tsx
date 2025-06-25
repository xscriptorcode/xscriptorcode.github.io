'use client';
import CustomRippleCursor from "./components/CustomCursor";
import DecryptedText from "./components/DecryptedText";



export default function Home() {
  return (
    <div>
      <CustomRippleCursor />

      <main>
        <div className="text-3xl text-amber-50">
          <DecryptedText
            text="Xscriptor"
            animateOn="view"
            sequential={true}
            revealDirection="center"
            speed={60}
            maxIterations={20}
            className="text-amber-400"
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
            className="text-amber-400"
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
            className="text-amber-400"
            encryptedClassName="text-gray-500"
            parentClassName="text-4xl font-bold tracking-wide"
          />
        </div>
      </main>
    </div>
  );
}
