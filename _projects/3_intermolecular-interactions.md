---
layout: page
title: intermolecular interactions
description: beyond-RPA corrections for noncovalent interactions in open- and closed-shell dimers
img: assets/img/publication_preview/rpas_jcp.png
importance: 3
related_publications: true
---

Noncovalent interactions like hydrogen bonds, metal-solvent coordination, dispersion forces, and carbene reactivity shape much of condensed-phase chemistry. They are also a long-standing test for density functional methods, especially when one or more fragments are open-shell. The basic difficulty is that errors in the underlying electron density tend to propagate into the predicted interaction energies, so even reasonable functionals end up being unreliable in these regimes.

In a [JCP paper](https://doi.org/10.1063/5.0180526) (Joshi, Voora) we introduced perturbative singles corrections (RPAS) to the random-phase approximation. These are orbital-rotation-based corrections that target the dominant density errors. RPAS improves interaction energies for closed- and open-shell dimers across hydrogen-bonding, metal-solvent, carbene-solvent, and dispersion regimes, with the biggest gains in the open-shell cases that have historically been the hardest for post-Kohn-Sham methods.

My broader interest is in many-body electronic-structure methods that stay dependable for realistic, multi-reference, and weakly bound systems, and in figuring out where the next round of methodological improvements is most needed.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/publication_preview/rpas_jcp.png" title="Intermolecular interactions" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
