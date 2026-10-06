import { StyleSheet } from 'react-native';

export const GROUP_CODE = "MOB-G01-1234"; // Replace with your actual group code

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  header: { backgroundColor: '#1B4332', padding: 20, paddingTop: 40 },
  headerTitle: { color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' },
  subHeader: { color: '#52B788', fontSize: 13, marginTop: 4 },
  content: { padding: 20 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#0F172A', marginBottom: 12 },
  label: { fontSize: 14, color: '#475569', marginBottom: 6 },
  input: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#CBD5E1', borderRadius: 8, padding: 12, marginBottom: 16, fontSize: 16, color: '#0F172A' },
  
  // Clickable Zone Card
  radioCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#CBD5E1', padding: 10, borderRadius: 8, marginBottom: 8 },
  radioCardSelected: { backgroundColor: '#D8F3DC', borderColor: '#2D6A4F', borderWidth: 2 },
  zoneThumb: { width: 50, height: 50, borderRadius: 6, marginRight: 12 },
  radioText: { fontSize: 14, color: '#334155', flex: 1 },
  radioTextSelected: { fontSize: 14, color: '#1B4332', fontWeight: 'bold', flex: 1 },

  // Switches & Actions
  switchRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFFFFF', padding: 14, borderRadius: 8, borderWidth: 1, borderColor: '#CBD5E1', marginBottom: 10 },
  switchLabel: { fontSize: 14, color: '#0F172A', flex: 1, paddingRight: 10 },
  primaryButton: { backgroundColor: '#2D6A4F', padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 14 },
  primaryButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  secondaryButton: { backgroundColor: '#E2E8F0', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  secondaryButtonText: { color: '#1E293B', fontSize: 15, fontWeight: '600' },
  backButton: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#CBD5E1', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  backButtonText: { color: '#475569', fontSize: 15, fontWeight: '600' },
  
  // Photo & Cards
  placeholderBox: { height: 160, backgroundColor: '#E2E8F0', borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  placeholderText: { color: '#64748B' },
  previewImage: { width: '100%', height: 180, borderRadius: 8, marginBottom: 10 },
  passCard: { backgroundColor: '#FFFFFF', padding: 20, borderRadius: 12, borderWidth: 1, borderColor: '#CBD5E1', alignItems: 'center' },
  badgeContainer: { backgroundColor: '#D8F3DC', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, marginBottom: 12 },
  badgeText: { color: '#1B4332', fontWeight: 'bold', fontSize: 13 },
  passTitle: { fontSize: 18, fontWeight: 'bold', color: '#0F172A', marginBottom: 16 },
  detailText: { fontSize: 15, color: '#334155', alignSelf: 'flex-start', marginBottom: 6 },
  bold: { fontWeight: 'bold' },
  passImage: { width: '100%', height: 180, borderRadius: 8, marginVertical: 12 },
  offlineNote: { fontSize: 12, color: '#64748B', fontStyle: 'italic', marginBottom: 10 }


 

});