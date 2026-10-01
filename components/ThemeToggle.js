import { StyleSheet, Switch, Text, View } from 'react-native';

export default function ThemeToggle({ theme, isDark, onToggle }) {
  return (
    <View style={[styles.row, { backgroundColor: theme.card, borderColor: theme.border }]}>
      <Text style={[styles.text, { color: theme.text }]}>Dark mode</Text>
      <Switch
        value={isDark}
        onValueChange={onToggle}
        trackColor={{ true: theme.accent, false: theme.border }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 12,
    marginTop: 16,
  },
  text: { fontSize: 16, fontWeight: '600' },
});
