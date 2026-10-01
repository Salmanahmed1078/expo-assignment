import { StyleSheet, Text, View } from 'react-native';

export default function Header({ theme, title, subtitle }) {
  return (
    <View style={styles.wrap}>
      <View style={[styles.badge, { backgroundColor: theme.accent }]}>
        <Text style={styles.badgeText}>EXPO</Text>
      </View>
      <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
      <Text style={[styles.subtitle, { color: theme.muted }]}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: 28 },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    marginBottom: 14,
  },
  badgeText: { color: '#fff', fontWeight: '700', fontSize: 12, letterSpacing: 1.5 },
  title: { fontSize: 34, fontWeight: '800', letterSpacing: -0.5 },
  subtitle: { fontSize: 16, marginTop: 6, lineHeight: 22 },
});
