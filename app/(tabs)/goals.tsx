import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function GoalsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Goals</ThemedText>
      <ThemedText>Track your progress here</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
}); 