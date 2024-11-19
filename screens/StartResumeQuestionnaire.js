// screens/ResumeQuestionnaire.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StartResumeQuestionnaire() {
  return (
    <View style={styles.container}>
      <Text>Start Resume Questionnaire Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
