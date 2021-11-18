// import {icons} from '@assets';
import {Block, Icon, Pressable, Text} from '@components';
import {COLORS, SIZES} from '@theme';
import Storage from '@utils/storage';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import pill from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
const ItemHistory = ({item, index, setSearch, setHistory, setKeyword}) => {
  const _onRemoveHistory = () => {
    Storage.getItem('@history').then(res => {
      const newHistory = res.filter(value => value !== item);
      Storage.setItem('@history', JSON.stringify(newHistory));
      setHistory(newHistory);
    });
  };

  return (
    <Pressable
      row
      alignCenter
      space="between"
      paddingVertical={12}
      borderBottomWidth={1}
      borderColor={COLORS.smoke}
      key={`Search-${index}`}
      onPress={() => setKeyword(item)}>
      <Block row alignCenter>
        <Icon
          IconType={pill}
          iconName="pill"
          iconSize={20}
          marginRight={SIZES.xSmall}
        />
        <Text color="placeholder">{item}</Text>
      </Block>
      <Pressable onPress={_onRemoveHistory} style={styles.btnClose}>
        <Icon
          IconType={AntDesign}
          iconName="close"
          iconSize={20}
          marginRight={SIZES.xSmall}
        />
      </Pressable>
    </Pressable>
  );
};

export default ItemHistory;
