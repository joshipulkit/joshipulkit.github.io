---
date: 2020-06-23
title: DIIS: A method to accelerate SCF convergence
tags: [DIIS, SCF Convergence, Theory]
---

### Introduction
---

Direct Inversion of the Iterative Subspace (DIIS) is a method first proposed by Pulay[^1] which accelerates the convergence of a normal SCF procedure.

### Method
---

Iterative procedures can give us a set of trial vectors {$\mathbf{p}^i$}. Thus we can form a residual (error) term between two sucessive iterations.

$$\mathbf{e}^i = \mathbf{p}^{i+1} - \mathbf{p}^i$$

The DIIS method assumes that the final solution can be extrapolated as the linear combination of the current subspace generated from previous iterations.

$$\mathbf{p} = \sum_{i=1}^{m} c_i \mathbf{p}^i$$

The coefficients are obtained by minimisation of the error vector obtained by,

$$\mathbf{e} = \sum_{i=1}^{m} c_i \mathbf{e}^i$$

We can see that the motivation for minimising the error vector comes from,
$$\mathbf{p} = \sum_{i=1}^{m} c_i \left( \mathbf{p}^f + \mathbf{e}^i\right) = \mathbf{p}^f \sum_{i=1}^{m} c_i  + \sum_{i=1}^{m} c_i \mathbf{e}^i$$

Thus, for $\mathbf{p} = \mathbf{p}^f$:
$$\sum_{i=1}^{m} c_i = 1$$
and,
$$\sum_{i=1}^{m} c_i \mathbf{e}^i = 0$$

Let's construct a Lagrangian to minimise the norm of error vector, $\langle \mathbf{e} | \mathbf{e} \rangle = \sum_{i,j = 1}^{m} c_i^* c_j \langle e_i | e_j \rangle $ under the constraint that coefficients should sum to 1,

$$\mathcal{L} = \mathbf{c}^\dagger \mathbf{B} \mathbf{c} - \lambda \left( 1-\sum_{i=1}^m c_i \right)$$

where, $\mathbf{B}_{ij} = \mathbf{e}_i \cdot \mathbf{e}_j$

$$\frac{\partial\mathcal{L}}{\partial c_k} = 0 = 2 \sum_{i=1}^m c_i B_{ki} -\lambda$$

and we solve the following set of linear equations to obtain the coefficients for DIIS extrapolation:

$$\begin{pmatrix} \mathbf{B}\_{11} & \mathbf{B}\_{12} & \dots & \mathbf{B}\_{1m} & -1 \\\ \mathbf{B}\_{21} & \mathbf{B}\_{22} & \dots & \mathbf{B}\_{2m} & -1 \\\ \dots & \dots & \dots & \dots & \dots \\\ \mathbf{B}\_{m1} & \mathbf{B}\_{m2} & \dots & \mathbf{B}\_{mm} & -1 \\\ -1 & -1 & \dots & -1 & 0 \end{pmatrix}
\begin{pmatrix} c_1 \\\ c_2 \\\ \dots \\\ c_m \\\ \lambda \end{pmatrix} = 
\begin{pmatrix} 0 \\\ 0 \\\ \dots \\\ 0 \\\ -1 \end{pmatrix}$$

### Error Vector in C-DIIS method
---

The C-DIIS (Commutator-DIIS) also known as Pulay's DIIS uses the following condition[^2] to form the residual (error) vector. The Fock matrix and the density matrix should commute in the orthonormal MO basis.

*(**Note:** We will use notations like $\mathbf{F'}, \mathbf{D'}$ for matrices in MO basis and $\mathbf{F}, \mathbf{D}$ for matrices in AO basis.)*

$$[\mathbf{F'},\mathbf{D'}] = \mathbf{F'}\mathbf{D'} - \mathbf{D'}\mathbf{F'} = 0$$

Thus, the error after each iteration is defined as,

$$\mathbf{e}_i = \mathbf{F'}_i \mathbf{D'}_i - \mathbf{D'}_i \mathbf{F'}_i$$

Let's look at the commutator in the AO basis:

Roothan's equation, $\mathbf{F}\mathbf{C} = \mathbf{S}\mathbf{C}\varepsilon$ can be transformed into an eigenvalue problem in the MO basis using the orthonormality condition, $\mathbf{C^\dagger}\mathbf{S}\mathbf{C} = \mathbf{1}$ and, thus we obtain,

$$\mathbf{F'}\mathbf{C'} = \mathbf{C'}\varepsilon$$

where,

$$\mathbf{F'} = \mathbf{S^{-\frac{1}{2}}}^\dagger \mathbf{F}\ \mathbf{S^{-\frac{1}{2}}}$$
and,
$$\mathbf{C} = \mathbf{S^{-\frac{1}{2}}} \mathbf{C'}$$

The density matrix in AO basis is,
$$\mathbf{D} = \mathbf{C}\mathbf{C^\dagger}$$
and in MO basis:
$$\mathbf{D'} = \mathbf{C'}\mathbf{C'^\dagger}$$

Thus, we can now have a tranformation of density matrix from MO to AO basis.

$$\mathbf{D'} = (\mathbf{S^{-\frac{1}{2}}})^{-1} \mathbf{D}\ (\mathbf{S^{-\frac{1}{2}}}^\dagger)^{-1}$$

For simplicity sake, let $\mathbf{X} = \mathbf{S^{-\frac{1}{2}}}$, and we know that $\mathbf{X}$ is Hermitian.
Thus we have,
$$\mathbf{F'} = \mathbf{X} \mathbf{F} \mathbf{X}$$
$$\mathbf{D'} = \mathbf{X}^{-1} \mathbf{D} \mathbf{X}^{-1}$$

Substituting these in the commutator in the MO basis, we get,

$$\mathbf{X} \mathbf{F} \mathbf{D} \mathbf{X}^{-1} - \mathbf{X}^{-1} \mathbf{D} \mathbf{F} \mathbf{X} = 0$$

Pre and post-multiplying with $\mathbf{X}^{-1}$:

$$\mathbf{X}^{-1} \mathbf{X} \mathbf{F} \mathbf{D} \mathbf{X}^{-1} \mathbf{X}^{-1} - \mathbf{X}^{-1} \mathbf{X}^{-1} \mathbf{D} \mathbf{F} \mathbf{X} \mathbf{X}^{-1} = 0$$

Thus, we obtain the commutator in the AO basis as:
$$\mathbf{F'}\mathbf{D'} - \mathbf{D'}\mathbf{F'} = \mathbf{F} \mathbf{D} \mathbf{S} - \mathbf{S} \mathbf{D} \mathbf{F} = 0$$

Hence, we can define the error vector in AO basis as:
$$\mathbf{e}_i = \mathbf{F}_i \mathbf{D}_i \mathbf{S} - \mathbf{S} \mathbf{D}_i \mathbf{F}_i$$

### Algorithm
---

* Compute the error matrix using $\mathbf{e}_i = \mathbf{F}_i \mathbf{D}_i \mathbf{S} - \mathbf{S} \mathbf{D}_i \mathbf{F}_i$ in each iteration.
* From the B matrix using error vectors such that, $\mathbf{B}\_{ij} = \mathbf{e}\_i \cdot \mathbf{e}\_j$ and solve for the following set of linear equations,

    $$\begin{pmatrix} \mathbf{B}\_{11} & \mathbf{B}\_{12} & \dots & \mathbf{B}\_{1m} & -1 \\\ \mathbf{B}\_{21} & \mathbf{B}\_{22} & \dots & \mathbf{B}\_{2m} & -1 \\\ \dots & \dots & \dots & \dots & \dots \\\ \mathbf{B}\_{m1} & \mathbf{B}\_{m2} & \dots & \mathbf{B}\_{mm} & -1 \\\ -1 & -1 & \dots & -1 & 0 \end{pmatrix}
    \begin{pmatrix} c_1 \\\ c_2 \\\ \dots \\\ c_m \\\ \lambda \end{pmatrix} = 
    \begin{pmatrix} 0 \\\ 0 \\\ \dots \\\ 0 \\\ -1 \end{pmatrix}$$

* Compute the new extrapolated Fock matrix as the following and repeat the SCF procedure.
$$\mathbf{F} = \sum_{i=1}^{m} c_i \mathbf{F}_i$$


*You can find a python code for DIIS method [here](../../codes/diis-python-code).\
If you have have any queries regarding the article, feel free to [write to me](../../contact).*


<!-- references begin -->

### References

[^1]: P. Pulay (1980) "Convergence accelaration of iterative sequences: The case of SCF iteration"\
Ref: [https://doi.org/10.1016/0009-2614(80)80396-4](https://doi.org/10.1016/0009-2614(80)80396-4)

[^2]: P. Pulay (1982) "Improved SCF convergence accelaration"\
Ref: [https://doi.org/10.1002/jcc.540030413](https://doi.org/10.1002/jcc.540030413)