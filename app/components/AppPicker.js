import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({ icon, items, placeholder, selectedItem, onSelectItem }) {
  const [modalVisible, setModalVisibile] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisibile(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              colors={colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            colors={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button
            title='Close'
            onPress={() => setModalVisibile(false)}
          ></Button>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisibile(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
});

export default AppPicker;
