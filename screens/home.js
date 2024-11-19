import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, FlatList, Image } from 'react-native';

const cardData = [
  {
    id:'1',
    image: require('../assets/ss1.png')
  },
  {
    id: '2',
    image: require('../assets/ss2.png')
  }
];

export default function MainScreen() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>MAP</Text>
          <Text style={styles.subtitle}>for Coaches</Text>
        </View>
      </View>

      {/* Sports Selection Section */}
      <ImageBackground source={require('../assets/background.png')} style={styles.background}>
        <View style={styles.sportsContainer}>
          <Text style={styles.welcomeTitle}>WELCOME</Text>
          <Text style={styles.welcomeSubtitle}>CHOOSE YOUR SPORT</Text>
        </View>
      </ImageBackground>

      {/* Information Section */}
      <ScrollView style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Musculoskeletal Athletic Injury Prevention Online Training Course (MAP) for Coaches</Text>
        <Text style={styles.infoSubtitle}>Reducing Injuries and Enhancing Performance</Text>
        <Text style={styles.infoText}>
          The MAP for Coaches is a novel eLearning tool for youth sports coaches to increase their knowledge regarding
          sports-related musculoskeletal injuries and best injury prevention practices towards reducing injuries and
          enhancing performance in youth sport athletes.
        </Text>
      </ScrollView>

      {/* Cards Section */}
      <FlatList
        data={cardData}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={styles.cardContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  textContainer: {
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#b0c4de',
    fontSize: 12,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  sportsContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  welcomeTitle: {
    fontSize: 36,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  welcomeSubtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 40,
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
  },
  infoTitle: {
    fontSize: 18,
    color: '#2c3e50', 
    fontWeight: 'bold',
    marginBottom: 5,
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
  cardContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    width: 200,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    padding: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
