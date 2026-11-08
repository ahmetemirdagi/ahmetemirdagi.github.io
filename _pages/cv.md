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
  * Student, Electrical and Electronic Engineering, Yonsei University, Seoul, South Korea

Research experience
======

* Jan 2024 – Present: **Graduate Researcher**
  * **Inan Research Lab, Georgia Institute of Technology**, Atlanta, GA
  * Developed EffSCG, an efficient inference framework that accelerates diffusion-based seismocardiogram denoisers for real-time use on resource-constrained wearable devices (IEEE JBHI).
  * Building generative models for synthesizing cardiovascular signals such as SCG; contributed to cylindrical geodesic flow matching for physiological signal translation (NeurIPS 2026).
  * Adapted large image-editing foundation models with LoRA for data-efficient medical image restoration using as few as 16 paired examples (CVPRW 2026).
  * Contributed to wearable musculoskeletal sensing research, including domain adaptation and statistical analysis of joint acoustic emissions.
  * Supervisor: **Prof. Omer T. Inan**

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
* Fulbright Scholarship (completed)

Service and leadership
======
* Reviewer, IEEE International Conference on Image Processing (ICIP)
* Reviewer, CVPR Med-Reasoner Workshop
* Former Vice-President, Georgia Tech Fulbright Student Association

