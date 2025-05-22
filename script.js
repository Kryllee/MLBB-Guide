/**
 * Mobile Legends Bang Bang Hero Guide
 * Main JavaScript File
 */

// ===== HERO DATA =====
// This would typically be loaded from a server or API, but for this example, we'll define it here
const heroes = [
    {
        id: "lancelot",
        name: "Lancelot",
        role: "Assassin",
        specialty: "Burst/Reap",
        lane: "Jungle",
        releaseDate: "September 2017",
        price: 32000,
        diamondPrice: 599,
        difficulty: 3,
        banner: "images/heroes/lancelot-banner.jpg",
        thumbnail: "images/heroes/lancelot.jpg",
        description: "Lancelot is an agile assassin who excels at dealing burst damage and escaping dangerous situations. His mobility and immunity frames make him a formidable opponent in the hands of a skilled player.",
        attributes: {
            damage: 5,
            durability: 1,
            utility: 2,
            complexity: 3
        },
        story: "Born into a noble family in the Land of Dawn, Lancelot was trained in the art of fencing from a young age. His exceptional talent and dedication made him one of the most skilled swordsmen in the kingdom.\n\nHowever, his life took a dramatic turn when he fell in love with Odette, a princess from a rival kingdom. Their forbidden love caused conflict between their families, forcing Lancelot to leave his homeland.\n\nDetermined to prove his worth and win the approval to marry Odette, Lancelot embarked on a journey to become a legendary hero. He now fights in the Land of Dawn, showcasing his extraordinary swordsmanship while seeking a way to reunite with his beloved.",
        skills: [
            {
                name: "Puncture",
                type: "Passive",
                image: "images/skills/lancelot-passive.jpg",
                description: "After using a skill, Lancelot's next basic attack will deal additional physical damage and reduce the target's physical defense.",
                cooldown: null,
                manaCost: null
            },
            {
                name: "Thorned Rose",
                type: "Skill 1",
                image: "images/skills/lancelot-skill1.jpg",
                description: "Lancelot charges in the specified direction, dealing physical damage to enemies along the path. If this skill hits an enemy, its cooldown is reduced.",
                cooldown: 9,
                manaCost: 70
            },
            {
                name: "Soul Cutter",
                type: "Skill 2",
                image: "images/skills/lancelot-skill2.jpg",
                description: "Lancelot becomes immune to damage while dashing in a triangular pattern, dealing physical damage to enemies in his path.",
                cooldown: 12,
                manaCost: 85
            },
            {
                name: "Phantom Execution",
                type: "Ultimate",
                image: "images/skills/lancelot-ultimate.jpg",
                description: "Lancelot dashes forward and marks enemies in his path. After a short delay, he deals massive physical damage to marked enemies.",
                cooldown: 36,
                manaCost: 120
            }
        ],
        skins: [
            {
                name: "Masked Knight",
                type: "Normal",
                image: "images/skins/lancelot-default.jpg",
                thumbnail: "images/skins/lancelot-default-thumb.jpg",
                description: "The default skin for Lancelot, featuring his classic elegant fencing outfit with a mask.",
                releaseDate: "September 2017",
                price: "Free (Default)",
                effects: "None"
            },
            {
                name: "Royal Matador",
                type: "Elite",
                image: "images/skins/lancelot-matador.jpg",
                thumbnail: "images/skins/lancelot-matador-thumb.jpg",
                description: "Lancelot dressed as a royal matador with a red and gold outfit, showcasing his elegant and precise movements.",
                releaseDate: "October 2017",
                price: "599 Diamonds",
                effects: "Custom skill effects with matador-themed visuals"
            },
            {
                name: "Christmas Carnival",
                type: "Special",
                image: "images/skins/lancelot-christmas.jpg",
                thumbnail: "images/skins/lancelot-christmas-thumb.jpg",
                description: "A festive skin featuring Lancelot in a Christmas-themed outfit with red and white colors and holiday decorations.",
                releaseDate: "December 2017",
                price: "749 Diamonds",
                effects: "Custom skill effects with snowflakes and Christmas elements"
            },
            {
                name: "Blade of Roses",
                type: "Epic",
                image: "images/skins/lancelot-roses.jpg",
                thumbnail: "images/skins/lancelot-roses-thumb.jpg",
                description: "An elegant skin with a rose theme, featuring Lancelot in a white and pink outfit with rose petals in his skill effects.",
                releaseDate: "February 2018",
                price: "899 Diamonds",
                effects: "New skill effects, entrance animation, and rose-themed visuals"
            }
        ]
    },
    {
        id: "kagura",
        name: "Kagura",
        role: "Mage",
        specialty: "Burst/Control",
        lane: "Mid",
        releaseDate: "August 2016",
        price: 32000,
        diamondPrice: 599,
        difficulty: 4,
        banner: "images/heroes/kagura-banner.jpg",
        thumbnail: "images/heroes/kagura.jpg",
        description: "Kagura is a versatile mage who manipulates her umbrella to deal damage and control the battlefield. Her complex mechanics offer a high skill ceiling for dedicated players.",
        attributes: {
            damage: 4,
            durability: 2,
            utility: 4,
            complexity: 4
        },
        story: "Kagura was born into a prestigious family of umbrella makers in the Eastern Lands. Her family's umbrellas were not ordinary—they were magical artifacts that could control the spirits of the rain.\n\nFrom a young age, Kagura showed exceptional talent in manipulating these magical umbrellas. She formed a special bond with one particular umbrella, which contained a powerful spirit named Seimei.\n\nWhen dark forces threatened her homeland, Kagura set out on a journey with her trusted umbrella to protect her people and maintain balance in the world. Her elegant yet deadly umbrella techniques have made her a formidable force in the Land of Dawn.",
        skills: [
            {
                name: "Seimei Umbrella Open",
                type: "Passive",
                image: "images/skills/kagura-passive.jpg",
                description: "Kagura's skills change depending on whether she is holding her umbrella or not. When the umbrella is away from her, she can teleport to it.",
                cooldown: null,
                manaCost: null
            },
            {
                name: "Seimei Umbrella Open",
                type: "Skill 1",
                image: "images/skills/kagura-skill1.jpg",
                description: "Kagura throws her umbrella in a specified direction, dealing magic damage to enemies it passes through. The umbrella remains at the destination for a period of time.",
                cooldown: 4.5,
                manaCost: 60
            },
            {
                name: "Rasho Umbrella Flee",
                type: "Skill 2",
                image: "images/skills/kagura-skill2.jpg",
                description: "If Kagura is holding her umbrella, she creates a link between herself and the umbrella's position, dealing damage and slowing enemies. If she is not holding her umbrella, she teleports to it and creates a shield.",
                cooldown: 5,
                manaCost: 70
            },
            {
                name: "Yin Yang Overturn",
                type: "Ultimate",
                image: "images/skills/kagura-ultimate.jpg",
                description: "Kagura's ultimate has different effects based on whether she is holding her umbrella. It can pull enemies toward the umbrella or push them away from Kagura while dealing significant magic damage.",
                cooldown: 40,
                manaCost: 120
            }
        ],
        skins: [
            {
                name: "Flower Season",
                type: "Normal",
                image: "images/skins/kagura-default.jpg",
                thumbnail: "images/skins/kagura-default-thumb.jpg",
                description: "The default skin for Kagura, featuring her in a traditional Eastern outfit with her magical umbrella.",
                releaseDate: "August 2016",
                price: "Free (Default)",
                effects: "None"
            },
            {
                name: "Cherry Witch",
                type: "Elite",
                image: "images/skins/kagura-cherry.jpg",
                thumbnail: "images/skins/kagura-cherry-thumb.jpg",
                description: "Kagura in a pink and white outfit with cherry blossom themes, giving her a more playful appearance.",
                releaseDate: "September 2016",
                price: "599 Diamonds",
                effects: "Custom skill effects with cherry blossom petals"
            },
            {
                name: "Summer Festival",
                type: "Special",
                image: "images/skins/kagura-summer.jpg",
                thumbnail: "images/skins/kagura-summer-thumb.jpg",
                description: "A summer-themed skin featuring Kagura in a yukata with festival decorations and a colorful umbrella.",
                releaseDate: "July 2017",
                price: "749 Diamonds",
                effects: "Custom skill effects with festival elements"
            },
            {
                name: "Soryu Maiden",
                type: "Epic",
                image: "images/skins/kagura-soryu.jpg",
                thumbnail: "images/skins/kagura-soryu-thumb.jpg",
                description: "An elegant blue-themed skin with dragon motifs, featuring Kagura as a maiden of the blue dragon.",
                releaseDate: "January 2018",
                price: "899 Diamonds",
                effects: "New skill effects, entrance animation, and dragon-themed visuals"
            }
        ]
    },
    {
        id: "tigreal",
        name: "Tigreal",
        role: "Tank",
        specialty: "Crowd Control/Engage",
        lane: "Roam",
        releaseDate: "July 2016",
        price: 6500,
        diamondPrice: 299,
        difficulty: 2,
        banner: "images/heroes/tigreal-banner.jpg",
        thumbnail: "images/heroes/tigreal.jpg",
        description: "Tigreal is a durable tank who excels at initiating team fights and protecting allies. His crowd control abilities make him a valuable asset to any team composition.",
        attributes: {
            damage: 2,
            durability: 5,
            utility: 4,
            complexity: 2
        },
        story: "Tigreal was once the most decorated knight in the Moniyan Empire, known for his unwavering loyalty and exceptional combat skills. He led the Imperial Knights with honor and distinction, becoming a symbol of justice throughout the land.\n\nHowever, during a fateful battle, a tragic mistake led to the deaths of many innocent civilians. Overwhelmed by guilt, Tigreal resigned from his position and sought redemption by dedicating his life to protecting the innocent.\n\nNow, he fights in the Land of Dawn, using his shield and sword not for glory or conquest, but to defend those who cannot defend themselves. His imposing presence on the battlefield and his selfless nature have earned him the respect of allies and enemies alike.",
        skills: [
            {
                name: "Fearless",
                type: "Passive",
                image: "images/skills/tigreal-passive.jpg",
                description: "After taking damage 4 times, Tigreal's next basic attack will deal additional physical damage and slow the target.",
                cooldown: null,
                manaCost: null
            },
            {
                name: "Attack Wave",
                type: "Skill 1",
                image: "images/skills/tigreal-skill1.jpg",
                description: "Tigreal sends out a wave of energy in a specified direction, dealing physical damage to enemies hit and slowing them.",
                cooldown: 8,
                manaCost: 60
            },
            {
                name: "Sacred Hammer",
                type: "Skill 2",
                image: "images/skills/tigreal-skill2.jpg",
                description: "Tigreal charges in a specified direction, pushing enemies along the way. If he hits a wall or an enemy hero, all enemies will be stunned.",
                cooldown: 12,
                manaCost: 80
            },
            {
                name: "Implosion",
                type: "Ultimate",
                image: "images/skills/tigreal-ultimate.jpg",
                description: "After a short delay, Tigreal slams his sword into the ground, pulling nearby enemies toward him and stunning them.",
                cooldown: 36,
                manaCost: 120
            }
        ],
        skins: [
            {
                name: "Warrior of Dawn",
                type: "Normal",
                image: "images/skins/tigreal-default.jpg",
                thumbnail: "images/skins/tigreal-default-thumb.jpg",
                description: "The default skin for Tigreal, featuring him in his knight armor with his signature shield and sword.",
                releaseDate: "July 2016",
                price: "Free (Default)",
                effects: "None"
            },
            {
                name: "Dark Guardian",
                type: "Elite",
                image: "images/skins/tigreal-dark.jpg",
                thumbnail: "images/skins/tigreal-dark-thumb.jpg",
                description: "Tigreal in dark armor with red accents, giving him a more menacing appearance.",
                releaseDate: "August 2016",
                price: "599 Diamonds",
                effects: "Custom skill effects with dark energy"
            },
            {
                name: "Fallen Guard",
                type: "Special",
                image: "images/skins/tigreal-fallen.jpg",
                thumbnail: "images/skins/tigreal-fallen-thumb.jpg",
                description: "A corrupted version of Tigreal with demonic armor and fiery effects.",
                releaseDate: "November 2017",
                price: "749 Diamonds",
                effects: "Custom skill effects with fire and darkness elements"
            },
            {
                name: "King of the Moniyan Empire",
                type: "Epic",
                image: "images/skins/tigreal-king.jpg",
                thumbnail: "images/skins/tigreal-king-thumb.jpg",
                description: "Tigreal as the king of the Moniyan Empire, with royal armor and golden accents.",
                releaseDate: "March 2018",
                price: "899 Diamonds",
                effects: "New skill effects, entrance animation, and royal-themed visuals"
            }
        ]
    }
];

// ===== COMMON FUNCTIONALITY =====

// DOM Elements
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMobile = document.getElementById('nav-mobile');
const themeToggle = document.getElementById('theme-toggle');

// Set current year in footer
const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Mobile menu toggle
if (mobileMenuToggle && navMobile) {
    mobileMenuToggle.addEventListener('click', function() {
        navMobile.classList.toggle('active');
        
        // Change icon based on menu state
        const icon = mobileMenuToggle.querySelector('i');
        if (icon) {
            if (navMobile.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
}

// Theme toggle
if (themeToggle) {
    // Check for saved theme preference or use user's system preference
    const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('darkTheme');
    
    if (savedTheme === 'true' || (savedTheme === null && prefersDarkTheme)) {
        document.body.classList.add('dark-theme');
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        // Save theme preference
        const isDarkTheme = document.body.classList.contains('dark-theme');
        localStorage.setItem('darkTheme', isDarkTheme);
    });
}

// ===== PAGE-SPECIFIC FUNCTIONALITY =====

// Get current page
const currentPage = window.location.pathname.split('/').pop() || 'guide.html';

// ===== GUIDE PAGE =====
if (currentPage === 'guide.html' || currentPage === '') {
    // Initialize search functionality when DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Get search elements
        const heroSearch = document.getElementById('hero-search');
        const roleFilter = document.getElementById('role-filter');
        const searchButton = document.querySelector('.search-form .btn');
        const heroesSection = document.getElementById('heroes-section');
        
        // Check if we're on the guide page with search functionality
        if (heroSearch && roleFilter && searchButton && heroesSection) {
            console.log('Search functionality initialized');
            
            // Function to perform search
            function performSearch() {
                const searchTerm = heroSearch.value.toLowerCase().trim();
                const selectedRole = roleFilter.value;
                
                console.log(`Searching for: "${searchTerm}", Role: ${selectedRole}`);
                
                // Filter heroes based on search term and role
                const filteredHeroes = heroes.filter(hero => {
                    const nameMatch = hero.name.toLowerCase().includes(searchTerm);
                    const roleMatch = selectedRole === 'all' || hero.role === selectedRole;
                    return nameMatch && roleMatch;
                });
                
                console.log(`Found ${filteredHeroes.length} heroes`);
                
                // Update UI with filtered heroes
                updateHeroesDisplay(filteredHeroes);
            }
            
            // Add event listener to search button
            searchButton.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent form submission
                performSearch();
            });
            
            // Add event listener for Enter key in search field
            heroSearch.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault(); // Prevent form submission
                    performSearch();
                }
            });
            
            // Add event listener for role filter change
            roleFilter.addEventListener('change', function() {
                performSearch();
            });
            
            // Function to update heroes display
            function updateHeroesDisplay(heroesToDisplay) {
                // Get the heroes section
                const heroesSection = document.getElementById('heroes-section');
                
                // Save the heading
                const heading = heroesSection.querySelector('h2');
                const headingText = heading ? heading.textContent : 'Hero Guides';
                
                // Clear current content
                heroesSection.innerHTML = '';
                
                // Add heading back
                const newHeading = document.createElement('h2');
                newHeading.textContent = headingText;
                heroesSection.appendChild(newHeading);
                
                // Display message if no heroes found
                if (heroesToDisplay.length === 0) {
                    const noResults = document.createElement('p');
                    noResults.textContent = 'No heroes found matching your search criteria.';
                    noResults.className = 'no-results';
                    heroesSection.appendChild(noResults);
                    return;
                }
                
                // Add filtered heroes
                heroesToDisplay.forEach(hero => {
                    const heroCard = createHeroCard(hero);
                    heroesSection.appendChild(heroCard);
                });
            }
            
            // Function to create a hero card
            function createHeroCard(hero) {
                const heroCard = document.createElement('div');
                heroCard.className = 'hero-card';
                
                heroCard.innerHTML = `
                    <div class="hero-image">
                        <img src="${hero.thumbnail}" alt="${hero.name}">
                    </div>
                    <div class="hero-info">
                        <div class="hero-header">
                            <h3>${hero.name}</h3>
                            <div class="hero-meta">
                                <span class="hero-role">${hero.role}</span>
                                <span class="hero-specialty">${hero.specialty}</span>
                            </div>
                        </div>
                        
                        <div class="hero-stats">
                            <div class="stat-group">
                                <h4>Difficulty</h4>
                                <div class="stat-bars">
                                    ${createStatBars(hero.difficulty, 5)}
                                </div>
                            </div>
                            
                            <div class="stat-row">
                                <div class="stat-group">
                                    <h4>Damage</h4>
                                    <div class="stat-bars">
                                        ${createStatBars(hero.attributes.damage, 5, 'damage')}
                                    </div>
                                </div>
                                
                                <div class="stat-group">
                                    <h4>Durability</h4>
                                    <div class="stat-bars">
                                        ${createStatBars(hero.attributes.durability, 5, 'durability')}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="hero-skills">
                            <h4>Skills</h4>
                            <div class="skills-list">
                                ${hero.skills.map(skill => `
                                    <div class="skill">
                                        <div class="skill-icon">
                                            <img src="${skill.image}" alt="${skill.name}">
                                        </div>
                                        <div class="skill-info">
                                            <h5>${skill.name} (${skill.type})</h5>
                                            <p>${skill.description}</p>
                                            <div class="skill-stats">
                                                ${skill.cooldown ? `<span>Cooldown: ${skill.cooldown}s</span>` : ''}
                                                ${skill.manaCost ? `<span>Mana Cost: ${skill.manaCost}</span>` : ''}
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="hero-links">
                            <a href="story.html?hero=${hero.id}" class="btn btn-outline">Read Story</a>
                            <a href="skin.html?hero=${hero.id}" class="btn btn-outline">View Skins</a>
                        </div>
                    </div>
                `;
                
                return heroCard;
            }
            
            // Helper function to create stat bars
            function createStatBars(value, max, type = '') {
                let bars = '';
                for (let i = 0; i < max; i++) {
                    bars += `<div class="stat-bar ${type} ${i < value ? 'active' : ''}"></div>`;
                }
                return bars;
            }
            
            // Check if there's a hero parameter in the URL
            const urlParams = new URLSearchParams(window.location.search);
            const heroParam = urlParams.get('hero');
            
            if (heroParam) {
                // Find the hero by ID or name
                const hero = heroes.find(h => 
                    h.id.toLowerCase() === heroParam.toLowerCase() || 
                    h.name.toLowerCase() === heroParam.toLowerCase()
                );
                
                if (hero) {
                    // Set the search field to the hero's name
                    heroSearch.value = hero.name;
                    // Set the role filter to the hero's role
                    roleFilter.value = hero.role;
                    // Perform the search
                    performSearch();
                }
            }
        }
    });
}

// ===== STORY PAGE =====
else if (currentPage === 'story.html') {
    // Hero tabs functionality
    document.addEventListener('DOMContentLoaded', function() {
        const heroTabs = document.querySelectorAll('.hero-tab');
        const storyContents = document.querySelectorAll('.story-content');
        
        if (heroTabs.length > 0 && storyContents.length > 0) {
            // Check if a specific hero is requested in the URL
            const urlParams = new URLSearchParams(window.location.search);
            const requestedHero = urlParams.get('hero');
            
            if (requestedHero) {
                // Find the tab for the requested hero
                const targetTab = Array.from(heroTabs).find(tab => tab.getAttribute('data-hero') === requestedHero);
                
                if (targetTab) {
                    // Simulate a click on the tab
                    targetTab.click();
                }
            }
            
            heroTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const hero = this.getAttribute('data-hero');
                    
                    // Update active tab
                    heroTabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Update active content
                    storyContents.forEach(content => {
                        content.classList.remove('active');
                    });
                    document.getElementById(`${hero}-story`).classList.add('active');
                    
                    // Update URL without reloading the page
                    const url = new URL(window.location);
                    url.searchParams.set('hero', hero);
                    window.history.pushState({}, '', url);
                });
            });
        }
    });
}

// ===== SKIN PAGE =====
else if (currentPage === 'skin.html') {
    // Hero tabs functionality
    document.addEventListener('DOMContentLoaded', function() {
        const heroTabs = document.querySelectorAll('.hero-tab');
        const skinsGalleries = document.querySelectorAll('.skins-gallery');
        
        if (heroTabs.length > 0 && skinsGalleries.length > 0) {
            // Check if a specific hero is requested in the URL
            const urlParams = new URLSearchParams(window.location.search);
            const requestedHero = urlParams.get('hero');
            
            if (requestedHero) {
                // Find the tab for the requested hero
                const targetTab = Array.from(heroTabs).find(tab => tab.getAttribute('data-hero') === requestedHero);
                
                if (targetTab) {
                    // Simulate a click on the tab
                    targetTab.click();
                }
            }
            
            heroTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const hero = this.getAttribute('data-hero');
                    
                    // Update active tab
                    heroTabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Update active gallery
                    skinsGalleries.forEach(gallery => {
                        gallery.classList.remove('active');
                    });
                    document.getElementById(`${hero}-skins`).classList.add('active');
                    
                    // Update URL without reloading the page
                    const url = new URL(window.location);
                    url.searchParams.set('hero', hero);
                    window.history.pushState({}, '', url);
                });
            });
            
            // Initialize skin navigation for each hero
            heroes.forEach(hero => {
                initSkinNavigation(hero.id);
            });
        }
    });
    
    // Initialize skin navigation for a hero
    function initSkinNavigation(hero) {
        const prevBtn = document.getElementById(`${hero}-prev`);
        const nextBtn = document.getElementById(`${hero}-next`);
        const mainSkinImg = document.getElementById(`${hero}-main-skin`);
        const skinInfo = document.getElementById(`${hero}-skin-info`);
        const thumbnails = document.querySelectorAll(`#${hero}-skins .skin-thumbnail`);
        
        if (!prevBtn || !nextBtn || !mainSkinImg || !skinInfo || thumbnails.length === 0) {
            return;
        }
        
        let currentSkinIndex = 0;
        const heroData = heroes.find(h => h.id === hero);
        
        if (!heroData) {
            return;
        }
        
        // Update skin display
        function updateSkinDisplay(index) {
            const skin = heroData.skins[index];
            
            // Update main image
            mainSkinImg.src = skin.image;
            mainSkinImg.alt = skin.name;
            
            // Update skin info
            skinInfo.innerHTML = `
                <h3>${skin.name}</h3>
                <p class="skin-type">${skin.type} Skin</p>
                <p class="skin-description">${skin.description}</p>
                <div class="skin-details">
                    <div class="skin-detail">
                        <span class="detail-label">Release Date:</span>
                        <span class="detail-value">${skin.releaseDate}</span>
                    </div>
                    <div class="skin-detail">
                        <span class="detail-label">Price:</span>
                        <span class="detail-value">${skin.price}</span>
                    </div>
                    <div class="skin-detail">
                        <span class="detail-label">Special Effects:</span>
                        <span class="detail-value">${skin.effects}</span>
                    </div>
                </div>
            `;
            
            // Update active thumbnail
            thumbnails.forEach((thumb, i) => {
                if (i === index) {
                    thumb.classList.add('active');
                } else {
                    thumb.classList.remove('active');
                }
            });
        }
        
        // Previous button
        prevBtn.addEventListener('click', function() {
            currentSkinIndex = (currentSkinIndex === 0) ? heroData.skins.length - 1 : currentSkinIndex - 1;
            updateSkinDisplay(currentSkinIndex);
        });
        
        // Next button
        nextBtn.addEventListener('click', function() {
            currentSkinIndex = (currentSkinIndex === heroData.skins.length - 1) ? 0 : currentSkinIndex + 1;
            updateSkinDisplay(currentSkinIndex);
        });
        
        // Thumbnail clicks
        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', function() {
                currentSkinIndex = index;
                updateSkinDisplay(currentSkinIndex);
            });
        });
    }
}

// ===== UTILITY FUNCTIONS =====

// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to set URL parameter
function setUrlParameter(name, value) {
    const url = new URL(window.location);
    url.searchParams.set(name, value);
    window.history.pushState({}, '', url);
}

// Function to find a hero by ID
function findHeroById(id) {
    return heroes.find(hero => hero.id === id);
}
// Function to find a hero by name
function findHeroByName(name) {
    return heroes.find(hero => hero.name.toLowerCase() === name.toLowerCase());
}

// Add console log to help with debugging
console.log('MLBB Hero Guide script loaded successfully');