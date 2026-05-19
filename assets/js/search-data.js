// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Selected publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "Current research directions, methods, and software work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses, tutorials, and supporting material — grouped by year.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-bookshelf",
          title: "Bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-the-hydroxyl-radical-and-the-atmosphere-s-self-cleaning-chemistry",
        
          title: "The Hydroxyl Radical and the Atmosphere’s Self-Cleaning Chemistry",
        
        description: "Why OH helps determine how long methane and many pollutants remain in the air",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/hydroxyl-radical-invisible-clean-up-system/";
          
        },
      },{id: "post-what-a-chemist-keeps-wanting-to-ask-about-climate-policy",
        
          title: "What a Chemist Keeps Wanting to Ask About Climate Policy",
        
        description: "A personal essay on science, policy, and the limits we keep ignoring",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/planetary-boundaries-essay/";
          
        },
      },{id: "post-a-comprehensive-overview-of-density-functional-theory",
        
          title: "A comprehensive overview of density functional theory",
        
        description: "a longer PDF note on density functional theory fundamentals and context",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/notes/dft_comprehensive.pdf";
          
        },
      },{id: "post-keep-ubuntu-20-04-or-its-derivatives-updated-and-clean",
        
          title: "Keep Ubuntu 20.04 (or its derivatives) updated and clean",
        
        description: "a short practical note for updating and cleaning Debian-based systems",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/keep-ubuntu-updated/";
          
        },
      },{id: "post-diis-a-method-to-accelerate-scf-convergence",
        
          title: "DIIS: A method to accelerate SCF convergence",
        
        description: "direct inversion in the iterative subspace for faster SCF convergence",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/diis-scf-convergence/";
          
        },
      },{id: "books-density-functional-theory-of-atoms-and-molecules",
          title: 'Density Functional Theory of Atoms and Molecules',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/dft_atoms_mols/";
            },},{id: "books-density-functional-theory-an-advanced-course",
          title: 'Density Functional Theory - An Advanced Course',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/dft_engel_dreizler/";
            },},{id: "books-interacting-electrons-theory-and-computational-approaches",
          title: 'Interacting Electrons, Theory and Computational Approaches',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/interacting_electrons/";
            },},{id: "books-the-theory-of-intermolecular-forces",
          title: 'The Theory of Intermolecular Forces',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/intermolecular_stone/";
            },},{id: "books-modern-quantum-chemistry-introduction-to-advanced-electronic-structure-theory",
          title: 'Modern Quantum Chemistry, Introduction to Advanced Electronic Structure Theory',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/modern_quantum_chemistry/";
            },},{id: "books-non-hermitian-quantum-mechanics",
          title: 'Non-Hermitian Quantum Mechanics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/non_hermitian_qm/";
            },},{id: "books-time-dependent-density-functional-theory-concepts-and-applications",
          title: 'Time-Dependent Density-Functional Theory, Concepts and Applications',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/time_dependent_dft/";
            },},{id: "news-our-paper-on-generalized-perturbative-single-excitation-corrections-for-open-shell-noncovalent-interactions-was-accepted-in-j-chem-phys",
          title: 'Our paper on generalized perturbative single-excitation corrections for open-shell noncovalent interactions was accepted...',
          description: "",
          section: "News",},{id: "news-our-jpcl-paper-on-negative-ion-resonances-was-selected-as-the-journal-cover-for-the-may-9-2024-issue",
          title: 'Our JPCL paper on negative ion resonances was selected as the journal cover...',
          description: "",
          section: "News",},{id: "news-presented-my-phd-synopsis-seminar-at-tifr-mumbai-summarising-five-years-of-work-on-fifth-rung-functionals",
          title: 'Presented my PhD synopsis seminar at TIFR Mumbai, summarising five years of work...',
          description: "",
          section: "News",},{id: "news-awarded-anrf-serb-international-travel-support-to-attend-the-molecular-electronic-structure-mes-conference",
          title: 'Awarded ANRF/SERB international travel support to attend the Molecular Electronic Structure (MES) Conference....',
          description: "",
          section: "News",},{id: "news-awarded-a-csir-international-travel-grant-to-attend-the-turbomole-today-and-tomorrow-meeting",
          title: 'Awarded a CSIR international travel grant to attend the Turbomole: Today and Tomorrow...',
          description: "",
          section: "News",},{id: "news-spoke-at-turbomole-today-and-tomorrow-on-beyond-rpa-corrections-for-open-shell-intermolecular-interactions-and-on-the-density-functional-and-post-density-functional-methods-i-m-now-implementing-inside-turbomole",
          title: 'Spoke at Turbomole: Today and Tomorrow on beyond-RPA corrections for open-shell intermolecular interactions,...',
          description: "",
          section: "News",},{id: "news-talk-at-the-molecular-electronic-structure-mes-conference-on-exact-exchange-and-dynamical-long-range-polarization-for-negative-ion-resonances",
          title: 'Talk at the Molecular Electronic Structure (MES) Conference on exact exchange and dynamical...',
          description: "",
          section: "News",},{id: "news-defended-my-phd-thesis-at-tifr-mumbai-title-fifth-rung-density-functionals-for-open-shell-intermolecular-interactions-and-negative-ion-resonances",
          title: 'Defended my PhD thesis at TIFR Mumbai. Title: Fifth-Rung Density Functionals for Open-Shell...',
          description: "",
          section: "News",},{id: "news-started-a-postdoc-with-prof-marek-sierka-s-computational-materials-science-group-at-friedrich-schiller-universität-jena-implementing-density-functional-and-post-density-functional-methods-in-turbomole",
          title: 'Started a postdoc with Prof. Marek Sierka’s Computational Materials Science group at Friedrich-Schiller-Universität...',
          description: "",
          section: "News",},{id: "news-presented-work-on-density-functional-embedding-for-realistic-environments-at-the-noa-meeting-spring-2025-dornburg-germany",
          title: 'Presented work on density-functional embedding for realistic environments at the NOA Meeting Spring...',
          description: "",
          section: "News",},{id: "news-a-comprehensive-overview-of-density-functional-theory-is-now-available-in-the-blog-section",
          title: 'A comprehensive overview of density functional theory is now available in the blog...',
          description: "",
          section: "News",},{id: "projects-density-functional-embedding",
          title: 'Density Functional Embedding',
          description: "embedding theory for realistic materials and condensed-phase chemistry",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_density-functional-embedding/";
            },},{id: "projects-negative-ion-resonances",
          title: 'Negative Ion Resonances',
          description: "temporary anions, metastable states, and open-shell interactions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_negative-ion-resonances/";
            },},{id: "projects-intermolecular-interactions",
          title: 'Intermolecular Interactions',
          description: "beyond-RPA corrections for noncovalent interactions in open- and closed-shell dimers",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_intermolecular-interactions/";
            },},{id: "teachings-quantum-chemistry",
          title: 'Quantum Chemistry',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2019-qm-tifr/";
            },},{id: "teachings-symmetry-in-chemistry",
          title: 'Symmetry in Chemistry',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2021-symmetry-tifr/";
            },},{id: "teachings-algorithmen-des-wissenschaftlichen-rechnens-algorithms-of-scientific-computing",
          title: 'Algorithmen des Wissenschaftlichen Rechnens (Algorithms of Scientific Computing)',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2025-algorithms-scietific-computing-fsu/";
            },},{id: "teachings-datenverarbeitung-und-maschinelles-lernen-data-processing-and-machine-learning",
          title: 'Datenverarbeitung und Maschinelles Lernen (Data Processing and Machine Learning)',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2025-data-processing-ml/";
            },},{id: "teachings-theoretisch-chemische-grundlagen-der-materialwissenschaft-theoretical-chemical-foundations-of-materials-science",
          title: 'Theoretisch-chemische Grundlagen der Materialwissenschaft (Theoretical Chemical Foundations of Materials Science)',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2025-theoretical-qm-materials/";
            },},{id: "teachings-wissenschaftliche-recherche-amp-präsentation-scientific-research-amp-presentation",
          title: 'Wissenschaftliche Recherche &amp;amp; Präsentation (Scientific Research &amp;amp; Presentation)',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2026-scientific-communication-presentation/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv_pulkitjoshi.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%75%6C%6B%69%74.%6A%6F%73%68%69@%75%6E%69-%6A%65%6E%61.%64%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/joshipulkit", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/joshipulkit", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-2138-6662", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Pulkit-Joshi/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=rqIYelAAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.uni-jena.de/en", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/joshipulkit_", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
