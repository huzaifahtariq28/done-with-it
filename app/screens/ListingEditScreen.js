import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from '../components/forms';
import AppPicker from '../components/AppPicker';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  category: Yup.object().nullable().required().label('Category'),
  description: Yup.string().optional().label('Description'),
});

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Camera', value: 3 },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          category: null,
          description: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          placeholder='Title'
          maxLength={255}
          autoCapitalize='words'
          autoCorrect
          keyboardType='default'
          name='title'
        />
        <AppFormField
          placeholder='Price'
          maxLength={8}
          keyboardType='numeric'
          name='price'
        />
        <AppFormPicker
          items={categories}
          placeholder='Categories'
          name='categories'
        />
        <AppFormField
          placeholder='Description'
          maxLength={255}
          multiline
          numberOfLines={3}
          autoCapitalize='sentences'
          autoCorrect
          name='description'
        />
        <SubmitButton title='Post' />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default ListingEditScreen;
