import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';

export default function Questions({ navigation }) {
    const handleStartQuestionnaire = (sport) => {
        navigation.navigate('Survey', { sport }); // Pass "Football" as a parameter
      };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sports</Text>

      {/* Football Card */}
      <View style={styles.card}>
        <Image source={require('../assets/ss1.png')} style={styles.cardImage} />
        <Text style={styles.cardTitle}>Football</Text>
        <Button
          title="Start Questionnaire"
          onPress={() => handleStartQuestionnaire('Football')}
        />
      </View>

      {/* Volleyball Card */}
      <View style={styles.card}>
        <Image source={require('../assets/ss2.png')} style={styles.cardImage} />
        <Text style={styles.cardTitle}>Basketball</Text>
        <Button
          title="Start Questionnaire"
          onPress={() => handleStartQuestionnaire('Basketball')}
        />
      </View>

      {/* Basketball Card */}
      <View style={styles.card}>
        <Image source={require('../assets/ss3.png')} style={styles.cardImage} />
        <Text style={styles.cardTitle}>Soccer</Text>
        <Button
          title="Start Questionnaire"
          onPress={() => handleStartQuestionnaire('Soccer')}
        />
      </View>

      {/* Soccer Card */}
      <View style={styles.card}>
        <Image source={require('../assets/ss4.png')} style={styles.cardImage} />
        <Text style={styles.cardTitle}>Volleyball</Text>
        <Button
          title="Start Questionnaire"
          onPress={() => handleStartQuestionnaire('Volleyball')}
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3, // Adds shadow on Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow direction
    shadowOpacity: 0.1, // Shadow intensity
    shadowRadius: 5, // Shadow blur radius
  },
  cardImage: {
    width: '100%',
    height: 200, // Adjust height as needed
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
});
