import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function CounterCard({ theme, count, onIncrement, onReset }) {
  return (
    <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
      <Text style={[styles.label, { color: theme.muted }]}>Taps</Text>
      <Text style={[styles.count, { color: theme.text }]}>{count}</Text>

      <Pressable
        onPress={onIncrement}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: theme.accent, opacity: pressed ? 0.8 : 1 },
        ]}
      >
        <Text style={styles.buttonText}>Tap me</Text>
      </Pressable>

      <Pressable onPress={onReset} style={styles.reset}>
        <Text style={[styles.resetText, { color: theme.muted }]}>Reset</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 24,
    alignItems: 'center',
  },
  label: { fontSize: 14, fontWeight: '600', textTransform: 'uppercase', letterSpacing: 1 },
  count: { fontSize: 72, fontWeight: '800', marginVertical: 8, fontVariant: ['tabular-nums'] },
  button: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '700' },
  reset: { marginTop: 14, padding: 6 },
  resetText: { fontSize: 15, fontWeight: '600' },
});
