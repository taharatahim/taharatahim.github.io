const languageButtons = document.querySelectorAll("[data-language]");
const translatedCopy = document.querySelectorAll("[data-copy]");
const languageSwitch = document.querySelector(".language-switch");
const pageTitle = document.querySelector("title");
const description = document.querySelector('meta[name="description"]');
const socialTitle = document.querySelector('meta[property="og:title"]');
const socialDescription = document.querySelector('meta[property="og:description"]');
const whatsappContact = document.querySelector("[data-whatsapp-contact]");
const whatsappNumber = document.querySelector("[data-whatsapp-number]");

const metadata = {
  en: {
    title: "Taharat Ahim Bot — A project of Shevet Ahim",
    description:
      "Taharat Ahim Bot is a project of Shevet Ahim, helping coordinate family-purity questions and garment reviews through WhatsApp.",
    socialTitle: "Taharat Ahim Bot — A project of Shevet Ahim",
    socialDescription:
      "A community service for family-purity questions and garment reviews, coordinated through WhatsApp.",
  },
  es: {
    title: "Taharat Ahim Bot — Un proyecto de Shevet Ahim",
    description:
      "Taharat Ahim Bot es un proyecto de Shevet Ahim que ayuda a coordinar consultas sobre pureza familiar y revisión de telas o prendas por WhatsApp.",
    socialTitle: "Taharat Ahim Bot — Un proyecto de Shevet Ahim",
    socialDescription:
      "Un servicio comunitario para consultas sobre pureza familiar y revisión de telas o prendas, coordinado por WhatsApp.",
  },
};

function configureWhatsAppContact() {
  const number = window.TAHARAT_AHIM_CONFIG?.whatsappNumber;
  if (typeof number !== "string" || !/^\d{8,15}$/.test(number)) return;

  whatsappNumber.textContent = `+${number}`;
  whatsappContact.href = `https://wa.me/${number}`;
  whatsappContact.hidden = false;
}

function setLanguage(language) {
  const selectedLanguage = language === "es" ? "es" : "en";

  document.documentElement.lang = selectedLanguage;
  pageTitle.textContent = metadata[selectedLanguage].title;
  description.content = metadata[selectedLanguage].description;
  socialTitle.content = metadata[selectedLanguage].socialTitle;
  socialDescription.content = metadata[selectedLanguage].socialDescription;
  languageSwitch.setAttribute(
    "aria-label",
    languageSwitch.dataset[`label${selectedLanguage.toUpperCase()}`],
  );
  translatedCopy.forEach((element) => {
    element.hidden = element.dataset.copy !== selectedLanguage;
  });

  languageButtons.forEach((button) => {
    const isSelected = button.dataset.language === selectedLanguage;
    button.setAttribute("aria-pressed", String(isSelected));
  });

  try {
    window.sessionStorage.setItem("taharat-ahim-language", selectedLanguage);
  } catch {
    // The language switch still works when browser storage is unavailable.
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

configureWhatsAppContact();

try {
  const savedLanguage = window.sessionStorage.getItem("taharat-ahim-language");
  if (savedLanguage === "es") setLanguage("es");
} catch {
  // The default language is English when browser storage is unavailable.
}
