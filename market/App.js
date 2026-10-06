import React, { useContext } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FormProvider, FormContext } from './FormDataContext';
import { styles, GROUP_CODE } from './theme';

import SplashScreen from './screens/SplashScreen';
import ZoneScreen from './screens/ZoneScreen';
import VendorProfileScreen from './screens/VendorProfileScreen';
import HygieneAuditScreen from './screens/HygieneAuditScreen';
import EvidencePhotoScreen from './screens/EvidencePhotoScreen';
import VerificationPassScreen from './screens/VerificationPassScreen';

const Stack = createNativeStackNavigator();

function Header() {
  const { savedCount } = useContext(FormContext);
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Musanze Safe Markets</Text>
      <Text style={styles.subHeader}>
        {GROUP_CODE} • Fruit & Avocado Section • Pilot Saved: {savedCount}
      </Text>
    </View>
  );
}

// Wrapper for pages that require the top market header
function MainAppFlow() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stack.Navigator
        initialRouteName="Zone"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          contentStyle: { backgroundColor: '#F8FAFC' }
        }}
      >
        <Stack.Screen name="Zone" component={ZoneScreen} />
        <Stack.Screen name="VendorProfile" component={VendorProfileScreen} />
        <Stack.Screen name="HygieneAudit" component={HygieneAuditScreen} />
        <Stack.Screen name="EvidencePhoto" component={EvidencePhotoScreen} />
        <Stack.Screen name="VerificationPass" component={VerificationPassScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <FormProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          {/* Landing / Splash Screen */}
          <Stack.Screen name="Splash" component={SplashScreen} />

          {/* Form and Inspection Flow */}
          <Stack.Screen name="Zone" component={MainAppFlow} />
        </Stack.Navigator>
      </NavigationContainer>
    </FormProvider>
  );
}