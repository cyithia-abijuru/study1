import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FormContext } from '../FormDataContext';
import { styles, GROUP_CODE } from '../theme';

export default function VerificationPassScreen({ navigation }) {
  const { 
    zone, 
    vendorName, 
    vendorPhone,
    stallNumber, 
    commodity, 
    isElevated,
    hasWasteBin,
    imageUri, 
    resetForm 
  } = useContext(FormContext);

  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    // Generate formatted date & time for verification evidence
    const now = new Date();
    setTimestamp(
      now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) +
      ', ' +
      now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    );
  }, []);

  const handleNextVendor = () => {
    resetForm();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Zone' }],
    });
  };

  const isCompliant = isElevated && hasWasteBin;

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.passCard}>
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>✓ SAFE MARKET VERIFIED</Text>
        </View>

        <Text style={styles.passTitle}>Musanze Vendor Pilot Pass</Text>

        <Text style={styles.detailText}>
          <Text style={styles.bold}>Group Code:</Text> {GROUP_CODE}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.bold}>Recorded Date:</Text> {timestamp}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.bold}>Zone:</Text> {zone}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.bold}>Vendor Alias:</Text> {vendorName}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.bold}>Contact Phone:</Text> {vendorPhone}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.bold}>Stall Code:</Text> {stallNumber}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.bold}>Commodity:</Text> {commodity}
        </Text>

        {/* Hygiene Audit Summary Status */}
        <Text style={styles.detailText}>
          <Text style={styles.bold}>Hygiene Status:</Text>{' '}
          <Text style={{ color: isCompliant ? '#2D6A4F' : '#DC2626', fontWeight: 'bold' }}>
            {isCompliant ? 'Passed (Elevated & Waste Bin Present)' : 'Partial / Flagged'}
          </Text>
        </Text>
        
        {/* Visual Stall Evidence Image */}
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.passImage} />
        ) : (
          <View style={[styles.placeholderBox, { width: '100%', marginVertical: 12 }]}>
            <Text style={styles.placeholderText}>No image recorded</Text>
          </View>
        )}

        <Text style={styles.offlineNote}>
          * Record persisted locally to Expo AsyncStorage.
        </Text>

        {/* Primary CTA: Register Next */}
        <TouchableOpacity style={styles.primaryButton} onPress={handleNextVendor}>
          <Text style={styles.primaryButtonText}>+ Register Next Vendor</Text>
        </TouchableOpacity>

        {/* Back Navigation to modify current entry */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>← Back to Evidence Photo</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}