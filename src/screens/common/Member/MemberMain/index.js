import {Block, HeaderSearch, ItemMember} from '@components';
import actions from '@store/actions';
import {SIZES} from '@theme';
import {hs} from '@utils/responsive';
import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const Member = value => {
  const {title} = value.route.params.params;
  const dispatch = useDispatch();
  const member = useSelector(state => state.member.data);

  useEffect(() => {
    dispatch({type: actions.GET_MEMBER});
  }, [dispatch]);

  return (
    <Block flex>
      <HeaderSearch canGoBack title={title} />
      <Block height={5} backgroundColor="smoke" marginBottom={12} />

      <FlatList
        data={member}
        numColumns={1}
        keyExtractor={(_, index) => String(index)}
        renderItem={({item}) => <ItemMember item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: hs(SIZES.normal)}}
      />
    </Block>
  );
};

export default Member;
