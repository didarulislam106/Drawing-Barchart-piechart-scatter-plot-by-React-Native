import matplotlib.pyplot as plt
import matplotlib.image as mpimg
from matplotlib.offsetbox import OffsetImage, AnnotationBbox

# Data
players = [
    {"name": "Messi", "goals": 821, "assists": 361, "image": "images/messi.png"},
    {"name": "Ronaldo", "goals": 873, "assists": 272, "image": "images/ronaldo.png"},
    {"name": "Neymar", "goals": 450, "assists": 280, "image": "images/neymar.png"},
    {"name": "Mbappé", "goals": 300, "assists": 120, "image": "images/mbappe.png"},
    {"name": "Lewandowski", "goals": 630, "assists": 140, "image": "images/lewandowski.png"},
    {"name": "Haaland", "goals": 240, "assists": 50, "image": "images/haaland.png"},
]

# Set up figure
fig, ax = plt.subplots(figsize=(10, 7))

# Plot each player as image marker
for p in players:
    img = mpimg.imread(p["image"])
    imagebox = OffsetImage(img, zoom=0.15)  # Adjust zoom for marker size
    ab = AnnotationBbox(imagebox, (p["goals"], p["assists"]), frameon=False)
    ax.add_artist(ab)
    ax.text(p["goals"], p["assists"] + 10, p["name"], ha='center', fontsize=9)

# Plot settings
ax.set_xlabel("Goals", fontsize=12)
ax.set_ylabel("Assists", fontsize=12)
ax.set_title("Football Players: Goals vs Assists", fontsize=14)
ax.grid(True)

# Set limits with padding
ax.set_xlim(200, 900)
ax.set_ylim(0, 400)

plt.tight_layout()
plt.show()
