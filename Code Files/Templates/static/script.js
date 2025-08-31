// Hard limits matching your training-time caps
const BOUNDS = {
  age: { min: 1, max: 80, step: 1 },
  TSH: { min: 0, max: 100, step: 0.01 },
  T3:  { min: 0, max: 2.0, step: 0.01 },
  TT4: { min: 0, max: 200, step: 0.01 },
  T4U: { min: 0, max: 1.3, step: 0.01 },
  FTI: { min: 0, max: 200, step: 0.01 },
};

function clampInput(el, {min, max}) {
  const v = parseFloat(el.value);
  if (isNaN(v)) return;
  if (v < min) el.value = min;
  if (v > max) el.value = max;
}

document.addEventListener("DOMContentLoaded", () => {
  // Progressive fade-in
  const cards = document.querySelectorAll(".card");
  cards.forEach((c, i) => {
    c.style.opacity = 0;
    c.style.transform = "translateY(8px)";
    setTimeout(() => {
      c.style.transition = "opacity .5s ease, transform .5s ease";
      c.style.opacity = 1;
      c.style.transform = "translateY(0)";
    }, 120 * i);
  });

  // Apply numeric bounds
  Object.entries(BOUNDS).forEach(([id, cfg]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.setAttribute("min", cfg.min);
    el.setAttribute("max", cfg.max);
    el
