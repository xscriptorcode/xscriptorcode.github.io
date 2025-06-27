'use client'; // Aquí sí

import { Roboto_font } from "./fonts";
import DecryptedText from "./DecryptedText";

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.name.valueOf;
        const email = form.email.value;
        const number = form.number.value;
        const message = form.message.value;

        const subject = encodeURIComponent("Nuevo mensaje de contacto");
        const body = encodeURIComponent(
          `Nombre: ${name}\nEmail: ${email}\nNúmero: ${number}\nMensaje:\n${message}`
        );

        window.location.href = `mailto:tucorreo@ejemplo.com?subject=${subject}&body=${body}`;
      }}
      className="bg-black/70 border border-gray-700 rounded-xl shadow-lg w-full max-w-lg mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 flex flex-col gap-4"
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
        { label: "@Message*://", name: "message", type: "text", required: true, placeholder: "leave your message" },
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
