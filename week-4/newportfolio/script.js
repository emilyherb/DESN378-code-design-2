const toggle = document.querySelector(".theme-toggle"); 
const heroImage = document.querySelector(".hero-image");
const themeButtons = document.querySelectorAll("[data-theme-choice]");

const ICONS = {
  light: `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
         viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="1.75" stroke-linecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4"/>
      <line x1="12" y1="2" x2="12" y2="5"/>
      <line x1="12" y1="19" x2="12" y2="22"/>
      <line x1="2" y1="12" x2="5" y2="12"/>
      <line x1="19" y1="12" x2="22" y2="12"/>
      <line x1="4.5" y1="4.5" x2="6.8" y2="6.8"/>
      <line x1="17.2" y1="17.2" x2="19.5" y2="19.5"/>
      <line x1="17.2" y1="6.8" x2="19.5" y2="4.5"/>
      <line x1="4.5" y1="19.5" x2="6.8" y2="17.2"/>
    </svg>
  `,
  dark: `
<svg
     width="24" height="24"
     viewBox="0 0 24 24"
     fill="currentColor">

  <path d="
    M 14 2
    A 12 10 0 1 0 14 22
    A 8 10 0 0 1 14 2
  "/>
</svg>


  `,
  system: `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
         viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4"
              fill="none" stroke="currentColor" stroke-width="1.75"/>
      <rect x="8" y="8" width="4" height="8" fill="currentColor"/>
      <line x1="12" y1="2" x2="12" y2="5"
            stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
      <line x1="12" y1="19" x2="12" y2="22"
            stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
      <line x1="2" y1="12" x2="5" y2="12"
            stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
      <line x1="4.5" y1="4.5" x2="6.8" y2="6.8"
            stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
      <line x1="4.5" y1="19.5" x2="6.8" y2="17.2"
            stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
    </svg>
  `
};

function updateToggleIcon(mode, themeApplied) {
  if (mode === "system") {
    toggle.innerHTML = ICONS.system;
    toggle.setAttribute("aria-label", "Theme: System");
  } else {
    toggle.innerHTML = themeApplied === "dark" ? ICONS.dark : ICONS.light;
    toggle.setAttribute("aria-label", `Theme: ${themeApplied[0].toUpperCase()}${themeApplied.slice(1)}`);
  }
}

function setTheme(theme, mode = "light") {
  // theme is the applied theme: "light" or "dark"
  document.documentElement.dataset.theme = theme;

  // icon reflects selected mode (system gets system icon)
  updateToggleIcon(mode, theme);

  // Swap hero image
  if (heroImage?.dataset?.light && heroImage?.dataset?.dark) {
    heroImage.src = theme === "dark" ? heroImage.dataset.dark : heroImage.dataset.light;
  }
}

function applySavedOrSystemTheme() {
  const savedMode = localStorage.getItem("theme"); // "light" | "dark" | "system" | null

  if (savedMode === "light" || savedMode === "dark") {
    setTheme(savedMode, savedMode);
    return;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light", "system");
}

applySavedOrSystemTheme();

// selects from dropdown
themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const choice = btn.dataset.themeChoice; // "light" | "dark" | "system"

    if (choice === "system") {
      localStorage.setItem("theme", "system");
      applySavedOrSystemTheme();
    } else {
      localStorage.setItem("theme", choice);
      setTheme(choice, choice);
    }
  });
});

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  if (localStorage.getItem("theme") === "system" || !localStorage.getItem("theme")) {
    applySavedOrSystemTheme();
  }
});
