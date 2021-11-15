import {Block, Icon, Modal, Pressable, Text} from '@components';
import {SIZES} from '@theme';
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import Entypo from 'react-native-vector-icons/Entypo';

const OPTIONS = {
  width: 512,
  height: 512,
  cropping: true,
};

const AvatarPicker = ({isVisible = false, setIsVisible, onChangeAvatar}) => {
  const _onChangeAvatar = avatar => {
    setIsVisible && setIsVisible(false);
    onChangeAvatar &&
      onChangeAvatar({
        uri: avatar.path,
        type: avatar.mime,
        size: avatar.size,
        name: Date.now() + '.jpg',
      });
  };

  const _onChoosePicture = () => {
    ImagePicker.openPicker(OPTIONS).then(image => _onChangeAvatar(image));
  };

  const _onOpenCamera = () => {
    ImagePicker.openCamera(OPTIONS).then(image => _onChangeAvatar(image));
  };

  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
      <Block safeAreaBottom backgroundColor="white">
        <Pressable rowCenter padding={SIZES.large} onPress={_onChoosePicture}>
          <Icon IconType={Entypo} iconName="images" iconSize={25} />
          <Text medium heavy marginLeft={SIZES.small}>
            Chọn ảnh từ thư viện
          </Text>
        </Pressable>
        <Block height={1} backgroundColor="background" />
        <Pressable rowCenter padding={SIZES.large} onPress={_onOpenCamera}>
          <Icon IconType={Entypo} iconName="camera" iconSize={25} />
          <Text medium heavy marginLeft={SIZES.small}>
            Chụp ảnh mới
          </Text>
        </Pressable>
      </Block>
    </Modal>
  );
};

export default AvatarPicker;
