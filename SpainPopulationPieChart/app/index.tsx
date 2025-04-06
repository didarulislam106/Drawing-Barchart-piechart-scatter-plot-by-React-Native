import React from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const App = () => {
  // Set iPad-like dimensions (assuming landscape orientation)
  const screenWidth = Math.min(Dimensions.get("window").width, 1024);
  const screenHeight = Math.min(Dimensions.get("window").height, 768);

  const totalPopulation = 9202498; // Sum of all city populations
  const data = [
    {
      name: "Madrid",
      population: 3266126,
      color: "#FF0000",
      legendFontColor: "#000000",
      legendFontSize: 14,
    },
    {
      name: "Barcelona",
      population: 1620343,
      color: "#0066FF",
      legendFontColor: "#000000",
      legendFontSize: 14,
    },
    {
      name: "Valencia",
      population: 791413,
      color: "#FFD700",
      legendFontColor: "#000000",
      legendFontSize: 14,
    },
    {
      name: "Seville",
      population: 688711,
      color: "#00CC99",
      legendFontColor: "#000000",
      legendFontSize: 14,
    },
    {
      name: "Zaragoza",
      population: 675301,
      color: "#9966FF",
      legendFontColor: "#000000",
      legendFontSize: 14,
    },
    {
      name: "Málaga",
      population: 571026,
      color: "#C9CBCF",
      legendFontColor: "#000000",
      legendFontSize: 14,
    },
    {
      name: "Murcia",
      population: 447182,
      color: "#FF8A65",
      legendFontColor: "#000000",
      legendFontSize: 14,
    },
    {
      name: "Palma",
      population: 416066,
      color: "#81C784",
      legendFontColor: "#000000",
      legendFontSize: 14,
    },
    {
      name: "Las Palmas",
      population: 379925,
      color: "#64B5F6",
      legendFontColor: "#000000",
      legendFontSize: 14,
    },
    {
      name: "Bilbao",
      population: 346405,
      color: "#BA68C8",
      legendFontColor: "#000000",
      legendFontSize: 14,
    },
  ];

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 30, textAlign: "center" }}>
        Population Distribution of Major Spanish Cities
      </Text>

      <PieChart
        data={data}
        width={screenWidth * 0.9}
        height={screenHeight * 0.6}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute={false}
        hasLegend={true}
        center={[screenWidth * 0.25, 0]}
      />
    </View>
  );
};

export default App;