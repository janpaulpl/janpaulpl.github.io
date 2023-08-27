---
layout: default
post: ./_includes/publication.html
---

## Papers
{% assign papers = site.publications | where: "category", "paper" %}
{% for pap in papers%}
{% include publication.html pub=pap %}
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