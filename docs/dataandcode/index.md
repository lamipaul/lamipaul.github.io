---
hide:
  - navigation
  - toc
---

<div class="reference-layout" markdown>

<aside class="author-card">
  <img src="../assets/images/profile.png" alt="Paul Best">
  <h2>Paul Best</h2>
  <p>Researcher in animal communication and computational bioacoustics</p>
  <ul>
    <li><a href="mailto:paul.best@univ-amu.fr">Email</a></li>
    <li><a href="https://orcid.org/0000-0003-4996-0726">ORCID</a></li>
    <li><a href="https://scholar.google.com/citations?user=2NFE_I4AAAAJ">Google Scholar</a></li>
  </ul>
</aside>

<div class="section-list" markdown>

# Data and code

## Multimodal interaction analysis

Analysing structure and patterns in multimodal interactions is challenging because signals often overlap. The [Multi-Interaction tool](https://osf.io/zdruq/overview) supports analyses based on behavioural annotations from BORIS or ELAN. Implementation details and motivation are described in the [associated publication](https://doi.org/10.1016/j.anbehav.2026.123526).

## Marmaudio

Marmosets are a useful model in neuroscience and voice-perception research. A [large-scale dataset of marmoset vocalisations](https://doi.org/10.5281/zenodo.15017207) is available with an [associated article](https://doi.org/10.1038/s41597-025-04951-8).

## Fundamental frequency estimation

Extracting frequency contours is a common challenge in bioacoustic analysis.

- Use the [Python interface](https://github.com/mim-team/bioacoustic_F0_estimation) to estimate fundamental frequency and detect tonal signals.
- Evaluate estimators with the [cross-species benchmark dataset](https://doi.org/10.5061/dryad.prr4xgxw8).
- Read the [associated publication](https://doi.org/10.1080/09524622.2025.2500380).

## Cetacean vocalisation detection

[Ceta-CNNs](https://gitlab.lis-lab.fr/paul.best/ceta-cnns) is a suite of pretrained convolutional neural networks for detecting cetacean vocalisations in passive recordings. Covered species include orcas, humpback whales, delphinid whistles, fin whales, sperm whales, and blue whales.

## Vocalisation clustering based on deep embeddings

Animal vocalisations typically fall into discrete categories, including individual signatures and call types.

- Use the [repertoire embedder](https://gitlab.lis-lab.fr/paul.best/repertoire_embedder) to cluster vocalisations.
- Evaluate models with the [cross-species benchmark dataset](https://doi.org/10.6084/m9.figshare.23138210.v1).
- Read the [associated publication](https://doi.org/10.1371/journal.pone.0283396).

</div>
</div>
