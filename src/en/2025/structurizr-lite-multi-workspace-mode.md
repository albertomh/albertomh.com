---
layout: post
title: Multi-workspace mode in Structurizr Lite
blurb: Visualizing multiple software systems using the free Structurizr Lite tool.
createdAt: '2025-05-16'
updatedAt: '2025-06-29'
path: /2025/structurizr-lite-multi-workspace-mode
permalink: 2025/structurizr-lite-multi-workspace-mode/
attribution: 'Herzog August Bibliothek <a href="https://diglib.hab.de/wdb.php?dir=mss/74-1-aug-2f" target="_blank">https://diglib.hab.de/wdb.php?dir=mss/74-1-aug-2f</a>, licensed under CC BY-SA.'
tags: ['post', 'til']
---

<!-- markdownlint-disable MD033 no-inline-html -->

Structurizr is a tool to produce software architecture diagrams following the C4 model.
'Workspaces' are how Structurizr isolates models, views, and documentation for a single system.  

Since it is rare that we are producing diagrams or documentation for a single system in
isolation, Structurizr Lite's support for only a single workspace may at first seem of
limited use. This post shows you how to use the free Structurizr Lite in multi-workspace mode.

The Structurizr website claims Lite is "A single workspace version of Structurizr"
(<a href="https://structurizr.com/help/tour" target="_blank">https://structurizr.com/help/tour</a>).

Yet release notes for <a href="https://github.com/structurizr/lite/releases/tag/v2024.06.18" target="_blank">v2024.06.18</a>
say "[it] Adds support for multi-workspace mode (not yet documented)".

How can we use this feature in our copy of Structurizr Lite then?

Our aim is to go from the following directory structure:

```text
project/
    ┣━ workspace.dsl
    ┗━ workspace.json (auto-generated)
```

to:

```text
project/
    ┣━ structurizr.properties
    ┣━ 1/
    ┃  ┣━ workspace.dsl
    ┃  ┗━ workspace.json
    ┗━ 2/
       ┣━ workspace.dsl
       ┗━ workspace.json
```

And in so doing support more than one workspace in a single instance of Structurizr. To do so:

1. Create a `structurizr.properties` file with contents:

    ```text
    structurizr.workspaces=2
    ```

    (Structurizr will only check the number is larger than 1 - it doesn't have to match
    how many workspaces you have.)
2. Create workspace directories following the regex `\d*-[a-zA-Z0-9_-]*` <sup><a href="#footnote-1">1</a></sup>
<sup><a href="#footnote-2">2</a></sup>

<!-- markdownlint-disable MD013 line-length -->

I figured out the above by looking at <a href="https://github.com/structurizr/lite/blob/main/src/main/java/com/structurizr/lite/Configuration.java" target="_blank">Configuration.java</a>
and following the breadcrumb trail starting at `STRUCTURIZR_PROPERTIES_FILENAME`.
`Configuration.java` is a good starting point if you're curious about the internals of Structurizr Lite.

---

<div id="footnote-1" class="pb-2">
    <sup>1</sup> The source for this is the <code>WORKSPACE_ID_AND_NAME_REGEX</code> const in <a href="https://github.com/structurizr/lite/blob/main/src/main/java/com/structurizr/lite/component/workspace/WorkspaceDirectory.java" target="_blank">WorkspaceDirectory.java</a>.
</div>
<div id="footnote-2" class="pb-2">
    <sup>2</sup> The fix to allow alphanumeric workspace directory names (<a href="https://github.com/structurizr/lite/issues/189" target="_blank">structurizr/lite#189</a>)
    is available in <code>structurizr/lite</code> Docker images tagged '2025.05.28' and later. If using an earlier version,
    the workspace directory name must be numeric only, conforming to <code>\d*</code>.
</div>

---
