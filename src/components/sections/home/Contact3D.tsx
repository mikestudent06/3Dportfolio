"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import TitleHeader from "@/components/ui/TitleHeader";
import { CanvasLoader } from "@/components/canvas/CanvasLoader";
import { Scene3DWrapper } from "@/components/three/Scene3DWrapper";
import { use3DEnabled } from "@/hooks/use3DEnabled";
import { contact, texts } from "@/lib/constants";

const ContactExperience = dynamic(() => import("@/components/three/contact/ContactExperience"), {
  ssr: false,
  loading: () => <CanvasLoader />,
});

const contactInfo = [
  {
    icon: Mail,
    label: texts.contact.email,
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: Phone,
    label: texts.contact.phone || "Téléphone",
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: texts.contact.location || "Localisation",
    value: contact.location,
    href: "https://www.google.com/maps/place/Congo+Brazzaville",
  },
];

const Contact3D = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const enabled3D = use3DEnabled();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useGSAP(
    () => {
      gsap.from("[data-contact-form]", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#contact", start: "top 75%" },
      });
      if (enabled3D) {
        gsap.from("[data-contact-scene]", {
          x: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: "#contact", start: "top 75%" },
        });
      }
      gsap.from("[data-contact-info]", {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: "[data-contact-info]", start: "top 90%" },
      });
    },
    { scope: sectionRef, dependencies: [enabled3D] }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Configuration EmailJS manquante. Veuillez configurer les variables d'environnement NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID et NEXT_PUBLIC_EMAILJS_PUBLIC_KEY."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        publicKey
      );

      setForm({ name: "", email: "", message: "" });
      setStatus({ type: "success", message: texts.contact.success });
    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      let errorMessage = texts.contact.error;
      const error = err as { message?: string; text?: string };
      if (error.message?.includes("EmailJS") || error.message?.includes("Configuration")) {
        errorMessage =
          "Configuration EmailJS manquante. Le formulaire n'est pas encore configuré pour envoyer des emails.";
      } else if (error.text) {
        errorMessage = error.text;
      } else if (error.message) {
        errorMessage = error.message;
      }
      setStatus({ type: "error", message: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <div data-reveal>
          <TitleHeader title={texts.contact.title} sub={texts.contact.subtitle} />
        </div>

        <div className="grid-12-cols mt-16 gap-8">
          <div className={enabled3D ? "xl:col-span-5" : "xl:col-span-12 xl:max-w-2xl"} data-contact-form>
            <div className="card-border rounded-xl p-8 md:p-10 h-full">
              <form onSubmit={handleSubmit} className="contact-form w-full flex flex-col gap-6">
                <div>
                  <label htmlFor="name">{texts.contact.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={texts.contact.namePlaceholder}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">{texts.contact.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={texts.contact.emailPlaceholder}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">{texts.contact.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={texts.contact.messagePlaceholder}
                    rows={5}
                    required
                  />
                </div>

                {status && (
                  <div
                    className={`flex items-start gap-3 p-4 rounded-xl border ${
                      status.type === "success"
                        ? "bg-white/5 border-white/20 text-white"
                        : "bg-red-500/10 border-red-500/30 text-red-300"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    )}
                    <p className="text-sm">{status.message}</p>
                  </div>
                )}

                <button type="submit" disabled={loading} className="w-fit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">{loading ? texts.contact.sending : texts.contact.sendMessage}</p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          <div className={`${enabled3D ? "xl:col-span-7" : "xl:col-span-12"} flex flex-col gap-6`}>
            {enabled3D && (
              <div
                data-contact-scene
                className="card-border rounded-3xl overflow-hidden min-h-80 lg:min-h-96 bg-black-100 hover:cursor-grab"
              >
                <Scene3DWrapper component={ContactExperience} />
              </div>
            )}

            <div className="grid sm:grid-cols-3 gap-4" data-contact-info>
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="page-card-hover card p-5 flex flex-col gap-3 group"
                >
                  <div className="size-11 rounded-xl bg-black-200 border border-black-50 flex-center group-hover:border-white/30 transition-colors">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white-50 uppercase tracking-wide">{item.label}</p>
                    <p className="text-sm text-white font-medium mt-1 break-all">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {contact.availability.status && (
              <div className="page-card card p-6 flex items-start gap-3" data-reveal>
                <span className="size-3 bg-white rounded-full animate-pulse shrink-0 mt-1.5" />
                <div>
                  <p className="font-medium text-white">{texts.contact.currentlyAvailable}</p>
                  <p className="text-white-50 text-sm mt-1">{contact.availability.message}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact3D;
