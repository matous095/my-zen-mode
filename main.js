export default {
  onStart() {
    console.log("🔥 Hello from Matus’ Zen mód!");

    // Jednoduchá změna pozadí celé stránky Zen Browseru
    document.body.style.backgroundColor = "#121212";

    // Přidej na stránku jednoduchý hlášení
    const el = document.createElement("div");
    el.textContent = "👋 Zen mód od Matuse je živý!";
    el.style.position = "fixed";
    el.style.top = "10px";
    el.style.right = "10px";
    el.style.padding = "10px 20px";
    el.style.background = "rgba(0, 0, 0, 0.7)";
    el.style.color = "lime";
    el.style.fontSize = "18px";
    el.style.borderRadius = "8px";
    el.style.zIndex = "9999";
    document.body.appendChild(el);
  },
  onExit() {
    console.log("👋 Mód je vypnutý, uklízím...");
  }
};
