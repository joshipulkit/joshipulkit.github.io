---
title: PEECM lattice summations
date: 2025-11-04
tags: [Embedding, PEECM]
summary: Practical defaults for lattice cutoffs, damping, and boundary treatments when moving from molecules to slabs.
---

## Practical defaults and references

- Start with a 10–12 Å primary region; verify energy convergence.
- Use damped Ewald for electrostatics; compare against undamped in vacuum.
- For polarizable sites, check if the environment tensor is stable by perturbing charges ±5%.

For benchmarks, see:

1. The PEECM introductory note (arXiv pending).
2. The periodic embedding appendix in the main paper draft.
