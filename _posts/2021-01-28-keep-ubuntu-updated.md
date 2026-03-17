---
layout: post
title: Keep Ubuntu 20.04 (or its derivatives) updated and clean
date: 2021-01-28 12:00:00+0530
description: a short practical note for updating and cleaning Debian-based systems
tags: Linux Ubuntu Debian FOSS
categories: notes
---

_This also works for all Debian-based distributions._

It is good practice to keep a system updated and all packages at their latest stable version. This short note outlines a simple workflow for Ubuntu 20.04 and similar Debian-based systems.

Follow the link and copy the contents of [this file](https://raw.githubusercontent.com/joshipulkit/scripts/main/uptodate). Open your preferred text editor and save the pasted content as `uptodate`.

Give the file executable permissions:

```bash
chmod a+x uptodate
```

Then run it from the directory where it lives:

```bash
./uptodate
```

You can also move the executable into `$HOME/bin` and add that path to your `PATH` environment variable to make it available globally.
