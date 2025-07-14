---
layout: post
title: A temporal corollary to Conway's Law
blurb: When software design choices are guided by a rigid calendar.
createdAt: '2025-07-14'
path: /2025/temporal-corollary-conways-law
permalink: 2025/temporal-corollary-conways-law/
attribution: '''Ritter, Tod und Teufel'' by Albrecht Dürer (1513). In the public domain.'
tags: ['post']
---

<!-- markdownlint-disable MD013 line-length -->
<!-- markdownlint-disable MD033 no-inline-html -->

Conway's Law is almost invariably quoted from:

- the conclusion to <a href="https://www.melconway.com/Home/pdf/committees.pdf" target="_blank">"How Do Committees Invent?"</a>, the 1968 paper where Melvin Conway introduced his idea
- the preface published 42 years later on <a href="https://www.melconway.com/Home/Committees_Paper.html" target="_blank"> the author's website</a>  
- Chapter 10 of 'The Mythical Man-Month', where Fred Brooks dubs it 'Conway's Law'<sup><a href="#footnote-1">1</a></sup>

I returned to these three sources and found my favourite way of stating the Law in a
section heading of Conway's paper. Its succinctness is unparalleled:

<figure class="rounded-end bg-info-subtle ps-2 border border-4 border-info border-top-0 border-end-0 border-bottom-0">
  <blockquote class="blockquote">
    <p>“Systems image their design groups”</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Melvin Conway, <cite title="Source Title">"How Do Committees Invent?"</cite> (1968)
  </figcaption>
</figure>

It immediately struck me as the most quotable version. One you may want to pass down to a
keen junior colleague or tattoo on your forehead before locking horns with a manager.

The motives why someone involved in the design & crafting of software is interested in
Conway's Law are the same as those an aeronautical engineer has to keep an altar to Sir
Isaac Newton.

My job for the past three years — that of designing, implementing, and maintaining software
under the banner of the University of Cambridge's 'Digital Admissions' group — is the role
that has most challenged my assumptions about how software is made and has brought me
face-to-face with realities such as Conway's Law.

Viewed from a certain angle, universities are extruded timepieces embellished in gowns &
mortarboards. They are bound to a relentless procession of deadlines: submitting admission
applications, choosing course options, sitting exams, attending graduations... indices on
an ivy-clad clock face.

The calendar that dictates when and how our systems are used casts a long shadow.
Development roadmaps and milestones form a carbon copy of the academic calendar,
a failure to avoid the Unconscionable Maps that Borges cautioned us about<sup><a href="#footnote-2">2</a></sup>.

At times we operate in a manner more appropriate for farmers. That is to say, beholden to
Spring being for lambing, making hay in Summer or harvesting as leaves lose their
chlorophyll and wither away.

My experiences collaborating on software to manage and track milestones of the academic
calendar drive me to suggest a temporal corollary to Conway's Law. That is, that the
frequency of external phenomena moulds the software itself.

I have seen systems and assumptions coagulate around a base need in a way that makes
change arduous. By way of example, consider a data-intensive and critical process that
only happens once per year.  
The development team will be aware that the process enabled by the system only needs to
happen infrequently. This temporal structure will percolate through to the design of the
system. The result? Hindering any activity that deviates from this assumption, such as
testing that wishes to exercise a path regularly or a change in circumstances whereby the
business needs the process to happen more frequently.

As for providing an account of <em>why</em> this happens, I will let the good doctor
explain: "the incentives which exist in a conventional management environment can motivate
choices which subvert the intent of the sponsor"<sup><a href="#footnote-3">3</a></sup>.

While Conway's Law is a mapping that holds in development efforts for all manner of
software, I hope the temporal corollary is more of a cautionary note than an unshakeable
covenant.

There is always a danger of miscalculation in trying to extrapolate from personal
experience. Regardless of what you think of the above, I urge you to go back to
<a href="https://www.melconway.com/Home/pdf/committees.pdf" target="_blank">Dr. Conway's paper</a>
and give it a read, away from meta-commentary and online chatter. You won't regret it.

---

<div id="footnote-1" class="pb-2">
    <sup>1</sup> Chapter 10 is titled 'The Documentary Hypothesis'. Chapter 7 ('Why Did
    the Tower of Babel Fail?') does not quote Conway directly, but supplements Chapter 10
    nicely.
</div>

<div id="footnote-2" class="pb-2">
    <sup>2</sup> Borges, J.L., and Bioy Casares, A. "On Exactitude in Science." 1946.
    <em>Collected Fictions</em> (2015): 325-326.
</div>

<div id="footnote-3" class="pb-2">
    <sup>3</sup> Conway, M. "How do committees invent?" <em>Datamation</em>
    14.4 (1968): 28-31.
</div>
