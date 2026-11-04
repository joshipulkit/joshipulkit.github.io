"""Fig 4: emission wavelengths of firework colour emitters.
Data: Steinhauser & Klapötke (2008), Angew. Chem. Int. Ed. 47, 3330, Table 3."""
import sys
sys.path.insert(0, ".")
from figstyle import *

LINES_NM = {
    "Na": [589.0, 589.6],
    "SrCl": [393.7, 396.1, 400.9, 623.9, 636.2, 648.5, 661.4, 662.0, 674.5, 675.6],
    "SrOH": [605.0, 646.0, 659.0, 667.5, 682.0],
    "BaCl": [507.0, 513.8, 516.2, 524.1, 532.1, 649.0],
    "BaOH": [487.0, 512.0],
}
BANDS_NM = {"CuCl": [(420.0, 460.0), (510.0, 550.0)]}
ROWS = [("SrCl", "strontium, red", True), ("SrOH", "strontium, red", False), ("Na", "sodium atoms, yellow", False),
        ("BaCl", "barium, green", True), ("BaOH", "barium, green", False), ("CuCl", "copper, blue (debated)", True)]
LMIN, LMAX = 380.0, 700.0

def wl_rgb(lam):
    assert LMIN <= lam <= LMAX, lam
    if lam < 440: r, g, b = -(lam - 440) / 60, 0.0, 1.0
    elif lam < 490: r, g, b = 0.0, (lam - 440) / 50, 1.0
    elif lam < 510: r, g, b = 0.0, 1.0, -(lam - 510) / 20
    elif lam < 580: r, g, b = (lam - 510) / 70, 1.0, 0.0
    elif lam < 645: r, g, b = 1.0, -(lam - 645) / 65, 0.0
    else: r, g, b = 1.0, 0.0, 0.0
    f = 0.3 + 0.7 * (lam - 380) / 40 if lam < 420 else (0.3 + 0.7 * (700 - lam) / 55 if lam > 645 else 1.0)
    return "#%02x%02x%02x" % tuple(int(255 * ((c * f) ** 0.8 if c > 0 else 0)) for c in (r, g, b))

W, H = 1200, 720
X0, X1 = 330, 1150
def X(l): return X0 + (l - LMIN) / (LMAX - LMIN) * (X1 - X0)
BAND = "#1d1d1f"; RH, GAP, Y0 = 70, 14, 40
s = SVG(W, H)
stops = "".join(f'<stop offset="{(l - LMIN) / 320:.4f}" stop-color="{wl_rgb(l)}"/>' for l in range(380, 701, 5))
s.defs.append(f'<linearGradient id="spectrum" x1="0" y1="0" x2="1" y2="0">{stops}</linearGradient>')
for i, (sp, desc, has_cl) in enumerate(ROWS):
    y = Y0 + i * (RH + GAP)
    s.add(f'<rect x="{X0}" y="{y}" width="{X1 - X0}" height="{RH}" rx="6" fill="{BAND}"/>')
    s.add(s.text(X0 - 30, y + RH / 2 - 8, sp, T2, INK, "end", "bold", baseline="middle"))
    s.add(s.text(X0 - 30, y + RH / 2 + 20, desc, T4, MUTED, "end", baseline="middle"))
    if has_cl:  # chlorine-bearing emitter badge
        s.add(f'<rect x="{X0 - 30 - 110 - 20 - 230}" y="{y + RH / 2 - 14}" width="0" height="0"/>')
        bx = 30
        s.add(f'<rect x="{bx}" y="{y + RH / 2 - 15}" width="92" height="30" rx="15" fill="{WARM}"/>')
        s.add(s.text(bx + 46, y + RH / 2 + 1, "has Cl", T4, BG, "middle", "bold", baseline="middle"))
    for lam in LINES_NM.get(sp, []):
        s.add(f'<line x1="{X(lam):.1f}" y1="{y + 8}" x2="{X(lam):.1f}" y2="{y + RH - 8}" stroke="{wl_rgb(lam)}" stroke-width="5" stroke-linecap="round"/>')
    for lo, hi in BANDS_NM.get(sp, []):
        gid = f"band-{sp}-{int(lo)}"
        st = "".join(f'<stop offset="{(l - lo) / (hi - lo):.3f}" stop-color="{wl_rgb(l)}"/>' for l in range(int(lo), int(hi) + 1, 5))
        s.defs.append(f'<linearGradient id="{gid}" x1="0" y1="0" x2="1" y2="0">{st}</linearGradient>')
        s.add(f'<rect x="{X(lo):.1f}" y="{y + 8}" width="{X(hi) - X(lo):.1f}" height="{RH - 16}" rx="4" fill="url(#{gid})" opacity="0.9"/>')
ys = Y0 + len(ROWS) * (RH + GAP) + 10
s.add(f'<rect x="{X0}" y="{ys}" width="{X1 - X0}" height="34" rx="5" fill="url(#spectrum)"/>')
s.add(s.text(X0 - 30, ys + 17, "visible light", T4, MUTED, "end", baseline="middle"))
ya = ys + 34
for l in range(400, 701, 50):
    s.add(f'<line x1="{X(l):.1f}" y1="{ya}" x2="{X(l):.1f}" y2="{ya + 9}" stroke="{HAIR}" stroke-width="{W_AXIS}"/>')
    s.add(s.text(X(l), ya + 36, str(l), T3, INK, "middle"))
s.add(f'<line x1="{X0}" y1="{ya}" x2="{X1}" y2="{ya}" stroke="{HAIR}" stroke-width="{W_AXIS}"/>')
s.add(s.text((X0 + X1) / 2, ya + 76, "Wavelength of emitted light (nm)", T2, INK, "middle"))
s.add(s.text(W / 2, H - 22, "Wavelengths from Table 3 of Steinhauser &amp; Klapötke (2008). Screen colours are approximate.", T4, MUTED, "middle"))
print("wrote", s.write("fig4_firework_emitters.svg"), "bottom", ya + 90)
