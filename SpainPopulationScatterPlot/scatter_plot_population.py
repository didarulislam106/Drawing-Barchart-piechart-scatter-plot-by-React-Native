import matplotlib.pyplot as plt

# Top 10 most populated countries + Spain (Finland is excluded)
countries = [
    "China", "India", "USA", "Indonesia", "Pakistan",
    "Brazil", "Nigeria", "Bangladesh", "Russia", "Mexico", "Spain"
]

# Population in millions (2024 estimates)
populations = [
    1444, 1411, 332, 276, 225,
    213, 211, 166, 145, 130, 47
]

# X-axis positions
x_positions = list(range(1, len(countries) + 1))

# Color Spain in red
colors = ["red" if country == "Spain" else "blue" for country in countries]

# Create the plot
plt.figure(figsize=(12, 7))
plt.scatter(x_positions, populations, color=colors, s=100)

# Add country name labels above points
for i, country in enumerate(countries):
    plt.text(x_positions[i], populations[i] + 15, country, ha='center', fontsize=9)

# Configure chart
plt.title("Top 10 Most Populated Countries + Spain (2024)", fontsize=14)
plt.xlabel("Country Index")
plt.ylabel("Population (in millions)")
plt.xticks(x_positions, countries, rotation=45)
plt.grid(True)
plt.tight_layout()

# Show the plot
plt.show()
