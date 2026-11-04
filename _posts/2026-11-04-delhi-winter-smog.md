---
layout: post
title: "How Gases Add to Delhi's Winter Particle Pollution"
date: 2026-11-04 00:00:00+0100
description: How a lid of warm air, ammonia and two acid gases make about a third of the mass of Delhi's fine winter particles, and what that means for cleaner air
tags: Air-Quality Atmospheric-Chemistry Science
categories: posts
featured: true
toc:
  beginning: true
  sidebar: right
---

Every winter the air quality in Delhi becomes much worse than in the rest of the year, and the usual explanation is smoke from farm fires to the north-west, from traffic and burning rubbish, and for a few nights around Diwali, from fireworks. The number people follow through the winter is PM2.5, the mass of particles smaller than 2.5 micrometres across, about a thirtieth of the width of a human hair. Particles of this size are small enough to reach deep into the lungs, and high concentrations of them are associated with respiratory and cardiovascular disease [5]. They also scatter sunlight, which is why a polluted day looks grey and a heavy episode can be seen from space (Figure 1).

This post focuses on three invisible gases that contribute to particle material: ammonia, nitric acid and hydrogen chloride. Particles are tiny solid or liquid specks suspended in air, gases mix with the air as individual molecules, and smoke contains both. Some particle material forms in the air from gases, and cold conditions favour the two salts discussed here. Reducing burning can lower both particle and gas emissions, but controls that capture only particles leave the gases that go on to form particles untreated. This post explains how weak vertical mixing, low temperatures and reactions between gases contribute to Delhi's winter particle pollution.

{% include figure.liquid path="/assets/img/posts/delhi-winter-smog/fig1_nasa_igp_haze_20241103_annotated.jpg" alt="Satellite image of smoke plumes and grey haze filling the plains of Pakistan and northern India, with Lahore and Delhi marked and the snow-covered Himalaya along the top right" caption="Figure 1. Smoke plumes and haze over the plains of Pakistan and northern India on 3 November 2024, seen by the VIIRS instrument on the Suomi NPP satellite. The haze stops at the Himalaya. NASA Earth Observatory image by Michala Garrison [1]." %}

## A lid over the plains

On a clear winter night, the ground cools the air immediately above it. Warmer air higher up limits vertical mixing, allowing pollution to accumulate near the surface. This is a temperature inversion, and it acts as a lid. Whatever is released near the ground has only a thin layer of air to spread into.

The depth of this mixing layer over Delhi has been estimated from weather data [2]. On summer afternoons it reaches about 2,500 metres, while at its winter lows it is under 100 metres, and winter winds are weaker too, at 1 to 3 metres per second against 3 to 6 in summer. With the same emissions all year, a model gave concentrations 40 to 80% above the yearly average in November, December and January [2].

{% include figure.liquid path="/assets/img/posts/delhi-winter-smog/fig2_inversion_lid.png" alt="Two columns of air over the same Delhi skyline. On a summer afternoon the particles spread through a layer about 2,500 metres deep. On a winter night the same particles are confined to a layer under 100 metres deep beneath warmer air." caption="Figure 2. The same particles confined to a layer about twenty-five times shallower, comparing a summer afternoon with a winter minimum. On a summer afternoon pollution mixes through a layer about 2,500 metres deep; on a still winter night it is held under 100 metres by warmer air above. The small curves show air temperature against height. Mixing heights and wind speeds from Guttikunda and Gurjar [2]." %}

Measurements are consistent with this picture: at the Delhi Aerosol Supersite, particles smaller than one micrometre were measured for sixteen months, and in winter their mass averaged about 210 micrograms per cubic metre of air, against about 50 in the monsoon [3]. Over the whole campaign, organic matter made up about 54% of the mass, black carbon 10%, and inorganic salts (chloride, ammonium, nitrate and sulphate) 36%. In the cooler months ammonium, chloride and nitrate were each about a tenth of the mass, and the chloride levels are among the highest reported anywhere [3].

Soot, road dust and smoke are emitted as particles, but ammonium nitrate and ammonium chloride are the salts of gases. Ammonium, chloride and nitrate together accounted for about three tenths of the measured submicron mass in cooler months [3], and the following sections explain how gases can contribute to these components. Sulphate and part of the organic matter also form in the air, but the two salts followed here are the ones most sensitive to temperature.

## Cold nights turn gases into particles

The first of these gases is ammonia, which in India comes largely from farming, from livestock and fertiliser [5]. The second is nitric acid, which is made in the air from the nitrogen oxides in exhaust. One daytime route forms nitric acid when nitrogen dioxide reacts with the hydroxyl radical, the air's main oxidant, described [in an earlier post](/blog/2026/hydroxyl-radical-invisible-clean-up-system/).

Ammonia is a base and nitric acid is an acid, and when they meet they form a salt:

NH<sub>3</sub> (gas) + HNO<sub>3</sub> (gas) ⇌ NH<sub>4</sub>NO<sub>3</sub> (particle)

The double arrow means that the reaction can proceed in either direction: the gases can form the salt, and the salt can release the gases again. Forming solid ammonium nitrate from ammonia and nitric acid releases heat, so cooling favours the solid salt, which is an example of Le Chatelier's principle. In practice the gases enter particles that already exist, rather than making new ones.

At lower temperatures, the solid salt can remain stable at a lower product of the two gas levels. With the constants tabulated for the aerosol model ISORROPIA II [4], the product of ammonia and nitric acid concentrations needed to hold the solid salt together is 53 times smaller at 10 °C than at 25 °C (Figure 3). This is my own calculation, and it describes equilibrium with the dry salt, not the amount of particle material formed, which depends on how much ammonia and acid the air holds. During humid winter episodes, particles can contain water, so their uptake of gases also depends on their composition and acidity, and hydrogen chloride dissolves straight into them [5]. For a given supply of these gases, cooling generally favours their transfer into particles.

{% include figure.liquid path="/assets/img/posts/delhi-winter-smog/fig3_dissociation_constant_vs_temperature.png" alt="Line chart on a logarithmic scale showing the dissociation constants of ammonium nitrate and ammonium chloride rising steeply with temperature between 0 and 40 degrees Celsius, with the values at 10 and 25 degrees marked" caption="Figure 3. Dissociation constants of solid ammonium nitrate and ammonium chloride against air temperature. The constant is the product of the two gas concentrations, in parts per billion at sea-level pressure, at which solid and gas are in balance: where the product lies above the line the solid is favoured, below it the solid evaporates. Between 25 °C and 10 °C the constant falls 53-fold for ammonium nitrate and 43-fold for ammonium chloride. Computed from the constants of Fountoukis and Nenes [4] for the dry salts." %}

## Chlorine, from fireworks to fog

Hydrogen chloride is the other acid gas considered here, and chlorine-containing fireworks, such as those of Diwali on 8 November this year, are one possible source. For most firework colours, the light does not come from bare metal atoms but from small molecules that form in the flame: strontium monochloride and hydroxide for red, barium monochloride and hydroxide for green, and copper monochloride for blue [9]. Each molecule emits at wavelengths set by its electronic structure (Figure 4). To make those molecules, some fireworks contain chlorine-supplying ingredients such as polyvinyl chloride, or PVC [9], which can release hydrogen chloride when heated.

{% include figure.liquid path="/assets/img/posts/delhi-winter-smog/fig4_firework_emitters.png" alt="Emission lines of strontium chloride, strontium hydroxide, sodium, barium chloride, barium hydroxide and copper chloride drawn in their own colours above a visible-spectrum strip" caption="Figure 4. Emission wavelengths of the main light-emitting atoms and molecules in coloured firework flames, from Steinhauser and Klapötke [9]. The chlorine-bearing emitters are marked." %}

For the rest of the year Delhi's hydrogen chloride comes from burning biomass and probably waste that contains plastic, and from industry [5]. Hydrogen chloride behaves in the same way as nitric acid when it meets ammonia:

NH<sub>3</sub> (gas) + HCl (gas) ⇌ NH<sub>4</sub>Cl (particle)

and its dissociation constant falls almost as steeply on cooling (Figure 3).

Chloride is the largest single inorganic negative ion in Delhi's particles and balances about half of the ammonium [5]. For the winter of 2017 to 2018, a standard model without chloride chemistry predicted sulphate as the main partner of ammonium instead [6].

Chloride has a second effect, because ammonium chloride takes up water from humid air. Hydrogen chloride and water can enter particles together, increasing their size and light scattering and contributing to haze and, under suitable conditions, fog [5]. About half of Delhi's winter loss of visibility has been attributed to this mechanism [5].

## What this means for cleaner winters

Smoke remains a large part of the problem: a study that traced smoke from the burning fields into Delhi attributed between 7% and 78% of the highest PM2.5 increases to fires, depending on the year and the emission estimate [7]. Firework-related emissions accounted for about 32% of the measured particle oxidative potential during 26 to 29 October 2019, rising to 72% on Diwali night [8]. This laboratory test measures how quickly particles consume a reagent called DTT, as an indicator of their capacity to drive oxidation in the body. These episodic sources add to pollution from ongoing emissions, weak dispersion and chemical formation of particle material.

If a good part of the winter particle mass forms in the air, cutting smoke alone will not be enough, and the gases that form the salts, ammonia, nitrogen oxides and hydrogen chloride, matter as well.

Ammonia may be the hardest of the three to reduce, because its sources are diverse and spread across the whole region [6], and under the conditions modelled in [5], a reduction of more than half in total ammonia plus ammonium was needed to lower the fraction of chloride present in particles. The emission estimates also need work: in the model for the 2017 to 2018 winter, agreement improved when hydrogen chloride emissions were tripled relative to the model's already scaled base case and ammonia emissions were reduced to one third, although discrepancies remained [6].

Based on this chemistry, the following measures would help Delhi and the rest of the plain. They are my suggestions, drawn from the papers above, not measures those papers tested.

- **Stop open burning of waste, especially plastic.** Burning waste containing chlorine-bearing plastics can release hydrogen chloride, whose uptake can substantially increase particle water content [5].
- **Control hydrogen chloride and nitrogen oxides from industry and engines all year.** Chloride capture at industrial plants and emission standards for vehicles and generators lower the winter baseline rather than the peaks.
- **Coordinate pollution controls across the Indo-Gangetic Plain.** Emissions can move between cities and states, and the ammonia sources are spread across the whole region [6], so action in Delhi alone cannot fix the winter baseline.
- **Measure the gases, not only PM2.5.** Year-round measurements of ammonia, hydrogen chloride and particle chloride would help test and improve estimates of emissions [6].
- **Start on ammonia, but expect a small effect at first.** Fertiliser management and manure handling reduce ammonia, and the chloride held in particles will not fall much until the cut is large [5], but every salt here needs ammonia, so the cut is still worth making.
- **Reduce the Diwali and crop-fire peaks.** I suggest reducing firework use, or moving to chlorine-free fireworks [9], and supporting alternatives to rice-straw burning to address these episodic sources [7, 8].

## Summary

In winter, a lid of warm air holds Delhi's emissions near the ground, and on cold, still nights the chemistry turns part of the gases from fields, vehicles, rubbish fires and chimneys into particles, so cleaner winters need less smoke and also fewer of the gases that become particles after they are emitted.

## References

1. Voiland, A. (2024). Smoky Skies Over the Indo-Gangetic Plain. _NASA Earth Observatory_, Image of the Day, 5 November 2024. [science.nasa.gov](https://science.nasa.gov/earth/earth-observatory/smoky-skies-over-the-indo-gangetic-plain-153540/)

2. Guttikunda, S. K. & Gurjar, B. R. (2012). Role of meteorology in seasonality of air pollution in megacity Delhi, India. _Environmental Monitoring and Assessment_, 184, 3199-3211. [doi.org/10.1007/s10661-011-2182-8](https://doi.org/10.1007/s10661-011-2182-8)

3. Gani, S., Bhandari, S., Seraj, S., Wang, D. S., Patel, K., Soni, P., Arub, Z., Habib, G., Hildebrandt Ruiz, L. & Apte, J. S. (2019). Submicron aerosol composition in the world's most polluted megacity: the Delhi Aerosol Supersite study. _Atmospheric Chemistry and Physics_, 19, 6843-6859. [doi.org/10.5194/acp-19-6843-2019](https://doi.org/10.5194/acp-19-6843-2019)

4. Fountoukis, C. & Nenes, A. (2007). ISORROPIA II: a computationally efficient thermodynamic equilibrium model for K<sup>+</sup>-Ca<sup>2+</sup>-Mg<sup>2+</sup>-NH<sub>4</sub><sup>+</sup>-Na<sup>+</sup>-SO<sub>4</sub><sup>2-</sup>-NO<sub>3</sub><sup>-</sup>-Cl<sup>-</sup>-H<sub>2</sub>O aerosols. _Atmospheric Chemistry and Physics_, 7, 4639-4659. [doi.org/10.5194/acp-7-4639-2007](https://doi.org/10.5194/acp-7-4639-2007)

5. Gunthe, S. S., Liu, P., Panda, U. et al. (2021). Enhanced aerosol particle growth sustained by high continental chlorine emission in India. _Nature Geoscience_, 14, 77-84. [doi.org/10.1038/s41561-020-00677-x](https://doi.org/10.1038/s41561-020-00677-x)

6. Pawar, P. V., Ghude, S. D., Govardhan, G. et al. (2023). Chloride (HCl/Cl<sup>-</sup>) dominates inorganic aerosol formation from ammonia in the Indo-Gangetic Plain during winter: modeling and comparison with observations. _Atmospheric Chemistry and Physics_, 23, 41-59. [doi.org/10.5194/acp-23-41-2023](https://doi.org/10.5194/acp-23-41-2023)

7. Cusworth, D. H., Mickley, L. J., Sulprizio, M. P. et al. (2018). Quantifying the influence of agricultural fires in northwest India on urban air pollution in Delhi, India. _Environmental Research Letters_, 13, 044018. [doi.org/10.1088/1748-9326/aab303](https://doi.org/10.1088/1748-9326/aab303)

8. Puthussery, J. V., Dave, J., Shukla, A. et al. (2022). Effect of biomass burning, Diwali fireworks, and polluted fog events on the oxidative potential of fine ambient particulate matter in Delhi, India. _Environmental Science & Technology_, 56, 14605-14616. [doi.org/10.1021/acs.est.2c02730](https://doi.org/10.1021/acs.est.2c02730)

9. Steinhauser, G. & Klapötke, T. M. (2008). "Green" pyrotechnics: a chemists' challenge. _Angewandte Chemie International Edition_, 47, 3330-3347. [doi.org/10.1002/anie.200704510](https://doi.org/10.1002/anie.200704510)
