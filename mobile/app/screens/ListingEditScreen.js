import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from '../components/forms';
import CategoryPickerItem from '../components/CategoryPickerItem';
import AppFormImagePicker from '../components/forms/AppFormImagePicker';
import useLocation from '../hooks/useLocation';
import listingsApi from '../api/listings';
import UploadScreen from './UploadScreen';
import logger from '../utility/logger';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  category: Yup.object().nullable().required().label('Category'),
  description: Yup.string().optional().label('Description'),
  images: Yup.array().min(1, 'Please select atleast one image'),
});

const categories = [
  {
    label: 'Furniture',
    icon: 'floor-lamp',
    backgroundColor: '#fc5c65',
    value: 1,
  },
  {
    label: 'Cars',
    icon: 'car',
    backgroundColor: '#fd9644',
    value: 2,
  },
  {
    label: 'Cameras',
    icon: 'camera',
    backgroundColor: '#fed330',
    value: 3,
  },
  {
    label: 'Games',
    icon: 'cards',
    backgroundColor: '#26de81',
    value: 4,
  },
  {
    label: 'Clothing',
    icon: 'shoe-heel',
    backgroundColor: '#2bcbba',
    value: 5,
  },
  {
    label: 'Sports',
    icon: 'basketball',
    backgroundColor: '#45aaf2',
    value: 6,
  },
  {
    label: 'Movies & Music',
    icon: 'headphones',
    backgroundColor: '#4b7bec',
    value: 7,
  },
];

function ListingEditScreen(props) {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const simulateProgress = () => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 0.2;
      setProgress(parseFloat(currentProgress.toFixed(2)));
      if (currentProgress > 1) {
        clearInterval(interval);
      }
    }, 100);
  };

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    simulateProgress();

    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => logger.log(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert('Could not save the listing.');
    }

    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        progress={progress}
        visible={uploadVisible}
        onDone={() => setUploadVisible(false)}
      />
      <AppForm
        initialValues={{
          title: '',
          price: '',
          category: null,
          description: '',
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name='images' />
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
          width={120}
        />
        <AppFormPicker
          items={categories}
          numberOfColumns={3}
          placeholder='Categories'
          name='category'
          width='50%'
          PickerItemComponent={CategoryPickerItem}
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
