---
layout: default
post: ./_includes/publication.html
---

<!-- ## Conferences -->

## Journals
{% assign journals = site.publications | where: "category", "journal" %}
{% for j in journals%}
{% include publication.html pub=j %}
{% endfor %}

## Conferences
{% assign conferences = site.publications | where: "category", "conference" %}
{% for c in conferences%}
{% include publication.html pub=c %}
{% endfor %}

## Workshops
{% assign workshop_pubs = site.publications | where: "category", "workshop" %}
{% for w in workshop_pubs%}
{% include publication.html pub=w %}
{% endfor %}

## Research Competitions
{% assign conference_pubs = site.publications | where: "category", "competition" %}
{% for conf_pub in conference_pubs%}
{% include publication.html pub=conf_pub %}
{% endfor %}

## Presentations
{% assign presentations = site.publications | where: "category", "presentation" %}
{% for p in presentations%}
{% include publication.html pub=p %}
{% endfor %}

<!-- ## Projects
{% assign projects = site.publications | where: "category", "project" %}
{% for proj in projects%}
{% include publication.html pub=proj %}
{% endfor %} -->