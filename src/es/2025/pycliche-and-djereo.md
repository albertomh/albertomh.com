---
layout: post
title: Pycliché y Djereo
blurb: Mis plantillas para proyectos de Python y Django.
createdAt: '2025-06-26'
path: /2025/pycliche-and-djereo
permalink: es/2025/pycliche-and-djereo/
attribution: ''
tags: ['post']
---

<!-- markdownlint-disable MD013 line-length -->
<!-- markdownlint-disable MD033 no-inline-html -->

Si estás pensando en empezar un nuevo proyecto de Python o Django: ¡usa mis plantillas!

Uno de mis propósitos para el 2025 era hacer de este mi 'año de Django'. Con este fin, he
desarrollado dos plantillas de proyecto: 'pycliché' y 'djereo'.

Ambas proporcionan atajos para quien quiera desarrollar proyectos con herramientas de
Python modernas (pyproject.toml, IPython, structlog, nox), postgres, empleando GitHub
Actions para pipelines de CI/CD, y producen imágenes de contenedor listas para ser
desplegadas.

Entre las prestaciones encontrarás:

- Las plantillas se configuran mediante la interfaz de línea de comando, con libertad para
elegir las versiones de módulos de terceros y extras opcionales como 'htmx' o
interruptores de características (feature flags).
- Buenas prácticas y patrones que tienen su origen en la comunidad.
- Controles ergonómicos que apuestan por la experiencia de desarrollador (DevX).
- Una actitud de 'despliega primero' (deploy first) para minimizar los problemas a futuro.
- Automatismos configurados con parámetros sensatos: ganchos pre-commit, dependabot, Release
Please.

Lee la documentación y pruébalos:

<a href="https://github.com/albertomh/pycliche" target="_blank">https://github.com/albertomh/pycliche</a>

<a href="https://github.com/albertomh/djereo" target="_blank">https://github.com/albertomh/djereo</a>

<img src="/assets/img/post/2025/2025-06_pycliche&djereo.png" alt="logos de los proyectos pycliché y djereo, con insignias mostrando las tecnologías empleadas por cada uno." class="img-fluid pb-3">

Estas plantillas deben mucho a las conversaciones que he mantenido con miembros de la
comunidad tras DjangoCon, trucos recomendados en episodios de 'Django Chat', y a los
libros de Adam Johnson y otros.

No espero que mis plantillas compitan con alternativas más conocidas como 'Lithium' de
Will Vincent, SaaS Pegasus o 'Cookiecutter Django', pero la experiencia de desarrollar
estas plantillas ha sido una magnífica oportunidad educativa.

- He aprendido que las expectativas en torno a las herramientas escritas en Rust - uv y ruff
de Astral, o BiomeJS - no son sólo humo y estas herramientas son viables y merecen la pena.
- Ha sido mi primera oportunidad de utilizar `nox` y la estrategia de matriz de GitHub
Actions como forma de incrementar mi confianza en mis pruebas automáticas.
- Recientemente completé el <a href="https://developers.google.com/tech-writing/overview" target="_blank">curso de escritura técnica de Google</a>
y esta ha sido la excusa perfecta para practicar lo que he aprendido en el curso.

Prueba las plantillas, dales una estrella en GitHub, y ¡dime qué te parecen!  
Si ves algún fallo o tienes ideas para mejoras, no dudes en ponerte en contacto o deja
una nota ('issue') en GitHub.
