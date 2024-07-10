import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux'; // Importing useSelector hook from react-redux for accessing state
import { RootState } from '../store/store'; // Importing RootState type for type safety
//import { JournalEntry } from '../slices/journalSlice'; // Uncomment this if using JournalEntry type

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const entries = useSelector((state: RootState) => state.journal.entries); // Fetching entries from Redux store

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal Entries</Text>
      {/* FlatList to render list of journal entries */}
      <FlatList
        data={entries} // Data source is entries fetched from Redux store
        keyExtractor={(item) => item.id} // Extracting unique key for each item
        renderItem={({ item }) => ( // Rendering each item as TouchableOpacity for navigation to EntryScreen
          <TouchableOpacity onPress={() => navigation.navigate('Entry', { entry: item })}>
            <View style={styles.entry}>
              <Text style={styles.entryTitle}>{item.title}</Text> {/* Displaying title of each entry */}
              <Text style={styles.entryDate}>{item.date}</Text> {/* Displaying date of each entry */}
            </View>
          </TouchableOpacity>
        )}
      />
      {/* Button to navigate to EntryScreen for adding new entry */}
      <Button title="Add New Entry" onPress={() => navigation.navigate('Entry', { entry: null })} />
      {/* Button to navigate to SettingsScreen */}
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

// Styles for HomeScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  entry: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  entryTitle: {
    fontSize: 18,
  },
  entryDate: {
    fontSize: 14,
    color: '#999',
  },
});

export default HomeScreen; // Exporting HomeScreen component as default
