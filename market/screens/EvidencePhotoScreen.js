import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { FormContext } from '../FormDataContext';
import { styles } from '../theme';

export default function EvidencePhotoScreen({ navigation }) {
  const { 
    zone, vendorName, vendorPhone, stallNumber, commodity,
    isElevated, hasWasteBin, imageUri, setImageUri, setSavedCount
  } = useContext(FormContext);

  const takePhoto = async () => {
    const perm = await ImagePicker.requestCameraPermissionsAsync();
    if (!perm.granted) {
      Alert.alert("Camera Required", "Camera access is needed to capture stall conditions.");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      quality: 0.5,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const chooseFromGallery = async () => {
    const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!perm.granted) {
      Alert.alert("Permission Required", "Gallery permission is required to select photos.");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      quality: 0.5,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSave = async () => {
    if (!imageUri) {
      Alert.alert("Evidence Required", "Please attach 1 stall image as visual evidence.");
      return;
    }

    const newRecord = {
      id: `MSZ-FR-${Date.now()}`,
      timestamp: new Date().toISOString(),
      zone,
      vendor: {
        fictional_name: vendorName,
        fictional_phone: vendorPhone,
        stall_number: stallNumber,
        commodity
      },
      checklist: {
        fruit_elevated: isElevated,
        waste_bin_present: hasWasteBin
      },
      imageUri
    };

    try {
      const existingLogs = await AsyncStorage.getItem('@musanze_fruit_vendors');
      const logs = existingLogs ? JSON.parse(existingLogs) : [];
      logs.push(newRecord);
      await AsyncStorage.setItem('@musanze_fruit_vendors', JSON.stringify(logs));
      setSavedCount(logs.length);
      navigation.navigate('VerificationPass');
    } catch (e) {
      Alert.alert("Storage Error", "Could not save record locally.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.sectionTitle}>4. Stall Evidence Photo</Text>
      
      {imageUri ? (
        <View>
          <Image source={{ uri: imageUri }} style={styles.previewImage} />
          <TouchableOpacity 
            style={[styles.secondaryButton, { marginTop: 0, marginBottom: 10 }]} 
            onPress={() => setImageUri(null)}
          >
            <Text style={styles.secondaryButtonText}>🗑 Remove / Change Photo</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.placeholderBox}>
          <Text style={styles.placeholderText}>No evidence photo attached</Text>
        </View>
      )}

      <TouchableOpacity style={styles.secondaryButton} onPress={takePhoto}>
        <Text style={styles.secondaryButtonText}>📷 Capture Stall Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={chooseFromGallery}>
        <Text style={styles.secondaryButtonText}>🖼 Choose From Gallery</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.primaryButton} onPress={handleSave}>
        <Text style={styles.primaryButtonText}>Complete & Save Registration</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back to Hygiene Checklist</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}