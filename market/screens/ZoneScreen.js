import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FormContext, ZONES_DATA } from '../FormDataContext';
import { styles } from '../theme';

export default function ZoneScreen({ navigation }) {
  const { zone, setZone } = useContext(FormContext);

  const handleSelectZone = (selectedId) => {
    setZone(selectedId);
    // Clicking any zone automatically opens the next screen
    navigation.navigate('VendorProfile');
  };

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.sectionTitle}>1. Assigned Market Zone</Text>
      <Text style={[styles.label, { marginBottom: 12 }]}>
        Tap any zone card below to select and proceed:
      </Text>

      {ZONES_DATA.map((z) => (
        <TouchableOpacity 
          key={z.id} 
          style={[styles.radioCard, zone === z.id && styles.radioCardSelected]}
          onPress={() => handleSelectZone(z.id)}
          activeOpacity={0.7}
        >
          <Image source={{ uri: z.image }} style={styles.zoneThumb} />
          <Text style={zone === z.id ? styles.radioTextSelected : styles.radioText}>
            {z.name}
          </Text>
        </TouchableOpacity>
      ))}

      {/* Primary Continue Button */}
      <TouchableOpacity 
        style={styles.primaryButton} 
        onPress={() => navigation.navigate('VendorProfile')}
      >
        <Text style={styles.primaryButtonText}>Continue with Selected Zone ➔</Text>
      </TouchableOpacity>

      {/* Functional Back to Landing/Splash Button */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.navigate('Splash')}
      >
        <Text style={styles.backButtonText}>← Back to Landing Page</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}