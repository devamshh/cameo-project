const header = document.querySelector("[data-header]");
const preloader = document.querySelector("[data-preloader]");
const loaderCount = document.querySelector("[data-loader-count]");
const loaderLine = document.querySelector("[data-loader-line]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const filters = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll("[data-category]");
const revealItems = document.querySelectorAll(".reveal-up");
const progress = document.querySelector("[data-progress]");
const cursor = document.querySelector("[data-cursor]");
const hero = document.querySelector("[data-hero]");
const heroImage = document.querySelector("[data-hero-image]");
const heroModes = document.querySelectorAll("[data-hero-mode]");
const themeSections = document.querySelectorAll("[data-theme]");
const backdrop = document.querySelector("[data-backdrop]");
const backdropLabel = document.querySelector("[data-backdrop-label]");
const backdropImage = document.querySelector("[data-backdrop-image]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const magneticItems = document.querySelectorAll(".magnetic");
const panels = document.querySelectorAll(".interactive-panel, .service-card, .stat-card, .capability-card, .leader-card, .value-card, .timeline-card, .service-detail");
const pageHeroes = document.querySelectorAll(".page-hero");
const pageBands = document.querySelectorAll(".page-band");
const modal = document.querySelector("[data-modal]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalKicker = document.querySelector("[data-modal-kicker]");
const modalCopy = document.querySelector("[data-modal-copy]");
const modalTags = document.querySelector("[data-modal-tags]");
const modalCloseItems = document.querySelectorAll("[data-close-modal]");
const projectTriggers = document.querySelectorAll("[data-project]");
const logoImages = document.querySelectorAll(".logo-card img, .client-logo-card img");
const clientShowcase = document.querySelector("[data-client-showcase]");
const clientLogoCards = document.querySelectorAll(".client-logo-card");
const clientName = document.querySelector("[data-client-name]");
const clientInitials = document.querySelector("[data-client-initials]");
const clientSector = document.querySelector("[data-client-sector]");
const clientScope = document.querySelector("[data-client-scope]");
const projectVisualizer = document.querySelector("[data-project-visualizer]");
const projectModeButtons = document.querySelectorAll("[data-project-mode]");
const projectScale = document.querySelector("[data-project-scale]");
const visualStage = document.querySelector(".project-visual-stage");
const visualTitle = document.querySelector("[data-visual-title]");
const visualCopy = document.querySelector("[data-visual-copy]");
const visualLabel = document.querySelector("[data-visual-label]");
const visualReadout = document.querySelector("[data-visual-readout]");
const logoUpload = document.querySelector("[data-logo-upload]");
const logoPreview = document.querySelector("[data-logo-preview]");
const estimateWidth = document.querySelector("[data-estimate-width]");
const estimateQuantity = document.querySelector("[data-estimate-quantity]");
const estimateFinish = document.querySelector("[data-estimate-finish]");
const widthValue = document.querySelector("[data-width-value]");
const quantityValue = document.querySelector("[data-quantity-value]");
const estimateTotal = document.querySelector("[data-estimate-total]");
const estimateNote = document.querySelector("[data-estimate-note]");
let lastScrollY = window.scrollY;
let scrollSpeed = 0;
let currentProjectMode = "signage";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const loadStartedAt = performance.now();
let loaderProgress = 0;

const heroModeContent = {
  signage: {
    theme: "Signage",
    image: "https://cameouae.com/wp-content/uploads/2025/09/2149279171.jpg"
  },
  wayfinding: {
    theme: "Wayfinding",
    image: "https://cameouae.com/wp-content/uploads/2026/02/WhatsApp-Image-2025-10-28-at-2.42.33-PM-2.jpg"
  },
  fabrication: {
    theme: "Fabrication",
    image: "https://cameouae.com/wp-content/uploads/2026/01/Untitled-design-22.jpg"
  }
};

const projectContent = {
  wayfinding: {
    kicker: "Wayfinding",
    title: "Navigation systems for complex spaces",
    copy:
      "Cameo plans, designs, fabricates and installs wayfinding systems that help visitors move through hospitals, corporate offices, malls and public environments with confidence.",
    tags: ["Directional signs", "Post and panel", "Maps", "Directories", "Installation"]
  },
  signage: {
    kicker: "Signage",
    title: "Indoor and outdoor brand signs",
    copy:
      "From reception signs and display systems to reflective outdoor signage, Cameo produces durable visual identity systems tailored to brand, site and material requirements.",
    tags: ["2D signs", "3D signs", "Reflective", "Reception", "Custom signs"]
  },
  printing: {
    kicker: "Graphics and Printing",
    title: "High-impact print production",
    copy:
      "Large-format prints, UV printing, banners, decals, vehicle graphics and window films are produced for clear colour, durable finish and strong brand visibility.",
    tags: ["UV printing", "Banners", "Decals", "Fleet branding", "Window graphics"]
  },
  fabrication: {
    kicker: "Fabrication",
    title: "Custom fabrication and acrylic",
    copy:
      "Cameo works with acrylic, metal, aluminium/ACP, glass, wood and foam board to create bespoke displays, holders, fixtures and branded built elements.",
    tags: ["Acrylic", "Metal work", "Displays", "Fixtures", "Premium materials"]
  },
  fitout: {
    kicker: "Fit-out",
    title: "Decor and general contracting",
    copy:
      "Interior and decor scopes include carpentry, commercial painting, glass partitions, flooring, metal works and fit-out execution for business spaces.",
    tags: ["Fit-out", "Carpentry", "Painting", "Glass partitions", "Flooring"]
  },
  safety: {
    kicker: "Safety and Traffic",
    title: "Safety, traffic and evacuation communication",
    copy:
      "Cameo produces traffic signage, MEP labels, fire evacuation maps, safety banners and photoluminescent signs for environments where clarity matters.",
    tags: ["Traffic signage", "MEP labels", "Evacuation maps", "Safety banners", "Photoluminescent"]
  },
  acrylic: {
    kicker: "Acrylic Products",
    title: "Display pieces and retail units",
    copy:
      "Acrylic, branded holders, custom displays and retail units are fabricated with clean finishing for high-touch customer spaces.",
    tags: ["Acrylic", "Retail units", "Displays", "Gift holders", "Finishing"]
  },
  branding: {
    kicker: "Branding",
    title: "Campaign graphics across surfaces",
    copy:
      "Cameo turns brand systems into physical touchpoints across windows, vehicles, events, hoardings, counters and interior surfaces.",
    tags: ["Decals", "Window films", "Vehicle graphics", "Hoardings", "Campaign print"]
  }
};

const visualizerContent = {
  signage: {
    title: "Build the first impression before it exists.",
    copy: "Exterior identification, reception signs and illuminated brand moments tuned to the site.",
    label: "CAMEO",
    readout: "Exterior identification / aluminium / illuminated",
    note: "Based on common UAE storefront signage budgets and 3D/acrylic sign ranges."
  },
  wayfinding: {
    title: "Map the movement before production starts.",
    copy: "Directories, pylons and visitor routes shaped around legibility, pace and placement.",
    label: "ZONE A",
    readout: "Directional system / acrylic / visitor flow",
    note: "Based on UAE wayfinding set ranges for directories, pylons and directional signs."
  },
  graphics: {
    title: "Wrap the campaign across every surface.",
    copy: "Large-format graphics, vehicle branding and decals scaled from one idea to many touchpoints.",
    label: "LAUNCH",
    readout: "Print graphics / decals / fleet and glass",
    note: "Based on UAE vinyl, decal and vehicle branding market ranges."
  }
};

function updateHeader() {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 24);
}

function updateProgress() {
  if (!progress) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const amount = scrollable > 0 ? window.scrollY / scrollable : 0;
  progress.style.transform = `scaleX(${Math.min(1, Math.max(0, amount))})`;
}

function closeMenu() {
  if (!menuButton || !nav || !header) return;
  menuButton.setAttribute("aria-expanded", "false");
  nav.classList.remove("open");
  header.classList.remove("menu-active");
  document.body.classList.remove("menu-open");
}

function openModal(projectKey) {
  const content = projectContent[projectKey];
  if (!content || !modal || !modalTitle || !modalKicker || !modalCopy || !modalTags) return;

  modalKicker.textContent = content.kicker;
  modalTitle.textContent = content.title;
  modalCopy.textContent = content.copy;
  modalTags.innerHTML = content.tags.map((tag) => `<span>${tag}</span>`).join("");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("menu-open");
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("menu-open");
}

function setSpotlight(event, element) {
  const rect = element.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  element.style.setProperty("--x", `${x}%`);
  element.style.setProperty("--y", `${y}%`);
}

function setTheme(section) {
  if (!section) return;

  if (backdropLabel) {
    backdropLabel.textContent = section.dataset.theme || "Cameo";
  }

  if (backdropImage && section.dataset.themeImage && backdropImage.src !== section.dataset.themeImage) {
    backdropImage.style.opacity = "0";
    window.setTimeout(() => {
      backdropImage.src = section.dataset.themeImage;
      backdropImage.style.opacity = "";
    }, 160);
  }

  if (backdrop) {
    const index = Array.from(themeSections).indexOf(section);
    backdrop.style.setProperty("--backdrop-rotate", `${index % 2 === 0 ? -8 : 7}deg`);
  }

  const id = section.id;
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      link.classList.toggle("active", Boolean(id && href === `#${id}`));
    }
  });
  setCurrentPageNav();
}

function setCurrentPageNav() {
  const current = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const target = href.split("#")[0] || "index.html";
    const isHomeHash = current === "index.html" && href.startsWith("#");
    link.classList.toggle("active", !isHomeHash && target === current);
  });
}

function setHeroMode(mode) {
  const content = heroModeContent[mode];
  if (!content || !hero) return;

  hero.dataset.theme = content.theme;
  hero.dataset.themeImage = content.image;

  if (heroImage && heroImage.src !== content.image) {
    heroImage.style.opacity = "0";
    heroImage.style.filter = "grayscale(0.2) contrast(1.08)";
    window.setTimeout(() => {
      heroImage.src = content.image;
      heroImage.style.opacity = "";
      heroImage.style.filter = "";
    }, 180);
  }

  heroModes.forEach((button) => {
    const active = button.dataset.heroMode === mode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  setTheme(hero);
}

function setClientSignal(card) {
  if (!card || !clientShowcase) return;

  clientLogoCards.forEach((item) => item.classList.toggle("active", item === card));

  if (clientName) {
    clientName.textContent = card.dataset.clientName || card.textContent || "Cameo client";
  }
  if (clientInitials) {
    clientInitials.textContent = card.dataset.clientInitials || "CA";
  }
  if (clientSector) {
    clientSector.textContent = card.dataset.clientSector || "Brand environment";
  }
  if (clientScope) {
    clientScope.textContent = card.dataset.clientScope || "Signage, fabrication and visual systems delivered for built environments.";
  }
}

function setProjectVisualizer(mode) {
  const content = visualizerContent[mode];
  if (!content || !visualStage) return;

  currentProjectMode = mode;
  visualStage.classList.remove("mode-signage", "mode-wayfinding", "mode-graphics");
  visualStage.classList.add(`mode-${mode}`);

  if (visualTitle) {
    visualTitle.textContent = content.title;
  }
  if (visualCopy) {
    visualCopy.textContent = content.copy;
  }
  if (visualLabel) {
    visualLabel.textContent = content.label;
  }
  if (visualReadout) {
    visualReadout.textContent = content.readout;
  }
  if (estimateNote) {
    estimateNote.textContent = content.note;
  }

  projectModeButtons.forEach((button) => {
    const active = button.dataset.projectMode === mode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  updateEstimate();
}

function setProjectScale(value) {
  if (!projectVisualizer) return;
  const scale = 0.88 + (Number(value) - 1) * 0.12;
  projectVisualizer.style.setProperty("--visual-scale", scale.toFixed(2));
}

function formatAED(value) {
  return `AED ${Math.round(value).toLocaleString("en-AE")}`;
}

function updateEstimate() {
  if (!estimateTotal || !estimateWidth || !estimateQuantity || !estimateFinish) return;

  const width = Number(estimateWidth.value);
  const quantity = Number(estimateQuantity.value);
  const finish = estimateFinish.value;
  const widthFactor = Math.max(0.5, width);
  const quantityFactor = Math.max(1, quantity);

  const rates = {
    signage: { low: 900, high: 2600 },
    wayfinding: { low: 900, high: 6500 },
    graphics: { low: 42, high: 850 }
  };
  const finishMultiplier = {
    standard: 1,
    premium: 1.35,
    illuminated: 1.9
  };
  const modeRates = rates[currentProjectMode] || rates.signage;
  const multiplier = finishMultiplier[finish] || 1;
  let low;
  let high;

  if (currentProjectMode === "graphics") {
    const area = widthFactor * 1.2;
    low = area * modeRates.low * quantityFactor * multiplier;
    high = area * modeRates.high * quantityFactor * multiplier;
  } else if (currentProjectMode === "wayfinding") {
    low = modeRates.low * quantityFactor * multiplier;
    high = modeRates.high * quantityFactor * multiplier;
  } else {
    low = widthFactor * modeRates.low * quantityFactor * multiplier;
    high = widthFactor * modeRates.high * quantityFactor * multiplier;
  }

  if (widthValue) {
    widthValue.textContent = width.toFixed(1);
  }
  if (quantityValue) {
    quantityValue.textContent = String(quantity);
  }
  estimateTotal.textContent = `${formatAED(low)} - ${formatAED(high)}`;
}

function setLogoPreview(file) {
  if (!logoPreview) return;
  const sign = logoPreview.closest(".visual-sign");

  if (!file) {
    logoPreview.removeAttribute("src");
    if (sign) sign.classList.remove("has-logo");
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    logoPreview.src = String(reader.result || "");
    if (sign) sign.classList.add("has-logo");
  });
  reader.readAsDataURL(file);
}

updateHeader();
updateProgress();
setCurrentPageNav();
document.body.classList.add("loading");

let preloaderReleased = false;

function setLoaderProgress(value) {
  loaderProgress = Math.max(loaderProgress, Math.min(100, Math.round(value)));

  if (loaderCount) {
    loaderCount.textContent = `${String(loaderProgress).padStart(2, "0")}%`;
  }

  if (loaderLine) {
    loaderLine.style.setProperty("--loader-progress", `${loaderProgress}%`);
  }
}

function releasePreloader() {
  if (preloaderReleased) return;
  const elapsed = performance.now() - loadStartedAt;
  const remaining = prefersReducedMotion ? 0 : Math.max(0, 2200 - elapsed);

  window.setTimeout(() => {
    preloaderReleased = true;
    setLoaderProgress(100);

    window.setTimeout(() => {
      if (preloader) {
        preloader.classList.add("done");
      }
      document.body.classList.remove("loading");
    }, prefersReducedMotion ? 0 : 260);
  }, remaining);
}

const loaderTimer = window.setInterval(() => {
  if (preloaderReleased) {
    window.clearInterval(loaderTimer);
    return;
  }

  const next = loaderProgress + (loaderProgress < 70 ? 7 : 2);
  setLoaderProgress(Math.min(next, 94));
}, 120);

heroModes.forEach((button) => {
  button.addEventListener("click", () => {
    setHeroMode(button.dataset.heroMode || "signage");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(releasePreloader, 900);
});

window.addEventListener("load", () => {
  window.setTimeout(releasePreloader, 450);
});

window.setTimeout(releasePreloader, 2400);

window.addEventListener(
  "scroll",
  () => {
    scrollSpeed = window.scrollY - lastScrollY;
    lastScrollY = window.scrollY;
    updateHeader();
    updateProgress();
    document.documentElement.style.setProperty("--scroll-speed", `${Math.max(-40, Math.min(40, scrollSpeed))}px`);
  },
  { passive: true }
);

if (menuButton && nav && header) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    header.classList.toggle("menu-active", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    revealObserver.observe(item);
  });

  const themeObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) {
        setTheme(visible.target);
      }
    },
    { threshold: [0.28, 0.42, 0.58], rootMargin: "-18% 0px -32% 0px" }
  );

  themeSections.forEach((section) => themeObserver.observe(section));

} else {
  revealItems.forEach((item) => item.classList.add("in-view"));
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "all";

    filters.forEach((item) => item.classList.toggle("active", item === button));
    cards.forEach((card) => {
      const category = card.dataset.category;
      const visible = filter === "all" || category === filter;
      card.classList.toggle("hidden", !visible);
    });
  });
});

projectTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(trigger.dataset.project);
  });
});

modalCloseItems.forEach((item) => item.addEventListener("click", closeModal));

logoImages.forEach((image) => {
  image.addEventListener("error", () => {
    const card = image.closest(".logo-card, .client-logo-card");
    if (card) {
      card.classList.add("logo-failed");
    }
  });
});

clientLogoCards.forEach((card) => {
  card.addEventListener("pointerenter", () => setClientSignal(card));
  card.addEventListener("focus", () => setClientSignal(card));
  card.addEventListener("pointermove", (event) => {
    setSpotlight(event, card);
    if (prefersReducedMotion || window.matchMedia("(max-width: 760px)").matches) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((0.5 - y / rect.height)) * 10;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });
  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

if (clientLogoCards.length) {
  setClientSignal(clientLogoCards[0]);
}

projectModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setProjectVisualizer(button.dataset.projectMode || "signage");
  });
});

if (projectScale) {
  setProjectScale(projectScale.value);
  projectScale.addEventListener("input", () => setProjectScale(projectScale.value));
}

if (estimateWidth) {
  estimateWidth.addEventListener("input", updateEstimate);
}

if (estimateQuantity) {
  estimateQuantity.addEventListener("input", updateEstimate);
}

if (estimateFinish) {
  estimateFinish.addEventListener("change", updateEstimate);
}

if (logoUpload) {
  logoUpload.addEventListener("change", () => {
    const file = logoUpload.files && logoUpload.files[0];
    setLogoPreview(file);
  });
}

setProjectVisualizer("signage");
updateEstimate();

cards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    if (prefersReducedMotion || window.matchMedia("(max-width: 760px)").matches) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((0.5 - y / rect.height)) * 8;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

panels.forEach((panel) => {
  panel.addEventListener("pointermove", (event) => setSpotlight(event, panel));
});

magneticItems.forEach((item) => {
  item.addEventListener("pointermove", (event) => {
    if (prefersReducedMotion || window.matchMedia("(max-width: 760px)").matches) return;
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    item.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  });

  item.addEventListener("pointerleave", () => {
    item.style.transform = "";
  });
});

window.addEventListener(
  "pointermove",
  (event) => {
    if (prefersReducedMotion) return;
    if (cursor) {
      cursor.style.opacity = "1";
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    }

    if (hero) {
      const x = (event.clientX / window.innerWidth - 0.5) * 22;
      const y = (event.clientY / window.innerHeight - 0.5) * 22;
      hero.style.setProperty("--hero-x", `${x}px`);
      hero.style.setProperty("--hero-y", `${y}px`);
      hero.style.setProperty("--stage-x", `${x * -0.28}px`);
      hero.style.setProperty("--stage-y", `${y * -0.22}px`);
    }

    if (backdrop) {
      const y = (event.clientY / window.innerHeight - 0.5) * 26;
      backdrop.style.setProperty("--backdrop-y", `${y}px`);
    }

    pageHeroes.forEach((pageHero) => {
      const rect = pageHero.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const x = (event.clientX / window.innerWidth - 0.5) * 28;
      const y = (event.clientY / window.innerHeight - 0.5) * 24;
      pageHero.style.setProperty("--page-x", `${x}px`);
      pageHero.style.setProperty("--page-y", `${y}px`);
    });

    pageBands.forEach((band) => {
      const rect = band.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const drift = (event.clientX / window.innerWidth - 0.5) * 42;
      band.style.setProperty("--band-drift", `${drift}px`);
    });

    if (projectVisualizer) {
      const rect = projectVisualizer.getBoundingClientRect();
      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        const x = (event.clientX / window.innerWidth - 0.5) * 18;
        const y = (event.clientY / window.innerHeight - 0.5) * 18;
        projectVisualizer.style.setProperty("--visual-x", `${x}px`);
        projectVisualizer.style.setProperty("--visual-y", `${y}px`);
      }
    }

    document.documentElement.style.setProperty("--ambient-x", `${(event.clientX / window.innerWidth - 0.5) * 22}px`);
    document.documentElement.style.setProperty("--ambient-y", `${(event.clientY / window.innerHeight - 0.5) * 22}px`);
  },
  { passive: true }
);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeModal();
  }
});
