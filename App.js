import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Navigator from './src/navigators/Navigators';

const App = () => (
  <SafeAreaView style={styles.container}>
    <Navigator />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
