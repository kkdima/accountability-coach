import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ChatScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Coach Chat</ThemedText>
      <ThemedText>Chat with your accountability coach</ThemedText>
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