---
layout: default
post: ./_includes/publication.html # TODO: Move photos to their own folder and streamline process to avoid md for each photo
---

> [For more cute pics, checkout my respository (:](https://github.com/janpaulpl/photographs)

{% assign photos = site.publications | where: "category", "photo" | sort: "path" | reverse %}
{% for p in photos%}
{% include photography.html photo=p %}
{% endfor %}
