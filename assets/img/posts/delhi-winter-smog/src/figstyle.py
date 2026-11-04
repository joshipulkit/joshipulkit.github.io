"""Design system for the Delhi winter smog figures (v2).

Canvas 1200 px wide, exported at 2x; the site shows it at ~760 px, i.e. 63 %.
Type scale (canvas px -> on-screen px): T1 34 -> 21, T2 26 -> 16, T3 22 -> 14, T4 19 -> 12.
Nothing smaller than T4. One family: Helvetica Neue (the site's fallback for SF Pro).
Palette from _sass/_variables.scss plus one warm accent for the second series.
"""
import re

FONT = "Helvetica Neue, Helvetica, Arial, sans-serif"
T1, T2, T3, T4 = 34, 26, 22, 19
INK = "#1d1d1f"
MUTED = "#6e6e73"
HAIR = "#d2d2d7"      # axes
GRID = "#ececf0"      # grid lines
BLUE = "#0066cc"
WARM = "#c2410c"
AMBER = "#e8a33d"
BG = "#ffffff"
W_CURVE, W_AXIS, W_GRID = 5, 1.5, 1


def esc(s):
    return s.replace("&", "&amp;")


def sub(s):
    """NH3 -> NH<tspan sub>3</tspan>, for chemical formulae."""
    return re.sub(r"(?<=[A-Za-z\)])(\d+)", r'<tspan baseline-shift="sub" font-size="72%">\1</tspan>', s)


class SVG:
    def __init__(self, w, h, bg=BG):
        self.w, self.h, self.parts, self.defs = w, h, [], []
        if bg:
            self.parts.append(f'<rect id="bg" width="{w}" height="{h}" fill="{bg}"/>')

    def add(self, s):
        self.parts.append(s)

    def text(self, x, y, s, size=T3, fill=INK, anchor="start", weight="normal",
             baseline="auto", id=None, extra=""):
        idattr = f' id="{id}"' if id else ""
        return (f'<text{idattr} x="{x:.1f}" y="{y:.1f}" font-family="{FONT}" font-size="{size}" '
                f'font-weight="{weight}" fill="{fill}" text-anchor="{anchor}" '
                f'dominant-baseline="{baseline}" {extra}>{s}</text>')

    def write(self, path):
        defs = "<defs>\n" + "\n".join(self.defs) + "\n</defs>\n" if self.defs else ""
        open(path, "w").write(
            '<?xml version="1.0" encoding="UTF-8"?>\n'
            f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" '
            f'width="{self.w}" height="{self.h}" viewBox="0 0 {self.w} {self.h}">\n'
            + defs + "\n".join(self.parts) + "\n</svg>\n")
        return path
