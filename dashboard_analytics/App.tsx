
import { StyleSheet, View } from 'react-native';
import { LineChart } from './src/components/LineChart';

export default function App() {
  const data = [400, 423, 234, 432, 565, 253, 523, 603]
  return (
    <View style={styles.container}>
        <LineChart data={data} color='#C5F04D' title='R$ 500,00' subtitle='Evolução de Janeiro de 2025'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1D1f',
    paddingTop: 64,
  },
});
