// THE ARCH STUDIO - CORE APPLICATION LOGIC

// 1. DEFAULT ROSTER DATA (Preloaded Indian Creatives)
const DEFAULT_CREATIVES = [
  {
    id: "cr-1",
    name: "Aman Sharma",
    role: "Video Editing",
    price: 15000,
    status: "available",
    bio: "Specialist in high-retention YouTube video editing and fast-paced Instagram Reels. Worked with top tech and comedy creators in India.",
    tags: ["Premiere Pro", "Reels", "Humor", "YouTube", "Color Grading"],
    email: "amanedit@gmail.com",
    avatarColor: "#6366f1",
    portfolio: [
      { type: "video", title: "Tech Review Edit (12M+ views)", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60" },
      { type: "video", title: "Cinematic Finance Reel", url: "https://images.unsplash.com/photo-1618005198143-e528346d9a59?w=500&auto=format&fit=crop&q=60" },
      { type: "video", title: "Travel Vlog Retainer Showcase", url: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500&auto=format&fit=crop&q=60" },
      { type: "image", title: "Color Grading Timeline", url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&auto=format&fit=crop&q=60" }
    ],
    pricing: {
      Basic: { price: 6000, desc: "3 Instagram Reels / YouTube Shorts editing (up to 60s, text animations & sounds included)." },
      Standard: { price: 18000, desc: "1 Long-form YouTube Video (up to 12 mins, custom sound design, pacing & graphics)." },
      Premium: { price: 45000, desc: "Monthly Retainer: 4 Long-form YouTube Videos + 8 Reels/Shorts with high priority turnarounds." }
    }
  },
  {
    id: "cr-2",
    name: "Kritika Iyer",
    role: "Scriptwriting",
    price: 12000,
    status: "available",
    bio: "Crafting narratives for finance, deep-dives, and startup case studies. I turn complex data into binge-worthy storytelling.",
    tags: ["FinTech", "Storytelling", "YouTube Script", "Case Studies", "Deep Research"],
    email: "kritikawrites@gmail.com",
    avatarColor: "#ec4899",
    portfolio: [
      { type: "image", title: "Indian Startup Breakdown (Script)", url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60" },
      { type: "image", title: "Crypto Demystified Documentary", url: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500&auto=format&fit=crop&q=60" },
      { type: "image", title: "Personal Finance Hook Strategies", url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&auto=format&fit=crop&q=60" }
    ],
    pricing: {
      Basic: { price: 4000, desc: "1 Video Script (up to 5 mins) detailing the research outline and hook strategy." },
      Standard: { price: 12000, desc: "3 Long-form YouTube Scripts (up to 15 mins each) fully researched, with retention notes." },
      Premium: { price: 30000, desc: "Monthly Scripting Partner: 8 deep-dive YouTube Scripts + 10 Hook structures for Reels/Shorts." }
    }
  },
  {
    id: "cr-3",
    name: "Rohan Das",
    role: "Thumbnail Design",
    price: 8000,
    status: "available",
    bio: "High CTR thumbnail artist. I analyze your niche's competition to design click-worthy Photoshop assets with 3D elements.",
    tags: ["Photoshop", "Gaming", "CTR Optimization", "3D Manipulation", "Infographics"],
    email: "rohanthumbnails@gmail.com",
    avatarColor: "#10b981",
    portfolio: [
      { type: "image", title: "Tech Review Thumbnail Mockup", url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&auto=format&fit=crop&q=60" },
      { type: "image", title: "Gaming Challenge Banner", url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60" },
      { type: "image", title: "Case Study Dynamic Graphic", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60" },
      { type: "image", title: "Vlog Stylized Thumbnail", url: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500&auto=format&fit=crop&q=60" }
    ],
    pricing: {
      Basic: { price: 3000, desc: "3 Photoshop thumbnails (JPG/PNG format, 1 revision each, standard delivery)." },
      Standard: { price: 8000, desc: "10 high-CTR thumbnails (Photoshop sources included, unlimited font choices, A/B variations)." },
      Premium: { price: 18000, desc: "Monthly Retention: Unlimited thumbnails (up to 25/mo) for single-channel creators, 4h turnaround." }
    }
  },
  {
    id: "cr-4",
    name: "Sameer Khan",
    role: "VFX & Animation",
    price: 25000,
    status: "busy",
    bio: "3D Motion Designer and CGI generalist. Animating intro videos, kinetic text systems, and product render advertisements.",
    tags: ["After Effects", "3D Motion", "Blender", "CGI Ads", "Intros"],
    email: "sameervfx@gmail.com",
    avatarColor: "#f59e0b",
    portfolio: [
      { type: "video", title: "3D Tech Product Reveal CGI", url: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=500&auto=format&fit=crop&q=60" },
      { type: "video", title: "Kinetic Typography Brand Reel", url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=60" },
      { type: "video", title: "SaaS Animated Explainers", url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60" }
    ],
    pricing: {
      Basic: { price: 10000, desc: "Sleek 5-second 2D/3D channel intro animation or standard logo reveal." },
      Standard: { price: 28000, desc: "60-second SaaS product animated video or cinematic kinetic kinetic text trailer." },
      Premium: { price: 65000, desc: "Complex 3D commercial sequence (30s length, full product asset modelling, rendering & audio track)." }
    }
  },
  {
    id: "cr-5",
    name: "Priya Patel",
    role: "Graphic Design",
    price: 10000,
    status: "available",
    bio: "Instagram visual strategist. I design brand identity structures, aesthetic carousel templates, and custom channel arts.",
    tags: ["Figma", "Illustrator", "Brand Identity", "Carousels", "Channel Art"],
    email: "priyadesigns@gmail.com",
    avatarColor: "#8b5cf6",
    portfolio: [
      { type: "image", title: "Fintech Startup Branding Guide", url: "https://images.unsplash.com/photo-1626785774625-ddc7c8241314?w=500&auto=format&fit=crop&q=60" },
      { type: "image", title: "Instagram Carousel Grid Post", url: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=60" },
      { type: "image", title: "Minimalist YouTube Banner Setup", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60" }
    ],
    pricing: {
      Basic: { price: 4000, desc: "YouTube Channel Art (Banner + Profile Avatar + Watermark graphic)." },
      Standard: { price: 10000, desc: "Full Branding Guidelines: Color palettes, typography selectors, and 5 editable Figma template systems." },
      Premium: { price: 24000, desc: "Monthly Design Retainer: 15 Carousel decks, story templates, banners, and thumbnail assets." }
    }
  },
  {
    id: "cr-6",
    name: "Kabir Mehta",
    role: "Video Editing",
    price: 20000,
    status: "available",
    bio: "Cinematic editor specialize in tech showcases and documentary formats. Advanced DaVinci Resolve colorist.",
    tags: ["DaVinci Resolve", "Tech Reviews", "Documentary", "Cinematic", "Colorist"],
    email: "kabirmedits@gmail.com",
    avatarColor: "#ef4444",
    portfolio: [
      { type: "video", title: "Cinematic Smartphone Launch", url: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&auto=format&fit=crop&q=60" },
      { type: "video", title: "Mini-Documentary: Clean Energy", url: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&auto=format&fit=crop&q=60" },
      { type: "image", title: "Grading Node Trees Showcase", url: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=500&auto=format&fit=crop&q=60" }
    ],
    pricing: {
      Basic: { price: 8000, desc: "Pro grade Color Correction & Grading for finished videos up to 10 mins." },
      Standard: { price: 22000, desc: "Full edit of 1 Tech Review / Vlog style video (up to 15 mins) with clean audio & titles." },
      Premium: { price: 50000, desc: "1 Cinematic Mini-Doc / Advertisement edit (sound synthesis, advanced grading, premium music included)." }
    }
  }
];

// 2. MOCK INITIAL DATABASE IN LOCALSTORAGE
let creatives = JSON.parse(localStorage.getItem("arch_creatives"));
if (!creatives || creatives.length === 0) {
  creatives = DEFAULT_CREATIVES;
  localStorage.setItem("arch_creatives", JSON.stringify(creatives));
}

let inquiries = JSON.parse(localStorage.getItem("arch_inquiries")) || [];

// 3. APPLICATION STATE
const state = {
  activeView: "explore", // 'explore' or 'dashboard'
  activeDashboardMode: "creator", // 'creator' or 'creative'
  activeDashboardPane: "creator-projects", // matches the sidebar buttons
  activeCategory: "all",
  searchQuery: "",
  sortBy: "default",
  activeProfileId: null,
  onboardingStep: 1
};

// 4. UI ELEMENT CACHING
const UI = {
  // Views
  exploreView: document.getElementById("explore-view"),
  dashboardView: document.getElementById("dashboard-view"),
  
  // Navigation Links
  navBrowseLink: document.getElementById("nav-browse-link"),
  navDashLink: document.getElementById("nav-dash-link"),
  navLogo: document.getElementById("nav-logo-link"),
  navApplyBtn: document.getElementById("nav-apply-btn"),
  
  // Roster
  profilesGrid: document.getElementById("profiles-grid"),
  searchBar: document.getElementById("search-bar"),
  filtersContainer: document.getElementById("filters-container"),
  sortSelect: document.getElementById("sort-select"),
  creativesCountStat: document.getElementById("stat-creatives-count"),
  hiredCountStat: document.getElementById("stat-hired-count"),
  
  // Profile Detail Modal
  profileModalOverlay: document.getElementById("profile-modal-overlay"),
  profileModalClose: document.getElementById("profile-modal-close"),
  modalProfileHeader: document.getElementById("modal-profile-header"),
  modalPortfolioGrid: document.getElementById("modal-portfolio-grid"),
  modalPricingGrid: document.getElementById("modal-pricing-grid"),
  modalHireForm: document.getElementById("modal-hire-inquiry-form"),
  hireTargetName: document.getElementById("hire-target-name"),
  
  // Dashboard Workspace
  dashAccountToggle: document.getElementById("dash-account-toggle"),
  creatorSidebarGroup: document.getElementById("creator-sidebar-group"),
  creativeSidebarGroup: document.getElementById("creative-sidebar-group"),
  creatorInquiriesList: document.getElementById("creator-inquiries-list"),
  creativeLeadsList: document.getElementById("creative-leads-list"),
  dashCreatorInquiryForm: document.getElementById("dash-creator-inquiry-form"),
  dashInquiryCreativeSelect: document.getElementById("dash-inquiry-creative-select"),
  creativeProfileEditForm: document.getElementById("creative-profile-edit-form"),
  dashboardSubtitle: document.getElementById("dashboard-subtitle"),
  
  // Dashboard Stats
  creatorStatActive: document.getElementById("creator-stat-active"),
  creatorStatCompleted: document.getElementById("creator-stat-completed"),
  creatorStatBudget: document.getElementById("creator-stat-budget"),
  creativeStatNew: document.getElementById("creative-stat-new"),
  creativeStatActiveProjects: document.getElementById("creative-stat-active-projects"),
  creativeStatRevenue: document.getElementById("creative-stat-revenue"),

  // Onboarding Modal
  onboardingModalOverlay: document.getElementById("onboarding-modal-overlay"),
  onboardingModalClose: document.getElementById("onboarding-modal-close"),
  onboardingForm: document.getElementById("onboarding-form"),
  applyCreativeBannerBtn: document.getElementById("apply-creative-banner-btn"),
  applyCreatorBannerBtn: document.getElementById("apply-creator-banner-btn"),
  
  // Toast notifications
  toastContainer: document.getElementById("toast-container")
};

// 5. TOAST NOTIFICATION UTILITY
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let icon = '<i class="fa-solid fa-circle-check"></i>';
  if (type === "error") {
    icon = '<i class="fa-solid fa-circle-exclamation"></i>';
  }
  
  toast.innerHTML = `${icon} <span>${message}</span>`;
  UI.toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = "slideInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) reverse forwards";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

// 6. INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  renderRoster();
  updateStatsCounters();
  setupNavigationEvents();
  setupFilterEvents();
  setupProfileModalEvents();
  setupOnboardingEvents();
  setupDashboardEvents();
});

// 7. ROSTER RENDERING & FILTERING
function renderRoster() {
  UI.profilesGrid.innerHTML = "";
  
  // Apply Search & Category filters
  let filtered = creatives.filter(item => {
    const matchesCategory = state.activeCategory === "all" || item.role === state.activeCategory;
    
    const query = state.searchQuery.toLowerCase();
    const matchesSearch = item.name.toLowerCase().includes(query) || 
                          item.role.toLowerCase().includes(query) || 
                          item.bio.toLowerCase().includes(query) ||
                          item.tags.some(tag => tag.toLowerCase().includes(query));
                          
    return matchesCategory && matchesSearch;
  });
  
  // Apply Sorting
  if (state.sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  }
  
  if (filtered.length === 0) {
    UI.profilesGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-title">No matching talent found</div>
        <div class="empty-desc">Try resetting your filters or search tags.</div>
      </div>
    `;
    return;
  }
  
  filtered.forEach(creative => {
    const card = document.createElement("div");
    card.className = "profile-card";
    card.setAttribute("data-id", creative.id);
    
    // First letter avatar placeholder if no image
    const initial = creative.name.charAt(0);
    const color = creative.avatarColor || "#6366f1";
    
    card.innerHTML = `
      <div class="card-top">
        <div class="avatar" style="background-color: ${color}">
          <span>${initial}</span>
        </div>
        <div class="card-identity">
          <span class="card-name">${creative.name}</span>
          <span class="card-role">${creative.role}</span>
        </div>
      </div>
      <p class="card-bio">${creative.bio}</p>
      <div class="card-tags">
        ${creative.tags.slice(0, 3).map(tag => `<span class="tag">#${tag}</span>`).join("")}
      </div>
      <div class="card-footer">
        <div class="avail-dot">
          <span class="dot ${creative.status === "busy" ? "busy" : ""}"></span>
          <span>${creative.status === "busy" ? "Busy" : "Available"}</span>
        </div>
        <div class="card-price">
          Starting from <span>₹${creative.price.toLocaleString("en-IN")}</span>
        </div>
      </div>
    `;
    
    card.addEventListener("click", () => openProfileModal(creative.id));
    UI.profilesGrid.appendChild(card);
  });
}

function updateStatsCounters() {
  UI.creativesCountStat.innerText = creatives.length + "+";
  // Filter inquiries marked as completed/hired
  const collabsCount = inquiries.filter(i => i.status === "hired").length + 28; // add mock seed collabs
  UI.hiredCountStat.innerText = collabsCount;
}

// 8. NAVIGATION STATE EVENTS
function setupNavigationEvents() {
  // Navigation Switch
  UI.navBrowseLink.addEventListener("click", (e) => {
    e.preventDefault();
    switchView("explore");
  });
  
  UI.navDashLink.addEventListener("click", (e) => {
    e.preventDefault();
    switchView("dashboard");
  });
  
  UI.navLogo.addEventListener("click", (e) => {
    e.preventDefault();
    switchView("explore");
  });


}

function switchView(viewName) {
  state.activeView = viewName;
  
  // Manage links
  UI.navBrowseLink.classList.remove("active");
  UI.navDashLink.classList.remove("active");
  
  UI.exploreView.classList.remove("active");
  UI.dashboardView.classList.remove("active");
  
  if (viewName === "explore") {
    UI.navBrowseLink.classList.add("active");
    UI.exploreView.classList.add("active");
    renderRoster();
  } else {
    UI.navDashLink.classList.add("active");
    UI.dashboardView.classList.add("active");
    updateDashboardUI();
  }
}

// 9. FILTER & SEARCH HANDLERS
function setupFilterEvents() {
  // Search bar input logic
  UI.searchBar.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderRoster();
  });
  
  // Category Pill Filter Buttons
  UI.filtersContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    
    // Manage filter active button
    UI.filtersContainer.querySelectorAll(".filter-btn").forEach(el => el.classList.remove("active"));
    btn.classList.add("active");
    
    state.activeCategory = btn.getAttribute("data-category");
    renderRoster();
  });
  
  // Sort Dropdown
  UI.sortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderRoster();
  });
}

// 10. DETAILED PROFILE VIEW MODAL & COLLAB INQUIRIES
function setupProfileModalEvents() {
  UI.profileModalClose.addEventListener("click", closeProfileModal);
  
  // Overlay click to close
  UI.profileModalOverlay.addEventListener("click", (e) => {
    if (e.target === UI.profileModalOverlay) closeProfileModal();
  });
  
  // Modal Tab Switching
  const tabButtons = UI.profileModalOverlay.querySelectorAll(".modal-tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(el => el.classList.remove("active"));
      btn.classList.add("active");
      
      const tabId = btn.getAttribute("data-tab");
      UI.profileModalOverlay.querySelectorAll(".modal-tab-pane").forEach(pane => pane.classList.remove("active"));
      document.getElementById(tabId).classList.add("active");
    });
  });
  
  // Modal Inquiry Form Submit
  UI.modalHireForm.addEventListener("submit", (e) => {
    e.preventDefault();
    submitCollabInquiry();
  });
}

function openProfileModal(id) {
  const creative = creatives.find(item => item.id === id);
  if (!creative) return;
  
  state.activeProfileId = id;
  
  // Reset tabs to Showcase first
  UI.profileModalOverlay.querySelectorAll(".modal-tab-btn").forEach(btn => btn.classList.remove("active"));
  UI.profileModalOverlay.querySelector('[data-tab="portfolio-tab"]').classList.add("active");
  UI.profileModalOverlay.querySelectorAll(".modal-tab-pane").forEach(pane => pane.classList.remove("active"));
  document.getElementById("portfolio-tab").classList.add("active");
  
  // Render Modal Header Profile
  const initial = creative.name.charAt(0);
  const color = creative.avatarColor || "#6366f1";
  UI.modalProfileHeader.innerHTML = `
    <div class="modal-avatar" style="background-color: ${color}">
      <span>${initial}</span>
    </div>
    <div class="modal-title-info">
      <div class="modal-name">${creative.name}</div>
      <div class="modal-role">${creative.role}</div>
      <div class="modal-meta-row">
        <div class="modal-meta-item">
          <span class="dot ${creative.status === "busy" ? "busy" : ""}"></span>
          <span>${creative.status === "busy" ? "Fully Booked" : "Accepting Inquiries"}</span>
        </div>
        <div class="modal-meta-item">
          <i class="fa-solid fa-wallet"></i>
          <span>Starts at ₹${creative.price.toLocaleString("en-IN")}/mo</span>
        </div>
      </div>
    </div>
  `;
  
  // Render Portfolio Showcase
  UI.modalPortfolioGrid.innerHTML = "";
  if (creative.portfolio && creative.portfolio.length > 0) {
    creative.portfolio.forEach(item => {
      const itemEl = document.createElement("div");
      itemEl.className = "portfolio-item";
      
      const isVideo = item.type === "video";
      itemEl.innerHTML = `
        <img src="${item.url}" alt="${item.title}"/>
        <div class="portfolio-overlay">
          <div class="${isVideo ? 'play-btn-circle' : 'play-btn-circle'}" style="${!isVideo ? 'border-radius:6px;width:auto;padding:6px 12px;' : ''}">
            ${isVideo ? '<i class="fa-solid fa-play"></i>' : '<i class="fa-solid fa-eye"></i> View'}
          </div>
        </div>
      `;
      UI.modalPortfolioGrid.appendChild(itemEl);
    });
  } else {
    UI.modalPortfolioGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-title">No public showcases uploaded</div>
        <div class="empty-desc">Creative hasn't uploaded recent project logs.</div>
      </div>
    `;
  }
  
  // Render Pricing Packages
  UI.modalPricingGrid.innerHTML = "";
  const pricing = creative.pricing || {
    Basic: { price: creative.price, desc: "Standard entry level design/edit service scope." },
    Standard: { price: Math.round(creative.price * 2.2), desc: "Comprehensive production deliverables." },
    Premium: { price: Math.round(creative.price * 4.5), desc: "Monthly retainers, prioritized review, and source files." }
  };
  
  Object.keys(pricing).forEach(tier => {
    const plan = pricing[tier];
    const planCard = document.createElement("div");
    planCard.className = `pricing-card ${tier === "Standard" ? "popular" : ""}`;
    
    planCard.innerHTML = `
      ${tier === "Standard" ? '<span class="pricing-badge">Popular</span>' : ""}
      <div class="plan-name">${tier} Package</div>
      <div class="plan-price">₹${plan.price.toLocaleString("en-IN")}</div>
      <p class="plan-desc">${plan.desc}</p>
      <div class="plan-delivery">Standard Delivery</div>
    `;
    UI.modalPricingGrid.appendChild(planCard);
  });
  
  // Bind Target Select & Onboarding Form Details
  UI.hireTargetName.innerText = creative.name;
  
  // Pre-fill target creative options
  UI.modalHireForm.reset();
  
  // Show Modal
  UI.profileModalOverlay.classList.add("open");
}

function closeProfileModal() {
  UI.profileModalOverlay.classList.remove("open");
  state.activeProfileId = null;
}

function submitCollabInquiry() {
  const creative = creatives.find(item => item.id === state.activeProfileId);
  if (!creative) return;
  
  const brandName = document.getElementById("inquiry-brand-name").value;
  const email = document.getElementById("inquiry-email").value;
  const tier = document.getElementById("inquiry-plan-tier").value;
  const deadline = document.getElementById("inquiry-deadline").value;
  const details = document.getElementById("inquiry-details").value;
  
  // Estimate budget based on plan tier
  let budget = creative.price;
  if (tier === "Standard") budget = Math.round(creative.price * 2.2);
  else if (tier === "Premium") budget = Math.round(creative.price * 4.5);
  else if (tier === "Custom") budget = Math.round(creative.price * 3);
  
  const inquiry = {
    id: "inq-" + Date.now(),
    creativeId: creative.id,
    creativeName: creative.name,
    creativeRole: creative.role,
    clientName: brandName,
    clientEmail: email,
    tier: tier,
    deadline: deadline,
    details: details,
    budget: budget,
    status: "pending",
    date: new Date().toLocaleDateString("en-IN", { day: 'numeric', month: 'short', year: 'numeric' })
  };
  
  inquiries.push(inquiry);
  localStorage.setItem("arch_inquiries", JSON.stringify(inquiries));
  
  showToast(`Inquiry sent to ${creative.name} successfully!`, "success");
  closeProfileModal();
  updateStatsCounters();
}

// 11. MULTI-STEP CREATIVE ONBOARDING FORM
function setupOnboardingEvents() {
  UI.onboardingModalClose.addEventListener("click", closeOnboardingModal);
  
  UI.onboardingModalOverlay.addEventListener("click", (e) => {
    if (e.target === UI.onboardingModalOverlay) closeOnboardingModal();
  });
  
  // Next Step 1 Button
  document.getElementById("btn-onboard-next-1").addEventListener("click", () => {
    if (validateStepFields(1)) {
      switchOnboardingStep(2);
    }
  });
  
  // Next Step 2 Button
  document.getElementById("btn-onboard-next-2").addEventListener("click", () => {
    if (validateStepFields(2)) {
      switchOnboardingStep(3);
    }
  });
  
  // Back Steps
  document.getElementById("btn-onboard-prev-2").addEventListener("click", () => switchOnboardingStep(1));
  document.getElementById("btn-onboard-prev-3").addEventListener("click", () => switchOnboardingStep(2));
  
  // Submit Form
  UI.onboardingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    submitOnboardingForm();
  });
  
  // Banner buttons triggers onboarding

  UI.applyCreatorBannerBtn.addEventListener("click", () => {
    // Creator workspace sign up simply redirects to client dashboard
    showToast("Workspace Account created! Welcome to your collabs board.", "success");
    switchView("dashboard");
    UI.dashAccountToggle.value = "creator";
    state.activeDashboardMode = "creator";
    updateDashboardUI();
  });
}

function openOnboardingModal() {
  UI.onboardingForm.reset();
  switchOnboardingStep(1);
  UI.onboardingModalOverlay.classList.add("open");
}

function closeOnboardingModal() {
  UI.onboardingModalOverlay.classList.remove("open");
}

function switchOnboardingStep(step) {
  state.onboardingStep = step;
  
  // Manage form pages visibility
  UI.onboardingForm.querySelectorAll(".form-step").forEach(el => el.classList.remove("active"));
  document.getElementById(`onboard-step-${step}`).classList.add("active");
  
  // Manage indicators
  for (let i = 1; i <= 3; i++) {
    const dot = document.getElementById(`onboard-dot-${i}`);
    if (i <= step) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  }
}

function validateStepFields(step) {
  const fields = document.getElementById(`onboard-step-${step}`).querySelectorAll("[required]");
  let valid = true;
  fields.forEach(field => {
    if (!field.value || !field.checkValidity()) {
      field.style.borderColor = "var(--danger)";
      valid = false;
    } else {
      field.style.borderColor = "var(--gray-200)";
    }
  });
  if (!valid) {
    showToast("Please fill out all required fields correctly.", "error");
  }
  return valid;
}

function submitOnboardingForm() {
  const name = document.getElementById("onboard-name").value;
  const role = document.getElementById("onboard-role").value;
  const email = document.getElementById("onboard-email").value;
  const bio = document.getElementById("onboard-bio").value;
  const price = parseInt(document.getElementById("onboard-price").value) || 10000;
  const tagsStr = document.getElementById("onboard-tags").value;
  const portfolioUrl = document.getElementById("onboard-portfolio-url").value;
  
  // Price Tiers
  const basicPrice = parseInt(document.getElementById("onboard-basic-price").value) || price;
  const basicDesc = document.getElementById("onboard-basic-desc").value || "Basic Plan Deliverables";
  const standardPrice = parseInt(document.getElementById("onboard-standard-price").value) || Math.round(price * 2.2);
  const standardDesc = document.getElementById("onboard-standard-desc").value || "Standard Plan Deliverables";
  const premiumPrice = parseInt(document.getElementById("onboard-premium-price").value) || Math.round(price * 4.5);
  const premiumDesc = document.getElementById("onboard-premium-desc").value || "Premium Plan Deliverables";
  
  // Parse tags
  const tags = tagsStr.split(",").map(t => t.trim()).filter(t => t.length > 0);
  
  // Random avatar color for identity representation
  const colors = ["#6366f1", "#ec4899", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444", "#06b6d4"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  const newCreative = {
    id: "cr-" + Date.now(),
    name: name,
    role: role,
    price: price,
    status: "available",
    bio: bio,
    tags: tags.length > 0 ? tags : ["Freelance", "Creator"],
    email: email,
    avatarColor: randomColor,
    portfolio: [
      { type: "image", title: "Creative Showcase Piece", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60" }
    ],
    pricing: {
      Basic: { price: basicPrice, desc: basicDesc },
      Standard: { price: standardPrice, desc: standardDesc },
      Premium: { price: premiumPrice, desc: premiumDesc }
    }
  };
  
  creatives.push(newCreative);
  localStorage.setItem("arch_creatives", JSON.stringify(creatives));
  
  showToast(`Congratulations ${name}! You are now on the creative roster!`, "success");
  closeOnboardingModal();
  updateStatsCounters();
  renderRoster();
}

// 12. DUAL-WORKSPACE DASHBOARDS SYSTEM
function setupDashboardEvents() {
  // Selector for switching workspaces (Hiring Creator vs Hired Creative)
  UI.dashAccountToggle.addEventListener("change", (e) => {
    state.activeDashboardMode = e.target.value;
    
    // Manage sidebar panels toggle
    if (state.activeDashboardMode === "creator") {
      UI.creatorSidebarGroup.style.display = "flex";
      UI.creativeSidebarGroup.style.display = "none";
      state.activeDashboardPane = "creator-projects";
    } else {
      UI.creatorSidebarGroup.style.display = "none";
      UI.creativeSidebarGroup.style.display = "flex";
      state.activeDashboardPane = "creative-leads";
    }
    
    // Reset active dashboard items states
    UI.dashboardView.querySelectorAll(".dash-menu-item").forEach(btn => {
      btn.classList.remove("active");
      if (btn.getAttribute("data-pane") === state.activeDashboardPane) {
        btn.classList.add("active");
      }
    });
    
    updateDashboardUI();
  });
  
  // Dashboard Sidebar Tabs Toggles
  UI.dashboardView.querySelectorAll(".dash-menu-item").forEach(btn => {
    btn.addEventListener("click", () => {
      UI.dashboardView.querySelectorAll(".dash-menu-item").forEach(el => el.classList.remove("active"));
      btn.classList.add("active");
      
      state.activeDashboardPane = btn.getAttribute("data-pane");
      updateDashboardUI();
    });
  });
  
  // Creator Workspace New Inquiry submission handler
  UI.dashCreatorInquiryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    submitCreatorWorkspaceInquiry();
  });
  
  // Creative Profile Form submit handler
  UI.creativeProfileEditForm.addEventListener("submit", (e) => {
    e.preventDefault();
    saveCreativeProfileEdit();
  });
}

function updateDashboardUI() {
  // Hide all content panes
  UI.dashboardView.querySelectorAll(".dashboard-content-pane").forEach(pane => pane.classList.remove("active"));
  
  // Show active pane
  const activePaneEl = document.getElementById(`pane-${state.activeDashboardPane}`);
  if (activePaneEl) activePaneEl.classList.add("active");
  
  // Populate specific pane layouts
  if (state.activeDashboardMode === "creator") {
    UI.dashboardSubtitle.innerText = "Hiring workspace. Issue contracts, monitor progress, and contact artists.";
    
    if (state.activeDashboardPane === "creator-projects") {
      renderCreatorInquiries();
    } else if (state.activeDashboardPane === "creator-post") {
      populateCreatorSelectDropdown();
    }
  } else {
    UI.dashboardSubtitle.innerText = "Hired network workspace. Manage incoming lead flows, review pricing tiers, and configure roster info.";
    
    if (state.activeDashboardPane === "creative-leads") {
      renderCreativeLeads();
    } else if (state.activeDashboardPane === "creative-profile") {
      populateProfileEditForm();
    }
  }
}

// CREATOR: Render Inquiries list
function renderCreatorInquiries() {
  UI.creatorInquiriesList.innerHTML = "";
  
  // Filter inquiries (client side mock is static filter)
  if (inquiries.length === 0) {
    UI.creatorInquiriesList.innerHTML = `
      <div class="empty-state">
        <div class="empty-title">No sent inquiries found</div>
        <div class="empty-desc">Go browse creatives, choose a tier, and send them a proposal.</div>
      </div>
    `;
    
    UI.creatorStatActive.innerText = "0";
    UI.creatorStatCompleted.innerText = "0";
    UI.creatorStatBudget.innerText = "₹0";
    return;
  }
  
  let activeCount = 0;
  let completedCount = 0;
  let totalBudget = 0;
  
  inquiries.forEach(inq => {
    if (inq.status === "hired") completedCount++;
    else if (inq.status !== "rejected") activeCount++;
    
    if (inq.status === "hired" || inq.status === "contacted" || inq.status === "pending") {
      totalBudget += inq.budget;
    }
    
    const card = document.createElement("div");
    card.className = "list-item-card";
    
    // Status text formatter
    let statusClass = "pending";
    if (inq.status === "contacted") statusClass = "contacted";
    else if (inq.status === "hired") statusClass = "hired";
    else if (inq.status === "rejected") statusClass = "rejected";
    
    card.innerHTML = `
      <div class="list-item-header">
        <div>
          <span class="list-item-title">${inq.creativeName}</span>
          <span class="list-item-subtitle">&middot; ${inq.creativeRole}</span>
        </div>
        <span class="badge-status ${statusClass}">${inq.status}</span>
      </div>
      <p class="list-item-body">
        <strong>Inquiry Details:</strong> ${inq.details}
      </p>
      <div class="list-item-details">
        <span class="list-item-detail"><i class="fa-solid fa-cubes"></i> Tier: ${inq.tier}</span>
        <span class="list-item-detail"><i class="fa-solid fa-indian-rupee-sign"></i> Budget: ₹${inq.budget.toLocaleString("en-IN")}</span>
        <span class="list-item-detail"><i class="fa-solid fa-calendar-day"></i> Deadline: ${inq.deadline}</span>
        <span class="list-item-detail"><i class="fa-solid fa-clock"></i> Date Sent: ${inq.date}</span>
      </div>
      <div class="list-item-actions">
        ${inq.status === "contacted" ? `<button class="btn-small primary" onclick="markInquiryHired('${inq.id}')"><i class="fa-solid fa-check"></i> Complete & Hire</button>` : ""}
        <button class="btn-small outline" onclick="cancelInquiry('${inq.id}')">Cancel Inquiry</button>
      </div>
    `;
    UI.creatorInquiriesList.appendChild(card);
  });
  
  UI.creatorStatActive.innerText = activeCount;
  UI.creatorStatCompleted.innerText = completedCount;
  UI.creatorStatBudget.innerText = `₹${totalBudget.toLocaleString("en-IN")}`;
}

// Mark inquiry as Hired (Creator action)
window.markInquiryHired = function(id) {
  const inq = inquiries.find(i => i.id === id);
  if (inq) {
    inq.status = "hired";
    localStorage.setItem("arch_inquiries", JSON.stringify(inquiries));
    showToast(`Hiring contract initialized for ${inq.creativeName}!`, "success");
    updateDashboardUI();
    updateStatsCounters();
  }
};

// Cancel inquiry (Creator action)
window.cancelInquiry = function(id) {
  inquiries = inquiries.filter(i => i.id !== id);
  localStorage.setItem("arch_inquiries", JSON.stringify(inquiries));
  showToast("Project inquiry successfully cancelled.", "info");
  updateDashboardUI();
  updateStatsCounters();
};

// Populate the select dropdown with creatives roster
function populateCreatorSelectDropdown() {
  UI.dashInquiryCreativeSelect.innerHTML = "";
  creatives.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.id;
    opt.innerText = `${c.name} (${c.role} &middot; Starting from ₹${c.price})`;
    UI.dashInquiryCreativeSelect.appendChild(opt);
  });
}

// Submit inquiry inside Creator workspace pane
function submitCreatorWorkspaceInquiry() {
  const cId = UI.dashInquiryCreativeSelect.value;
  const creative = creatives.find(c => c.id === cId);
  if (!creative) return;
  
  const clientName = document.getElementById("dash-inquiry-client-name").value;
  const clientEmail = document.getElementById("dash-inquiry-client-email").value;
  const tier = document.getElementById("dash-inquiry-tier").value;
  const deadline = document.getElementById("dash-inquiry-deadline").value;
  const details = document.getElementById("dash-inquiry-details").value;
  
  // Budget
  let budget = creative.price;
  if (tier === "Standard") budget = Math.round(creative.price * 2.2);
  else if (tier === "Premium") budget = Math.round(creative.price * 4.5);
  else if (tier === "Custom") budget = Math.round(creative.price * 3);
  
  const newInq = {
    id: "inq-" + Date.now(),
    creativeId: creative.id,
    creativeName: creative.name,
    creativeRole: creative.role,
    clientName: clientName,
    clientEmail: clientEmail,
    tier: tier,
    deadline: deadline,
    details: details,
    budget: budget,
    status: "pending",
    date: new Date().toLocaleDateString("en-IN", { day: 'numeric', month: 'short', year: 'numeric' })
  };
  
  inquiries.push(newInq);
  localStorage.setItem("arch_inquiries", JSON.stringify(inquiries));
  
  showToast("Inquiry sent to Creative!", "success");
  UI.dashCreatorInquiryForm.reset();
  
  // Switch back to sent list
  state.activeDashboardPane = "creator-projects";
  // Reset navigation tabs states
  UI.dashboardView.querySelectorAll(".dash-menu-item").forEach(btn => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-pane") === "creator-projects") btn.classList.add("active");
  });
  
  updateDashboardUI();
  updateStatsCounters();
}

// CREATIVE: Render Leads list
function renderCreativeLeads() {
  UI.creativeLeadsList.innerHTML = "";
  
  // Use first creative in the roster as the 'active creative identity' for mock simplicity
  const myCreativeProfile = creatives[0]; 
  
  // Filter inquiries targeted to our active creative
  const myLeads = inquiries.filter(i => i.creativeId === myCreativeProfile.id);
  
  if (myLeads.length === 0) {
    UI.creativeLeadsList.innerHTML = `
      <div class="empty-state">
        <div class="empty-title">No inquiries received yet</div>
        <div class="empty-desc">When creators request your packages, it will populate in this view.</div>
      </div>
    `;
    UI.creativeStatNew.innerText = "0";
    UI.creativeStatActive-projects.innerText = "0"; // Wait, dashboard key has dashes? Handled below safely
    document.getElementById("creative-stat-active-projects").innerText = "0";
    UI.creativeStatRevenue.innerText = "₹0";
    return;
  }
  
  let newLeads = 0;
  let activeProjects = 0;
  let projectedIncome = 0;
  
  myLeads.forEach(lead => {
    if (lead.status === "pending") newLeads++;
    if (lead.status === "hired" || lead.status === "contacted") activeProjects++;
    if (lead.status !== "rejected") projectedIncome += lead.budget;
    
    const card = document.createElement("div");
    card.className = "list-item-card";
    
    let statusClass = "pending";
    if (lead.status === "contacted") statusClass = "contacted";
    else if (lead.status === "hired") statusClass = "hired";
    else if (lead.status === "rejected") statusClass = "rejected";
    
    card.innerHTML = `
      <div class="list-item-header">
        <div>
          <span class="list-item-title">Lead from: ${lead.clientName}</span>
          <span class="list-item-subtitle">&middot; Contact: ${lead.clientEmail}</span>
        </div>
        <span class="badge-status ${statusClass}">${lead.status}</span>
      </div>
      <p class="list-item-body">
        <strong>Project Pitch:</strong> ${lead.details}
      </p>
      <div class="list-item-details">
        <span class="list-item-detail"><i class="fa-solid fa-box-open"></i> Package: ${lead.tier}</span>
        <span class="list-item-detail"><i class="fa-solid fa-calendar-days"></i> Completion Date: ${lead.deadline}</span>
        <span class="list-item-detail"><i class="fa-solid fa-coins"></i> Proposed Budget: ₹${lead.budget.toLocaleString("en-IN")}</span>
        <span class="list-item-detail"><i class="fa-solid fa-paper-plane"></i> Date: ${lead.date}</span>
      </div>
      <div class="list-item-actions">
        ${lead.status === "pending" ? `<button class="btn-small primary" onclick="updateLeadStatus('${lead.id}', 'contacted')"><i class="fa-solid fa-comment-dots"></i> Accept & Contact</button>` : ""}
        ${lead.status === "contacted" ? `<button class="btn-small primary" style="background:#16a34a" onclick="updateLeadStatus('${lead.id}', 'hired')"><i class="fa-solid fa-handshake"></i> Complete Hired Deal</button>` : ""}
        ${lead.status !== "rejected" && lead.status !== "hired" ? `<button class="btn-small outline" onclick="updateLeadStatus('${lead.id}', 'rejected')">Decline Lead</button>` : ""}
      </div>
    `;
    UI.creativeLeadsList.appendChild(card);
  });
  
  UI.creativeStatNew.innerText = newLeads;
  document.getElementById("creative-stat-active-projects").innerText = activeProjects;
  UI.creativeStatRevenue.innerText = `₹${projectedIncome.toLocaleString("en-IN")}`;
}

// Update lead status (Creative action)
window.updateLeadStatus = function(id, newStatus) {
  const lead = inquiries.find(i => i.id === id);
  if (lead) {
    lead.status = newStatus;
    localStorage.setItem("arch_inquiries", JSON.stringify(inquiries));
    
    if (newStatus === "contacted") {
      showToast(`Contact email unlocked! Email creator at ${lead.clientEmail}`, "success");
    } else if (newStatus === "hired") {
      showToast("Collaboration marked as complete & hired!", "success");
    } else if (newStatus === "rejected") {
      showToast("Lead declined.", "info");
    }
    
    updateDashboardUI();
    updateStatsCounters();
  }
};

// CREATIVE: Populate profile edit form with first creative's profile
function populateProfileEditForm() {
  const myProfile = creatives[0];
  if (!myProfile) return;
  
  document.getElementById("edit-profile-name").value = myProfile.name;
  document.getElementById("edit-profile-role").value = myProfile.role;
  document.getElementById("edit-profile-price").value = myProfile.price;
  document.getElementById("edit-profile-status").value = myProfile.status;
  document.getElementById("edit-profile-bio").value = myProfile.bio;
  document.getElementById("edit-profile-tags").value = myProfile.tags.join(", ");
  
  const pricing = myProfile.pricing || {
    Basic: { price: myProfile.price, desc: "Deliverables basic description." },
    Standard: { price: Math.round(myProfile.price * 2.2), desc: "Deliverables standard description." },
    Premium: { price: Math.round(myProfile.price * 4.5), desc: "Deliverables premium description." }
  };
  
  document.getElementById("edit-plan-basic-price").value = pricing.Basic.price;
  document.getElementById("edit-plan-basic-desc").value = pricing.Basic.desc;
  
  document.getElementById("edit-plan-standard-price").value = pricing.Standard.price;
  document.getElementById("edit-plan-standard-desc").value = pricing.Standard.desc;
  
  document.getElementById("edit-plan-premium-price").value = pricing.Premium.price;
  document.getElementById("edit-plan-premium-desc").value = pricing.Premium.desc;
}

// CREATIVE: Save profile edit
function saveCreativeProfileEdit() {
  const myProfile = creatives[0];
  if (!myProfile) return;
  
  myProfile.name = document.getElementById("edit-profile-name").value;
  myProfile.role = document.getElementById("edit-profile-role").value;
  myProfile.price = parseInt(document.getElementById("edit-profile-price").value) || myProfile.price;
  myProfile.status = document.getElementById("edit-profile-status").value;
  myProfile.bio = document.getElementById("edit-profile-bio").value;
  
  const tagsStr = document.getElementById("edit-profile-tags").value;
  myProfile.tags = tagsStr.split(",").map(t => t.trim()).filter(t => t.length > 0);
  
  // Pricing tiers save
  myProfile.pricing = {
    Basic: {
      price: parseInt(document.getElementById("edit-plan-basic-price").value) || myProfile.price,
      desc: document.getElementById("edit-plan-basic-desc").value
    },
    Standard: {
      price: parseInt(document.getElementById("edit-plan-standard-price").value) || Math.round(myProfile.price * 2.2),
      desc: document.getElementById("edit-plan-standard-desc").value
    },
    Premium: {
      price: parseInt(document.getElementById("edit-plan-premium-price").value) || Math.round(myProfile.price * 4.5),
      desc: document.getElementById("edit-plan-premium-desc").value
    }
  };
  
  // Sync to database
  localStorage.setItem("arch_creatives", JSON.stringify(creatives));
  showToast("Your public roster profile has been updated!", "success");
  
  // Re-render marketplace & counters
  renderRoster();
  updateStatsCounters();
}
