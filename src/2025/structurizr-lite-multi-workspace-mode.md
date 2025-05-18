---
layout: post
title: Multi-workspace mode in Structurizr Lite
blurb: foo
createdAt: '2025-05-16'
path: /2025/structurizr-lite-multi-workspace-mode
attribution: 'Image: Herzog August Bibliothek <a href="https://diglib.hab.de/wdb.php?dir=mss/74-1-aug-2f" target="_blank">https://diglib.hab.de/wdb.php?dir=mss/74-1-aug-2f</a>, licensed under CC BY-SA.'
tags: ['post', 'til']
---

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
    ┣ workspace.dsl
    ┗ workspace.json (auto-generated)
```

to:

```text
project/
    ┣ structurizr.properties
    ┣ 1/
    ┣━━━ workspace.dsl
    ┣ 2/
    ┗━━━ workspace.dsl
```

And in so doing support more than one workspace in a single instance of structurizr. To do so:

1. Add `structurizr.properties` with contents:

    ```text
    structurizr.workspaces=2
    ```

    (structurizr will only check the number is larger than 1 - it doesn't have to match how many workspaces you have).
2. Create workspace directories following the regex `\d*` <sup><a href="">1</a></sup> <sup><a href="">2</a></sup>

I figured out the above by looking at <a href="https://github.com/structurizr/lite/blob/main/src/main/java/com/structurizr/lite/Configuration.java" target="_blank">Configuration.java</a>
and following the breadcrumb trail starting at `STRUCTURIZR_PROPERTIES_FILENAME`.
`Configuration.java` is a good starting point if you're curious about the internals of Structurizr Lite.

---

<sup><a href="">1</a></sup> The source for this is the `WORKSPACE_ID_REGEX` const in <a href="https://github.com/structurizr/lite/blob/main/src/main/java/com/structurizr/lite/component/workspace/WorkspaceDirectory.java" target="_blank">WorkspaceDirectory.java</a>.

<sup><a href="">2</a></sup> Caveat: at the time of writing a fix to allow alphanumeric
workspace directory names (i.e. not just integers) has been merged - see <a href="https://github.com/structurizr/lite/issues/189" target="_blank">structurizr/lite#189</a>.
This fix was merged on 2025-04-11, but the latest structurizr/lite Docker image was tagged on 2025-03-28.
