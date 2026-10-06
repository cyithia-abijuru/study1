import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { GROUP_CODE } from '../theme';

export default function SplashScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Group2-7096</Text>
        </View>

        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800' }} 
          style={styles.heroImage} 
        />

        <Text style={styles.title}>Musanze Safe Market</Text>
        <Text style={styles.subtitle}>Field Inspection Prototype</Text>
        <Text style={styles.tagline}>Healthy Markets • Safer Communities</Text>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.replace('Zone')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Get Started →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  badge: { backgroundColor: '#D8F3DC', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, marginBottom: 20 },
  badgeText: { color: '#1B4332', fontWeight: '700', fontSize: 13 },
  heroImage: { width: '100%', height: 260, borderRadius: 16, marginBottom: 24 },
  title: { fontSize: 26, fontWeight: '800', color: '#1B4332', marginBottom: 6 },
  subtitle: { fontSize: 16, color: '#64748B', marginBottom: 12 },
  tagline: { fontSize: 13, color: '#2D6A4F', fontWeight: '600', marginBottom: 36 },
  button: { backgroundColor: '#1B4332', width: '100%', paddingVertical: 16, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' }
});