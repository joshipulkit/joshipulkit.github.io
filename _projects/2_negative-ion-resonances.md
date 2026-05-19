---
layout: page
title: negative ion resonances
description: temporary anions, metastable states, and open-shell interactions
img: assets/img/open_shell_anionic_states.png
importance: 2
related_publications: true
---

Temporary anion states, also known as negative ion resonances, sit just above the threshold for electron detachment. They show up in lots of places, from electron-driven chemistry to charge-transfer processes in extended systems. They are also notoriously hard to capture with standard DFT, partly because the underlying states are not square-integrable in the usual sense, and partly because conventional local exchange-correlation potentials don't reproduce the right asymptotic behaviour.

In a [JPCL cover article](https://doi.org/10.1021/acs.jpclett.4c00717) (Ghosal, Joshi, Voora) we showed that combining exact exchange with the random-phase approximation correlation potential, probed by a complex absorbing potential, gives positions and widths of these resonances more reliably than purely local treatments do. I'm interested in extending nonlocal exchange-correlation frameworks to dynamical long-range polarization, and in connecting resonance theory to settings where these states couple to external fields, surfaces, or condensed-phase environments.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/open_shell_anionic_states.png" title="Negative ion resonances" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
