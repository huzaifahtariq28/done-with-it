import React from 'react';
import { View, StyleSheet } from 'react-native';

import defaultStyles from '../config/styles';
import Icon from './Icon';
import AppText from './AppText';

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label} numberOfLines={2}>
        {item.label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
});

export default CategoryPickerItem;
