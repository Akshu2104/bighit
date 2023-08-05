import React from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {cards} from '../utils/constants/Index.js';
import FastImage from 'react-native-fast-image';
const windowWidth = Dimensions.get('window').width;

const SlugCard = () => {
  const data = {
    grpSlug: 'test-test',
    banner: [
      {
        id: 2,
        slug: 'feature-plus',
        imageUrl: cards.agent,
        uid: '462',
        eventId: '161',
        navigateTo: 0,
      },
      {
        id: 3,
        slug: 'feature',
        imageUrl: cards.listing,
        uid: '464',
        eventId: '165',
        navigateTo: 1,
      },
      {
        id: 4,
        slug: 'feature-agent',
        imageUrl: cards.plus,
        uid: '466',
        eventId: '167',
        navigateTo: 2,
      },
    ],
  };
  return (
    <View style={styles.container}>
      <View style={styles.component}>
        <ScrollView horizontal>
          {data.banner.map(item => {
            return (
              <FastImage
                style={styles.images}
                source={item.imageUrl}
                resizeMode={FastImage.resizeMode.contain}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    backgroundColor: 'lightgrey',
    padding: 10,
  },
  mainBox: {
    flex: 1,
  },
  component: {
    padding: 10,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    marginLeft: 5,
    backgroundColor: 'white',
    width: windowWidth,
  },
  images: {
    width: 200,
    height: 200,
    marginHorizontal: 5,
  },
});
export default SlugCard;
