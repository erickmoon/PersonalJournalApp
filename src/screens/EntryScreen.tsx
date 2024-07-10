import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux'; // Importing useDispatch hook from react-redux for dispatching actions
import { addEntry, deleteEntry, updateEntry } from '../slices/journalSlice'; // Importing action creators from journalSlice slice
import { v4 as uuidv4 } from 'uuid'; // Importing uuidv4 for generating unique IDs

const EntryScreen = ({ route, navigation }: { route: any, navigation: any }) => {
  const dispatch = useDispatch(); // Initializing useDispatch hook to dispatch actions
  const { entry } = route.params; // Destructuring entry object from route params

  // State variables for handling form inputs
  const [title, setTitle] = useState(entry ? entry.title : '');
  const [content, setContent] = useState(entry ? entry.content : '');
  const [category, setCategory] = useState(entry ? entry.category : '');
  const [date, setDate] = useState(entry ? entry.date : new Date().toISOString().split('T')[0]);

  // Function to handle saving or updating an entry
  const handleSave = () => {
    if (entry) {
      // Dispatching updateEntry action with updated entry object
      dispatch(updateEntry({ ...entry, title, content, category, date }));
    } else {
      // Dispatching addEntry action with new entry object and generated UUID
      dispatch(addEntry({ id: uuidv4(), title, content, category, date }));
    }
    navigation.navigate('Home'); // Navigate back to Home screen after saving or updating
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{entry ? 'Edit Entry' : 'New Entry'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle} // Update title state on input change
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory} // Update category state on input change
      />
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={setDate} // Update date state on input change
      />
      <TextInput
        style={styles.textarea}
        placeholder="Content"
        value={content}
        onChangeText={setContent} // Update content state on input change
        multiline // Allow multiline input
      />
      <Button title="Save" onPress={handleSave} /> {/* Save button triggering handleSave function */}
      {entry && <Button title="Delete" onPress={() => { dispatch(deleteEntry(entry.id)); navigation.navigate('Home'); }} />} {/* Delete button triggering deleteEntry action */}
    </View>
  );
};

// Stylesheet for EntryScreen component
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  textarea: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default EntryScreen; // Exporting EntryScreen component as default
