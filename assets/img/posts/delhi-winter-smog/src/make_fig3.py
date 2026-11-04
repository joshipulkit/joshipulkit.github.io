"""Fig 3: dissociation constants of NH4NO3(s) and NH4Cl(s) against temperature.
K(T) = K0 exp[a (T0/T - 1) + b (1 + ln(T0/T) - T0/T)], constants from Table 2 of
Fountoukis & Nenes (2007), Atmos. Chem. Phys. 7, 4639. 1 ppb = 1e-9 atm at 1 atm.
Sign convention: Table 2 lists -dH0/(R T0) and -dCp0/R (ISORROPIA coefficients); from Table 1,
dH_rxn(NH4NO3 dissociation) = +184.39 kJ/mol, so dH/(R T0) = +74.4 against the tabulated -74.735.
Cross-check: Mozurkewich (1993) ln Kp(nbar^2) = 118.87 - 24084/T - 6.025 ln T gives 43.1 (25 C),
0.815 (10 C), ratio 52.9; this script gives 42.0, 0.795, 52.8. Curves are for the dry solids."""
import math, sys
sys.path.insert(0, ".")
from figstyle import *

T0 = 298.15
RXN = {"NH4NO3": (4.199e-17, -74.735, 6.025), "NH4Cl": (1.086e-16, -71.00, 2.40)}
def K(T, K0, a, b):
    return K0 * math.exp(a * (T0 / T - 1) + b * (1 + math.log(T0 / T) - T0 / T)) * 1e18
kn25, kn10 = K(298.15, *RXN["NH4NO3"]), K(283.15, *RXN["NH4NO3"])
kc25, kc10 = K(298.15, *RXN["NH4Cl"]), K(283.15, *RXN["NH4Cl"])
assert 52 < kn25 / kn10 < 54 and 42 < kc25 / kc10 < 44, (kn25 / kn10, kc25 / kc10)
assert kn10 < kn25  # dissociation is endothermic: K falls on cooling

W, H = 1200, 780
L, R, T, B = 150, 60, 70, 110
PX0, PX1, PY0, PY1 = L, W - R, T, H - B
def X(t): return PX0 + t / 40 * (PX1 - PX0)
def Y(k): return PY1 - (math.log10(k) + 2) / 6 * (PY1 - PY0)

s = SVG(W, H)
for d in range(-2, 5):
    y = Y(10 ** d)
    s.add(f'<line x1="{PX0}" y1="{y:.1f}" x2="{PX1}" y2="{y:.1f}" stroke="{GRID}" stroke-width="{W_GRID}"/>')
    s.add(s.text(PX0 - 16, y, {-2: "0.01", -1: "0.1", 0: "1", 1: "10", 2: "100", 3: "1,000", 4: "10,000"}[d], T3, INK, "end", baseline="middle"))
for t in range(0, 41, 10):
    s.add(f'<line x1="{X(t):.1f}" y1="{PY1}" x2="{X(t):.1f}" y2="{PY1 + 8}" stroke="{HAIR}" stroke-width="{W_AXIS}"/>')
    s.add(s.text(X(t), PY1 + 36, str(t), T3, INK, "middle"))
s.add(f'<line x1="{PX0}" y1="{PY0}" x2="{PX0}" y2="{PY1}" stroke="{HAIR}" stroke-width="{W_AXIS}"/>')
s.add(f'<line x1="{PX0}" y1="{PY1}" x2="{PX1}" y2="{PY1}" stroke="{HAIR}" stroke-width="{W_AXIS}"/>')
s.add(s.text((PX0 + PX1) / 2, H - 34, "Air temperature (°C)", T2, INK, "middle"))
s.add(f'<text font-family="{FONT}" font-size="{T2}" fill="{INK}" text-anchor="middle" transform="translate(44,{(PY0 + PY1) / 2:.0f}) rotate(-90)">Dissociation constant K (ppb²)</text>')

def curve(name, colour):
    pts = " ".join(f"{X(t / 10):.1f},{Y(K(t / 10 + 273.15, *RXN[name])):.1f}" for t in range(0, 401))
    s.add(f'<polyline points="{pts}" fill="none" stroke="{colour}" stroke-width="{W_CURVE}" stroke-linecap="round" stroke-linejoin="round"/>')
curve("NH4Cl", BLUE); curve("NH4NO3", WARM)

# direct labels set along each curve (rotated to its local slope)
def along(name, colour, title, formula, side, t_mid=32.0):
    x0, x1 = X(t_mid - 4), X(t_mid + 4)
    y0, y1 = Y(K(t_mid - 4 + 273.15, *RXN[name])), Y(K(t_mid + 4 + 273.15, *RXN[name]))
    ang = math.degrees(math.atan2(y1 - y0, x1 - x0))
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    y_title, y_formula = (cy - 50, cy - 22) if side == "above" else (cy + 46, cy + 74)
    s.add(f'<g transform="rotate({ang:.2f} {cx:.1f} {cy:.1f})">'
          + s.text(cx, y_title, title, T2, colour, "middle", "bold")
          + s.text(cx, y_formula, formula, T3, colour, "middle") + "</g>")
along("NH4Cl", BLUE, "Ammonium chloride", sub("NH3 + HCl"), "above", 31)
along("NH4NO3", WARM, "Ammonium nitrate", sub("NH3 + HNO3"), "below", 33)

def mark(x, y, colour):
    s.add(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="9" fill="{colour}" stroke="{BG}" stroke-width="3.5"/>')
def bracket(xb, y_hi, y_lo, colour, label, side):
    s.add(f'<line x1="{xb}" y1="{y_hi}" x2="{xb}" y2="{y_lo}" stroke="{colour}" stroke-width="2.5"/>')
    for yy in (y_hi, y_lo):
        s.add(f'<line x1="{xb - 9}" y1="{yy}" x2="{xb + 9}" y2="{yy}" stroke="{colour}" stroke-width="2.5"/>')
    anchor = "end" if side == "left" else "start"
    s.add(s.text(xb + (-18 if side == "left" else 18), (y_hi + y_lo) / 2 + 10, label, T1, colour, anchor, "bold"))

# ammonium nitrate: dots at 25 and 10 °C, guides to a bracket on the left
yn25, yn10 = Y(kn25), Y(kn10)
xb = X(2.2)
for (xx, yy) in ((X(25), yn25), (X(10), yn10)):
    s.add(f'<line x1="{xb}" y1="{yy:.1f}" x2="{xx:.1f}" y2="{yy:.1f}" stroke="{WARM}" stroke-width="1.5" stroke-dasharray="5 7" opacity="0.6"/>')
    mark(xx, yy, WARM)
bracket(xb, yn25, yn10, WARM, "×53", "left")
s.add(s.text(X(25) + 18, yn25 + 34, "25 °C: 42 ppb²", T3, WARM))
s.add(s.text(X(10) + 18, yn10 + 34, "10 °C: 0.8 ppb²", T3, WARM))
# ammonium chloride: dots at 25 and 10 °C, bracket on the right
yc25, yc10 = Y(kc25), Y(kc10)
xb2 = X(7)
for (xx, yy) in ((X(25), yc25), (X(10), yc10)):
    s.add(f'<line x1="{xb2}" y1="{yy:.1f}" x2="{xx:.1f}" y2="{yy:.1f}" stroke="{BLUE}" stroke-width="1.5" stroke-dasharray="5 7" opacity="0.6"/>')
    mark(xx, yy, BLUE)
bracket(xb2, yc25, yc10, BLUE, "×43", "right")
# reading note
s.add(s.text(PX0 + 22, PY0 + 34, "Where the product of the two gas concentrations lies above a line,", T3, MUTED))
s.add(s.text(PX0 + 22, PY0 + 62, "the solid salt forms; below it, the solid evaporates.", T3, MUTED))
print("wrote", s.write("fig3_dissociation_constant_vs_temperature.svg"), "ratios %.1f %.1f" % (kn25 / kn10, kc25 / kc10))
