# Desktop





## Desktop Entry

- desktop entries are stored in:
  - `~/.local/share/applications` (recommended here, no root access needed)
  - `/usr/share/applications`

- They have `.desktop` extensions. No need to `chmod +x`. Once an entry is added to one of the above locations

  the app should appear in the "Show applications window"

- Example file:

```
[Desktop Entry]
Version=1.0
Type=Application
Terminal=false
Exec=/home/hassan/programs/code/bin/code
Name=vscode
Comment=run vs code
Icon=/home/hassan/programs/code/resources/app/resources/linux/code.png
```

