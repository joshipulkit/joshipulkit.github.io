---
layout: post
title: "DIIS: A method to accelerate SCF convergence"
date: 2020-06-23 12:00:00+0530
description: direct inversion in the iterative subspace for faster SCF convergence
tags: SCF DIIS Theory
categories: notes
---

### Introduction

Direct Inversion of the Iterative Subspace (DIIS) is a method first proposed by Pulay[^1] to accelerate the convergence of a standard self-consistent field (SCF) procedure.

### Method

Iterative procedures generate a set of trial vectors $\mathbf{p}^i$. We can define an error term between successive iterations:

$$
\mathbf{e}^i = \mathbf{p}^{i+1} - \mathbf{p}^i
$$

The DIIS method assumes that the final solution can be extrapolated as a linear combination of the current iterative subspace:

$$
\mathbf{p} = \sum_{i=1}^{m} c_i \mathbf{p}^i
$$

The coefficients are obtained by minimization of the error vector

$$
\mathbf{e} = \sum_{i=1}^{m} c_i \mathbf{e}^i
$$

subject to the constraint

$$
\sum_{i=1}^{m} c_i = 1
$$

This leads to the standard Pulay linear system involving the B matrix, where

$$
\mathbf{B}_{ij} = \mathbf{e}_i \cdot \mathbf{e}_j
$$

### Error vector in C-DIIS

The commutator-DIIS (C-DIIS) error vector is built from the requirement that the Fock matrix and density matrix commute in the orthonormal MO basis:

$$
[\mathbf{F'}, \mathbf{D'}] = 0
$$

This can be written in the AO basis as

$$
\mathbf{e}_i = \mathbf{F}_i \mathbf{D}_i \mathbf{S} - \mathbf{S} \mathbf{D}_i \mathbf{F}_i
$$

### Algorithm

- Compute the error matrix in each SCF iteration.
- Build the B matrix from previous error vectors.
- Solve the Pulay linear system for the DIIS coefficients.
- Form the extrapolated Fock matrix and continue the SCF iterations.

[^1]: P. Pulay (1980), "Convergence acceleration of iterative sequences: The case of SCF iteration", [10.1016/0009-2614(80)80396-4](https://doi.org/10.1016/0009-2614(80)80396-4)
