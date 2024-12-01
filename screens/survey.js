import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

const SurveyForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    fullName: "",
    date: "",
    phone: "",
    state: "",
    workSetting: "",
    otherSetting: "",
    ethnicity: "",
    race: "",
    sexAtBirth: "",
    genderIdentity: "",
    education: "",
    roles: "",
    playerLevel: "",
    playerAge: "",
    coachingExperience: "",
    sports: "",
    coachingMonths: "",
    warmupFamiliarity: "",
    warmupPrograms: "",
    warmupSource: "",
    impactedAthletes: "",
    injuryTraining: "",
    injuryDetails: "",
    preventionConfidence: {
      understanding: "",
      ability: "",
      intent: "",
      spaceLimitation: "",
    },
    warmupFrequency: "",
    injuryKnowledge: "",
    injurySeverity: "",
    preventionImportance: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNestedChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // Save form data locally or perform other actions
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>MAP For Coaches Survey</Text>

      {/* Full Name */}
      <Text style={styles.label}>Full Name *</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        value={formData.fullName}
        onChangeText={(text) => handleInputChange("fullName", text)}
      />

      {/* Date */}
      <Text style={styles.label}>Today's Date *</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter today's date"
        value={formData.date}
        onChangeText={(text) => handleInputChange("date", text)}
      />

      {/* Phone */}
      <Text style={styles.label}>Phone *</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        value={formData.phone}
        onChangeText={(text) => handleInputChange("phone", text)}
        keyboardType="phone-pad"
      />

      {/* State */}
      <Text style={styles.label}>State of Residence *</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your state of residence"
        value={formData.state}
        onChangeText={(text) => handleInputChange("state", text)}
      />

      {/* Work Setting */}
      <Text style={styles.label}>What setting do you mostly work in? *</Text>
      <View style={styles.optionsContainer}>
        {["School", "Club", "Private training and camps", "Faith-based"].map(
          (option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.option,
                formData.workSetting === option && styles.selectedOption,
              ]}
              onPress={() => handleInputChange("workSetting", option)}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          )
        )}
      </View>

      {/* Other Work Setting */}
      <Text style={styles.label}>Others, please specify:</Text>
      <TextInput
        style={styles.input}
        placeholder="Specify other settings"
        value={formData.otherSetting}
        onChangeText={(text) => handleInputChange("otherSetting", text)}
      />

      {/* Ethnicity */}
      <Text style={styles.label}>Ethnicity *</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your ethnicity"
        value={formData.ethnicity}
        onChangeText={(text) => handleInputChange("ethnicity", text)}
      />

      {/* Race */}
      <Text style={styles.label}>Race *</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your race"
        value={formData.race}
        onChangeText={(text) => handleInputChange("race", text)}
      />

      {/* Sex at Birth */}
      <Text style={styles.label}>Sex at Birth *</Text>
      <View style={styles.optionsContainer}>
        {["Male", "Female", "Intersex"].map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              formData.sexAtBirth === option && styles.selectedOption,
            ]}
            onPress={() => handleInputChange("sexAtBirth", option)}
          >
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Education */}
      <Text style={styles.label}>Highest Level of Education *</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your education level"
        value={formData.education}
        onChangeText={(text) => handleInputChange("education", text)}
      />

      {/* Sports Coached */}
      <Text style={styles.label}>
        What sport(s) do you currently work with? *
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter sports you coach"
        value={formData.sports}
        onChangeText={(text) => handleInputChange("sports", text)}
      />

      {/* Warmup Exercises */}
      <Text style={styles.label}>
        Are you familiar with structured warmup exercises? *
      </Text>
      <View style={styles.optionsContainer}>
        {["Yes", "No"].map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              formData.warmupFamiliarity === option && styles.selectedOption,
            ]}
            onPress={() => handleInputChange("warmupFamiliarity", option)}
          >
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Warmup Program Details */}
      <Text style={styles.label}>If yes, please specify:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter program details"
        value={formData.warmupPrograms}
        onChangeText={(text) => handleInputChange("warmupPrograms", text)}
      />

      {/* Submit Button */}
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#f5f5f5",
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  option: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "48%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    color: "#fff",
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default SurveyForm;
