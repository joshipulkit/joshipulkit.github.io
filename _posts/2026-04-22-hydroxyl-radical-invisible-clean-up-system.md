---
layout: post
title: "The Hydroxyl Radical and the Atmosphere’s Self-Cleaning Chemistry"
date: 2026-04-22 00:00:00+0200
description: Why OH helps determine how long methane and many pollutants remain in the air
tags: Climate Atmospheric-Chemistry Science
categories: posts
toc:
  beginning: true
  sidebar: right
---

When people talk about climate and air quality, the conversation usually begins with what we emit: CO<sub>2</sub>, methane, smoke, industrial pollution. Much less attention goes to the other half of the story: what removes those gases from the air after they are emitted.

That second half matters. The atmosphere is not a passive container. It is a chemical reactor. Some gases survive for centuries, some for days, and some for only seconds. One of the main reasons for that difference is a tiny, highly reactive species that most people never hear about: the hydroxyl radical, OH.

OH is often called the atmosphere's detergent. The label is useful, but only up to a point. Detergent sounds simple. Atmospheric chemistry is not. OH helps remove methane and many pollutants, but the same chemistry can also generate tropospheric ozone and secondary aerosols. It is better understood as a central oxidant that governs the fate of many climatically and chemically important trace gases [1,2].

Figure 1 gives the basic picture. Sunlight, ozone, and water vapour generate OH. OH then attacks methane, carbon monoxide, and volatile organic compounds. Those oxidation chains can end in products that are more easily removed from the air, or they can branch toward ozone and aerosol formation. Which path dominates depends on local chemistry, especially nitrogen oxides, temperature, humidity, and the surrounding mix of trace gases.

{% include figure.liquid path="/assets/img/posts/ohradical/oh-self-cleaning-schematic.png" alt="Conceptual diagram showing OH at the center of atmospheric self-cleaning chemistry" caption="Figure 1. A conceptual sketch of how OH sits at the center of atmospheric self-cleaning. Sunlight, ozone, and water help generate OH; OH then reacts with methane, carbon monoxide, and volatile organic compounds, setting off oxidation pathways that can either remove gases from the air or produce consequential by-products such as tropospheric ozone and secondary aerosols. This schematic is based on the chemistry framing in IPCC AR6, Lelieveld et al. (2004), and Price et al. (2025)." %}

This is why OH matters far beyond chemistry textbooks. If you want to understand methane growth, wildfire smoke, surface ozone, or air quality in a warming world, you eventually run into OH.

---

## A radical that matters because it is unstable

OH is a radical, meaning it carries an unpaired electron. That unpaired electron makes it reactive almost by definition. As a result, OH tends to react quickly with other molecules rather than remain unchanged for long.

That is also why OH survives for only about a second in the lower atmosphere [1]. At any instant there is very little of it around, roughly a million molecules per cubic centimetre of air, which is tiny compared with the total number of air molecules in the same volume. But scarcity is not the point here. Speed is. OH reacts, disappears, is regenerated, and keeps the chemistry moving.

The practical consequence is simple:

- If a gas reacts quickly with OH, it is usually short-lived.
- If it reacts slowly, it can persist and accumulate.
- Two gases present at similar concentrations can therefore behave very differently simply because their reaction rates with OH are different.

That is what chemists mean by reactivity. It is not just how much of something is present. It is how fast that something is transformed.

---

## Why society should care about OH

A clear way to understand the significance of OH is to follow methane.

Methane is the second most important anthropogenic greenhouse gas after CO<sub>2</sub>, but unlike CO<sub>2</sub>, it is not simply emitted and left to accumulate indefinitely. Its effective lifetime of roughly nine years is set mainly by reaction with OH in the troposphere [1,3]. If atmospheric OH concentrations were substantially lower, methane's main sink would be weaker. Methane would then remain in the atmosphere for longer. Recent work suggests that global mean OH has remained broadly stable. That makes recent methane growth harder to explain as a change in the sink alone and strengthens the case that emissions have increased.

Figure 2 shows the long rise in atmospheric methane since the early 1980s. The line is familiar. The chemistry underneath it usually is not.

{% include figure.liquid path="/assets/img/posts/ohradical/methane-trend.png" alt="Line chart of global atmospheric methane between 1984 and 2024 with a small inset showing the first OH-initiated oxidation step of methane" caption="Figure 2. Global annual mean atmospheric methane from NOAA's Global Monitoring Laboratory, showing the steady rise from roughly 1650 ppb in the early 1980s to over 1920 ppb by the mid-2020s. The inset highlights the first chemical step in OH's action on methane: the hydrogen abstraction reaction that initiates the oxidation chain eventually converting methane to CO<sub>2</sub> and water. Replotted from NOAA annual mean global CH<sub>4</sub> data (DOI: 10.15138/P8XG-AA10)." %}

But methane is only the most visible example. OH matters because it sits at the start of several atmospheric stories at once:

- It controls much of methane's atmospheric lifetime.
- It oxidizes carbon monoxide and a very large range of volatile organic compounds.
- It helps drive the chemistry that produces tropospheric ozone, which matters for climate, lungs, and crops [1,4].
- It also contributes to the formation of secondary organic aerosols, meaning particles can be created far from the original source gases [4].

The important point is that OH helps determine what these gases become next.

---

## Where OH comes from

At the simplest level, OH is born from sunlight. Ultraviolet radiation breaks ozone apart, producing an electronically excited oxygen atom, O(<sup>1</sup>D). That excited atom can then react with water vapour to produce two OH radicals:

$$
\mathrm{O_3 + h\nu \rightarrow O(^1D) + O_2}
$$

$$
\mathrm{O(^1D) + H_2O \rightarrow 2\,OH}
$$

Those two steps are the main entry point, but not the whole story. In the real atmosphere, OH is constantly recycled through radical chemistry. One important loop is:

- OH reacts with carbon monoxide and forms HO<sub>2</sub>.
- HO<sub>2</sub> reacts with nitric oxide, NO.
- That reaction regenerates OH and keeps the oxidation cycle going [1,2,4].

So the atmosphere does not make OH once and spend it once. It keeps rebuilding it.

This chemistry is strongest in the tropical lower troposphere, where sunlight is intense and humidity is high. It is much weaker in cold, dry air and in polar regions. That matters because a gas emitted in the humid tropics enters a very different oxidative environment from one emitted at high latitude in winter.

This is also why warming matters chemically, not just thermally. More water vapour tends to support OH production. At the same time, warming changes vegetation, fires, and circulation in ways that can either increase OH losses or increase competition for OH from other reactive gases. The net effect is not straightforward.

---

## Why OH is so hard to measure

For something so central, OH is surprisingly hard to observe. The reason is simple: it reacts too fast. Because it disappears within about a second, it never builds up to the concentrations that make CO<sub>2</sub> or methane relatively easy to monitor with a global station network.

That leaves atmospheric chemists with a more difficult toolkit:

- Direct OH measurements, usually laser-based, at specialized field sites and on research aircraft.
- Indirect constraints from gases whose atmospheric loss is dominated by OH.
- Chemical transport models tested against those observations.

Methyl chloroform (CH<sub>3</sub>CCl<sub>3</sub>) played this tracer role for decades because its major atmospheric sink is OH and its industrial history was well constrained [1,3]. As methyl chloroform was phased out, researchers turned increasingly to selected hydrofluorocarbons whose atmospheric removal is also strongly controlled by OH, using them as longer-term constraints on global OH [3].

Aircraft campaigns such as ATom and remote sensing products from NASA Aura have pushed this further. Figure 3 shows one result: a near-global estimate of OH oxidising capacity over remote oceanic regions. The broad pattern is consistent with the expected tropical maximum, strongest in the humid, sunlit tropics and weaker toward colder, drier regions [7].

{% include figure.liquid path="/assets/img/posts/ohradical/nasa-oh-map.jpg" alt="NASA visualization of oxidizing capacity over the remote troposphere" caption="Figure 3. Near-global estimate of tropospheric OH oxidising capacity from the NASA Aura mission. The strong tropical maximum reflects the combination of intense ultraviolet radiation, high humidity, and warm temperatures that drive OH production. This visualization represents one of the first attempts to map OH remotely at near-global scale, a measurement challenge that has only recently become tractable. Image: NASA Aura science feature, 'Mapping Oxidizing Capacity of the Global Remote Troposphere' [7]." %}

This difficulty is not a weakness of the science. It is a consequence of working with a species that is both extremely reactive and extremely short-lived. Confidence in global OH does not come from one perfect measurement. It comes from convergence across tracer inversions, field campaigns, models, and satellite-based constraints [1,3].

---

## What recent science says we understand better

One of the more interesting developments in recent OH work is that part of the apparent mystery may not have been missing chemistry at all. It may have been instrumentation.

In several low-NO<sub>x</sub> field campaigns, measured OH concentrations were much higher than models predicted [4]. Because standard OH recycling is less efficient when NO is scarce, this raised the possibility that some additional OH-regeneration pathway was missing from the accepted chemistry.

Price and co-workers revisited that problem in 2025 [4]. Their conclusion was more measured. Several widely used instruments can register spurious OH under exactly the conditions where the biggest discrepancies had been reported, especially in organic-rich, low-NO<sub>x</sub> air. Once those interferences are corrected, the disagreement shrinks substantially. Figure 4 shows the point clearly. Corrected measurements cluster much closer to the 1:1 line with model results.

{% include figure.liquid path="/assets/img/posts/ohradical/price-2025-fig3.png" alt="Scatter plot of corrected measured OH versus modelled OH showing near 1-to-1 agreement across field environments" caption="Figure 4. Corrected measured OH versus modelled OH concentrations across a range of field environments, from panel (b) of Fig. 3 in Price et al. (2025). After accounting for instrument interferences, measurements cluster near the 1:1 line rather than sitting systematically above it. The residual scatter reflects real variability in local chemistry, not a structural gap in atmospheric theory. Reproduced unchanged from Price et al. (2025), <i>Communications Earth & Environment</i>, under CC BY-NC-ND 4.0." %}

The broader lesson is simple. In atmospheric chemistry, apparent crises sometimes come from chemistry, and sometimes from measurement. The only honest way forward is to work through both carefully.

---

## What remains unresolved

Even with this progress, some important questions remain open.

- **Is global OH stable or changing?** Thompson and colleagues inferred annual mean OH from hydrofluorocarbon observations and found little long-term trend from 2004 to 2021 [3]. Figure 5 is broadly flat, with interannual variability but no obvious sustained drift. If that picture is right, then the post-2007 methane rise is harder to explain as a decline in global OH abundance and easier to interpret as a source-driven problem.

{% include figure.liquid path="/assets/img/posts/ohradical/thompson-2024-fig3.png" alt="Published time series of annual global OH concentrations inferred from hydrofluorocarbons" caption="Figure 5. Annual global mean OH inferred from hydrofluorocarbon observations and model inversions, 2004–2021, from Thompson et al. (2024). The timeseries shows interannual variability but no sustained long-term trend, suggesting that the atmospheric oxidising capacity has been broadly stable over this period. Reproduced from Thompson et al. (2024), <i>Atmospheric Chemistry and Physics</i>, under CC BY 4.0." %}

- **How will OH respond to warming?** This is a harder question than it looks. More water vapour tends to raise OH production through the O(<sup>1</sup>D) + H<sub>2</sub>O pathway. But higher temperatures also drive larger biogenic emissions from vegetation, and many of those compounds consume OH rapidly [5]. Zhu and co-workers show that the balance depends strongly on region, land cover, and emissions scenario, so there is little reason to expect one simple global answer.

- **Can we move beyond global averages?** A single global mean OH value is useful, but it hides the geography. Tropical convective outflow, boreal fire plumes, polluted continental boundary layers, and remote Southern Ocean air all operate under different radical chemistry regimes. Duncan and co-workers argue that progress will increasingly depend on space-based observations with better regional resolution [6].

---

## Why OH matters in a warming atmosphere

Climate change is often framed as a problem of accumulation. That is correct, but incomplete. It is also a problem of chemical processing, and OH sits close to the centre of that story.

Three points matter most here:

- **Methane's warming depends on lifetime as well as emissions.** NOAA's AGGI puts methane's effective radiative forcing at about 0.567 W m<sup>-2</sup> in 2024, roughly 16% of the total from long-lived greenhouse gases [8]. That forcing depends directly on how long methane survives, and that means it depends strongly on OH.
- **Wildfires change chemistry, not just visibility.** Fires inject carbon monoxide, methane, nitrogen oxides, and organic vapours together. Those species compete for OH and can alter how quickly the atmosphere processes smoke and trace gases after a fire.
- **A warmer biosphere changes the oxidizing environment.** As vegetation, humidity, and temperature patterns shift, the emissions and conditions that feed OH chemistry shift with them.

That is why atmospheric lifetimes and chemical transformation matter alongside emissions.

---

## The invisible chemistry behind visible consequences

Most people will never hear about OH in an ordinary climate discussion. They will hear about methane, ozone, wildfire smoke, pollution, and warming. But part of the fate of all of those is shaped by this one short-lived radical cycling through the lower atmosphere.

Some of the most consequential control points in the climate system are not the most obvious ones. They are buried in reaction networks.

We do not know every detail perfectly, and we should not pretend otherwise. But we know enough to say something firm: a full picture of climate and air quality requires both emissions and chemical transformation.

That is the deeper lesson of OH. The atmosphere is not just a background medium. It is an active chemical system, and that system changes as the planet warms.

---

## References

1. IPCC (2021). _Climate Change 2021: The Physical Science Basis_, Working Group I, Chapter 6. [ipcc.ch/report/ar6/wg1/chapter/chapter-6](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-6/)

2. Lelieveld, J., Dentener, F. J., Peters, W. & Krol, M. C. (2004). On the role of hydroxyl radicals in the self-cleansing capacity of the troposphere. _Atmospheric Chemistry and Physics_, 4, 2337-2344. [doi.org/10.5194/acp-4-2337-2004](https://doi.org/10.5194/acp-4-2337-2004)

3. Thompson, R. L., Strode, S. A., Bockmann, K. et al. (2024). Investigating changes in hydroxyl radical (OH) abundance over the 21st century using hydrofluorocarbon observations and model simulations. _Atmospheric Chemistry and Physics_, 24, 1415-1434. [doi.org/10.5194/acp-24-1415-2024](https://doi.org/10.5194/acp-24-1415-2024)

4. Price, D. J., Reed, Z. C., Novelli, A. et al. (2025). Re-assessing hydroxyl radical chemistry in the atmosphere: instrument interferences may explain previous measurement discrepancies. _Communications Earth & Environment_, 6, 315. [nature.com/articles/s43247-025-02308-y](https://www.nature.com/articles/s43247-025-02308-y)

5. Zhu, Q., Zhao, Y., Murray, L. T. et al. (2026). Competing influences of water vapour and biogenic emissions on hydroxyl radical abundance in a warming climate. _Journal of Advances in Modeling Earth Systems_. [doi.org/10.1029/2025MS005248](https://doi.org/10.1029/2025MS005248)

6. Duncan, B. N., Oman, L. D., Allen, D. J. et al. (2024). Perspectives on space-based observations of tropospheric OH and HO<sub>2</sub>. _EGUsphere_ preprint. [doi.org/10.5194/egusphere-2024-2331](https://doi.org/10.5194/egusphere-2024-2331)

7. NASA Aura (2019). Mapping Oxidizing Capacity of the Global Remote Troposphere. [science.nasa.gov/mission/aura/mapping-oxidizing-capacity-of-the-global-remote-troposphere](https://science.nasa.gov/mission/aura/mapping-oxidizing-capacity-of-the-global-remote-troposphere/)

8. NOAA Global Monitoring Laboratory (2025). _Annual Greenhouse Gas Index (AGGI)_. [gml.noaa.gov/aggi/aggi.html](https://gml.noaa.gov/aggi/aggi.html)

9. NOAA Global Monitoring Laboratory (2026). Global annual mean methane data. [doi.org/10.15138/P8XG-AA10](https://doi.org/10.15138/P8XG-AA10)
