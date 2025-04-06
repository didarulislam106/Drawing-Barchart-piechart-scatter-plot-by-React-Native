// App.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, Dimensions } from 'react-native';

const matches = [
  { team: 'Real Madrid', goals: 4 },
  { team: 'Barcelona', goals: 2 },
  { team: 'Atlético Madrid', goals: 3 },
  { team: 'Sevilla', goals: 1 },
  { team: 'Valencia', goals: 0 },
  { team: 'Villarreal', goals: 2 },
  { team: 'Real Betis', goals: 3 },
  { team: 'Getafe', goals: 1 },
  { team: 'Osasuna', goals: 5 },
  { team: 'Cádiz', goals: 4 },
  { team: 'Mallorca', goals: 2 },
  { team: 'Granada', goals: 6 },
  { team: 'Celta Vigo', goals: 3 },
];

const getStemLeafData = (data: { team: string; goals: number }[]) => {
  const map: Record<string, number[]> = {};
  data.forEach(({ goals }) => {
    const stem = Math.floor(goals / 10).toString();
    const leaf = goals % 10;
    if (!map[stem]) map[stem] = [];
    map[stem].push(leaf);
  });

  return Object.entries(map).map(([stem, leaves]) => ({
    key: stem,
    stem,
    leaves: leaves.sort((a, b) => a - b).join(' '),
  }));
};

export default function App() {
  const stemLeafData = getStemLeafData(matches);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>⚽ Team Goals: Stem-and-Leaf Plot</Text>

      <Text style={styles.subtitle}>Match Results:</Text>
      <FlatList
        data={matches}
        renderItem={({ item }) => (
          <Text style={styles.row}>
            {item.team}: {item.goals} goals
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={<View style={{ marginBottom: 20 }} />}
      />

      <Text style={styles.subtitle}>Stem-and-Leaf Plot:</Text>
      <FlatList
        data={stemLeafData}
        renderItem={({ item }) => (
          <Text style={styles.row}>
            {item.stem} | {item.leaves}
          </Text>
        )}
        keyExtractor={(item) => item.key}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Math.min(Dimensions.get("window").height * 0.08, 60),
    paddingHorizontal: Math.min(Dimensions.get("window").width * 0.05, 40),
    backgroundColor: '#fff',
    flex: 1,
    maxWidth: 1024,
    alignSelf: 'center',
    width: '100%'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: '600',
  },
  row: {
    fontSize: 16,
    marginVertical: 4,
  },
});
