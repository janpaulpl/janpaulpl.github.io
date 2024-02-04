---
layout: default
post: ./_includes/publication.html # TODO: Move photos to their own folder
---

# Some cute pics

{% assign photos = site.publications | where: "category", "photo" %}
{% for p in photos%}
{% include photography.html photo=p %}
{% endfor %}