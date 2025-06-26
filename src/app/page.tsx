'use client';
import CustomRippleCursor from "./components/CustomCursor";
import DecryptedText from "./components/DecryptedText";
import { Roboto_font } from "./components/fonts";
import { PagesStyles } from "./components/pagesstyles";

export default function Home() {
  return (
    <div>
      <CustomRippleCursor />

      <main className={`${PagesStyles.mainContainer} animate-fade-in-up`}>
        <div className="flex flex-col items-center justify-center p-6 sm:p-10">

          <div className="flex flex-col lg:flex-row w-full max-w-3xl gap-8 gap-y-12 mb-10">
            <div className="w-56 h-56 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center shadow-md mx-auto lg:mx-0 overflow-hidden">
              <img
                src="https://github.com/xscriptorcode.png"
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>


            <div className="flex-1 relative p-6 lg:pl-12 shadow-md min-h-[224px] flex flex-col justify-start">

              <h1 className={`${PagesStyles.titles} ${Roboto_font.className} block text-right lg:hidden absolute -top-24 right-1`}>
                <DecryptedText
                  text="scriptor"
                  animateOn="view"
                  sequential
                  revealDirection="center"
                  speed={90}
                  maxIterations={60}
                  encryptedClassName="text-red-500 animate-pulse"
                  parentClassName="text-2xl font-bold tracking-wide"
                />
                <DecryptedText
                  text="|"
                  animateOn="view"
                  sequential
                  revealDirection="center"
                  speed={90}
                  maxIterations={60}
                  encryptedClassName="text-red-500 animate-pulse"
                  parentClassName="text-2xl font-bold tracking-wide"
                />
                <DecryptedText
                  text="Code"
                  animateOn="view"
                  sequential
                  revealDirection="center"
                  speed={90}
                  maxIterations={60}
                  encryptedClassName="text-red-500 animate-pulse"
                  parentClassName="text-2xl font-bold tracking-wide"
                />
              </h1>

              <h1 className={`${PagesStyles.titles} ${Roboto_font.className}  hidden lg:block absolute top-15 right-120`}>
                <DecryptedText
                  text="scriptor"
                  animateOn="view"
                  sequential
                  revealDirection="center"
                  speed={90}
                  maxIterations={40}
                  encryptedClassName="text-red-500 animate-pulse"
                  parentClassName="text-2xl lg:text-4xl font-bold tracking-wide"
                />
                <DecryptedText
                  text="|"
                  animateOn="view"
                  sequential
                  revealDirection="center"
                  speed={90}
                  maxIterations={40}
                  encryptedClassName="text-red-500 animate-pulse"
                  parentClassName="text-2xl lg:text-4xl font-bold tracking-wide"
                />
                <DecryptedText
                  text="Code"
                  animateOn="view"
                  sequential
                  revealDirection="center"
                  speed={90}
                  maxIterations={40}
                  encryptedClassName="text-red-500 animate-pulse"
                  parentClassName="text-2xl lg:text-4xl font-bold tracking-wide"
                />
              </h1>

              <p className={`text-sm lg:text-base mt-1 lg:mt-5 text-right ${Roboto_font.className}`}>
                <DecryptedText
                  text="I’m a developer focused on clean architecture, UI/UX consistency, and interactive design. I build responsive web apps and sometimes I colaborate creating software. I prioritize component-based architecture, performance, and scalable code using TypeScript."
                  animateOn="view"
                  sequential
                  revealDirection="center"
                  speed={1}
                  maxIterations={5}
                  encryptedClassName="text-red-500 animate-pulse"  
                  className="text-white transition-colors duration-300"
                  parentClassName="tracking-wide"
                />
              </p>
            </div>


          </div>

          <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex items-center justify-center min-h-[150px] shadow-md">
            <span className="text-gray-100">map</span>
          </div>
        </div>
      </main>
    </div>
  );
}
