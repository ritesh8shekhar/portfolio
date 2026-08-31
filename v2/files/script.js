
/* =============================================================
   CONTENT DATA — edit these arrays to update your site content
   ============================================================= */
const PROJECTS = [
  {
    title: "Financial Management & Expense Intelligence System",
    desc: "Full-stack platform to manage income, expenses, budgets, savings and investments. Built dashboards for spending analytics, category breakdowns and monthly trends. Implemented JWT authentication, REST APIs, recurring expenses, filtering and report generation.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Chart.js"],
    category: "web",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "AI Resume Analyzer & Job Match Platform",
    desc: "AI-powered resume analyzer using NLP and LLMs to evaluate resumes against job descriptions. Extracted skills, education, experience and projects from resumes. Generated match scores, missing skills and improvement suggestions.",
    tags: ["Python", "FastAPI", "NLP", "LLMs", "React.js", "MongoDB", "OpenAI API", "Docker"],
    category: "ai",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "CampusConnect — College Community Platform",
    desc: "Full-stack platform for posts, communities, events and student interactions. Implemented real-time chat and notifications using WebSockets, comments, reactions, profiles and follows. Built event management for creation, registrations and reminders.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "Cloudinary"],
    category: "web",
    demoUrl: "#",
    codeUrl: "#"
  }
];

// FEATURED / HIGHLIGHTS removed — section intentionally omitted

const CERTS = [
  { title: "Machine Learning Certification", issuer: "Professional Certification", detail: "Core ML concepts, supervised and unsupervised learning, model evaluation and deployment.", link: "#" },
  { title: "Big Data Certification", issuer: "Professional Certification", detail: "Distributed systems, data processing frameworks and large-scale data analytics.", link: "#" },
  { title: "Data Science Certification", issuer: "Professional Certification", detail: "Statistical analysis, data visualization, predictive modeling and insights extraction.", link: "#" },
  { title: "Cybersecurity MOOC", issuer: "Online Course", detail: "Security fundamentals, threat analysis, encryption and best practices.", link: "#" },
  { title: "Time Management Certification", issuer: "Professional Development", detail: "Productivity techniques, priority management and effective scheduling.", link: "#" },
  { title: "Leadership Fundamentals MOOC", issuer: "Online Course", detail: "Leadership principles, team management, decision-making and communication.", link: "#" }
];

const EXPERIENCE = [
  {
    role: "Full-Stack Developer",
    org: "Rage Bloods Esports (Freelance)",
    period: "July 2026",
    desc: "Developed and deployed a full-stack esports website with responsive frontend, backend services, REST APIs and database integration. Implemented client-specific features and frontend-backend workflows based on project requirements. Managed testing, debugging, revisions and deployment using Git and GitHub.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git"]
  },
  {
    role: "Full-Stack Developer",
    org: "Gym Life (Freelance)",
    period: "June 2026",
    desc: "Developed and deployed a full-stack fitness website with responsive frontend, backend services, REST APIs and database integration. Implemented application workflows, CRUD operations and frontend-backend integration based on client requirements. Managed testing, revisions and deployment using Git and GitHub.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git"]
  }
];

const ACHIEVEMENTS = [
  {
    title: "1st Place — Uttarakhand Hackathon",
    event: "Uttarakhand Hackathon",
    result: "Winner",
    desc: "Led a team to build an innovative solution, judged best overall project among all competing teams.",
    featured: true
  },
  {
    title: "Runner-up — Cognita LPU Hackathon",
    event: "Cognita LPU Hackathon",
    result: "Runner-up",
    desc: "Built a competitive solution among top teams at LPU hackathon."
  },
  {
    title: "Runner-up — YouthVibe LPU Hackathon",
    event: "YouthVibe LPU Hackathon",
    result: "Runner-up",
    desc: "Developed an innovative project ranked among top submissions."
  },
  {
    title: "Runner-up — IIT Roorkee Hackathon",
    event: "IIT Roorkee Hackathon",
    result: "Runner-up",
    desc: "Competing against top engineering talent, ranked among final top teams."
  },
  {
    title: "Selected — Smart India Hackathon (SIH)",
    event: "Smart India Hackathon",
    result: "Idea Selection",
    desc: "Selected for Smart India Hackathon 2024, a national-level innovation competition."
  },
  {
    title: "100+ Problems Solved on LeetCode",
    event: "LeetCode",
    result: "Achievement",
    desc: "Solved 100+ Data Structures and Algorithms problems on LeetCode."
  },
  {
    title: "200+ Problems Solved on Codeforces",
    event: "Codeforces",
    result: "Pupil",
    desc: "Solved 200+ competitive programming problems on Codeforces, demonstrating strong problem-solving skills in algorithms and data structures."
  }
];

const SOCIALS = [
  {
    platform: "GitHub",
    handle: "@ritesh8shekhar",
    stat: "Open source projects",
    url: "https://github.com/ritesh8shekhar",
    icon: "github",
    color: "#161B22"
  },
  {
    platform: "LeetCode",
    handle: "@ritesh8shekhar",
    stat: "100+ solved",
    url: "https://leetcode.com/ritesh8shekhar",
    icon: "leetcode",
    color: "#8B4513"
  },
  {
    platform: "Codeforces",
    handle: "@ritesh8shekhar",
    stat: "200+ solved",
    url: "https://codeforces.com/profile/ritesh8shekhar",
    icon: "codeforces",
    color: "#1E3A5F"
  },
  {
    platform: "LinkedIn",
    handle: "@ritesh8shekhar",
    stat: "Let's connect",
    url: "https://linkedin.com/in/ritesh8shekhar",
    icon: "linkedin",
    color: "#0A4A6E"
  }
];

const RESUME_URL = "#";

/* =============================================================
   THEME TOGGLE
   ============================================================= */
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme){
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

(function initTheme(){
  const saved = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  applyTheme(saved || (prefersLight ? 'light' : 'dark'));
})();

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

/* =============================================================
   RESUME LINKS
   ============================================================= */
['resumeBtnNav', 'resumeBtnAbout', 'resumeBtnFooter'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.setAttribute('href', RESUME_URL);
});

/* =============================================================
   NAV SCROLL STATE + MOBILE MENU
   ============================================================= */
const nav = document.getElementById('nav');
let lastScrollY = window.scrollY;
let navHideTicking = false;

function updateNavOnScroll(){
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 40);

  const scrollingDown = y > lastScrollY;
  const pastThreshold = y > var_navHeight();
  const mobileMenuOpen = mobileMenu.classList.contains('open');

  if (!mobileMenuOpen){
    if (scrollingDown && pastThreshold){
      nav.classList.add('nav-hidden');
    } else if (!scrollingDown){
      nav.classList.remove('nav-hidden');
    }
  }
  lastScrollY = y;
  navHideTicking = false;
}

function var_navHeight(){
  return parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;
}

window.addEventListener('scroll', () => {
  if (!navHideTicking){
    requestAnimationFrame(updateNavOnScroll);
    navHideTicking = true;
  }
}, { passive: true });

// Always reveal the nav the moment the cursor moves near the top of the viewport
window.addEventListener('mousemove', (e) => {
  if (e.clientY <= 80) nav.classList.remove('nav-hidden');
}, { passive: true });

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    menuToggle.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

/* =============================================================
   SCROLL PROGRESS BAR
   ============================================================= */
const scrollProgress = document.getElementById('scrollProgress');
function updateScrollProgress(){
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = pct + '%';
}
window.addEventListener('scroll', updateScrollProgress, { passive: true });
window.addEventListener('resize', updateScrollProgress, { passive: true });
updateScrollProgress();

/* =============================================================
   ACTIVE NAV TAB (highlights the section currently in view)
   ============================================================= */
const navTabLinks = document.querySelectorAll('.nav-tab');
const navIndicator = document.getElementById('navIndicator');
const trackedSections = document.querySelectorAll('main section[id]');

function moveNavIndicator(activeTab){
  if (!navIndicator || !activeTab) return;
  navIndicator.style.opacity = '1';
  navIndicator.style.transform = `translateX(${activeTab.offsetLeft - 4}px)`;
  navIndicator.style.width = `${activeTab.offsetWidth}px`;
}

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      const id = entry.target.id;
      navTabLinks.forEach(tab => {
        const isActive = tab.dataset.section === id;
        tab.classList.toggle('active', isActive);
        if (isActive) moveNavIndicator(tab);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
trackedSections.forEach(section => sectionObserver.observe(section));

window.addEventListener('resize', () => {
  const active = document.querySelector('.nav-tab.active');
  if (active) moveNavIndicator(active);
}, { passive: true });

/* =============================================================
   BACK TO TOP
   ============================================================= */
const backToTop = document.getElementById('backToTop');
if (backToTop){
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* =============================================================
   CURSOR GLOW
   ============================================================= */
const cursorGlow = document.getElementById('cursorGlow');
let cursorActive = false;
window.addEventListener('mousemove', (e) => {
  cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
  if (!cursorActive){ cursorGlow.classList.add('active'); cursorActive = true; }
});
window.addEventListener('mouseleave', () => cursorGlow.classList.remove('active'));

/* =============================================================
   HERO PARTICLE NETWORK (skipped on mobile / reduced-motion for performance)
   ============================================================= */
(function initParticles(){
  const canvas = document.getElementById('heroParticles');
  const isSmallScreen = window.innerWidth < 760;
  const wantsReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!canvas || isSmallScreen || wantsReducedMotion) return;

  const ctx = canvas.getContext('2d');
  let width, height, particles;
  const COUNT = 60;
  const LINK_DIST = 130;

  function resize(){
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }

  function makeParticles(){
    particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35
    }));
  }

  function getCyan(){
    return getComputedStyle(document.documentElement).getPropertyValue('--cyan').trim() || '#29E7CD';
  }

  function step(){
    ctx.clearRect(0, 0, width, height);
    const cyan = getCyan();

    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    });

    for (let i = 0; i < particles.length; i++){
      for (let j = i + 1; j < particles.length; j++){
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST){
          ctx.globalAlpha = (1 - dist / LINK_DIST) * 0.35;
          ctx.strokeStyle = cyan;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    ctx.globalAlpha = 0.8;
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
      ctx.fillStyle = cyan;
      ctx.fill();
    });

    requestAnimationFrame(step);
  }

  resize();
  makeParticles();
  step();
  window.addEventListener('resize', () => { resize(); }, { passive: true });
})();

/* =============================================================
   MAGNETIC BUTTONS (desktop only)
   ============================================================= */
function reduceMotionGlobalCheck(){
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

if (window.matchMedia('(hover:hover) and (pointer:fine)').matches && !reduceMotionGlobalCheck()){
  const MAGNETIC_SELECTOR = '.btn-primary';

  document.addEventListener('mousemove', (e) => {
    const target = e.target.closest(MAGNETIC_SELECTOR);
    document.querySelectorAll(MAGNETIC_SELECTOR).forEach(el => {
      if (el !== target) el.style.transform = '';
    });
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    target.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  });
}

/* =============================================================
   HERO TERMINAL TYPING ANIMATION
   ============================================================= */
const typeTarget = document.getElementById('typeTarget');
const cursorBlink = document.getElementById('cursorBlink');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const CODE_LINES = [
  { text: 'const developer = {', cls: '' },
  { text: '  name: "Ritesh Shekhar",', cls: 'prop' },
  { text: '  university: "Lovely Professional University",', cls: 'prop' },
  { text: '  course: "Computer Science and Engineering",', cls: 'prop' },
  { text: '  year: "2nd Year",', cls: 'prop' },
  { text: '  cgpa: 9.1,', cls: 'prop' },
  { text: '  leetcode: "100+ solved",', cls: 'prop' },
  { text: '  codeforces: "200+ solved",', cls: 'prop' },
  { text: '  techStack: ["React", "Node.js", "C++", "Python", "MongoDB"],', cls: 'prop' },
  { text: '};', cls: '' }
];

function typeSequence(){
  if (reduceMotion){
    typeTarget.textContent = CODE_LINES.map(l => l.text).join('\n');
    return;
  }
  let lineIndex = 0, charIndex = 0;
  let output = '';

  function step(){
    if (lineIndex >= CODE_LINES.length){
      cursorBlink.style.opacity = 1;
      return;
    }
    const line = CODE_LINES[lineIndex].text;
    if (charIndex <= line.length){
      const typedSoFar = output + line.slice(0, charIndex);
      typeTarget.textContent = typedSoFar;
      charIndex++;
      setTimeout(step, 18 + Math.random() * 22);
    } else {
      output += line + '\n';
      lineIndex++;
      charIndex = 0;
      setTimeout(step, 140);
    }
  }
  step();
}
typeSequence();

/* =============================================================
   STAT COUNTERS (animate on scroll into view)
   ============================================================= */
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1200;
      const start = performance.now();
      function tick(now){
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = (eased * target).toFixed(decimals) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.4 });
document.querySelectorAll('.stat-num').forEach(el => statObserver.observe(el));

/* Featured/Highlights removed from page — renderer skipped */

/* =============================================================
   RENDER PROJECT CARDS
   ============================================================= */
const projectGrid = document.getElementById('projectGrid');

function renderProjects(filter = 'all'){
  projectGrid.innerHTML = '';
  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  filtered.forEach(p => {
    // make the whole card clickable to open the demo (or fallback to code)
    const card = document.createElement('a');
    card.className = 'project-card reveal-up';
    card.href = p.demoUrl || p.codeUrl || '#';
    card.target = '_blank';
    card.rel = 'noopener';
    card.setAttribute('aria-label', `${p.title} — open demo`);
    card.innerHTML = `
      <div class="project-thumb">
        ${p.title.split(' ')[0]}
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="project-links">
          <span class="project-link" data-href="${p.demoUrl}">
            <span class="icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 3v18l15-9L5 3z"/></svg></span>
            Live Demo
          </span>
          <span class="project-link" data-href="${p.codeUrl}">
            <span class="icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg></span>
            Source Code
          </span>
        </div>
      </div>
    `;
    // attach click handlers for internal links (stop propagation so card click opens demo only)
    projectGrid.appendChild(card);
    card.querySelectorAll('.project-link').forEach(linkEl => {
      linkEl.addEventListener('click', (e) => {
        e.stopPropagation();
        const href = linkEl.dataset.href || '#';
        if (href && href !== '#') window.open(href, '_blank', 'noopener');
      });
    });
  });

  requestAnimationFrame(() => {
    document.querySelectorAll('#projectGrid .reveal-up').forEach(el => el.classList.add('is-visible'));
  });
}
renderProjects();

document.getElementById('filterRow').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProjects(btn.dataset.filter);
});

/* =============================================================
   RENDER CERTIFICATION CARDS
   ============================================================= */
const certGrid = document.getElementById('certGrid');
CERTS.forEach(c => {
  const card = document.createElement('div');
  card.className = 'cert-card reveal-up';
  card.innerHTML = `
    <div class="cert-top">
      <div class="cert-badge">${c.issuer.slice(0,2).toUpperCase()}</div>
      <div>
        <div class="cert-title">${c.title}</div>
        <div class="cert-issuer">${c.issuer}</div>
      </div>
    </div>
    <p class="cert-detail">${c.detail}</p>
    <a class="cert-link" href="${c.link}" target="_blank" rel="noopener">View credential →</a>
  `;
  certGrid.appendChild(card);
});

/* =============================================================
   RENDER EXPERIENCE TIMELINE
   ============================================================= */
const timeline = document.getElementById('timeline');
EXPERIENCE.forEach((job, i) => {
  const entry = document.createElement('div');
  entry.className = 'timeline-entry reveal-up';
  entry.innerHTML = `
    <div class="timeline-node" data-node-index="${i}"></div>
    <div class="timeline-card">
      <div class="timeline-period">${job.period}</div>
      <h3 class="timeline-role">${job.role}</h3>
      <div class="timeline-org">${job.org}</div>
      <p class="timeline-desc">${job.desc}</p>
      <div class="project-tags">${job.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>
  `;
  timeline.appendChild(entry);
});

/* =============================================================
   RENDER ACHIEVEMENTS
   ============================================================= */
const trophyIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4z"/><path d="M7 5H4a1 1 0 0 0-1 1v1a4 4 0 0 0 4 4M17 5h3a1 1 0 0 1 1 1v1a4 4 0 0 1-4 4"/></svg>`;

const featured = ACHIEVEMENTS.find(a => a.featured);
if (featured){
  const spotlight = document.getElementById('achievementSpotlight');
  spotlight.innerHTML = `
    <div class="spotlight-icon">${trophyIcon}</div>
    <div class="spotlight-copy">
      <span class="spotlight-tag">Featured</span>
      <h3 class="spotlight-title">${featured.title}</h3>
      <p class="spotlight-desc">${featured.desc}</p>
      <span class="spotlight-result">${featured.event} · ${featured.result}</span>
    </div>
  `;
}

const achievementGrid = document.getElementById('achievementGrid');
ACHIEVEMENTS.filter(a => !a.featured).forEach(a => {
  const card = document.createElement('div');
  card.className = 'achievement-card reveal-up';
  card.innerHTML = `
    <div class="achievement-icon">${trophyIcon}</div>
    <div class="achievement-result">${a.result}</div>
    <h3 class="achievement-title">${a.title}</h3>
    <div class="achievement-event">${a.event}</div>
    <p class="achievement-desc">${a.desc}</p>
  `;
  achievementGrid.appendChild(card);
});

/* =============================================================
   RENDER SOCIALS
   ============================================================= */
const SOCIAL_ICONS = {
  github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3 -.3 6-1.5 6-6.6a5.1 5.1 0 0 0-1.4-3.5 4.8 4.8 0 0 0-.1-3.5s-1.1-.4-3.6 1.3a12.4 12.4 0 0 0-6.6 0C6.1 1.5 5 2 5 2a4.8 4.8 0 0 0-.1 3.5A5.1 5.1 0 0 0 3.5 9c0 5 3 6.3 6 6.6a3.4 3.4 0 0 0-1 2.6V22"/></svg>`,
  leetcode: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 3l-8 9h6l-2 9 9-11h-6l1-7z"/></svg>`,
  codeforces: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="9" width="5" height="12" rx="1"/><rect x="9.5" y="4" width="5" height="17" rx="1"/><rect x="17" y="12" width="5" height="9" rx="1"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4l16 16M20 4L4 20"/></svg>`,
  devto: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9v6M6 9h2a2 2 0 0 1 0 4H6M13 9v6h3M18 9v6l2-3-2-3"/></svg>`
};

const socialGrid = document.getElementById('socialGrid');
SOCIALS.forEach(s => {
  const card = document.createElement('a');
  card.className = 'social-card reveal-up';
  card.href = s.url;
  card.target = '_blank';
  card.rel = 'noopener';
  card.style.setProperty('--thumb-bg', s.color || 'var(--cyan-soft)');
  const displayUrl = s.url.replace('https://', '');
  card.innerHTML = `
    <div class="social-thumb">
      <span class="social-thumb-url">${displayUrl}</span>
      <div class="social-thumb-glow"></div>
      <div class="social-thumb-icon">${SOCIAL_ICONS[s.icon] || ''}</div>
    </div>
    <div class="social-body">
      <div class="social-body-info">
        <div class="social-platform">${s.platform}</div>
        <div class="social-handle">${s.handle}</div>
      </div>
      <span class="social-stat">${s.stat}</span>
    </div>
  `;
  socialGrid.appendChild(card);
});

  // Dynamic JS-driven marquee (smooth, pause on hover/focus, respects reduced-motion)
  (function initSocialMarquee(){
    const marquee = document.querySelector('.social-marquee');
    const grid = document.getElementById('socialGrid');
    if (!marquee || !grid) return;

    // create an inner track to translate
    let track = marquee.querySelector('.social-track');
    if (!track){
      track = document.createElement('div');
      track.className = 'social-track';
      // move existing cards into track
      while (grid.firstChild) track.appendChild(grid.firstChild);
      grid.appendChild(track);
    }

    // keep a base copy for reflowing on resize/mobile
    if (!track.dataset.base) track.dataset.base = track.innerHTML;

    const mqMobile = window.matchMedia('(max-width: 800px)');
    const mqReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let paused = false;
    let rafId = null;
    let last = performance.now();
    let offset = 0;
    let contentWidth = 0;
    const speed = 40; // px per second

    function buildDuplicate(){
      // on desktop and when motion not reduced, duplicate the base content once for seamless loop
      if (mqMobile.matches || mqReduced.matches) {
        track.innerHTML = track.dataset.base;
        track.dataset.duplicated = 'false';
      } else {
        if (track.dataset.duplicated !== 'true'){
          track.innerHTML = track.dataset.base + track.dataset.base;
          track.dataset.duplicated = 'true';
        }
      }
      // measure
      // allow layout to settle
      requestAnimationFrame(() => {
        contentWidth = track.scrollWidth / (track.dataset.duplicated === 'true' ? 2 : 1);
        // reset offset to avoid jump
        offset = 0;
        track.style.transform = 'translateX(0px)';
      });
    }

    function step(now){
      if (!last) last = now;
      const dt = Math.min(0.05, (now - last) / 1000); // cap dt to avoid big jumps
      last = now;
      if (!paused && !mqMobile.matches && !mqReduced.matches && contentWidth > 0){
        offset += dt * speed;
        if (offset >= contentWidth) offset = offset % contentWidth;
        track.style.transform = `translateX(${-offset}px)`;
      }
      rafId = requestAnimationFrame(step);
    }

    // interactions
    marquee.addEventListener('mouseenter', () => { paused = true; });
    marquee.addEventListener('mouseleave', () => { paused = false; });
    marquee.addEventListener('focusin', () => { paused = true; });
    marquee.addEventListener('focusout', () => { paused = false; });

    // make marquee focusable and accessible
    marquee.tabIndex = 0;
    marquee.setAttribute('role', 'region');
    marquee.setAttribute('aria-label', 'Social profiles marquee');

    // Wheel: allow mouse wheel to scroll horizontally
    marquee.addEventListener('wheel', (ev) => {
      if (mqMobile.matches || mqReduced.matches) return;
      ev.preventDefault();
      const delta = ev.deltaY || ev.deltaX;
      // adjust sensitivity
      offset += delta * 1.2;
      if (contentWidth > 0){
        offset = ((offset % contentWidth) + contentWidth) % contentWidth;
        track.style.transform = `translateX(${-offset}px)`;
      }
      // reset timing so animation stays smooth
      last = performance.now();
    }, { passive: false });

    // Keyboard: left/right arrows to nudge
    marquee.addEventListener('keydown', (ev) => {
      if (mqMobile.matches) return;
      const step = Math.max(40, Math.round((contentWidth || 320) * 0.06));
      if (ev.key === 'ArrowRight'){
        ev.preventDefault();
        offset += step;
        if (contentWidth > 0) offset = offset % contentWidth;
        track.style.transform = `translateX(${-offset}px)`;
        last = performance.now();
      } else if (ev.key === 'ArrowLeft'){
        ev.preventDefault();
        offset -= step;
        if (contentWidth > 0) offset = ((offset % contentWidth) + contentWidth) % contentWidth;
        track.style.transform = `translateX(${-offset}px)`;
        last = performance.now();
      }
    });

    // Pointer dragging for mouse/touchpad dragging
    let isDragging = false, dragStartX = 0, dragStartOffset = 0;
    marquee.addEventListener('pointerdown', (ev) => {
      if (mqMobile.matches) return;
      isDragging = true;
      dragStartX = ev.clientX;
      dragStartOffset = offset;
      marquee.setPointerCapture && marquee.setPointerCapture(ev.pointerId);
      paused = true;
      ev.preventDefault();
    });
    marquee.addEventListener('pointermove', (ev) => {
      if (!isDragging) return;
      const dx = ev.clientX - dragStartX;
      offset = dragStartOffset - dx;
      if (contentWidth > 0) offset = ((offset % contentWidth) + contentWidth) % contentWidth;
      track.style.transform = `translateX(${-offset}px)`;
      last = performance.now();
    });
    marquee.addEventListener('pointerup', (ev) => {
      if (!isDragging) return;
      isDragging = false;
      marquee.releasePointerCapture && marquee.releasePointerCapture(ev.pointerId);
      paused = false;
      last = performance.now();
    });
    marquee.addEventListener('pointercancel', () => { isDragging = false; paused = false; });

    // resize handling
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { buildDuplicate(); }, 120);
    }, { passive: true });

    // reduced-motion listener
    mqReduced.addEventListener('change', () => { buildDuplicate(); });

    // initialize
    buildDuplicate();
    rafId = requestAnimationFrame(step);

    // cleanup if needed on unload
    window.addEventListener('unload', () => { cancelAnimationFrame(rafId); });
  })();

/* =============================================================
   CONTACT FORM (front-end only — wire to Formspree/serverless in production)
   ============================================================= */
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const note = document.getElementById('formNote');
  note.textContent = "Message ready — connect this form to Formspree or your own endpoint to send it.";
  e.target.reset();
});

/* =============================================================
   YEAR + FOOTER METADATA
   ============================================================= */
document.getElementById('year').textContent = new Date().getFullYear();
const versionEl = document.getElementById('version');
const updatedEl = document.getElementById('lastUpdated');
if (versionEl) versionEl.textContent = 'v1.1';
if (updatedEl) updatedEl.textContent = 'July 5, 2026';

/* =============================================================
   SCROLL REVEAL ANIMATIONS (GSAP if available, IO fallback otherwise)
   ============================================================= */
if (window.gsap && window.ScrollTrigger){
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.reveal').forEach((el, i) => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.7, delay: i * 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%' }
    });
  });

  gsap.utils.toArray('.reveal-up').forEach((el) => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%' }
    });
  });

} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal, .reveal-up').forEach(el => io.observe(el));
}

/* =============================================================
   TIMELINE MOVER — travels only from circle to circle
   ============================================================= */
(function initTimelineMover(){
  const mover = document.getElementById('timelineMover');
  const nodes = Array.from(document.querySelectorAll('.timeline-node'));
  if (!mover || !nodes.length) return;

  function nodeOffsetTop(node){
    return node.offsetTop + node.offsetHeight / 2 - mover.offsetHeight / 2;
  }

  // Start parked on the first circle
  mover.style.top = nodeOffsetTop(nodes[0]) + 'px';
  nodes[0].classList.add('is-active');

  const moverObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const node = entry.target;
        mover.style.top = nodeOffsetTop(node) + 'px';
        nodes.forEach(n => n.classList.toggle('is-active', n === node));
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

  nodes.forEach(node => moverObserver.observe(node));

  window.addEventListener('resize', () => {
    const active = nodes.find(n => n.classList.contains('is-active')) || nodes[0];
    mover.style.top = nodeOffsetTop(active) + 'px';
  }, { passive: true });
})();