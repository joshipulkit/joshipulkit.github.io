"""Fig 2: the same particles, twenty-five times less air.
Mixing heights and winds: Guttikunda & Gurjar (2012), Environ. Monit. Assess. 184, 3199."""
import random, sys
sys.path.insert(0, ".")
from figstyle import *
from skyline import skyline_path

W, H = 1200, 780
GROUND = 620                       # y of ground line
SCALE = 0.6                        # px per metre below the axis break
BREAK_Y0, BREAK_Y1 = 330, 362      # tear in the summer column / axis
TOP = 110                          # top of the summer column (2,500 m, beyond the break)
PANEL = [(150, 440), (690, 440)]   # (x, width) of summer and winter panels
N_DOTS = 120
s = SVG(W, H)

s.defs.append('<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dbeafa"/><stop offset="1" stop-color="#f1f7fc"/></linearGradient>')
s.defs.append('<linearGradient id="dusk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e3e6ee"/><stop offset="1" stop-color="#f2f3f7"/></linearGradient>')
s.defs.append(f'<linearGradient id="lid" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="{AMBER}" stop-opacity="0.05"/><stop offset="1" stop-color="{AMBER}" stop-opacity="0.55"/></linearGradient>')
s.defs.append(f'<marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="{INK}"/></marker>')
s.defs.append(f'<marker id="arr-m" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="{MUTED}"/></marker>')

def tear(x, w, y0, y1):
    """White band with wavy edges: the axis break."""
    pts_top = " ".join(f"{x + i * w / 12:.1f},{y0 + (6 if i % 2 else -6):.1f}" for i in range(13))
    pts_bot = " ".join(f"{x + w - i * w / 12:.1f},{y1 + (6 if i % 2 else -6):.1f}" for i in range(13))
    return f'<polygon points="{pts_top} {pts_bot}" fill="{BG}"/>'

def panel(px, pw, winter):
    top = GROUND - 100 * SCALE if winter else TOP          # top of the particle layer
    s.add(f'<rect x="{px}" y="{TOP}" width="{pw}" height="{GROUND - TOP}" rx="10" fill="url(#{"dusk" if winter else "sky"})"/>')
    if winter:  # lid above the shallow layer
        s.add(f'<rect x="{px}" y="{top - 150}" width="{pw}" height="150" fill="url(#lid)"/>')
        s.add(f'<line x1="{px}" y1="{top}" x2="{px + pw}" y2="{top}" stroke="{AMBER}" stroke-width="3"/>')
    else:
        s.add(f'<line x1="{px}" y1="{TOP}" x2="{px + pw}" y2="{TOP}" stroke="{BLUE}" stroke-width="3" stroke-dasharray="12 9"/>')
    # particles, same count, uniform through the layer
    rnd = random.Random(11)
    for _ in range(N_DOTS):
        x = px + 12 + rnd.random() * (pw - 24)
        y = top + 8 + rnd.random() * (GROUND - 8 - top - 8)
        s.add(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="4.2" fill="{"#3a3a3c" if winter else "#6e6e73"}" stroke="{BG}" stroke-width="1.2" opacity="0.9"/>')
    if not winter:
        s.add(tear(px - 4, pw + 8, BREAK_Y0, BREAK_Y1))
    # skyline and ground
    sc = pw / 900
    s.add(f'<g transform="translate({px},{GROUND - 160 * sc}) scale({sc})"><path d="{skyline_path()}" fill="{INK}"/></g>')
    s.add(f'<rect x="{px}" y="{GROUND}" width="{pw}" height="22" fill="{INK}"/>')
    # wind
    y_w = TOP + 60 if not winter else top - 190
    n = 3 if not winter else 1
    for k in range(n):
        x0 = px + pw - 190 + k * 56
        s.add(f'<line x1="{x0}" y1="{y_w}" x2="{x0 + 40}" y2="{y_w}" stroke="{INK}" stroke-width="2.5" marker-end="url(#arr)"/>')
    s.add(s.text(px + pw - 190, y_w - 16, "wind 3–6 m/s" if not winter else "wind 1–3 m/s", T3, INK))
    # temperature-height profile (minimal glyph, top-left of panel)
    gx, gy = px + 26, TOP + 34
    s.add(f'<rect x="{gx - 16}" y="{gy - 18}" width="186" height="172" rx="10" fill="{BG}" opacity="0.88"/>')
    s.add(f'<line x1="{gx}" y1="{gy + 120}" x2="{gx}" y2="{gy}" stroke="{MUTED}" stroke-width="1.5" marker-end="url(#arr-m)"/>')
    s.add(f'<line x1="{gx}" y1="{gy + 120}" x2="{gx + 130}" y2="{gy + 120}" stroke="{MUTED}" stroke-width="1.5" marker-end="url(#arr-m)"/>')
    s.add(s.text(gx + 8, gy + 4, "height", T4, MUTED))
    s.add(s.text(gx + 128, gy + 142, "temperature", T4, MUTED, "end"))
    if winter:
        d = f"M {gx + 14} {gy + 112} L {gx + 92} {gy + 70} L {gx + 30} {gy + 8}"
        s.add(s.text(gx + 100, gy + 76, "inversion", T4, WARM))
    else:
        d = f"M {gx + 110} {gy + 112} L {gx + 22} {gy + 8}"
    s.add(f'<path d="{d}" fill="none" stroke="{WARM if winter else BLUE}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>')
    return top

# panels
t_s = panel(*PANEL[0], False)
t_w = panel(*PANEL[1], True)
# titles
s.add(s.text(PANEL[0][0] + 220, 62, "Summer afternoon", T1, INK, "middle", "bold"))
s.add(s.text(PANEL[1][0] + 220, 62, "Winter night", T1, INK, "middle", "bold"))
# layer labels
s.add(s.text(PANEL[0][0] + 220, TOP - 14, "mixing layer up to about 2,500 m", T3, BLUE, "middle"))
s.add(s.text(PANEL[1][0] + 220, t_w - 14, "mixing layer under 100 m", T3, WARM, "middle", "bold"))
s.add(s.text(PANEL[1][0] + 220, t_w - 118, "warmer air above: the lid", T3, "#8a5a1c", "middle"))
# height axis (left of the summer panel), to scale below the break
ax = 118
s.add(f'<line x1="{ax}" y1="{GROUND}" x2="{ax}" y2="{BREAK_Y1}" stroke="{HAIR}" stroke-width="{W_AXIS}"/>')
s.add(f'<line x1="{ax}" y1="{BREAK_Y0}" x2="{ax}" y2="{TOP}" stroke="{HAIR}" stroke-width="{W_AXIS}"/>')
for m in (0, 100, 200, 300, 400):
    y = GROUND - m * SCALE
    if y < BREAK_Y1 + 6: continue
    s.add(f'<line x1="{ax - 8}" y1="{y}" x2="{ax}" y2="{y}" stroke="{HAIR}" stroke-width="{W_AXIS}"/>')
    s.add(s.text(ax - 14, y + 7, f"{m} m" if m else "0", T3, MUTED, "end"))
s.add(f'<path d="M {ax - 9} {BREAK_Y1 + 4} l 18 -12 M {ax - 9} {BREAK_Y0 + 2} l 18 -12" stroke="{MUTED}" stroke-width="2" fill="none"/>')
s.add(f'<line x1="{ax - 8}" y1="{TOP}" x2="{ax}" y2="{TOP}" stroke="{HAIR}" stroke-width="{W_AXIS}"/>')
s.add(s.text(ax - 14, TOP + 7, "2,500 m", T3, MUTED, "end"))
# footnote
s.add(s.text(W / 2, H - 50, f"The same {N_DOTS} particles in both panels. Heights are to scale below the break.", T3, INK, "middle"))
s.add(s.text(W / 2, H - 20, "Mixing heights and wind speeds: model estimates for Delhi, Guttikunda &amp; Gurjar (2012).", T4, MUTED, "middle"))
print("wrote", s.write("fig2_inversion_lid.svg"))
