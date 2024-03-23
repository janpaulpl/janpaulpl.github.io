---
layout: default
post: ./_includes/publication.html # TODO: Move photos to their own folder and streamline process to avoid md for each photo
---

# Select pictures

> [For more cute pics, checkout my respository :)](https://github.com/jpramos-me/photographs)

{% assign photos = site.publications | where: "category", "photo" %}
{% for p in photos%}
{% include photography.html photo=p %}
{% endfor %}
