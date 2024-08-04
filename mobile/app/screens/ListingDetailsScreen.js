import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import ListItem from '../components/lists/ListItem';
import AppText from '../components/AppText';
import colors from '../config/colors';
import AppContactSellerForm from '../components/forms/AppContactSellerForm';

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.image}
          uri={listing.images[0].url}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          tint='light'
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price}>${listing.price}</AppText>
          <View style={styles.userContainer}>
            <ListItem
              image={require('../assets/huzaifah.jpg')}
              title='Huzaifah Tariq'
              subTitle='5 Listings'
            />
          </View>
          <AppContactSellerForm listing={listing} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 10,
  },
});

export default ListingDetailsScreen;
