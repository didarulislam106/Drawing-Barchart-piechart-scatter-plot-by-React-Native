import React from "react";
import { View, Text } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const App = () => {
  const screenWidth = Dimensions.get("window").width;
  const chartWidth = Math.min(screenWidth - 40, 600); // Limit max width to 600

  // Data: Cities and Population (Top 10 most populated cities in Spain)
  const data = {
    labels: [
      "Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza",
      "Málaga", "Murcia", "Palma", "Las Palmas", "Bilbao"
    ],
    datasets: [
      {
        data: [3266126, 1620343, 791413, 688711, 675301, 571026, 447182, 416066, 379925, 346405],
        colors: [
          (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
          (opacity = 1) => `rgba(255, 127, 0, ${opacity})`,
          (opacity = 1) => `rgba(255, 255, 0, ${opacity})`,
          (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
          (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
          (opacity = 1) => `rgba(0, 127, 255, ${opacity})`,
          (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
          (opacity = 1) => `rgba(127, 0, 255, ${opacity})`,
          (opacity = 1) => `rgba(255, 0, 255, ${opacity})`,
          (opacity = 1) => `rgba(255, 0, 127, ${opacity})`
        ]
      }
    ]
  };

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ffffff" }}>
      <Text style={{ 
        fontSize: 24, // Reduced from 28
        fontWeight: "bold", 
        textAlign: "center", 
        marginBottom: 15, // Reduced from 20
        color: "#333333",
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2
      }}>
        Top 10 Most Populated Cities in Spain
      </Text>

      <BarChart
        data={data}
        width={chartWidth}
        height={320} // Reduced from 380
        yAxisLabel=""
        yAxisSuffix=""
        xAxisLabel=""
        fromZero={true}
        showValuesOnTopOfBars={true}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForLabels: {
            fontSize: 10, // Reduced from 12
            fontWeight: "bold",
            fill: "#333333"
          },
          propsForBackgroundLines: {
            strokeWidth: 1,
            stroke: (opacity = 1) => {
              // Different colors for different level lines
              const value = opacity * 10;
              if (value < 3) return '#FF6B6B';
              if (value < 5) return '#4ECDC4';
              if (value < 7) return '#45B7D1';
              if (value < 9) return '#96CEB4';
              return '#88D8B0';
            }
          },
          barPercentage: 0.9,
        }}
        style={{
          marginVertical: 6, // Reduced from 8
          borderRadius: 12, // Reduced from 16
          elevation: 6, // Reduced from 8
          backgroundColor: "#ffffff",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          padding: 8,
        }}
        verticalLabelRotation={30}
      />
    </View>
  );
};

export default App;