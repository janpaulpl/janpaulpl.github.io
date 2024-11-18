---
layout: default
title: Publications
---

<div id="category-filters">
    <button class="filter-btn active" data-category="all" onclick="filterPublications('all')">All</button>
    <button class="filter-btn" data-category="journal" onclick="filterPublications('journal')">Journals</button>
    <button class="filter-btn" data-category="conference" onclick="filterPublications('conference')">Conferences</button>
    <button class="filter-btn" data-category="workshop" onclick="filterPublications('workshop')">Workshops</button>
    <button class="filter-btn" data-category="competition" onclick="filterPublications('competition')">Competitions</button>
    <button class="filter-btn" data-category="presentation" onclick="filterPublications('presentation')">Presentations</button>
</div>

## Journals
{% assign journals = site.publications | where: "category", "journal" %}
{% for j in journals %}
{% include publication.html pub=j %}
{% endfor %}

## Conferences
{% assign conferences = site.publications | where: "category", "conference" %}
{% for c in conferences %}
{% include publication.html pub=c %}
{% endfor %}

## Workshops
{% assign workshop_pubs = site.publications | where: "category", "workshop" %}
{% for w in workshop_pubs %}
{% include publication.html pub=w %}
{% endfor %}

## Research Competitions
{% assign conference_pubs = site.publications | where: "category", "competition" %}
{% for conf_pub in conference_pubs %}
{% include publication.html pub=conf_pub %}
{% endfor %}

## Presentations
{% assign presentations = site.publications | where: "category", "presentation" %}
{% for p in presentations %}
{% include publication.html pub=p %}
{% endfor %}

<style>
#category-filters {
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.filter-btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 0.9rem;
    background-color: #fbf1c7; /* gruvbox light0_hard */
    color: #504945; /* gruvbox fg4 */
    box-shadow: 0 2px 4px rgba(60, 56, 54, 0.1); /* gruvbox dark0 for shadow */
}

.filter-btn:hover {
    background-color: #d5c4a1; /* gruvbox light2 */
    color: #3c3836; /* gruvbox dark0 */
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(60, 56, 54, 0.15);
}

.filter-btn.active {
    background-color: #589d6a; /* gruvbox green (brighter) */
    color: #fbf1c7; /* gruvbox light0_hard */
    box-shadow: 0 2px 4px rgba(60, 56, 54, 0.2);
}

.pub.hidden {
    display: none;
}
</style>

<script>
if (!window.filterInitialized) {
    window.filterInitialized = true;
    
    window.filterPublications = function(category) {
        // Store active category in sessionStorage
        sessionStorage.setItem('activeCategory', category);
        
        // Update active button
        const buttons = document.querySelectorAll('.filter-btn');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-category') === category) {
                btn.classList.add('active');
            }
        });

        // Filter publications
        const publications = document.querySelectorAll('.pub');
        publications.forEach(pub => {
            if (category === 'all' || pub.dataset.category === category) {
                pub.classList.remove('hidden');
            } else {
                pub.classList.add('hidden');
            }
        });

        // Hide empty section headers
        const sections = document.querySelectorAll('h2');
        sections.forEach(section => {
            const sectionName = section.textContent.toLowerCase();
            const nextElement = section.nextElementSibling;
            let hasVisiblePubs = false;

            let currentElement = nextElement;
            while (currentElement && currentElement.tagName !== 'H2') {
                if (currentElement.classList.contains('pub') && !currentElement.classList.contains('hidden')) {
                    hasVisiblePubs = true;
                    break;
                }
                currentElement = currentElement.nextElementSibling;
            }

            section.style.display = hasVisiblePubs ? 'block' : 'none';
        });
    }
    
    // Restore active category on page load
    const activeCategory = sessionStorage.getItem('activeCategory') || 'all';
    window.addEventListener('load', () => filterPublications(activeCategory));
}
</script>