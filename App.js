import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from 'react-native';

const markets = [
  { name: 'BTC/USDT', type: 'CRYPTO', status: 'Waiting for data' },
  { name: 'ETH/USDT', type: 'CRYPTO', status: 'Waiting for data' },
  { name: 'EUR/USD', type: 'FOREX', status: 'Waiting for data' },
  { name: 'GBP/USD', type: 'FOREX', status: 'Waiting for data' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.logo}>SignalPro AI</Text>
        <Text style={styles.subtitle}>
          Trading analysis dashboard
        </Text>

        <View style={styles.notice}>
          <Text style={styles.noticeTitle}>Market status</Text>
          <Text style={styles.noticeText}>
            Live market data is not connected yet.
          </Text>
        </View>

        <Text style={styles.heading}>Markets to watch</Text>

        {markets.map((market) => (
          <View key={market.name} style={styles.card}>
            <View>
              <Text style={styles.market}>{market.name}</Text>
              <Text style={styles.type}>{market.type}</Text>
            </View>
            <Text style={styles.status}>{market.status}</Text>
          </View>
        ))}

        <Text style={styles.disclaimer}>
          Educational use only. Trading involves risk.
          Signals and profits are not guaranteed.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B1020' },
  content: { padding: 22, paddingTop: 45 },
  logo: { color: '#FFFFFF', fontSize: 30, fontWeight: 'bold' },
  subtitle: { color: '#AAB4CC', marginTop: 8, marginBottom: 28 },
  notice: {
    backgroundColor: '#17223B',
    padding: 18,
    borderRadius: 14,
    marginBottom: 28,
  },
  noticeTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  noticeText: { color: '#AAB4CC', marginTop: 8 },
  heading: { color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', marginBottom: 14 },
  card: {
    backgroundColor: '#141B2D',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  market: { color: '#FFFFFF', fontSize: 17, fontWeight: 'bold' },
  type: { color: '#8996B3', marginTop: 5, fontSize: 12 },
  status: { color: '#F5C66B', fontSize: 12 },
  disclaimer: {
    color: '#8996B3',
    marginTop: 25,
    lineHeight: 20,
    fontSize: 12,
  },
});
