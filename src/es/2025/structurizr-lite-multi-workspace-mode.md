---
layout: post
title: Usando Structurizr Lite con más de un espacio de trabajo
blurb: Visualizando múltiples sistemas de software con la herramienta gratuita Structurizr Lite.
createdAt: '2025-05-16'
path: /2025/structurizr-lite-multi-workspace-mode
permalink: es/2025/structurizr-lite-multi-espacios-de-trabajo/
attribution: 'Herzog August Bibliothek <a href="https://diglib.hab.de/wdb.php?dir=mss/74-1-aug-2f" target="_blank">https://diglib.hab.de/wdb.php?dir=mss/74-1-aug-2f</a>, usado bajo licencia CC BY-SA.'
tags: ['post', 'til']
---

<!-- markdownlint-disable MD033 no-inline-html -->

Structurizr es una herramienta con la que elaborar esquemas de arquitectura de software
siguiendo el modelo C4.
Un ‘espacio de trabajo’ ('workspace' en inglés) es la manera que tiene Structurizr de
aislar modelos, vistas y documentación perteneciente a un solo sistema.

Rara vez queremos documentar un solo sistema de manera aislada. Por tanto, el hecho de que
Structurizr Lite solo permita tener un único espacio de trabajo es una limitación un tanto
artificial. Este artículo muestra cómo emplear la versión gratuita de Structurizr Lite en
modo multiespacio ('multi-workspace').

La página web de Structurizr indica que Lite es una versión monoespacial
(<a href="https://structurizr.com/help/tour" target="_blank">https://structurizr.com/help/tour</a>).

A pesar de ello, si consultamos las notas de versión para
<a href="https://github.com/structurizr/lite/releases/tag/v2024.06.18" target="_blank">v2024.06.18</a>
estas afirman: "[la versión] añade compatibilidad para el modo multiespacios de trabajo
(todavía sin documentar)"<sup><a href="#footnote-1">1</a></sup>.

¿Cómo podemos utilizar pues esta función en Structurizr Lite?

Nuestro objetivo es pasar de la siguiente estructura de directorios:

```text
proyecto/
    ┣━ workspace.dsl
    ┗━ workspace.json (auto-generated)
```

a:

```text
proyecto/
    ┣━ structurizr.properties
    ┣━ 1/
    ┃  ┣━ workspace.dsl
    ┃  ┗━ workspace.json
    ┗━ 2/
       ┣━ workspace.dsl
       ┗━ workspace.json
```

Y con ello poder disfrutar de más de un espacio de trabajo bajo la misma instancia de
Structurizr. Para lograrlo:

1. Crea un fichero `structurizr.properties` con el siguiente contenido:

    ```text
    structurizr.workspaces=2
    ```

    (Structurizr sólo comprueba si el número es superior a 1; el valor no tiene por qué
    coincidir con el número de espacios de trabajo).
2. Crea directorios para cada espacio de trabajo. El nombre de los directorios debe
   ajustarse a la expresión regular `\d*` <sup><a href="#footnote-2">2</a></sup>
   <sup><a href="#footnote-3">3</a></sup>

<!-- markdownlint-disable MD013 line-length -->

Esto lo averigüé leyendo el fichero <a href="https://github.com/structurizr/lite/blob/main/src/main/java/com/structurizr/lite/Configuration.java" target="_blank">Configuration.java</a>
y siguiendo el rastro que comienza con la variable `STRUCTURIZR_PROPERTIES_FILENAME`. Se
trata de un buen punto de partida si sientes curiosidad por conocer los entresijos de
Structurizr Lite.

---

<div id="footnote-1" class="pb-2">
    <sup>1</sup> En el original: "Adds support for multi-workspace mode (not yet documented)".
</div>
<div id="footnote-2" class="pb-2">
    <sup>2</sup> Esta expresión regular la define la constante `WORKSPACE_ID_REGEX` en
    <a href="https://github.com/structurizr/lite/blob/main/src/main/java/com/structurizr/lite/component/workspace/WorkspaceDirectory.java" target="_blank">WorkspaceDirectory.java</a>.
</div>
<div id="footnote-3" class="pb-2">
    <sup>3</sup> Advertencia: en el momento de redactar esta nota existe un parche que
    permite directorios con nombres alfanuméricos. Este ha sido integrado - véase
    <a href="https://github.com/structurizr/lite/issues/189" target="_blank">structurizr/lite#189</a>.
    Este parche fue integrado el 2025-04-11 pero la última imagen de Docker
    `structurizr/lite` fue etiquetada el 2025-03-28.
</div>

---
