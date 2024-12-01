import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      {/* Logo Section */}
      <View style={styles.logoSection}>
        <Text style={styles.logoText}>MAP for Coaches</Text>
      </View>

      {/* Description */}
      <Text style={styles.description}>
        Musculoskeletal Athletic Injury Prevention Training Course for Coaches
      </Text>

      {/* Social Media & Contact */}
      <View style={styles.contactSection}>
        <Text style={styles.socialMedia}>@tiplab_slu</Text>
        <Text style={styles.email}>tip.lab@health.slu.edu</Text>
      </View>

      {/* Navigation Links */}
      <View style={styles.linksSection}>
        <TouchableOpacity>
          <Text style={styles.link}>Recover</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Resources</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#1f2b30',
    padding: 20,
    alignItems: 'center',
  },
  logoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    color: '#cfd8dc',
    textAlign: 'center',
    marginBottom: 15,
  },
  contactSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 15,
  },
  socialMedia: {
    color: '#9e9e9e',
    fontSize: 14,
  },
  email: {
    color: '#9e9e9e',
    fontSize: 14,
  },
  linksSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  link: {
    color: '#90caf9',
    fontSize: 16,
  },
});
