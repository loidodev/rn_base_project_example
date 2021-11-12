import {Block, HeaderSearch, ItemMenber} from '@components';
import actions from '@store/actions';
import {SIZES} from '@theme';
import {hs} from '@utils/responsive';
import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const Menber = value => {
  const {title} = value.route.params.params;
  const dispatch = useDispatch();
  const menber = useSelector(state => state.menber.data);
  
  useEffect(() => {
    dispatch({type: actions.GET_MENBER});
  }, [dispatch]);

  return (
    <Block flex>
      <HeaderSearch canGoBack title={title} />
      <Block height={5} backgroundColor="smoke" marginBottom={12} />

      <FlatList
        data={menber}
        numColumns={1}
        keyExtractor={(_, index) => String(index)}
        renderItem={({item}) => <ItemMenber item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: hs(SIZES.normal)}}
      />
    </Block>
  );
};

export default Menber;
