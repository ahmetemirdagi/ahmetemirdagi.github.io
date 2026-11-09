---
layout: magazine-page
title: "CV"
permalink: /cv/
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* **Ph.D. in Electrical and Computer Engineering**, Georgia Institute of Technology, 2024 – present
  * Advisor: Prof. Omer T. Inan
* **M.S. in Electrical and Computer Engineering**, Georgia Institute of Technology, 2024 – 2026
  * GPA: 4.0/4.0
  * Thesis: *Interpretable Deep Transfer Learning for Non-Invasive Assessment of Knee Osteoarthritis Via Acoustic Emissions*
* **B.S. in Electrical and Electronics Engineering and Physics (double major)**, Koç University, 2018 – 2024
  * GPA: 3.85/4.00
  * Student, Electrical and Electronic Engineering, Yonsei University, Seoul, South Korea, 2022 – 2023

Research experience
======

* Jan 2024 – Present: **Graduate Researcher**
  * **Inan Research Lab, Georgia Institute of Technology**, Atlanta, GA
  * Leading signal-quality-aware fusion of physiological foundation models for detecting low cardiac output syndrome (LCOS) in infants after congenital heart surgery.
  * Developed EffSCG, an efficient inference framework that accelerates diffusion-based seismocardiogram denoisers for real-time use on resource-constrained wearable devices, with 41× inference acceleration and 75% memory reduction (IEEE JBHI).
  * Building generative models for synthesizing cardiovascular signals such as SCG; contributed to cylindrical geodesic flow matching for physiological signal translation (NeurIPS 2026).
  * Contributed to wearable musculoskeletal sensing research, including domain adaptation and statistical analysis of joint acoustic emissions.
  * Supervisor: **Prof. Omer T. Inan**

* Oct 2023 – Oct 2024: **AI Research Engineer**
  * **Codeway**, Istanbul, Turkey
  * Continue to collaborate with the Codeway AI Research team since Oct 2024.
  * Adapted large image-editing foundation models with LoRA for data-efficient CT metal artifact reduction using as few as 16 paired examples (first author, CVPR 2026).
  * Co-developed ImIR, a single LoRA adapter for all-in-one image restoration (ACCV 2026), and Edit2Interp, few-shot video frame interpolation with image-editing models (arXiv 2026).
  * Team member, NTIRE 2026 Challenge on Light Field Image Super-Resolution (CVPR 2026).
  * Co-developed Track-On-RS, which injects SAM3 instance-segmentation priors into point tracking; 2nd place overall and 1st place in two accuracy metrics in the VOTS2026 point-tracking sub-challenge (ECCV 2026 Workshops).

* June 2021 – Jan 2022: **AI and Signal Processing Intern**
  * **Carex.AI / Hospital on Mobile**, Palo Alto, CA
  * Developed signal processing pipelines to extract PPG from RGB video
  * Built deep learning models for SpO2 prediction from facial and fingertip video
  * Implemented real-time preprocessing pipelines for low-light and motion-intensive scenarios
  * Supervisor: **Dr. Tamay Aykut**

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Honors
======
* VOTS2026 Point Tracking Challenge (ECCV 2026): 2nd place overall, 1st place in two accuracy metrics (d8, d16), with the Codeway AI Research team
* Fulbright Scholarship, 2024 – 2026

Service and leadership
======
* Reviewer, IEEE International Conference on Image Processing (ICIP), 2026
* Reviewer, CVPR Med-Reasoner Workshop, 2026
* Former Vice-President, Georgia Tech Fulbright Student Association

