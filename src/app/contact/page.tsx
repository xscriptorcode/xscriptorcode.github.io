
import CustomRippleCursor from "@/app/components/CustomCursor";
import { PagesStyles } from "../components/pagesstyles";
import { Roboto_font } from "../components/fonts";
import DecryptedText from "../components/DecryptedText";
import ContactForm from "../components/ContactForm";
import TelegramIcon from "../components/contacticons/TelegramIcon";
import WhatsappIcon from "../components/contacticons/WhatsappIcon";
import InstagramIcon from "../components/contacticons/Instagram";
import GithubIcon from "../components/contacticons/githubicon";

export const metadata = {
  title: "Contact - XscriptorCode",
  description: "Here you will find the means to contact with me.",
};

export default function Contact() {
  return (
    <div>
      <CustomRippleCursor />
      <main className={`${PagesStyles.mainContainer} min-h-0`}>
        <div className="flex-1 relative p-6 lg:pl-12 min-h-[224px] flex flex-col justify-start">
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
          <ContactForm />
        </div>
        <div className="mt-6 flex flex-col items-center">
          <h2 className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-amber-100 text-center leading-tight mb-4">
            <DecryptedText
              text="You can also find me on:"
              animateOn="view"
              sequential
              revealDirection="center"
              speed={30}
              maxIterations={30}
              encryptedClassName="text-red-500 animate-pulse"
              parentClassName="text-2xl tracking-wide"
            />
          </h2>
        </div>
        <div className="flex flex-col items-center gap-4 mt-6">
          <a
            href="https://t.me/xscriptor"
            target="_blank"
            className="flex items-center justify-center gap-2 w-60 px-4 py-2 text-white bg-white/10 border border-white/20 backdrop-blur-lg rounded-full shadow-md transition-colors duration-300 hover:text-yellow-400"
          >
            Telegram <TelegramIcon />
          </a>

          <a
            href="https://instagram.com/xscriptorcode"
            target="_blank"
            className="flex items-center justify-center gap-2 w-60 px-4 py-2 text-white bg-white/10 border border-white/20 backdrop-blur-lg rounded-full shadow-md transition-colors duration-300 hover:text-yellow-400"
          >
            Instagram (Xcode) <InstagramIcon />
          </a>

          <a
            href="https://wa.me/34666938748?text=Hello!"
            target="_blank"
            className="flex items-center justify-center gap-2 w-60 px-4 py-2 text-white bg-white/10 border border-white/20 backdrop-blur-lg rounded-full shadow-md transition-colors duration-300 hover:text-yellow-400"
          >
            WhatsApp <WhatsappIcon />
          </a>

          <a
            href="https://instagram.com/xscriptor"
            target="_blank"
            className="flex items-center justify-center gap-2 w-60 px-4 py-2 text-white bg-white/10 border border-white/20 backdrop-blur-lg rounded-full shadow-md transition-colors duration-300 hover:text-yellow-400"
          >
            Instagram (Xscriptor) <InstagramIcon />
          </a>

          <a
            href="https://github.com/xscriptorcode"
            target="_blank"
            className="flex items-center justify-center gap-2 w-60 px-4 py-2 text-white bg-white/10 border border-white/20 backdrop-blur-lg rounded-full shadow-md transition-colors duration-300 hover:text-yellow-400"
          >
            GitHub <GithubIcon />
          </a>
        </div>

      </main>
    </div>

  );
}
