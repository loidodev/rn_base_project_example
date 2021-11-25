import {Block, HeaderTitle, ItemProduct, ListWrapper} from '@components';
import {createDataTemplate} from '@utils';
import React, {useState, useEffect} from 'react';
import {SIZES} from '@theme';
import {useDispatch} from 'react-redux';

const DATA = createDataTemplate(10);

const ProductByType = ({route}) => {
  const {title, type} = route.params || {};

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const [page, setPage] = useState(1);

  return (
    <Block flex backgroundColor="background">
      <HeaderTitle title={title} canGoBack />
      <ListWrapper
        data={DATA}
        numColumns={2}
        VSeparator={0}
        containerProps={{padding: SIZES.normal}}>
        <ItemProduct />
      </ListWrapper>
    </Block>
  );
};

export default ProductByType;
