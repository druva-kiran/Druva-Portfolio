document.addEventListener("DOMContentLoaded", () => {
  initBackgroundCanvas();
  initHeaderScroll();
  initMobileMenu();
  initScrollSpy();
  initWeightsCanvas();
  initProjectCards3D();
  initBentoCards3D();
  initResumeTabs();
  initContactForm();
  initScrollReveal();
});

/* 1. Interactive Constellation Canvas Backdrop */
function initBackgroundCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let particles = [];
  const mouse = { x: null, y: null, radius: 140 };

  const handleResize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  window.addEventListener("resize", handleResize, { passive: true });
  handleResize();

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 1.5 + 0.5;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      ctx.fill();
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce boundaries
      if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
      if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

      // Mouse gravity attraction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);
        
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 0.3;
          this.y -= (dy / dist) * force * 0.3;
        }
      }
    }
  }

  // Populate particles based on screen width
  const count = Math.min(Math.floor(canvas.width / 18), 75);
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw background subtle colors glow lines
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < 110) {
          const opacity = (110 - dist) / 110 * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    
    requestAnimationFrame(animate);
  };
  animate();
}

/* 2. Header Scroll state */
function initHeaderScroll() {
  const header = document.getElementById("header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/* 3. Mobile Navigation Menu toggle */
function initMobileMenu() {
  const toggleBtn = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("open");
    const icon = toggleBtn.querySelector("i");
    if (navMenu.classList.contains("open")) {
      icon.className = "bx bx-x";
    } else {
      icon.className = "bx bx-menu-alt-right";
    }
  });

  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      navMenu.classList.remove("open");
      const icon = toggleBtn.querySelector("i");
      if (icon) icon.className = "bx bx-menu-alt-right";
    }
  });
}

/* 4. Active Navigation Link highlight Spy */
function initScrollSpy() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  if (sections.length === 0 || navLinks.length === 0) return;

  const spyOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0
  };

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, spyOptions);

  sections.forEach((s) => spyObserver.observe(s));
}

/* 5. Model Weights Interactive Canvas (Hero) */
function initWeightsCanvas() {
  const canvas = document.getElementById("weights-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const sliders = {
    ai: document.getElementById("slider-ai"),
    web: document.getElementById("slider-web"),
    sys: document.getElementById("slider-sys")
  };

  const displays = {
    ai: document.getElementById("val-ai"),
    web: document.getElementById("val-web"),
    sys: document.getElementById("val-sys")
  };

  let values = {
    ai: parseInt(sliders.ai ? sliders.ai.value : 85),
    web: parseInt(sliders.web ? sliders.web.value : 75),
    sys: parseInt(sliders.sys ? sliders.sys.value : 65)
  };

  const updateValue = (key, val) => {
    values[key] = parseInt(val);
    if (displays[key]) {
      displays[key].textContent = `${val}%`;
    }
  };

  if (sliders.ai) sliders.ai.addEventListener("input", (e) => updateValue("ai", e.target.value));
  if (sliders.web) sliders.web.addEventListener("input", (e) => updateValue("web", e.target.value));
  if (sliders.sys) sliders.sys.addEventListener("input", (e) => updateValue("sys", e.target.value));

  let width, height;
  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    width = rect.width;
    height = rect.height;
  };
  
  window.addEventListener("resize", resize, { passive: true });
  resize();

  const drawCurve = (val, color, timeOffset) => {
    const startX = 20;
    const endX = width - 20;
    const startY = height * 0.15;
    const targetY = height * (0.85 - (val / 100) * 0.65);

    ctx.beginPath();
    ctx.moveTo(startX, startY);

    for (let x = startX; x <= endX; x++) {
      const t = (x - startX) / (endX - startX);
      const ease = t * t * (3 - 2 * t);
      let y = startY + (targetY - startY) * ease;
      const ripple = Math.sin(x * 0.04 - timeOffset) * 2.5 * Math.sin(t * Math.PI);
      y += ripple;
      ctx.lineTo(x, y);
    }

    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.lineTo(endX, height);
    ctx.lineTo(startX, height);
    ctx.closePath();

    const grad = ctx.createLinearGradient(0, startY, 0, height);
    const rgba = color.replace("rgb", "rgba").replace(")", ", 0.06)");
    grad.addColorStop(0, rgba);
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(endX, targetY, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 1.5;
    ctx.stroke();
  };

  let frame = 0;
  const render = () => {
    if (!canvas.isConnected) return;
    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
    ctx.lineWidth = 1;
    
    const gridCols = 8;
    for (let i = 1; i < gridCols; i++) {
      const x = (width / gridCols) * i;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    const gridRows = 5;
    for (let i = 1; i < gridRows; i++) {
      const y = (height / gridRows) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    frame++;
    const time = frame * 0.05;

    drawCurve(values.sys, "rgb(168, 85, 247)", time + 2); // Purple
    drawCurve(values.web, "rgb(14, 165, 233)", time + 1); // Sky Blue
    drawCurve(values.ai, "rgb(99, 102, 241)", time);     // Indigo

    requestAnimationFrame(render);
  };

  render();
}

/* 6. 3D Project cards tilt & dynamic slide drawers */
function initProjectCards3D() {
  const containers = document.querySelectorAll(".project-card-container");
  const drawer = document.getElementById("project-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  const closeBtn = document.getElementById("drawer-close");
  const returnBtn = document.getElementById("drawer-return-btn");
  if (containers.length === 0) return;

  // Project database definitions
  const projectDb = {
    1: {
      title: "DawnOS",
      category: "System Engineering",
      status: "Complete Run",
      timeline: "Winter 2026",
      role: "Lead Creator",
      tech: ["Arch Linux", "Hyprland", "Bash", "Kitty", "Rofi", "Waybar"],
      github: "https://github.com/druva-kiran/DawnOs.git",
      architecture: `
  [ DawnOS Installer ]  --> ( Pacman / AUR bootstrap )
           |
    ( Symlink Configs )
           v
  [ Hyprland Compositor ] --> ( Waybar / Rofi / Kitty )
      `,
      situation: "Setting up a customized Arch Linux desktop with window managers, status bars, and app launchers is time-consuming and manual.",
      challenge: "Building an automated installation script that securely symlinks configuration structures and installs software packages without user intervention.",
      action: "Created a modular Bash setup script that links directories, handles package manager installation pipelines, and configures keybind shortcuts.",
      result: "Reduces manual desktop configurations to a single command execution that completes in under 10 minutes.",
      learnings: "Dividing setup scripts into step-specific check blocks makes it easier to debug installation errors without starting over."
    },
    2: {
      title: "Predictive Inventory Engine",
      category: "AI & Data Science",
      status: "Active Dev",
      timeline: "Spring 2026",
      role: "AI Developer",
      tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "SQL"],
      github: "https://github.com/druva-kiran/Predictive-Inventory-Engine.git",
      architecture: `
  [ SQL Transactions ]  --> ( Clean & Transform: Pandas )
           |
     ( Feature Matrix )
           v
  [ Scikit-Learn Model ] --> ( Predict Demand Trends ) --> [ Inventory Logs ]
      `,
      situation: "Static inventory safety buffers fail to adapt to buying seasonality and market trends, leading to warehousing errors.",
      challenge: "Developing a machine learning system that accounts for historical fluctuations and updates database limit targets securely.",
      action: "Trained regressors using Scikit-Learn, cleaned sales transactions with Pandas, and wrote Python controllers to interface with a SQL database.",
      result: "Achieved forecasting error rates (RMSE) under 4.5% on sample test runs, outperforming manual stocking protocols.",
      learnings: "Lagging features and moving average calculations improve predictions significantly more than tuning hyperparameter bounds."
    },
    3: {
      title: "fanctl",
      category: "Systems Automation",
      status: "Complete Run",
      timeline: "Fall 2025",
      role: "System Developer",
      tech: ["Linux", "Bash", "Systemd", "NBFC"],
      github: "https://github.com/druva-kiran/fanctl.git",
      architecture: `
  [ Temperature Sensor ] --> ( fanctl systemd service )
             |
      ( Dynamic Curve )
             v
  [ NBFC CLI Utility ]   --> ( Write low-level ACPI registers )
      `,
      situation: "Laptops running Linux often experience thermal throttling or excessive fan noise because proprietary firmware regulates speeds poorly.",
      challenge: "Safely writing to hardware registers, handling package installations across Arch and Debian package managers, and managing systemd daemon startup sequences.",
      action: "Wrote a Bash controller script that provisions Notebook Fan Control (NBFC) config profiles and wraps commands inside a CLI wrapper.",
      result: "Keeps CPU temperatures 8°C cooler under compile loads and quieted laptop fan noise profiles at idle.",
      learnings: "Querying sysfs values provides hardware state info safely without requiring experimental kernel modules."
    }
  };

  // 3D Card tilt motion math
  containers.forEach((container) => {
    const card = container.querySelector(".project-card");
    if (!card) return;

    container.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);

      const rotateX = -12 * ((y - rect.height / 2) / (rect.height / 2));
      const rotateY = 12 * ((x - rect.width / 2) / (rect.width / 2));

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    container.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
      card.style.removeProperty("--mouse-x");
      card.style.removeProperty("--mouse-y");
    });
  });

  // Drawer slider triggers
  const openDrawer = (id) => {
    const data = projectDb[id];
    if (!data) return;

    // Populate drawer elements dynamically
    document.getElementById("drawer-title").textContent = data.title;
    document.getElementById("drawer-role").textContent = data.role;
    document.getElementById("drawer-timeline").textContent = data.timeline;
    document.getElementById("drawer-category").textContent = data.category;
    document.getElementById("drawer-status").textContent = data.status;
    document.getElementById("drawer-architecture").textContent = data.architecture;
    document.getElementById("drawer-scarl-situation").textContent = data.situation;
    document.getElementById("drawer-scarl-challenge").textContent = data.challenge;
    document.getElementById("drawer-scarl-action").textContent = data.action;
    document.getElementById("drawer-scarl-result").textContent = data.result;
    document.getElementById("drawer-scarl-learnings").textContent = data.learnings;
    document.getElementById("drawer-github-link").setAttribute("href", data.github);

    // Render tags
    const tagBox = document.getElementById("drawer-tags");
    tagBox.innerHTML = "";
    data.tech.forEach((t) => {
      const span = document.createElement("span");
      span.className = "project-card-tag";
      span.textContent = t;
      tagBox.appendChild(span);
    });

    // Animate open drawer and backdrop
    backdrop.classList.add("visible");
    drawer.classList.add("open");
    document.body.style.overflow = "hidden"; // Prevent body scroll
  };

  const closeDrawer = () => {
    drawer.classList.remove("open");
    backdrop.classList.remove("visible");
    document.body.style.overflow = "";
  };

  containers.forEach((container) => {
    const btn = container.querySelector(".project-card-btn");
    const id = container.getAttribute("data-project-id");
    
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        openDrawer(id);
      });
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (returnBtn) returnBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  // Esc closes drawer
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });
}

/* 6.5. 3D Bento cards tilt & dynamic spotlight glow */
function initBentoCards3D() {
  const containers = document.querySelectorAll(".bento-card-container");
  if (containers.length === 0) return;

  containers.forEach((container) => {
    const card = container.querySelector(".bento-box");
    if (!card) return;

    container.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);

      const rotateX = -12 * ((y - rect.height / 2) / (rect.height / 2));
      const rotateY = 12 * ((x - rect.width / 2) / (rect.width / 2));

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    container.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
      card.style.removeProperty("--mouse-x");
      card.style.removeProperty("--mouse-y");
    });
  });
}

/* 7. Resume CV tab switcher */
function initResumeTabs() {
  const tabBtns = document.querySelectorAll(".resume-tab-btn");
  const panes = document.querySelectorAll(".resume-content-pane");
  if (tabBtns.length === 0 || panes.length === 0) return;

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const targetTab = btn.getAttribute("data-tab");

      panes.forEach((pane) => {
        if (pane.getAttribute("id") === `resume-${targetTab}`) {
          pane.style.display = "block";
          setTimeout(() => {
            pane.classList.add("active");
          }, 50);
        } else {
          pane.classList.remove("active");
          setTimeout(() => {
            pane.style.display = "none";
          }, 200);
        }
      });
    });
  });
}

/* 8. Contact validated inquiry form */
function initContactForm() {
  const form = document.getElementById("inquiry-form");
  const overlay = document.getElementById("success-overlay");
  const resetBtn = document.getElementById("reset-form-btn");
  if (!form) return;

  const inputs = {
    name: document.getElementById("form-name"),
    email: document.getElementById("form-email"),
    message: document.getElementById("form-message")
  };

  const errors = {
    name: document.getElementById("error-name"),
    email: document.getElementById("error-email"),
    message: document.getElementById("error-message")
  };

  const toggleError = (field, errSpan, isValid, msg = "") => {
    if (isValid) {
      errSpan.classList.remove("visible");
      field.style.borderBottomColor = "var(--border-color)";
    } else {
      if (msg) errSpan.textContent = msg;
      errSpan.classList.add("visible");
      field.style.borderBottomColor = "#ef4444";
    }
  };

  inputs.name.addEventListener("input", () => {
    toggleError(inputs.name, errors.name, inputs.name.value.trim().length > 0);
  });

  inputs.email.addEventListener("input", () => {
    const val = inputs.email.value.trim();
    const regex = /\S+@\S+\.\S+/;
    if (val.length === 0) {
      toggleError(inputs.email, errors.email, false, "Email Address is required");
    } else if (!regex.test(val)) {
      toggleError(inputs.email, errors.email, false, "Please enter a valid email address");
    } else {
      toggleError(inputs.email, errors.email, true);
    }
  });

  inputs.message.addEventListener("input", () => {
    toggleError(inputs.message, errors.message, inputs.message.value.trim().length > 0);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isNameOk = inputs.name.value.trim().length > 0;
    const isMsgOk = inputs.message.value.trim().length > 0;
    
    const emailVal = inputs.email.value.trim();
    const regex = /\S+@\S+\.\S+/;
    let isEmailOk = true;
    let emailErr = "";

    if (emailVal.length === 0) {
      isEmailOk = false;
      emailErr = "Email Address is required";
    } else if (!regex.test(emailVal)) {
      isEmailOk = false;
      emailErr = "Please enter a valid email address";
    }

    toggleError(inputs.name, errors.name, isNameOk);
    toggleError(inputs.email, errors.email, isEmailOk, emailErr);
    toggleError(inputs.message, errors.message, isMsgOk);

    if (isNameOk && isEmailOk && isMsgOk) {
      const sbtn = document.getElementById("submit-btn");
      const btnSpan = sbtn.querySelector("span");
      const btnIcon = sbtn.querySelector("i");

      sbtn.disabled = true;
      btnSpan.textContent = "Connecting Securely...";
      btnIcon.className = "bx bx-loader-alt animate-spin";

      setTimeout(() => {
        overlay.classList.add("visible");
        form.reset();
        sbtn.disabled = false;
        btnSpan.textContent = "Send Transmission";
        btnIcon.className = "bx bx-paper-plane";
      }, 1500);
    }
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      overlay.classList.remove("visible");
    });
  }
}

/* 9. Intersection Observer Scroll Reveals */
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length === 0) return;

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: "0px 0px -100px 0px",
    threshold: 0.08
  });

  reveals.forEach((r) => revealObserver.observe(r));
}
