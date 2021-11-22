import {Block, HeaderSearch, ItemMember} from '@components';
import MemberHolder from '@components/placeholder/MemberHolder';
import actions from '@store/actions';
import {SIZES} from '@theme';
import {hs} from '@utils/responsive';
import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const Member = value => {
  const {title} = value.route.params.params;
  const dispatch = useDispatch();
  const {data, isLoading} = useSelector(state => state.member);

  useEffect(() => {
    dispatch({type: actions.GET_MEMBER});
  }, [dispatch]);

  return (
    <Block flex>
      <HeaderSearch canGoBack title={title} />
      <Block height={5} backgroundColor="smoke" marginBottom={12} />
      {isLoading ? (
        <MemberHolder />
      ) : (
        <FlatList
          data={data}
          numColumns={1}
          keyExtractor={(_, index) => String(index)}
          renderItem={({item}) => <ItemMember item={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{padding: hs(SIZES.normal)}}
        />
      )}
    </Block>
  );
};

export default Member;
