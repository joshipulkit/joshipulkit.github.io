"""Delhi skyline silhouette as SVG path fragments. Coordinates in a 600 x 160 box,
baseline y = 160 (ground). Landmarks left to right: Qutub Minar, apartment blocks,
Jama Masjid (dome + two minarets), India Gate, Humayun's Tomb dome, Lotus Temple, trees."""
import math

def qutub(x, h=150, w=26):
    """Tapered fluted tower with three balconies and a small cupola."""
    b = 160
    p = [f"M {x-w/2} {b} L {x-w/2+5} {b-h+12} Q {x} {b-h-2} {x+w/2-5} {b-h+12} L {x+w/2} {b} Z"]
    for f in (0.3, 0.55, 0.78):           # balconies
        y = b - h * f; ww = w * (1 - 0.45 * f) / 2 + 4
        p.append(f"M {x-ww} {y} L {x+ww} {y} L {x+ww-2} {y+5} L {x-ww+2} {y+5} Z")
    return " ".join(p)

def dome(cx, base_y, r, drum=6):
    """Onion dome on a short drum with a finial."""
    return (f"M {cx-r} {base_y} L {cx-r} {base_y-drum} "
            f"C {cx-r} {base_y-drum-r*1.15} {cx-r*0.55} {base_y-drum-r*1.55} {cx} {base_y-drum-r*1.7} "
            f"C {cx+r*0.55} {base_y-drum-r*1.55} {cx+r} {base_y-drum-r*1.15} {cx+r} {base_y-drum} "
            f"L {cx+r} {base_y} Z M {cx-1.2} {base_y-drum-r*1.7} L {cx-1.2} {base_y-drum-r*1.7-9} "
            f"L {cx+1.2} {base_y-drum-r*1.7-9} L {cx+1.2} {base_y-drum-r*1.7} Z")

def minaret(x, h, w=7):
    b = 160
    return (f"M {x-w/2} {b} L {x-w/2} {b-h} L {x-w/2-3} {b-h} L {x-w/2-3} {b-h-5} "
            f"L {x+w/2+3} {b-h-5} L {x+w/2+3} {b-h} L {x+w/2} {b-h} L {x+w/2} {b} Z "
            + dome(x, b-h-5, w/2+2, drum=2))

def jama_masjid(x):
    b = 160
    p = [f"M {x-70} {b} L {x-70} {b-34} L {x+70} {b-34} L {x+70} {b} Z"]  # prayer hall
    p.append(dome(x, b-34, 24, drum=10))
    p.append(dome(x-46, b-34, 14, drum=6)); p.append(dome(x+46, b-34, 14, drum=6))
    p.append(minaret(x-92, 90)); p.append(minaret(x+92, 90))
    return " ".join(p)

def india_gate(x):
    b = 160; w, h = 44, 72
    return (f"M {x-w} {b} L {x-w} {b-h} L {x-w+6} {b-h-4} L {x-w+6} {b-h-14} L {x+w-6} {b-h-14} "
            f"L {x+w-6} {b-h-4} L {x+w} {b-h} L {x+w} {b} L {x+18} {b} L {x+18} {b-38} "
            f"A 18 18 0 0 0 {x-18} {b-38} L {x-18} {b} Z "
            f"M {x-10} {b-h-14} L {x-10} {b-h-24} L {x+10} {b-h-24} L {x+10} {b-h-14} Z")

def humayun(x):
    b = 160
    p = [f"M {x-60} {b} L {x-60} {b-40} L {x+60} {b-40} L {x+60} {b} Z",
         f"M {x-30} {b-40} L {x-30} {b-52} L {x+30} {b-52} L {x+30} {b-40} Z", dome(x, b-52, 26, drum=10)]
    for dx in (-48, 48):
        p.append(f"M {x+dx-9} {b-40} L {x+dx-9} {b-50} L {x+dx+9} {b-50} L {x+dx+9} {b-40} Z")
        p.append(dome(x+dx, b-50, 7, drum=3))
    return " ".join(p)

def lotus(x):
    """Lotus Temple: three tiers of petals."""
    b = 160; p = []
    for tier, (n, h, w, y0) in enumerate([(5, 70, 16, 0), (3, 48, 20, 0), (1, 30, 26, 0)]):
        for i in range(n):
            cx = x + (i - (n - 1) / 2) * w * 1.5
            p.append(f"M {cx-w} {b} C {cx-w*0.6} {b-h*0.6} {cx-w*0.2} {b-h} {cx} {b-h} "
                     f"C {cx+w*0.2} {b-h} {cx+w*0.6} {b-h*0.6} {cx+w} {b} Z")
    return " ".join(p)

def block(x, w, h, floors=0):
    b = 160
    return f"M {x} {b} L {x} {b-h} L {x+w} {b-h} L {x+w} {b} Z"

def tree(x, r=9, h=18):
    b = 160
    return (f"M {x-1.5} {b} L {x-1.5} {b-h} L {x+1.5} {b-h} L {x+1.5} {b} Z "
            f"M {x-r} {b-h} A {r} {r} 0 1 1 {x+r} {b-h} A {r} {r} 0 1 1 {x-r} {b-h} Z")

def skyline_path():
    parts = [qutub(40), block(62, 30, 52), block(96, 22, 66), tree(130), jama_masjid(230),
             block(330, 26, 58), india_gate(400), block(452, 18, 44), tree(478), humayun(540),
             block(606, 22, 70), lotus(690), tree(760), block(780, 36, 48), block(820, 24, 62), tree(860)]
    return " ".join(parts)

if __name__ == "__main__":
    d = skyline_path()
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="900" height="200" viewBox="0 0 900 200">'
           f'<rect width="900" height="200" fill="#fff"/><path d="{d}" fill="#1d1d1f"/>'
           f'<rect x="0" y="160" width="900" height="40" fill="#1d1d1f"/></svg>')
    open("skyline_test.svg", "w").write(svg)
    print("ok")
