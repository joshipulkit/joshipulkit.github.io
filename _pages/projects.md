---
layout: page
title: research
permalink: /research/
description: Current research directions, methods, and software work.
nav: true
nav_order: 3
---

{% assign sorted_projects = site.projects | sort: "importance" %}

<div class="research-list">
  {% for project in sorted_projects %}
    {% assign row_side = "right" %}
    {% assign row_mod = forloop.index0 | modulo: 2 %}
    {% if row_mod == 1 %}{% assign row_side = "left" %}{% endif %}

    <hr class="research-row__sep">

    <section class="research-row clearfix reveal" id="{{ project.svg_id | default: project.title | slugify }}">
      <div class="research-row__media research-row__media--{{ row_side }}">
        {% case project.svg_id %}
          {% when "dfe" %}{% include svg/dfe.liquid %}
          {% when "nir" %}{% include svg/nir.liquid %}
          {% when "intermolecular" %}{% include svg/intermolecular.liquid %}
        {% endcase %}
      </div>

      <h2 class="research-row__title">{{ project.title }}</h2>
      {% if project.description %}
        <p class="research-row__desc">{{ project.description }}</p>
      {% endif %}
      <div class="research-row__body">
        {{ project.content | markdownify }}
      </div>
    </section>
  {% endfor %}
</div>
