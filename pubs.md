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

## Research Competitions
{% assign conference_pubs = site.publications | where: "category", "competition" %}
{% for conf_pub in conference_pubs%}
{% include publication.html pub=conf_pub %}
{% endfor %}

## Projects
{% assign projects = site.publications | where: "category", "project" %}
{% for proj in projects%}
{% include publication.html pub=proj %}
{% endfor %}