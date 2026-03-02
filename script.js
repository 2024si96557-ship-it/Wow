// ===========================
// Data Objects
// ===========================

const categories = [
    {
        id: 'architecture',
        icon: '🏛️',
        title: 'Women in Architecture',
        description: 'Designing spaces and structures that shape our world. Connect with architects who are redefining the built environment.',
        link: '#mentors'
    },
    {
        id: 'project-management',
        icon: '📊',
        title: 'Women in Project Management',
        description: 'Leading complex projects to success. Learn from seasoned PMs who excel at delivering results on time and within budget.',
        link: '#mentors'
    },
    {
        id: 'innovation',
        icon: '💡',
        title: 'Women in Innovation',
        description: 'Driving change and pioneering new solutions. Explore breakthrough thinking with innovators who challenge the status quo.',
        link: '#mentors'
    },
    {
        id: 'beyond-work',
        icon: '🌟',
        title: 'Women Beyond Work',
        description: 'Balancing professional excellence with personal fulfillment. Discover holistic approaches to career and life.',
        link: '#mentors'
    },
    {
        id: 'rising',
        icon: '🚀',
        title: 'Women Rising',
        description: 'Early-career professionals on the path to leadership. Connect with emerging leaders who are making their mark.',
        link: '#mentors'
    }
];

const mentors = [
    {
        name: 'Sarah Mitchell',
        role: 'Senior Architect',
        expertise: 'Sustainable design, urban planning, green building certification',
        category: 'Women in Architecture',
        initials: 'SM',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
        email: '#',
        teams: '#'
    },
    {
        name: 'Priya Sharma',
        role: 'PMO Director',
        expertise: 'Agile methodologies, stakeholder management, portfolio optimization',
        category: 'Women in Project Management',
        initials: 'PS',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
        email: '#',
        teams: '#'
    },
    {
        name: 'Elena Rodriguez',
        role: 'Innovation Lead',
        expertise: 'Digital transformation, design thinking, product development',
        category: 'Women in Innovation',
        initials: 'ER',
        image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
        email: '#',
        teams: '#'
    },
    {
        name: 'Jessica Chen',
        role: 'Principal Architect',
        expertise: 'Commercial design, team leadership, client relations',
        category: 'Women in Architecture',
        initials: 'JC',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop',
        email: '#',
        teams: '#'
    },
    {
        name: 'Amanda Williams',
        role: 'Program Manager',
        expertise: 'Risk management, cross-functional teams, change management',
        category: 'Women in Project Management',
        initials: 'AW',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
        email: '#',
        teams: '#'
    },
    {
        name: 'Maya Patel',
        role: 'Chief Innovation Officer',
        expertise: 'AI & machine learning, startup mentoring, venture building',
        category: 'Women in Innovation',
        initials: 'MP',
        image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop',
        email: '#',
        teams: '#'
    },
    {
        name: 'Rachel Thompson',
        role: 'Life Coach & Consultant',
        expertise: 'Work-life balance, career transitions, mindfulness practices',
        category: 'Women Beyond Work',
        initials: 'RT',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
        email: '#',
        teams: '#'
    },
    {
        name: 'Zara Ahmed',
        role: 'Associate Project Manager',
        expertise: 'Emerging leader, technology projects, agile practices',
        category: 'Women Rising',
        initials: 'ZA',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
        email: '#',
        teams: '#'
    },
    {
        name: 'Sofia Martinez',
        role: 'Wellness Advocate',
        expertise: 'Mental health, professional development, community building',
        category: 'Women Beyond Work',
        initials: 'SM',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
        email: '#',
        teams: '#'
    }
];

const resources = [
    {
        icon: '🎓',
        title: 'Leadership Programs',
        description: 'Executive coaching, leadership workshops, and development programs designed to accelerate your career growth and enhance your leadership capabilities.',
        link: '#leadership'
    },
    {
        icon: '🛠️',
        title: 'Innovation Toolkit',
        description: 'Access frameworks, templates, and tools for design thinking, ideation sessions, and innovation management to drive creative solutions.',
        link: '#toolkit'
    },
    {
        icon: '📜',
        title: 'Certifications',
        description: 'Professional certification programs, exam prep resources, and continuing education opportunities to boost your credentials and expertise.',
        link: '#certifications'
    }
];

const spotlight = {
    name: 'Dr. Aisha Johnson',
    role: 'VP of Engineering & Innovation',
    initials: 'AJ',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop',
    quote: 'Every challenge is an opportunity to learn, grow, and lift others as you climb.',
    story: 'Dr. Aisha Johnson started her career as a junior engineer in a male-dominated field, facing skepticism and barriers at every turn. Rather than letting obstacles define her, she used them as fuel for her determination. Over 15 years, she climbed from entry-level roles to VP of Engineering, leading a team of 200+ professionals. Along the way, she championed diversity initiatives, mentored over 50 women, and pioneered innovative processes that transformed her organization. Today, she\'s a sought-after speaker and advocate for women in STEM, proving that resilience, vision, and giving back create lasting impact.'
};

// ===========================
// Render Functions
// ===========================

function renderCategories() {
    const grid = document.getElementById('categories-grid');
    
    categories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.setAttribute('role', 'listitem');
        
        card.innerHTML = `
            <div class="category-icon" role="img" aria-label="${category.title} icon">${category.icon}</div>
            <h3>${category.title}</h3>
            <p>${category.description}</p>
            <a href="${category.link}" aria-label="View mentors in ${category.title}">View Mentors</a>
        `;
        
        grid.appendChild(card);
    });
}

function renderMentors() {
    const grid = document.getElementById('mentors-grid');
    
    mentors.forEach(mentor => {
        const card = document.createElement('div');
        card.className = 'mentor-card';
        card.setAttribute('role', 'listitem');
        
        const imageContent = mentor.image 
            ? `<img src="${mentor.image}" alt="${mentor.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
               <div class="initials" style="display:none;">${mentor.initials}</div>`
            : `<div class="initials">${mentor.initials}</div>`;
        
        card.innerHTML = `
            <div class="mentor-image" role="img" aria-label="Profile photo for ${mentor.name}">
                ${imageContent}
            </div>
            <div class="mentor-content">
                <h3 class="mentor-name">${mentor.name}</h3>
                <p class="mentor-role">${mentor.role}</p>
                <p class="mentor-expertise"><strong>Expertise:</strong> ${mentor.expertise}</p>
                <span class="mentor-tag">${mentor.category}</span>
                <div class="mentor-actions">
                    <a href="mailto:${mentor.email}" class="btn btn-primary" aria-label="Email ${mentor.name}">Email</a>
                    <a href="${mentor.teams}" class="btn btn-outline" aria-label="Chat with ${mentor.name} on Teams">Teams Chat</a>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function renderResources() {
    const grid = document.getElementById('resources-grid');
    
    resources.forEach(resource => {
        const card = document.createElement('div');
        card.className = 'resource-card';
        card.setAttribute('role', 'listitem');
        
        card.innerHTML = `
            <div class="resource-icon" role="img" aria-label="${resource.title} icon">${resource.icon}</div>
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
            <a href="${resource.link}" aria-label="Learn more about ${resource.title}">Learn More →</a>
        `;
        
        grid.appendChild(card);
    });
}

function renderSpotlight() {
    const container = document.getElementById('spotlight-content');
    
    const imageContent = spotlight.image 
        ? `<img src="${spotlight.image}" alt="${spotlight.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
           <div class="initials" style="display:none;">${spotlight.initials}</div>`
        : `<div class="initials">${spotlight.initials}</div>`;
    
    container.innerHTML = `
        <div class="spotlight-image" role="img" aria-label="Profile photo for ${spotlight.name}">
            ${imageContent}
        </div>
        <div class="spotlight-details">
            <h3 class="spotlight-name">${spotlight.name}</h3>
            <p class="spotlight-role">${spotlight.role}</p>
            <blockquote class="spotlight-quote">"${spotlight.quote}"</blockquote>
            <p class="spotlight-story">${spotlight.story}</p>
        </div>
    `;
}

function populateCategoryDropdown() {
    const select = document.getElementById('category');
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.title;
        select.appendChild(option);
    });
}

// ===========================
// Utility Functions
// ===========================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerOffset = 80; // Height of sticky header
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// ===========================
// Form Handling
// ===========================

function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const statusElement = document.getElementById('form-status');
    
    // Validate form
    const name = form.name.value.trim();
    const role = form.role.value.trim();
    const category = form.category.value;
    const journey = form.journey.value.trim();
    
    // Clear previous status
    statusElement.className = 'form-status';
    statusElement.textContent = '';
    
    // Check required fields
    if (!name || !role || !category || !journey) {
        statusElement.className = 'form-status error';
        statusElement.textContent = '⚠️ Please fill in all required fields.';
        return;
    }
    
    // Simulate form submission
    setTimeout(() => {
        statusElement.className = 'form-status success';
        statusElement.textContent = '✓ Thank you for sharing your story! Your submission has been received and will be reviewed by our team.';
        
        // Reset form
        form.reset();
        
        // Scroll to success message
        statusElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Clear success message after 8 seconds
        setTimeout(() => {
            statusElement.className = 'form-status';
            statusElement.textContent = '';
        }, 8000);
    }, 500);
}

// ===========================
// Smooth Scroll for Navigation Links
// ===========================

function initializeSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// ===========================
// Initialize on DOM Load
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Render all dynamic content
    renderCategories();
    renderMentors();
    renderResources();
    renderSpotlight();
    populateCategoryDropdown();
    
    // Initialize smooth scroll for navigation
    initializeSmoothScroll();
    
    // Attach form submit handler
    const form = document.getElementById('story-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // Initialize reading mode
    initializeReadingMode();
    
    // Add accessibility improvements
    enhanceAccessibility();
});

// ===========================
// Reading Mode
// ===========================

function initializeReadingMode() {
    const toggleBtn = document.getElementById('reading-mode-toggle');
    
    // Load saved preference
    if (localStorage.getItem('readingMode') === 'true') {
        document.body.classList.add('reading-mode');
    }
    
    // Toggle on click
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            document.body.classList.toggle('reading-mode');
            const isActive = document.body.classList.contains('reading-mode');
            localStorage.setItem('readingMode', isActive);
            
            // Update button text
            this.textContent = isActive ? '☀️' : '📖';
            this.title = isActive ? 'Turn Off Eye Comfort Mode' : 'Turn On Eye Comfort Mode';
        });
    }
}

// ===========================
// Accessibility Enhancements
// ===========================

function enhanceAccessibility() {
    // Ensure all images have proper ARIA labels
    const images = document.querySelectorAll('[role="img"]');
    images.forEach(img => {
        if (!img.hasAttribute('aria-label')) {
            console.warn('Image without aria-label:', img);
        }
    });
    
    // Add keyboard navigation for cards
    const cards = document.querySelectorAll('.category-card, .mentor-card, .resource-card');
    cards.forEach(card => {
        // Make cards keyboard focusable if they contain interactive elements
        const links = card.querySelectorAll('a');
        if (links.length > 0) {
            card.setAttribute('tabindex', '0');
        }
    });
    
    // Announce page load to screen readers
    const main = document.querySelector('main') || document.body;
    main.setAttribute('role', 'main');
    
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#hero';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// ===========================
// Export for Global Access
// ===========================

// Make scrollToSection available globally for inline onclick handlers
window.scrollToSection = scrollToSection;

// Log initialization
console.log('Women @ Work — Give to Gain initialized successfully');
console.log(`Loaded ${categories.length} categories, ${mentors.length} mentors, ${resources.length} resources`);
