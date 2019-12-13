import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.text}>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
        <View style={styles.videoContainer}>
          <Video
            source={{uri: 'file:///storage/emulated/0/bunny.mp4'}}
            style={styles.backgroundVideo}
            controls
          />
        </View>

        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </ScrollView>
    </View>
  );
};

export default VideoPlayer;

var styles = StyleSheet.create({
  text: {
    height: 50,
    backgroundColor: '#EEEEEE',
    padding: 5,
  },
  container: {
    padding: 15,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  videoContainer: {width: 300, height: 300 * (9 / 16), padding: 15},
});
