import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Footer from './footer'
import Footer1 from './footer1'
const sportsData = [
  {
    id: '1',
    image: require('../assets/football.png'), // Replace with the correct path
    title: 'FOOTBALL',
  },
  {
    id: '2',
    image: require('../assets/basketball.png'), // Replace with the correct path
    title: 'BASKETBALL',
  },
  {
    id: '3',
    image: require('../assets/soccer.png'), // Replace with the correct path
    title: 'SOCCER',
  },
  {
    id: '4',
    image: require('../assets/volleyball.png'), // Replace with the correct path
    title: 'VOLLEYBALL',
  },
];
const pic = [
  {
    id: '1',
    image: require('../assets/ss1.png'), // Replace with the correct path
    title: 'FOOTBALL',
  },
  {
    id: '2',
    image: require('../assets/ss2.png'), // Replace with the correct path
    title: 'BASKETBALL',
  },
  {
    id: '3',
    image: require('../assets/ss3.png'), // Replace with the correct path
    title: 'SOCCER',
  },
  {
    id: '4',
    image: require('../assets/ss4.png'), // Replace with the correct path
    title: 'VOLLEYBALL',
  },
];

export default function MainScreen() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>MAP</Text>
        <Text style={styles.headerSubtitle}>for Coaches</Text>
      </View>

      {/* Main Content Section */}
      <ScrollView>
        {/* Sports Selection Section */}
        <View style={styles.sportsList}>
          {sportsData.map((sport) => (
            <View key={sport.id} style={styles.sportCard}>
              <Image source={sport.image} style={styles.sportIcon} />
              <Text style={styles.sportTitle}>{sport.title}</Text>
            </View>
          ))}
        </View>

        {/* Information Section */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>
            Musculoskeletal Athletic Injury Prevention Online Training Course (MAP) for Coaches
          </Text>
          <Text style={styles.infoSubtitle}>Reducing Injuries and Enhancing Performance</Text>
          <Text style={styles.infoText}>
            The MAP for Coaches is a novel eLearning tool for youth sports coaches to increase their knowledge regarding
            sports-related musculoskeletal injuries and best injury prevention practices towards reducing injuries and
            enhancing performance in youth sport athletes. It provides structured learning modules tailored to the needs
            of coaches to better understand injury mechanisms, prevention techniques, and recovery strategies.
          </Text>
        </View>

        {/* Pictures Section with Grey Background */}
        <View style={styles.picList}>
          {pic.map((sport) => (
            <View key={sport.id} style={styles.sportCard}>
              <Image source={sport.image} style={styles.picIcon} />
            </View>
          ))}
        </View>
        <Footer1/>
        <Footer/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    backgroundColor: '#2c3e50',
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#b0c4de',
  },
  sportsList: {
    padding: 20,
    backgroundColor: '#fff',
  },
  sportCard: {
    alignItems: 'center',
    marginBottom: 20, // Spacing between cards
  },
  sportIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain', // Ensures proper image scaling
  },
  sportTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#fff',
  },
  infoTitle: {
    fontSize: 18,
    color: '#2c3e50',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoSubtitle: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#2c3e50',
    lineHeight: 20,
  },
  picList: {
    padding: 20,
    backgroundColor: '#d3d3d3', // Grey background for pic section
  },
  picIcon: {
    width: 150,  // Increased size for images
    height: 150,  // Increased size for images
    resizeMode: 'contain', // Ensures proper image scaling
  },
});
