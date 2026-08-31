
/* =============================================================
   CONTENT DATA — edit these arrays to update your site content
   ============================================================= */
const PROJECTS = [
  {
    title: "TaskFlow — Team Task Manager",
    desc: "Full-stack task board with real-time updates and role-based permissions.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSockets"],
    category: "web",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "PathFinder — Route Visualizer",
    desc: "Interactive visualizer comparing Dijkstra, A*, and BFS pathfinding in the browser.",
    tags: ["TypeScript", "Canvas API"],
    category: "web",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Inventory API",
    desc: "REST API for multi-warehouse inventory tracking with JWT auth and rate limiting.",
    tags: ["Spring Boot", "PostgreSQL", "Docker"],
    category: "backend",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Resume Ranker",
    desc: "NLP tool that scores resumes against a job description and highlights gaps.",
    tags: ["Python", "scikit-learn", "Flask"],
    category: "ai",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Distributed Cache Simulator",
    desc: "Coursework project simulating consistent hashing across a cache cluster.",
    tags: ["C++", "Multithreading"],
    category: "academic",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "MoodBoard — Habit Tracker",
    desc: "Mobile-first habit tracker with streaks, reminders, and local-first storage.",
    tags: ["React Native", "SQLite"],
    category: "web",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Sentiment Analysis Dashboard",
    desc: "Real-time dashboard that classifies incoming product reviews as positive, neutral, or negative.",
    tags: ["Python", "TensorFlow", "Flask", "Chart.js"],
    category: "ai",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "This Portfolio",
    desc: "The site you're looking at right now — built from scratch to be fast, animated, and dependency-light.",
    tags: ["HTML", "CSS", "GSAP"],
    category: "web",
    demoUrl: "#",
    codeUrl: "#"
  }
];

const CERTS = [
  { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", detail: "Core AWS services, pricing, and cloud architecture fundamentals.", link: "#" },
  { title: "Meta Front-End Developer", issuer: "Meta / Coursera", detail: "React, responsive design, and version control workflows.", link: "#" },
  { title: "Data Structures & Algorithms", issuer: "University Coursework", detail: "Complexity analysis, trees, graphs, and dynamic programming.", link: "#" },
  { title: "SQL for Data Analysis", issuer: "Udacity", detail: "Advanced querying, joins, and window functions.", link: "#" },
  { title: "Docker Essentials", issuer: "IBM / Coursera", detail: "Containerization fundamentals and multi-container apps.", link: "#" }
];

const EXPERIENCE = [
  {
    role: "Open Source Contributor",
    org: "Google Summer of Code",
    period: "May 2026 — Aug 2026",
    desc: "Selected as a GSoC contributor, working on performance improvements and new feature modules for an open-source developer tool used by thousands of repos.",
    tags: ["Open Source", "Python", "CI/CD"]
  },
  {
    role: "Software Engineering Intern",
    org: "Local Tech Startup",
    period: "Dec 2025 — Feb 2026",
    desc: "Built and shipped two internal dashboards used by the ops team, cutting manual reporting time by roughly 60%.",
    tags: ["React", "Node.js", "PostgreSQL"]
  },
  {
    role: "Teaching Assistant",
    org: "University CS Department",
    period: "Aug 2025 — Present",
    desc: "Lead weekly lab sessions for a Data Structures & Algorithms course, mentoring 40+ first-year students.",
    tags: ["DSA", "Mentorship"]
  },
  {
    role: "Core Member",
    org: "University Developer Club",
    period: "Aug 2024 — Present",
    desc: "Organize hands-on workshops on Git, web development, and competitive programming for club members.",
    tags: ["Community", "Public Speaking"]
  }
];

const ACHIEVEMENTS = [
  {
    title: "Google Summer of Code Contributor",
    event: "Google Summer of Code 2026",
    result: "Selected Contributor",
    desc: "One of a small number of students selected worldwide to contribute to an open-source organization over a 12-week program.",
    featured: true
  },
  {
    title: "1st Place — University Hackathon",
    event: "HackVerse 2025",
    result: "Winner",
    desc: "Led a 4-person team to build a disaster-relief coordination app in 36 hours, judged best overall project."
  },
  {
    title: "2nd Place — State-Level Hackathon",
    event: "InnovateX 2025",
    result: "Runner-up",
    desc: "Built an AI-assisted resume screening tool among 80+ competing teams."
  },
  {
    title: "Finalist — National Coding Competition",
    event: "CodeClash Nationals",
    result: "Top 10 Finalist",
    desc: "Ranked top 10 nationally out of 2,000+ participants in a timed algorithmic problem-solving contest."
  },
  {
    title: "Best Use of API Award",
    event: "DevSprint Hackathon",
    result: "Special Award",
    desc: "Recognized for creative integration of a public transit API into a real-time commute planner."
  },
  {
    title: "Dean's List",
    event: "University Academic Honors",
    result: "2 Consecutive Semesters",
    desc: "Recognized for maintaining a top-decile GPA while contributing to open source and competitions."
  }
];

const SOCIALS = [
  {
    platform: "GitHub",
    handle: "@riteshshekhar",
    stat: "40+ repos",
    url: "https://github.com/riteshshekhar",
    icon: "github",
    color: "#161B22"
  },
  {
    platform: "LeetCode",
    handle: "riteshshekhar",
    stat: "500+ solved",
    url: "https://leetcode.com/riteshshekhar",
    icon: "leetcode",
    color: "#8B4513"
  },
  {
    platform: "Codeforces",
    handle: "riteshshekhar",
    stat: "Pupil · 1300+",
    url: "https://codeforces.com/profile/riteshshekhar",
    icon: "codeforces",
    color: "#1E3A5F"
  },
  {
    platform: "LinkedIn",
    handle: "riteshshekhar",
    stat: "Let's connect",
    url: "https://linkedin.com/in/riteshshekhar",
    icon: "linkedin",
    color: "#0A4A6E"
  },
  {
    platform: "X / Twitter",
    handle: "@riteshcodes",
    stat: "Build-in-public posts",
    url: "https://x.com/riteshcodes",
    icon: "x",
    color: "#1A1A1A"
  },
  {
    platform: "Dev.to",
    handle: "riteshshekhar",
    stat: "Technical writeups",
    url: "https://dev.to/riteshshekhar",
    icon: "devto",
    color: "#2B2B2B"
  }
];

const RESUME_URL = "#"; // replace with a real link to your resume PDF

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
['resumeBtnNav', 'resumeBtnHero', 'resumeBtnAbout'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.setAttribute('href', RESUME_URL);
});

/* =============================================================
   NAV SCROLL STATE + MOBILE MENU
   ============================================================= */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
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
const trackedSections = document.querySelectorAll('main section[id]');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      const id = entry.target.id;
      navTabLinks.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.section === id);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
trackedSections.forEach(section => sectionObserver.observe(section));

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
  { text: 'const engineer = {', cls: '' },
  { text: '  name: "Ritesh Shekhar",', cls: 'prop' },
  { text: '  university: "Lovely Professional University",', cls: 'prop' },
  { text: '  cgpa: 9.5,', cls: 'prop' },
  { text: '  year: 2,', cls: 'prop' },
  { text: '  leetcode: "500+ solved",', cls: 'prop' },
  { text: '  stack: ["DSA/C++", "MERN", "AI/ML"],', cls: 'prop' },
  { text: '  status: "open to internships & placements",', cls: 'prop' },
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

/* =============================================================
   RENDER PROJECT CARDS
   ============================================================= */
const projectGrid = document.getElementById('projectGrid');
const externalIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg>`;
const codeIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 17l-5-5 5-5M16 7l5 5-5 5"/></svg>`;

function renderProjects(filter = 'all'){
  projectGrid.innerHTML = '';
  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  filtered.forEach(p => {
    const card = document.createElement('article');
    card.className = 'project-card reveal-up';
    card.innerHTML = `
      <div class="project-thumb">
        ${p.title.split(' ')[0]}
        <div class="project-overlay">
          <a class="overlay-link" href="${p.demoUrl}" target="_blank" rel="noopener">
            <span class="overlay-icon">${externalIcon}</span>
            <span class="overlay-label">Live Demo</span>
          </a>
          <a class="overlay-link" href="${p.codeUrl}" target="_blank" rel="noopener">
            <span class="overlay-icon">${codeIcon}</span>
            <span class="overlay-label">Source</span>
          </a>
        </div>
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="project-links">
          <a class="project-link is-primary" href="${p.demoUrl}" target="_blank" rel="noopener">${externalIcon} Live Demo</a>
          <a class="project-link" href="${p.codeUrl}" target="_blank" rel="noopener">${codeIcon} Source Code</a>
        </div>
      </div>
    `;
    projectGrid.appendChild(card);
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
    <div class="cert-inner">
      <div class="cert-face cert-front">
        <div class="cert-badge">${c.issuer.slice(0,2).toUpperCase()}</div>
        <div>
          <div class="cert-title">${c.title}</div>
          <div class="cert-issuer">${c.issuer}</div>
        </div>
      </div>
      <div class="cert-face cert-back">
        <p>${c.detail}</p>
        <a class="cert-link" href="${c.link}" target="_blank" rel="noopener">View credential →</a>
      </div>
    </div>
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
    <div class="timeline-node"></div>
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
   YEAR
   ============================================================= */
document.getElementById('year').textContent = new Date().getFullYear();

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

  const timelineProgress = document.getElementById('timelineProgress');
  if (timelineProgress){
    gsap.fromTo(timelineProgress,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#timeline',
          start: 'top 70%',
          end: 'bottom 75%',
          scrub: 0.6
        }
      }
    );
  }
} else {
  // Fallback when GSAP fails to load: fill the timeline instantly once visible
  const timelineProgressFallback = document.getElementById('timelineProgress');
  if (timelineProgressFallback){
    const tlObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          timelineProgressFallback.style.transform = 'scaleY(1)';
          timelineProgressFallback.style.transition = 'transform 1.2s ease';
          tlObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    tlObserver.observe(document.getElementById('timeline'));
  }
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