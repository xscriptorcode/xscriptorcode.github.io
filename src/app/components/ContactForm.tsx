'use client'; // Aquí sí

import { Roboto_font } from "./fonts";
import DecryptedText from "./DecryptedText";

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const email = form.email.value;
        const number = form.number.value;
        const message = form.message.value;

        const subject = encodeURIComponent("Nuevo mensaje de contacto");
        const body = encodeURIComponent(
          `Nombre: ${name}\nEmail: ${email}\nNúmero: ${number}\nMensaje:\n${message}`
        );

        window.location.href = `mailto:x@xscriptor.com?subject=${subject}&body=${body}`;
      }}
      className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl w-full max-w-2xl mx-auto px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12 flex flex-col gap-5"
    >
      <div className="flex items-center space-x-2 mb-4">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
      {[
        { label: "@Name*://", name: "name", type: "text", required: true, placeholder: "Your name here" },
        { label: "@Email*://", name: "email", type: "email", required: true, placeholder: "email" },
        { label: "@Number://", name: "number", type: "text", placeholder: "phone(optional)" },
        { label: "@Message*://", name: "message", type: "text", required: true, placeholder: "your message" },
      ].map((field, index) => (
        <div key={index} className="flex items-center">
          <span className={`text-white ${Roboto_font.className}`}>
            <DecryptedText
              text={field.label}
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
            type={field.type}
            id={field.name}
            name={field.name}
            required={field.required}
            placeholder={field.placeholder}
            className="bg-transparent border-0 border-b border-dashed border-gray-500 text-white focus:outline-none w-full"
          />
        </div>
      ))}

      <div className="flex justify-center">
        <button
          type="submit"
          className="mt-4 bg-gray-800 hover:bg-gray-700 text-white font-mono px-4 py-2 rounded border border-gray-600 shadow transition"
        >
          Send ➤
        </button>
      </div>
    </form>
  );
}
