---
layout: page
permalink: /teaching/
title: Teaching
description: Courses, tutorials, and supporting material — grouped by year.
nav: true
nav_order: 6
---

{% assign published_teachings = site.teachings | where_exp: "item", "item.published != false" %}

{% if published_teachings.size == 0 %}

<div class="teaching-empty">
  <p class="teaching-empty__lead">No entries yet — content coming soon.</p>
  <p class="mono-label">Schema for each entry (drop into <code>_teachings/YYYY-shortname.md</code>):</p>
  <pre><code>---
title: Quantum Mechanics II
year: 2024
year_label: Winter 2024–25        # optional
role: Teaching Assistant          # optional
professor: Prof. Stefan Kümmel    # optional
institution: University of Bayreuth # optional
repo: https://github.com/user/qm2 # optional
---
Optional short body for the detail page.
</code></pre>
</div>

{% else %}

{% assign years = published_teachings | map: "year" | uniq | sort | reverse %}

<nav class="teaching-years" aria-label="Filter by year">
  {% for y in years %}
    <a class="teaching-year-chip" href="#y{{ y }}">{{ y }}</a>
  {% endfor %}
</nav>

{% for y in years %}
{% assign year_items = published_teachings | where: "year", y | sort: "year_label" | reverse %}

  <h2 class="section-heading" id="y{{ y }}">
    <span class="section-heading__text">{{ y }}</span>
  </h2>

  <div class="news">
    <table class="table table-sm table-borderless">
      {% for item in year_items %}
        <tr>
          <th scope="row" style="width: 22%">{{ item.year_label | default: item.year }}</th>
          <td>
            <a class="news-title" href="{{ item.url | relative_url }}">{{ item.title }}</a>
            {% if item.role or item.professor or item.institution %}
              {% assign meta_parts = "" | split: "" %}
              {% if item.role %}{% assign meta_parts = meta_parts | push: item.role %}{% endif %}
              {% if item.professor %}{% assign meta_parts = meta_parts | push: item.professor %}{% endif %}
              {% if item.institution %}{% assign meta_parts = meta_parts | push: item.institution %}{% endif %}
              <div class="teaching-meta mono-label">{{ meta_parts | join: " · " }}</div>
            {% endif %}
          </td>
          {%- comment -%}
            Whitespace-controlled so a repo-less cell is truly empty and the
            mobile `:empty { display: none }` rule can match it.
          {%- endcomment -%}
          <td class="teaching-actions">
            {%- if item.repo -%}
              <a class="teaching-repo" href="{{ item.repo }}" target="_blank" rel="noopener">repo →</a>
            {%- endif -%}
          </td>
        </tr>
      {% endfor %}
    </table>
  </div>
{% endfor %}

{% endif %}
