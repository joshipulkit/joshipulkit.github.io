from __future__ import annotations

from pathlib import Path

try:
    import matplotlib as mpl
    import matplotlib.pyplot as plt
    from matplotlib.patches import Circle, FancyArrowPatch, FancyBboxPatch
except ModuleNotFoundError as exc:
    if exc.name and exc.name.startswith("matplotlib"):
        raise SystemExit(
            "matplotlib is required to generate this figure.\n"
            "Install it into the same interpreter you use to run the script:\n"
            "python3 -m pip install matplotlib"
        ) from exc
    raise


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "img" / "posts" / "ohradical" / "oh-cycle-schematic.png"


mpl.rcParams.update(
    {
        "figure.facecolor": "white",
        "axes.facecolor": "white",
        "savefig.facecolor": "white",
        "font.family": "sans-serif",
        "font.sans-serif": ["Avenir Next", "Avenir", "Arial", "Helvetica", "DejaVu Sans"],
        "font.size": 11,
        "text.color": "#1f2b36",
    }
)


def rounded_box(ax, xy, width, height, facecolor, edgecolor="#cfd6dd", lw=1.0, radius=0.03):
    box = FancyBboxPatch(
        xy,
        width,
        height,
        boxstyle=f"round,pad=0.012,rounding_size={radius}",
        facecolor=facecolor,
        edgecolor=edgecolor,
        linewidth=lw,
    )
    ax.add_patch(box)
    return box


def arrow(ax, start, end, color="#0f5c5a", lw=1.8, ms=12, style="-|>"):
    ax.add_patch(
        FancyArrowPatch(
            start,
            end,
            arrowstyle=style,
            mutation_scale=ms,
            linewidth=lw,
            color=color,
            connectionstyle="arc3,rad=0.0",
        )
    )


def main() -> None:
    fig, ax = plt.subplots(figsize=(10.5, 6.2), dpi=300)
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.axis("off")

    teal = "#0f5c5a"
    teal_light = "#e8f3f2"
    orange = "#c96b2c"
    orange_light = "#faeee4"
    green = "#2f7d60"
    green_light = "#ebf5ef"
    red = "#c26a3d"
    red_light = "#faeee8"
    gray = "#5c6975"
    gray_light = "#f6f8fa"

    ax.text(
        0.05,
        0.94,
        "How OH is produced, recycled, and modulated in the lower atmosphere",
        fontsize=17,
        fontweight="bold",
        color="#24303b",
        ha="left",
        va="top",
    )

    # Production block
    rounded_box(ax, (0.05, 0.56), 0.28, 0.25, teal_light, edgecolor="#b9d7d5", lw=1.2)
    ax.text(0.07, 0.77, "Primary OH production", fontsize=12.5, fontweight="bold", color=teal, ha="left")
    ax.text(0.07, 0.70, r"$\mathrm{O_3 + h\nu \rightarrow O(^1D) + O_2}$", fontsize=13, ha="left")
    ax.text(0.07, 0.62, r"$\mathrm{O(^1D) + H_2O \rightarrow 2\,OH}$", fontsize=13, ha="left")

    # Central OH node
    ax.add_patch(Circle((0.46, 0.68), 0.06, facecolor=teal, edgecolor=teal, linewidth=1.2))
    ax.text(0.46, 0.68, "OH", fontsize=18, fontweight="bold", color="white", ha="center", va="center")

    arrow(ax, (0.33, 0.68), (0.395, 0.68), color=teal, lw=2.0, ms=14)

    # Recycling block
    rounded_box(ax, (0.58, 0.48), 0.35, 0.33, orange_light, edgecolor="#e1bfaa", lw=1.2)
    ax.text(0.60, 0.77, "OH recycling and ozone-forming propagation", fontsize=12.5, fontweight="bold", color=orange, ha="left")
    ax.text(0.60, 0.69, r"$\mathrm{OH + CO/VOCs/CH_4 \rightarrow HO_2/RO_2}$", fontsize=12.6, ha="left")
    ax.text(0.60, 0.62, r"$\mathrm{HO_2 + NO \rightarrow OH + NO_2}$", fontsize=12.6, ha="left")
    ax.text(0.60, 0.55, r"$\mathrm{NO_2 + h\nu \rightarrow NO + O}$", fontsize=12.6, ha="left")
    ax.text(0.60, 0.48, r"$\mathrm{O + O_2 \rightarrow O_3}$", fontsize=12.6, ha="left")

    arrow(ax, (0.52, 0.68), (0.58, 0.68), color=orange, lw=2.0, ms=14)
    arrow(ax, (0.73, 0.48), (0.50, 0.60), color=orange, lw=1.6, ms=12, style="->")

    # Spatial cue
    rounded_box(ax, (0.05, 0.31), 0.36, 0.14, gray_light, edgecolor="#d6dde4", lw=1.0)
    ax.text(0.07, 0.405, "Where this cycle is most effective", fontsize=11.5, fontweight="bold", color="#334150", ha="left")
    ax.text(
        0.07,
        0.345,
        "Humid, sunlit tropical lower troposphere\nsupports strong OH production and recycling.",
        fontsize=11,
        color=gray,
        ha="left",
        va="center",
        linespacing=1.35,
    )

    # Warming cues
    rounded_box(ax, (0.48, 0.14), 0.21, 0.18, green_light, edgecolor="#bfd7c8", lw=1.0)
    ax.text(0.50, 0.275, "Warming pathway 1", fontsize=11, fontweight="bold", color=green, ha="left")
    ax.text(
        0.50,
        0.205,
        "More H$_2$O\nsupports primary OH production",
        fontsize=10.6,
        color="#3f4b56",
        ha="left",
        va="center",
        linespacing=1.35,
    )

    rounded_box(ax, (0.72, 0.14), 0.21, 0.18, red_light, edgecolor="#e0c5b7", lw=1.0)
    ax.text(0.74, 0.275, "Warming pathway 2", fontsize=11, fontweight="bold", color=red, ha="left")
    ax.text(
        0.74,
        0.205,
        "More BVOCs, fire emissions,\nand reactive competition can\nreduce net OH",
        fontsize=10.3,
        color="#3f4b56",
        ha="left",
        va="center",
        linespacing=1.3,
    )

    arrow(ax, (0.52, 0.56), (0.58, 0.33), color=green, lw=1.8, ms=13, style="->")
    arrow(ax, (0.71, 0.49), (0.79, 0.33), color=red, lw=1.8, ms=13, style="->")

    ax.text(
        0.69,
        0.08,
        "Net OH response is not straightforward",
        fontsize=11.8,
        fontweight="bold",
        color="#384552",
        ha="center",
    )

    fig.tight_layout(pad=1.0)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(OUT, dpi=300, bbox_inches="tight")
    plt.close(fig)


if __name__ == "__main__":
    main()
