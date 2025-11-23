---
date: 2021-01-28
title: Keep Ubuntu 20.04 (or it's derivatives) updated and clean
tags: [Linux, FOSS, Ubuntu, Debian, System Maintainance]
---
*This also works for all debian based distributions.*

It is a good practice to keep our system updated and all the packages and libraries to their latest version. Specially in long-term support (LTS) versions such as Ubuntu 20.04 (Focal Fossa). This article provides a pretty straightforward way as to how to keep your system to its latest.

Follow the link and copy the contents of [this file](https://raw.githubusercontent.com/joshipulkit/scripts/main/uptodate). Open up your favourite text editor and paste the copied content. Save it as `uptodate`.

Give the newly created `uptodate` executable permissions by using the following command in the terminal.
```bash
chmod a+x uptodate
```
It's done!

Now you can update and clean your system by using this command from the directory in which you created your file. This might ask for your sudo password.
```bash
./uptodate
```

You can also make this exectuable available universally to your user by putting it in `/home/$USER/bin` or `/$HOME/bin` and adding the mentioned path to "PATH" variable.