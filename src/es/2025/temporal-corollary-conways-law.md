---
layout: post
title: Un corolario temporal de la ley de Conway
blurb: Cuando un calendario rígido guía las decisiones en el diseño del software
createdAt: '2025-07-14'
path: /2025/temporal-corollary-conways-law
permalink: es/2025/temporal-corollary-conways-law/
attribution: '''Ritter, Tod und Teufel'' de Alberto Durero (1513). Dominio público.'
tags: ['post']
---

<!-- markdownlint-disable MD013 line-length -->
<!-- markdownlint-disable MD033 no-inline-html -->

La ley de Conway suele ser citada a partir de una de estas fuentes:

- la conclusión de <a href="https://www.melconway.com/Home/pdf/committees.pdf" target="_blank">"How Do Committees Invent?"</a>
(_¿Cómo inventan los comités?_), el ensayo escrito en 1968 en el cual Melvin Conway
presenta la idea fundamental de la 'ley' epónima
- el preámbulo de dicho ensayo publicado 42 años más tarde en <a href="https://www.melconway.com/Home/Committees_Paper.html" target="_blank">la web del autor</a>  
- el capítulo 10 de 'The Mythical Man-Month' (todavía por traducir al castellano),
en el que Fred Brooks le puso el mote 'ley de Conway'<sup><a href="#footnote-1">1</a></sup>

Al releer estas tres fuentes he encontrado mi versión preferida para formular la ley en un
encabezado del ensayo de Conway. Es tan conciso como revelador:

<figure class="rounded-end bg-info-subtle ps-2 border border-4 border-info border-top-0 border-end-0 border-bottom-0">
  <blockquote class="blockquote">
    <p>
    “Systems image their design groups”<br>
    <em>“Los sistemas son creados a semejanza de sus diseñadores”<br>(trad. del autor)</em>
    </p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Melvin Conway, <cite>"How Do Committees Invent?"</cite> (1968)
  </figcaption>
</figure>

De inmediato me pareció que esta es la versión de la 'ley' más digna de ser citada; del
tipo que compartes con un compañero _junior_ o que te tatuas en la frente.

Los motivos por los que a alguien que diseña y elabora software le puede interesar la ley
de Conway son los mismos que animan a un ingeniero aeronáutico a dedicarle un altar a Sir
Isaac Newton.

Mi trabajo de estos tres últimos años ―el de diseñar, implementar y mantener software para el
equipo de 'admisiones digitales' de la universidad de Cambridge― es el que más
ha desafiado mis suposiciones sobre cómo se elabora el software y me ha obligado a
enfrentarme a realidades como la ley de Conway.  

En cierto modo, las universidades son relojes ataviados con toga y birrete.
Están sujetas a una procesión incesante de fechas y metas: solicitar plazas, escoger
asignaturas, presentarse a exámenes, asistir a ceremonias de graduación... marcardoes
sobre una esfera de reloj cubierta de hiedra.

El calendario que dicta cómo y cuándo deben utilizarse los sistemas de mi equipo deja mella.
Las hojas de ruta de desarrollo y los hitos terminan formando copias en papel carbón del
calendario académico, un intento fracasado de evitar los Mapas Desmesurados de los que
Borges alertaba<sup><a href="#footnote-2">2</a></sup>.

A veces tenemos comportamientos más propios de agricultores. Es decir, somos rehenes de
las estaciones: la primavera es época de cría, en verano se hace el heno y hay que
cosechar antes de que se marchiten las hojas.

Mi experiencia desarrollando software con el que gestionar hitos y etapas del calendario
académico me lleva a sugerir un corolario temporal de la ley de Conway. Es decir, que la
frecuencia de fenómenos externos da forma al propio software.

He visto coagularse sistemas y suposiciones en torno a necesidades fundamentales de una
manera que impide el cambio. Por ejemplo, consideremos un proceso clave que requiere un
gran volumen de datos y sucede solo una vez al año.  
El equipo de desarrollo es consciente de que el proceso habilitado por el sistema solo
ocurre con poca frecuencia. Esta estructura temporal se propagará a lo largo y ancho de
la arquitectura del sistema. ¿Con qué resultado? El entorpecimiento de cualquier actividad
que se desvíe de esta suposición, como puede ser realizar pruebas o un cambio de
circunstancias de negocio por las que el proceso debe llevarse a cabo con mayor frecuencia.

En cuanto al <em>porqué</em> de esto, dejaré que el propio doctor Conway nos lo explique:
"los alicientes que existen en un entorno de dirección convencional pueden motivar decisiones
que socavan las intenciones del patrocinador de un proyecto"<sup><a href="#footnote-3">3</a></sup>.

Mientras que la ley de Conway es una relación que se sostiene en entornos de desarrollo para
todo tipo de software, espero que el corolario temporal sirva más de advertencia que como
cláusula irrebatible.

Siempre existe el peligro de cometer un error de cálculo al tratar de extrapolar
conclusiones a partir de experiencias personales. Independientemente de lo que te parezca
este artículo, te insto a que releas el <a href="https://www.melconway.com/Home/pdf/committees.pdf" target="_blank">ensayo del Dr. Conway</a>
aislado del comentario y ruido <em>online</em>. No te arrepentirás.

---

<div id="footnote-1" class="pb-2">
    <sup>1</sup> El capítulo 10 se titula 'The Documentary Hypothesis'. El capítulo 7
    ('Why Did the Tower of Babel Fail?') no cita a Conway directamente pero es buen
    acompañamiento del capítulo 10.
</div>

<div id="footnote-2" class="pb-2">
    <sup>2</sup> Borges, J.L., y Bioy Casares, A. "Del rigor en la ciencia." 1946.
    <em>El Hacedor</em> (1960).
</div>

<div id="footnote-3" class="pb-2">
    <sup>3</sup> Conway, M. "How do committees invent?" <em>Datamation</em>
    14.4 (1968): 28-31.
</div>
