import {Block, Icon, Pressable, Text} from '@components';
import moment from 'moment';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';

const ChooseDateStartEnd = ({
  dateStart,
  dateEnd,
  onChangeStart,
  onChangeEnd,
}) => {
  const config = useSelector(state => state.config?.data);

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[config?.general_active_color, config?.general_active_color]}>
      <Block row alignCenter space="between">
        <Pressable onPress={onChangeStart}>
          <Block marginLeft={16} paddingVertical={10}>
            <Text fontSize={16} paddingVertical={6} color="white">
              commission.date_begin
            </Text>
            <Text heavy fontSize={17} paddingVertical={6} color="white">
              {moment(dateStart).format('DD-MM-YYYY')}
            </Text>
          </Block>
        </Pressable>
        <Icon
          IconType={AntDesign}
          iconName="right"
          iconSize={16}
          iconColor="white"
        />
        <Pressable onPress={onChangeEnd}>
          <Block marginRight={16} paddingVertical={10}>
            <Text fontSize={16} paddingVertical={6} color="white">
              commission.date_end
            </Text>
            <Text
              bold
              fontSize={17}
              paddingVertical={6}
              color="white"
              fontType="semibold">
              {moment(dateEnd).format('DD-MM-YYYY')}
            </Text>
          </Block>
        </Pressable>
      </Block>
    </LinearGradient>
  );
};

export default ChooseDateStartEnd;
