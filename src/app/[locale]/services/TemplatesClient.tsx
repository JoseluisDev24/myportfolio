"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface TemplatesClientProps {
  dict: Dictionary;
  locale: "es" | "en";
}

const WHATSAPP_NUMBER = "59892171503";

const templateKeys = ["businessLanding", "corporateWebsite", "adminStore"] as const;
type TemplateKey = (typeof templateKeys)[number];

const categoryLabel: Record<TemplateKey, { es: string; en: string }> = {
  corporateWebsite: { es: "Corporativo", en: "Corporate" },
  adminStore: { es: "E-commerce", en: "E-commerce" },
  businessLanding: { es: "Landing", en: "Landing" },
};

const isFeatured: Record<TemplateKey, boolean> = {
  corporateWebsite: false,
  adminStore: true,
  businessLanding: false,
};

// corporateWebsite has no demo yet — its link will be added once that site is built.
const demoUrl: Partial<Record<TemplateKey, string>> = {
  adminStore: "https://store-premium-tan.vercel.app/",
  businessLanding: "https://landing-basic-two.vercel.app/",
};

// Jumps straight to the product cards in the preview iframe, since the hero
// otherwise looks identical to the corporateWebsite template.
const previewUrl: Partial<Record<TemplateKey, string>> = {
  ...demoUrl,
  adminStore: `${demoUrl.adminStore}#products`,
};

export default function TemplatesClient({ dict, locale }: TemplatesClientProps) {
  const t = dict.templates;

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-4 md:px-0 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            {dict.projects.backHome}
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.title}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templateKeys.map((key, index) => {
            const item = t.items[key];
            const featured = isFeatured[key];
            const category = categoryLabel[key][locale];
            const waMessage = encodeURIComponent(t.whatsappMessage + item.name);
            const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;
            const demo = demoUrl[key];

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300
                  ${
                    featured
                      ? "border-blue-500/50 bg-blue-950/20 shadow-lg shadow-blue-500/10"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
              >
                {featured && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-600 text-white">
                      Popular
                    </span>
                  </div>
                )}

                <div className="w-full bg-[#1a1a2e] border-b border-white/10">
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    <div className="ml-2 flex-1 bg-white/5 rounded-md px-2 py-0.5 text-[10px] text-gray-500 truncate">
                      {demo ?? t.comingSoon}
                    </div>
                  </div>
                  <div className="relative h-44 overflow-hidden flex items-center justify-center">
                    {previewUrl[key] ? (
                      <iframe
                        src={previewUrl[key]}
                        loading="lazy"
                        title={item.name}
                        className="absolute top-0 left-0 border-0 pointer-events-none"
                        style={{
                          width: "1280px",
                          height: "720px",
                          transform: "scale(0.245)",
                          transformOrigin: "top left",
                        }}
                      />
                    ) : (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover opacity-40"
                        />
                        <span className="relative text-sm font-medium text-gray-200 bg-black/50 px-3 py-1 rounded-full">
                          {t.comingSoon}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-white/10 text-gray-400">
                      {category}
                    </span>
                    <span className="text-2xl font-bold text-white">
                      {item.price}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-white mb-2">
                    {item.name}
                  </h2>

                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-1.5 mb-5 flex-1">
                    {item.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <CheckIcon className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-2">
                    {demo && (
                      <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 flex-1 px-3 py-2.5 rounded-xl font-medium text-sm
                          border border-white/15 bg-white/5 hover:bg-white/10 text-white
                          transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLinkIcon className="h-3.5 w-3.5" />
                        {t.viewDemo}
                      </a>
                    )}
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-1.5 flex-1 px-3 py-2.5 rounded-xl font-medium text-sm
                        transition-all duration-300 hover:scale-105
                        ${
                          featured
                            ? "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/40"
                            : "bg-green-700/80 hover:bg-green-700 text-white border border-green-600/30"
                        }`}
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                      {t.cta}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ExternalLinkIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488" />
    </svg>
  );
}

function ArrowLeftIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  );
}
