import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Footer from './footer';
import Footer1 from './footer1';
export default function Resources() {
  const resources = [
    {
      title: "Effectiveness of multicomponent lower extremity injury prevention programmes in team-sport athletes: an umbrella review",
      url: "https://bjsm.bmj.com/content/53/5/282",
    },
    {
      title: "Reducing Injuries in Soccer (Football): an Umbrella Review of Best Evidence Across the Epidemiological Framework for Prevention",
      url: "https://sportsmedicine-open.springeropen.com/articles/10.1186/s40798-020-00274-7",
    },
    {
      title: "Meta-analysis of meta-analyses of anterior cruciate ligament injury reduction training programs",
      url: "https://onlinelibrary.wiley.com/doi/full/10.1002/jor.24043",
    },
    {
      title: "Injury prevention programmes with plyometric and strengthening exercises improve on-field performance: a systematic review",
      url: "https://www.sciencedirect.com/science/article/pii/S2059775421001036",
    },
    {
      title: "Effect of specific exercise-based football injury prevention programmes on the overall injury rate in football: a systematic review and meta-analysis of the FIFA 11 and 11+ programmes",
      url: "https://bjsm.bmj.com/content/51/7/562.long",
    },
    {
      title: "Neuromuscular training injury prevention strategies in youth sport: a systematic review and meta-analysis",
      url: "https://bjsm.bmj.com/content/49/13/865.long",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header Section with Background Image */}
      <ImageBackground source={require('../assets/ss1.png')} style={styles.headerBackground}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Resources</Text>
        </View>
      </ImageBackground>

      {/* Resources List */}
      <ScrollView style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Top-Class Scientific Papers Supporting Neuromuscular Training Programs</Text>
        {resources.map((resource, index) => (
          <TouchableOpacity key={index} onPress={() => Linking.openURL(resource.url)} style={styles.linkContainer}>
            <Text style={styles.linkText}>{resource.title}</Text>
          </TouchableOpacity>
        ))}
        <Footer1/>
      </ScrollView>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerBackground: {
    height: 100,
    resizeMode: 'cover',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoContainer: {
    padding: 15,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  linkContainer: {
    marginVertical: 5,
  },
  linkText: {
    color: '#1e90ff',
    fontSize: 16,
  },
});
