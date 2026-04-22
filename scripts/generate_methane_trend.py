from __future__ import annotations

import csv
from pathlib import Path

try:
    import matplotlib as mpl
    import matplotlib.pyplot as plt
except ModuleNotFoundError as exc:
    if exc.name and exc.name.startswith("matplotlib"):
        raise SystemExit(
            "matplotlib is required to generate this plot.\n"
            "Install it into the same interpreter you use to run the script:\n"
            "python3 -m pip install matplotlib"
        ) from exc
    raise


ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "scripts" / "data" / "ch4_annmean_gl.csv"
INSET = ROOT / "assets" / "img" / "posts" / "ohradical" / "ch4-degradation.png"
OUT = ROOT / "assets" / "img" / "posts" / "ohradical" / "methane-trend.png"


mpl.rcParams.update(
    {
        "figure.facecolor": "white",
        "axes.facecolor": "white",
        "savefig.facecolor": "white",
        "axes.edgecolor": "#222222",
        "axes.linewidth": 1.0,
        "axes.labelcolor": "#222222",
        "xtick.color": "#333333",
        "ytick.color": "#333333",
        "font.family": "sans-serif",
        "font.sans-serif": ["Arial", "Helvetica", "DejaVu Sans"],
        "font.size": 11,
        "axes.labelsize": 12,
        "xtick.labelsize": 10.5,
        "ytick.labelsize": 10.5,
    }
)


def read_data() -> tuple[list[int], list[float]]:
    years: list[int] = []
    means: list[float] = []
    with DATA.open() as fh:
        reader = csv.reader(line for line in fh if line.strip() and not line.startswith("#"))
        next(reader)  # header
        for year, mean, err in reader:
            years.append(int(year))
            means.append(float(mean))
    return years, means


def main() -> None:
    years, means = read_data()
    inset_img = plt.imread(INSET)

    fig, ax = plt.subplots(figsize=(8*0.9, 5*0.9), dpi=300)

    ax.plot(years, means, color="#0f5c5a", linewidth=4.4)
    ax.set_xlabel("Year")
    ax.set_ylabel("Global mean methane (ppb)")
    ax.grid(True, color="#d5dbe1", linewidth=0.8, alpha=0.8)

    inset_ax = ax.inset_axes([0.0, 0.63, 0.6, 0.3])
    inset_ax.imshow(inset_img)
    inset_ax.set_xticks([])
    inset_ax.set_yticks([])
    inset_ax.set_facecolor("white")
    for spine in inset_ax.spines.values():
        spine.set_edgecolor("#bfc7cf")
        spine.set_linewidth(0.8)

    fig.tight_layout()
    OUT.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(OUT, dpi=300)
    plt.close(fig)


if __name__ == "__main__":
    main()
