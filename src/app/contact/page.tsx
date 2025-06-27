
import CustomRippleCursor from "@/app/components/CustomCursor";
import { PagesStyles } from "../components/pagesstyles";
import { Roboto_font } from "../components/fonts";
import DecryptedText from "../components/DecryptedText";

export const metadata = {
  title: "Contact - XscriptorCode",
  description: "Here you will find the means to contact with me.",
};

export default function Home() {
  return (
    <div>
      <CustomRippleCursor />
      <main className={`${PagesStyles.mainContainer}`}>
        <div className="flex-1 relative p-6 lg:pl-12 shadow-md min-h-[224px] flex flex-col justify-start">
          <h1 className={`${PagesStyles.titles} ${Roboto_font.className}`}>
            <DecryptedText
              text="Contact"
              animateOn="view"
              sequential
              revealDirection="center"
              speed={90}
              maxIterations={60}
              encryptedClassName="text-red-500 animate-pulse"
              parentClassName="text-2xl tracking-wide"
            />
          </h1>
          <div className="bg-black/70 border border-gray-700 rounded-xl shadow-lg w-full max-w-lg mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 flex flex-col gap-4">
            <div className="flex items-center">
              <span className={`text-white ${Roboto_font.className}`}>
                <DecryptedText
                  text="@Name*://"
                  animateOn="view"
                  sequential
                  revealDirection="center"
                  speed={90}
                  maxIterations={60}
                  encryptedClassName="text-blue-200 animate-pulse"
                  parentClassName="tracking-wide"
                />
              </span>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="bg-transparent border-0 border-b border-dashed border-gray-500 text-white focus:outline-none w-full"
              />
            </div>
            <div className="flex items-center">
              <span className={`text-white ${Roboto_font.className}`}>
                <DecryptedText
                  text="@Email*://"
                  animateOn="view"
                  sequential
                  revealDirection="center"
                  speed={90}
                  maxIterations={60}
                  encryptedClassName="text-blue-200 animate-pulse"
                  parentClassName="tracking-wide"
                />
              </span>
              <input
                type="text"
                id="email"
                name="email"
                required
                className="bg-transparent border-0 border-b border-dashed border-gray-500 text-white focus:outline-none w-full"
              />
            </div>
            <div className="flex items-center">
              <span className={`text-white ${Roboto_font.className}`}>
                <DecryptedText
                  text="@Number://"
                  animateOn="view"
                  sequential
                  revealDirection="center"
                  speed={90}
                  maxIterations={60}
                  encryptedClassName="text-blue-200 animate-pulse"
                  parentClassName="tracking-wide"
                />
              </span>
              <input
                type="text"
                id="number"
                name="number"
                className="bg-transparent border-0 border-b border-dashed border-gray-500 text-white focus:outline-none w-full"
              />
            </div>
            <div className="flex items-center">
              <span className={`text-white ${Roboto_font.className}`}>
                <DecryptedText
                  text="@Message*://"
                  animateOn="view"
                  sequential
                  revealDirection="center"
                  speed={90}
                  maxIterations={60}
                  encryptedClassName="text-blue-200 animate-pulse"
                  parentClassName="tracking-wide"
                />
              </span>
              <input
                type="text"
                id="message"
                name="message"
                required
                className="bg-transparent border-0 border-b border-dashed border-gray-500 text-white focus:outline-none w-full"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
