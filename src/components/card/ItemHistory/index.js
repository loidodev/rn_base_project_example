// import {icons} from '@assets';
import {Block, Icon, Text} from '@components';
import {SIZES} from '@theme';
import Storage from '@utils/storage';
import React from 'react';
import {Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import pill from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
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
      key={`Search-${index}`}
      style={styles.button}
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
