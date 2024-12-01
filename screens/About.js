import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Footer from './footer'
import Footer1 from './footer1'

export default function About() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>About</Text>
      <Text style={styles.paragraph}>
        With over 45 million school sports and organized community-based youth (defined as age 6 to 17 years) programs in the United States, the potential for youth sports injuries is enormous. More than half of the youth population in the United States participate in sport. Regular participation in youth sport is important for physical and mental health, but not without the risk of injuries; every athletic exposure puts participants at a risk for injury. Of greatest burden are musculoskeletal injuries, i.e., muscle, joint (e.g., tendons and ligaments) and bone injuries, particularly in team sports such as youth football, basketball, soccer and volleyball.
      </Text>
      <Text style={styles.paragraph}>
        Beyond ensuring that players are available for games and practices/training, which is necessary for performance and winning medals, reducing the risk of both sudden and gradual onset (e.g., overuse) injuries in youth sports is essential to protect the present and future health of players. Coaches have a crucial role to play in ensuring the safety of their players.
      </Text>
      <Text style={styles.paragraph}>
        The MAP for Coaches is a novel eLearning tool freely available to youth sport coaches in the United States and around the world. Our goal is to increase coaches’ knowledge regarding musculoskeletal injury prevention and empower them to implement current and best injury prevention practices towards reducing injuries and enhancing performance in youth sport athletes.
      </Text>

      <Text style={styles.sectionTitle}>Project Team</Text>
      <Text style={styles.teamMember}>
        Dr. Oluwatoyosi (Olu) Owoeye (PhD, PT) - Project Lead{'\n'}
        Sports Injury Prevention, Dissemination and Implementation Science{'\n'}
        (Saint Louis University)
      </Text>
      <Text style={styles.teamMember}>
        Dr. Flavio Esposito (PhD){'\n'}
        Computer Science{'\n'}
        (Saint Louis University)
      </Text>
      <Text style={styles.teamMember}>
        Dr. Shelly Rauvola (PhD){'\n'}
        Psychology{'\n'}
        (DePaul University)
      </Text>
      <Text style={styles.teamMember}>
        Dr. Shelina Babul (PhD){'\n'}
        Sports Injury Prevention, eLearning{'\n'}
        (University of British Columbia)
      </Text>
      <Text style={styles.teamMember}>
        Dr. Ross Brownson (PhD){'\n'}
        Dissemination, Implementation and Policy Science{'\n'}
        (Washington University in Saint Louis)
      </Text>
      <Text style={styles.teamMember}>
        Trey Porter (MS, MA){'\n'}
        Sports Administration, Youth Football, Coaching{'\n'}
        (Missouri Minority Coaches Association)
      </Text>
      <Footer1/>
      <Footer/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#2c3e50',
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'justify',
  },
  teamMember: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 15,
    lineHeight: 22,
  },
});
