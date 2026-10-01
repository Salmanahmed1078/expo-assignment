import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import CounterCard from './components/CounterCard';
import ThemeToggle from './components/ThemeToggle';
import { themes } from './components/theme';

export default function App() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? themes.dark : themes.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Header
        theme={theme}
        title="Salman's Expo App"
        subtitle="Custom UI built with React Native components and deployed with GitHub Actions."
      />
      <CounterCard
        theme={theme}
        count={count}
        onIncrement={() => setCount((c) => c + 1)}
        onReset={() => setCount(0)}
      />
      <ThemeToggle theme={theme} isDark={isDark} onToggle={setIsDark} />
      <StatusBar style={isDark ? 'light' : 'dark'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 90,
  },
});
