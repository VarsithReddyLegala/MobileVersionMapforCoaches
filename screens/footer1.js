import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default function Footer1() {
  return (
    <View style={styles.container}>

      {/* Cards */}
      <View style={styles.row}>
        {/* Card 1 */}
        <View style={styles.card}>
          <Image source={require('../assets/s1.png')} style={styles.cardImage} />
        </View>

        {/* Card 2 */}
        <View style={styles.card}>
          <Image source={require('../assets/s2.png')} style={styles.cardImage} />
        </View>
      </View>

      <View style={styles.row}>
        {/* Card 3 */}
        <View style={styles.card}>
          <Image source={require('../assets/s3.png')} style={styles.cardImage} />
        </View>

        {/* Card 4 */}
        <View style={styles.card}>
          <Image source={require('../assets/s4.png')} style={styles.cardImage} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    width: Dimensions.get('window').width / 2 - 30, // Half width minus margin
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow direction
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardImage: {
    width: '80%',
    height: 120, // Adjust height as needed
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    padding: 10,
  },
});
