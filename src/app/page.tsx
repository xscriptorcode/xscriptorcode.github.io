/* eslint-disable @next/next/no-img-element */
'use client';
import CustomRippleCursor from "./components/CustomCursor";
import DecryptedText from "./components/DecryptedText";
import { Roboto_font } from "./components/fonts";
import { PagesStyles } from "./components/pagesstyles";
import SkillNetwork from "./components/SkillNetwork";

export default function Home() {
  return (
    <div>
      <CustomRippleCursor />
      <main className={`${PagesStyles.mainContainer} animate-fade-in-up`}>
        <div className={`${PagesStyles.generalGlassmorphism}`}>
          <div className="flex flex-col lg:flex-row w-full max-w-3xl gap-8 gap-y-12 mb-10 ">
            <div className="w-56 h-56 bg-white/2 backdrop-blur-lg border border-white/10 rounded-full flex items-center justify-center shadow-md mx-auto lg:mx-0 overflow-hidden">
              <img
                src="https://github.com/xscriptorcode.png"
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 relative p-6 lg:pl-12 min-h-[224px] flex flex-col justify-start">
              <h1 className={`${PagesStyles.titles} ${Roboto_font.className} block text-right lg:hidden absolute -top-24 right-1`}>
                <DecryptedText
                  text="scriptor"
                  animateOn="view"
                  sequential
                  revealDirection="center"
                  speed={90}
                  maxIterations={60}
                  encryptedClassName={`${PagesStyles.encryptedClassNameTexts}`}
                  parentClassName={`${PagesStyles.parentClassNameTexts}`}
                />
                <DecryptedText
                  text="|"
                  animateOn="view"
                  sequential
                  revealDirection="center"
                  speed={90}
                  maxIterations={60}
                  encryptedClassName={`${PagesStyles.encryptedClassNameTexts}`}
                  parentClassName={`${PagesStyles.parentClassNameTexts}`}
                />
                <DecryptedText
                  text="Code"
                  animateOn="view"
                  sequential
                  revealDirection="center"
                  speed={90}
                  maxIterations={60}
                  encryptedClassName={`${PagesStyles.encryptedClassNameTexts}`}
                  parentClassName={`${PagesStyles.parentClassNameTexts}`}
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
                  encryptedClassName={`${PagesStyles.encryptedClassNameTexts}`}
                  parentClassName={`${PagesStyles.smallParentClassName}`}
                />
                <DecryptedText
                  text="|"
                  animateOn="view"
                  sequential
                  revealDirection="center"
                  speed={90}
                  maxIterations={40}
                  encryptedClassName={`${PagesStyles.encryptedClassNameTexts}`}
                  parentClassName={`${PagesStyles.smallParentClassName}`}
                />
                <DecryptedText
                  text="Code"
                  animateOn="view"
                  sequential
                  revealDirection="center"
                  speed={90}
                  maxIterations={40}
                  encryptedClassName={`${PagesStyles.encryptedClassNameTexts}`}
                  parentClassName={`${PagesStyles.smallParentClassName}`}
                />
              </h1>
              <p className={`${PagesStyles.pdescriptionClassName} ${Roboto_font.className}`}>
                <DecryptedText
                  text="I’m a developer focused on clean architecture, UI/UX consistency, and interactive design. I build responsive web apps and sometimes I colaborate creating software. I prioritize component-based architecture, performance, and scalable code using TypeScript."
                  animateOn="view"
                  sequential
                  revealDirection="center"
                  speed={1}
                  maxIterations={5}
                  encryptedClassName={`${PagesStyles.encryptedClassNameTexts}`}
                  className={`${PagesStyles.descriptionClassName}`}
                  parentClassName="tracking-wide"
                />
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center lg:mt-16">
            <SkillNetwork />
          </div>
          <div className="mt-8 text-center text-white/90 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl font-light italic">
              “Building the web one pixel at a time, from anywhere.”
            </p>
            <p className="mt-2 text-sm md:text-base text-white/70">
              Pushing boundaries through design, code, and collaboration.
            </p>

            <a
              href="/contact"
              className={`${PagesStyles.homeContactButton}`}
            >
              Let&rsquo;s talk
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
