/* ========================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   Modular Vanilla JavaScript
   ======================================== */

// ========================================
// DATA - PROJECTS
// ========================================

const projectsData = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with real-time inventory',
        icon: '🛒',
        status: 'done',
        fullDescription: 'A comprehensive e-commerce platform built with Node.js and React. Features include real-time inventory management, payment integration, user authentication, and an admin dashboard for managing products and orders.',
        technologies: ['Node.js', 'Express', 'React', 'MongoDB', 'Stripe', 'JWT'],
        image: 'assets/images/ecommerce.jpg',
        links: {
            github: 'https://github.com',
            live: 'https://example.com'
        }
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'Collaborative task management with real-time updates',
        icon: '✓',
        status: 'done',
        fullDescription: 'A real-time task management application that allows teams to collaborate effectively. Features include task assignments, due dates, priority levels, comments, and file attachments. Built with WebSocket for real-time updates.',
        technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'WebSocket'],
        image: 'assets/images/tasks.jpg',
        links: {
            github: 'https://github.com',
            live: 'https://example.com'
        }
    },
    {
        id: 3,
        title: 'AI Chat Interface',
        description: 'Modern chat interface with AI integration',
        icon: '💬',
        status: 'pending',
        fullDescription: 'A sleek chat interface with AI capabilities using OpenAI API. Features include conversation history, typing indicators, markdown support, and theme customization. Currently in development with additional features planned.',
        technologies: ['React', 'OpenAI API', 'Node.js', 'Socket.io'],
        image: 'assets/images/chat.jpg',
        links: {
            github: 'https://github.com',
            live: '#'
        }
    },
    {
        id: 4,
        title: 'Personal Analytics Dashboard',
        description: 'Data visualization dashboard for personal metrics',
        icon: '📊',
        status: 'done',
        fullDescription: 'An analytics dashboard that visualizes personal metrics like productivity, health, and learning progress. Features include custom charts, data export, and predictive analytics using machine learning.',
        technologies: ['D3.js', 'Python', 'Flask', 'PostgreSQL', 'Plotly'],
        image: 'assets/images/dashboard.jpg',
        links: {
            github: 'https://github.com',
            live: 'https://example.com'
        }
    },
    {
        id: 5,
        title: 'Content Management System',
        description: 'Lightweight CMS for blog and portfolio management',
        icon: '📝',
        status: 'done',
        fullDescription: 'A lightweight, user-friendly CMS built for managing blog posts and portfolio content. Includes markdown editor, SEO optimization, media library, and scheduled publishing.',
        technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'AWS S3'],
        image: 'assets/images/cms.jpg',
        links: {
            github: 'https://github.com',
            live: 'https://example.com'
        }
    },
    {
        id: 6,
        title: 'Mobile Fitness App',
        description: 'Cross-platform fitness tracking and workout planning',
        icon: '💪',
        status: 'pending',
        fullDescription: 'A comprehensive fitness app for tracking workouts, nutrition, and progress. Features include workout plans, progress tracking, community features, and integration with popular fitness devices.',
        technologies: ['React Native', 'Firebase', 'Google Fit API', 'REST API'],
        image: 'assets/images/fitness.jpg',
        links: {
            github: 'https://github.com',
            live: '#'
        }
    }
];

// ========================================
// DATA - CERTIFICATES
// ========================================

const certificatesData = [
    {
        id: 1,
        title: 'Full Stack Web Development',
        issuer: 'Udemy',
        year: '2024',
        summary: 'Comprehensive course covering HTML, CSS, JavaScript, Node.js, Express, and MongoDB',
        icon: '🎓',
        fullDescription: 'This comprehensive course covers the full software development stack. Learn modern web development from frontend to backend, including responsive design, JavaScript ES6+, REST APIs, database design, and deployment.',
        skillsGained: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'React'],
        certificateLink: 'https://example.com/certificate'
    },
    {
        id: 2,
        title: 'AWS Solutions Architect',
        issuer: 'Amazon Web Services',
        year: '2023',
        summary: 'AWS certification demonstrating expertise in designing scalable and reliable applications',
        icon: '☁️',
        fullDescription: 'AWS Solutions Architect Associate certification. This certification validates expertise in architecting distributed systems on AWS, understanding core AWS services, and designing cost-effective solutions.',
        skillsGained: ['EC2', 'S3', 'RDS', 'VPC', 'CloudFormation', 'Lambda', 'Serverless Architecture'],
        certificateLink: 'https://example.com/certificate'
    },
    {
        id: 3,
        title: 'React Advanced Patterns',
        issuer: 'Frontend Masters',
        year: '2024',
        summary: 'Advanced React concepts including hooks, context, and performance optimization',
        icon: '⚛️',
        fullDescription: 'Deep dive into advanced React patterns and best practices. Learn about custom hooks, performance optimization, state management, and building scalable applications.',
        skillsGained: ['React Hooks', 'Context API', 'Redux', 'Performance Optimization', 'Testing'],
        certificateLink: 'https://example.com/certificate'
    },
    {
        id: 4,
        title: 'Data Science Fundamentals',
        issuer: 'Coursera',
        year: '2023',
        summary: 'Python, statistics, and machine learning fundamentals for data analysis',
        icon: '📈',
        fullDescription: 'Comprehensive introduction to data science. Learn Python programming, statistical analysis, data visualization, and machine learning basics using popular libraries like pandas, numpy, and scikit-learn.',
        skillsGained: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Statistics', 'Data Visualization'],
        certificateLink: 'https://example.com/certificate'
    },
    {
        id: 5,
        title: 'Docker & Kubernetes',
        issuer: 'Linux Academy',
        year: '2024',
        summary: 'Containerization and orchestration for scalable applications',
        icon: '🐳',
        fullDescription: 'Master containerization and orchestration. Learn Docker for containerizing applications, Kubernetes for orchestration, and best practices for deploying microservices.',
        skillsGained: ['Docker', 'Kubernetes', 'Container Security', 'Microservices', 'CI/CD'],
        certificateLink: 'https://example.com/certificate'
    },
    {
        id: 6,
        title: 'UI/UX Design Principles',
        issuer: 'Google Design Certificate',
        year: '2024',
        summary: 'User-centered design principles, prototyping, and usability testing',
        icon: '🎨',
        fullDescription: 'Comprehensive course on UI/UX design. Learn user research, wireframing, prototyping, visual design principles, and usability testing to create effective user experiences.',
        skillsGained: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Design Systems'],
        certificateLink: 'https://example.com/certificate'
    }
];

// ========================================
// DATA - SKILLS
// ========================================

const skillsData = [
    { name: 'JavaScript', icon: 'JS', level: 95, color: '#f7df1e' },
    { name: 'React', icon: '⚛️', level: 90, color: '#61dafb' },
    { name: 'Node.js', icon: '🟢', level: 85, color: '#68a063' },
    { name: 'Python', icon: '🐍', level: 80, color: '#3776ab' },
    { name: 'CSS/SCSS', icon: 'CSS', level: 92, color: '#2965f1' },
    { name: 'MongoDB', icon: '🗄️', level: 85, color: '#00ed64' },
    { name: 'Git', icon: '🔗', level: 90, color: '#f1502f' },
    { name: 'AWS', icon: '☁️', level: 80, color: '#ff9900' }
];

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * DOM Selector Helper
 */
const DOM = {
    query: (selector) => document.querySelector(selector),
    queryAll: (selector) => document.querySelectorAll(selector),
    create: (tag, className = '') => {
        const el = document.createElement(tag);
        if (className) el.className = className;
        return el;
    },
    addClass: (el, className) => el.classList.add(className),
    removeClass: (el, className) => el.classList.remove(className),
    toggleClass: (el, className) => el.classList.toggle(className),
    hasClass: (el, className) => el.classList.contains(className)
};

/**
 * Debounce Function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle Function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

// ========================================
// THEME MANAGER
// ========================================

const ThemeManager = {
    init() {
        this.themeToggle = DOM.query('#themeToggle');
        this.loadTheme();
        this.attachListeners();
    },

    loadTheme() {
        const isDark = localStorage.getItem('theme') === 'dark' ||
            (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        
        if (isDark) {
            this.setDarkMode();
        }
    },

    attachListeners() {
        this.themeToggle.addEventListener('click', () => this.toggle());
    },

    setDarkMode() {
        DOM.addClass(document.body, 'dark-mode');
        localStorage.setItem('theme', 'dark');
    },

    setLightMode() {
        DOM.removeClass(document.body, 'dark-mode');
        localStorage.setItem('theme', 'light');
    },

    toggle() {
        if (DOM.hasClass(document.body, 'dark-mode')) {
            this.setLightMode();
        } else {
            this.setDarkMode();
        }
    }
};

// ========================================
// NAVIGATION MANAGER
// ========================================

const NavigationManager = {
    init() {
        this.header = DOM.query('#header');
        this.navMenu = DOM.query('#navMenu');
        this.mobileMenuBtn = DOM.query('#mobileMenuBtn');
        this.navLinks = DOM.queryAll('.nav-link');
        
        this.attachListeners();
    },

    attachListeners() {
        // Mobile menu toggle
        this.mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
        
        // Navigation link clicks
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                this.handleNavClick(e, link);
            });
        });
        
        // Scroll behavior
        window.addEventListener('scroll', throttle(() => this.handleScroll(), 100));
    },

    toggleMobileMenu() {
        DOM.toggleClass(this.navMenu, 'active');
        DOM.toggleClass(this.mobileMenuBtn, 'active');
    },

    handleNavClick(e, link) {
        // Update active state
        this.navLinks.forEach(l => DOM.removeClass(l, 'active'));
        DOM.addClass(link, 'active');
        
        // Close mobile menu
        DOM.removeClass(this.navMenu, 'active');
        DOM.removeClass(this.mobileMenuBtn, 'active');
    },

    handleScroll() {
        if (window.scrollY > 50) {
            DOM.addClass(this.header, 'scrolled');
        } else {
            DOM.removeClass(this.header, 'scrolled');
        }
    }
};

// ========================================
// SKILLS RENDERER
// ========================================

const SkillsRenderer = {
    init() {
        this.grid = DOM.query('#skillsGrid');
        this.render();
    },

    render() {
        const html = skillsData.map(skill => this.createSkillCard(skill)).join('');
        this.grid.innerHTML = html;
        
        // Trigger progress bar animations
        this.animateProgressBars();
    },

    createSkillCard(skill) {
        return `
            <div class="skill-card">
                <div class="skill-header">
                    <div class="skill-icon">${skill.icon}</div>
                    <div>
                        <div class="skill-name">${skill.name}</div>
                        <div class="skill-level">${skill.level}%</div>
                    </div>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress" style="--progress: ${skill.level}%; width: 0%;"></div>
                </div>
            </div>
        `;
    },

    animateProgressBars() {
        const bars = DOM.queryAll('.skill-progress');
        bars.forEach(bar => {
            const progress = bar.style.getPropertyValue('--progress');
            setTimeout(() => {
                bar.style.width = progress;
            }, 100);
        });
    }
};

// ========================================
// PROJECTS RENDERER
// ========================================

const ProjectsRenderer = {
    init() {
        this.grid = DOM.query('#projectsGrid');
        this.modal = DOM.query('#projectModal');
        this.modalBody = DOM.query('#projectModalBody');
        this.modalClose = DOM.query('#projectModalClose');
        
        this.render();
        this.attachListeners();
    },

    render() {
        const html = projectsData.map(project => this.createProjectCard(project)).join('');
        this.grid.innerHTML = html;
        
        // Attach click listeners to cards
        const cards = DOM.queryAll('.project-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const projectId = parseInt(card.dataset.projectId);
                this.openModal(projectId);
            });
        });

        const buttons = DOM.queryAll('.project-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const projectId = parseInt(btn.dataset.projectId);
                this.openModal(projectId);
            });
        });
    },

    createProjectCard(project) {
        const badgeClass = project.status === 'done' ? 'badge-done' : 'badge-pending';
        const badgeText = project.status === 'done' ? '✓ Done' : '⏳ Pending';
        
        return `
            <div class="project-card" data-project-id="${project.id}">
                <div class="project-image">
                    <div class="project-icon">${project.icon}</div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-footer">
                        <span class="project-badge ${badgeClass}">${badgeText}</span>
                        <button class="btn btn-small btn-primary project-btn" data-project-id="${project.id}">Details</button>
                    </div>
                </div>
            </div>
        `;
    },

    openModal(projectId) {
        const project = projectsData.find(p => p.id === projectId);
        if (!project) return;
        
        const html = `
            <div class="modal-image">
                ${project.icon}
            </div>
            <h2 class="modal-title">${project.title}</h2>
            
            <div class="modal-section">
                <p>${project.fullDescription}</p>
            </div>
            
            <div class="modal-section">
                <h4 class="modal-section-title">Technologies</h4>
                <div class="tags">
                    ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-section">
                <h4 class="modal-section-title">Status</h4>
                <span class="project-badge ${project.status === 'done' ? 'badge-done' : 'badge-pending'}">
                    ${project.status === 'done' ? '✓ Completed' : '⏳ In Progress'}
                </span>
            </div>
            
            <div class="modal-links">
                <a href="${project.links.github}" target="_blank" class="btn btn-secondary">
                    View Code
                </a>
                <a href="${project.links.live}" target="_blank" class="btn btn-primary">
                    Live Demo
                </a>
            </div>
        `;
        
        this.modalBody.innerHTML = html;
        DOM.addClass(this.modal, 'active');
    },

    closeModal() {
        DOM.removeClass(this.modal, 'active');
    },

    attachListeners() {
        this.modalClose.addEventListener('click', () => this.closeModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });
    }
};

// ========================================
// CERTIFICATES RENDERER
// ========================================

const CertificatesRenderer = {
    init() {
        this.grid = DOM.query('#certificatesGrid');
        this.modal = DOM.query('#certificateModal');
        this.modalBody = DOM.query('#certificateModalBody');
        this.modalClose = DOM.query('#certificateModalClose');
        
        this.render();
        this.attachListeners();
    },

    render() {
        const html = certificatesData.map(cert => this.createCertificateCard(cert)).join('');
        this.grid.innerHTML = html;
        
        // Attach click listeners
        const buttons = DOM.queryAll('.certificate-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const certId = parseInt(btn.dataset.certId);
                this.openModal(certId);
            });
        });
    },

    createCertificateCard(cert) {
        return `
            <div class="certificate-card">
                <div class="certificate-icon">${cert.icon}</div>
                <h3 class="certificate-title">${cert.title}</h3>
                <div class="certificate-issuer">${cert.issuer}</div>
                <div class="certificate-year">${cert.year}</div>
                <p class="certificate-summary">${cert.summary}</p>
                <button class="btn btn-secondary btn-small certificate-btn" data-cert-id="${cert.id}">More Info</button>
            </div>
        `;
    },

    openModal(certId) {
        const cert = certificatesData.find(c => c.id === certId);
        if (!cert) return;
        
        const html = `
            <div class="modal-image">
                ${cert.icon}
            </div>
            <h2 class="modal-title">${cert.title}</h2>
            
            <div class="modal-section">
                <h4 class="modal-section-title">Issuer</h4>
                <p>${cert.issuer}</p>
            </div>
            
            <div class="modal-section">
                <h4 class="modal-section-title">Year</h4>
                <p>${cert.year}</p>
            </div>
            
            <div class="modal-section">
                <h4 class="modal-section-title">Description</h4>
                <p>${cert.fullDescription}</p>
            </div>
            
            <div class="modal-section">
                <h4 class="modal-section-title">Skills Gained</h4>
                <div class="tags">
                    ${cert.skillsGained.map(skill => `<span class="tag">${skill}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-links">
                <a href="${cert.certificateLink}" target="_blank" class="btn btn-primary">
                    View Certificate
                </a>
            </div>
        `;
        
        this.modalBody.innerHTML = html;
        DOM.addClass(this.modal, 'active');
    },

    closeModal() {
        DOM.removeClass(this.modal, 'active');
    },

    attachListeners() {
        this.modalClose.addEventListener('click', () => this.closeModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });
    }
};

// ========================================
// CONTACT FORM MANAGER
// ========================================

const ContactFormManager = {
    init() {
        this.form = DOM.query('#contactForm');
        this.formStatus = DOM.query('#formStatus');
        this.fields = {
            name: DOM.query('#name'),
            email: DOM.query('#email'),
            subject: DOM.query('#subject'),
            message: DOM.query('#message')
        };
        
        this.attachListeners();
    },

    attachListeners() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Real-time validation
        Object.keys(this.fields).forEach(key => {
            this.fields[key].addEventListener('blur', () => this.validateField(key));
            this.fields[key].addEventListener('input', () => {
                if (this.hasError(this.fields[key])) {
                    this.validateField(key);
                }
            });
        });
    },

    validateField(fieldName) {
        const field = this.fields[fieldName];
        const value = field.value.trim();
        const fieldGroup = field.parentElement;
        let isValid = true;
        
        if (!value) {
            isValid = false;
        } else if (fieldName === 'email') {
            isValid = this.isValidEmail(value);
        } else if (fieldName === 'name') {
            isValid = value.length >= 2;
        } else if (fieldName === 'subject') {
            isValid = value.length >= 3;
        } else if (fieldName === 'message') {
            isValid = value.length >= 10;
        }
        
        this.setFieldState(field, fieldGroup, isValid, fieldName);
        return isValid;
    },

    setFieldState(field, fieldGroup, isValid, fieldName) {
        const errorElement = DOM.query(`#${fieldName}Error`);
        
        if (isValid) {
            DOM.removeClass(fieldGroup, 'error');
            if (errorElement) errorElement.textContent = '';
        } else {
            DOM.addClass(fieldGroup, 'error');
            if (errorElement) {
                errorElement.textContent = this.getErrorMessage(fieldName);
            }
        }
    },

    getErrorMessage(fieldName) {
        const messages = {
            name: 'Name must be at least 2 characters',
            email: 'Please enter a valid email address',
            subject: 'Subject must be at least 3 characters',
            message: 'Message must be at least 10 characters'
        };
        return messages[fieldName] || 'This field is invalid';
    },

    isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },

    hasError(field) {
        return DOM.hasClass(field.parentElement, 'error');
    },

    validateForm() {
        let isValid = true;
        Object.keys(this.fields).forEach(key => {
            if (!this.validateField(key)) {
                isValid = false;
            }
        });
        return isValid;
    },

    handleSubmit(e) {
        e.preventDefault();
        
        this.formStatus.textContent = '';
        DOM.removeClass(this.formStatus, 'success');
        DOM.removeClass(this.formStatus, 'error');
        
        if (!this.validateForm()) {
            this.showError('Please fix the errors above');
            return;
        }
        
        // Simulate form submission
        this.submitForm();
    },

    submitForm() {
        // Here you would typically send the form data to a server
        const formData = {
            name: this.fields.name.value,
            email: this.fields.email.value,
            subject: this.fields.subject.value,
            message: this.fields.message.value
        };
        
        console.log('Form submitted:', formData);
        
        // Simulate API call
        this.formStatus.textContent = 'Sending...';
        
        setTimeout(() => {
            this.showSuccess('Message sent successfully! I\'ll get back to you soon.');
            this.form.reset();
            Object.keys(this.fields).forEach(key => {
                DOM.removeClass(this.fields[key].parentElement, 'error');
            });
        }, 1500);
    },

    showSuccess(message) {
        this.formStatus.textContent = message;
        DOM.addClass(this.formStatus, 'success');
        DOM.removeClass(this.formStatus, 'error');
    },

    showError(message) {
        this.formStatus.textContent = message;
        DOM.addClass(this.formStatus, 'error');
        DOM.removeClass(this.formStatus, 'success');
    }
};

// ========================================
// BACK TO TOP BUTTON MANAGER
// ========================================

const BackToTopManager = {
    init() {
        this.button = DOM.query('#backToTop');
        this.attachListeners();
    },

    attachListeners() {
        window.addEventListener('scroll', throttle(() => this.handleScroll(), 100));
        this.button.addEventListener('click', () => this.scrollToTop());
    },

    handleScroll() {
        if (window.scrollY > 300) {
            DOM.addClass(this.button, 'visible');
        } else {
            DOM.removeClass(this.button, 'visible');
        }
    },

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
};

// ========================================
// SCROLL ANIMATIONS
// ========================================

const ScrollAnimations = {
    init() {
        this.attachListeners();
    },

    attachListeners() {
        window.addEventListener('scroll', throttle(() => this.handleScroll(), 50));
        this.handleScroll(); // Trigger on load
    },

    handleScroll() {
        const elements = DOM.queryAll('[data-scroll]');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
                DOM.addClass(el, 'in-view');
            }
        });
    }
};

// ========================================
// MAIN INITIALIZATION
// ========================================

function initializeApp() {
    console.log('Initializing portfolio...');
    
    // Initialize all modules
    ThemeManager.init();
    NavigationManager.init();
    SkillsRenderer.init();
    ProjectsRenderer.init();
    CertificatesRenderer.init();
    ContactFormManager.init();
    BackToTopManager.init();
    ScrollAnimations.init();
    
    console.log('Portfolio loaded successfully!');
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// ========================================
// PERFORMANCE MONITORING (Optional)
// ========================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    });
}
