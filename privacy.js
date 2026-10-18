const languageButtons = document.querySelectorAll("[data-language]");
const translatedCopy = document.querySelectorAll("[data-copy]");
const languageSwitch = document.querySelector(".language-switch");

function setLanguage(language) {
  const selectedLanguage = language === "es" ? "es" : "en";

  document.documentElement.lang = selectedLanguage;
  languageSwitch.setAttribute(
    "aria-label",
    languageSwitch.dataset[`label${selectedLanguage.toUpperCase()}`],
  );
  translatedCopy.forEach((element) => {
    element.hidden = element.dataset.copy !== selectedLanguage;
  });
  languageButtons.forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.language === selectedLanguage),
    );
  });

  try {
    window.sessionStorage.setItem("taharat-ahim-language", selectedLanguage);
  } catch {
    // Language switching remains available when browser storage is unavailable.
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

try {
  if (window.sessionStorage.getItem("taharat-ahim-language") === "es") {
    setLanguage("es");
  }
} catch {
  // The default language is English when browser storage is unavailable.
}
