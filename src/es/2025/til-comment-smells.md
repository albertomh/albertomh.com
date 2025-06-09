---
layout: post
title: 'Comentarios que huelen'
blurb: Extrayendo condiciones de comentarios y aflorándolas mediante código.
createdAt: '2025-05-14'
path: /2025/til-comment-smells
permalink: es/2025/comentarios-que-huelen/
attribution: 'Imagen: Fig. 113 de <a href="https://archive.org/details/plainhometalkabo00foot/page/n11/mode/2up" target="_blank"><em>Plain Home Talk</em> (1896)</a> por Edward B. Foote, fuera de copyright.'
tags: ['post', 'til']
---

<!-- markdownlint-disable MD033 no-inline-html -->

¿Conoces esa sensación de revelación cuando alguien te descubre el nombre de un concepto
que sólo intuyes?

A mí me pasó recientemente al oír a Matt Godbolt hablar sobre 'comentarios que huelen'
('comment smells' en el inglés original). Es un concepto que menciona en su charla
"Correct by Construction: APIs That Are Easy to Use and Hard to Misuse"
<sup><a href="#footnote-1">1</a></sup>, la cual recomiendo escuchar en su totalidad.

Matt ofrece como ejemplo una API cuyos comentarios en código fuente indican al usuario que
debe llevar a cabo pasos adicionales de montaje o desmantelamiento. En vez de endosarle al
usuario la responsabilidad de leer comentarios y actuar según dichas instrucciones, Matt
nos urge a los programadores a que afloremos estos requisitos en la API mediante código,
contratos y firmas de funciones.
De este modo ¡convierte mensajes para humanos en mensajes para el compilador!
(Preferiblemente del tipo que llevan a errores en tiempo de compilación.)

En concreto Matt menciona los ‘comentarios disculpa’ como una mala práctica, y son estos
los que deben eliminarse y codificarse en la API misma.

<!-- markdownlint-disable MD013 line-length -->

Toda la charla merece la pena, incluso para alguien que jamás haya escrito una línea de
C++ en la vida.
La charla está <a href="https://youtu.be/nLSm3Haxz0I" target="_blank"> disponible en YouTube</a>,
y es  <a href="https://youtu.be/nLSm3Haxz0I?feature=shared&t=1870" target="_blank">en el minuto 31:10</a>
cuando habla sobre 'comentarios que huelen'.

---
<div id="footnote-1" class="pb-2">
    <sup>1</sup> Mi traducción: "Exactitud mediante construcción: APIs fáciles de emplear y difíciles de usar mal".
</div>
---
