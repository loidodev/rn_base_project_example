import {
  Block,
  EvaluateHolder,
  Header,
  ListWrapper,
  Rating,
  Text,
} from '@components';
import {height} from '@utils/responsive';
import locale from 'locale';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Comment from '../components/Comment';
import RenderProgress from '../components/RenderProgress';
import actions from '@store/actions';

const CommentDetails = ({route}) => {
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails.data);
  const [page, setPage] = useState(1);
  const {data, totalPage, isLoading} = useSelector(state => state.review);
  const [refreshing, setRefreshing] = useState(false);
  const rCombo = useSelector(state => state.comboProductDetails.data);
  const dataDetails = route.params.hasCombo ? rCombo : productDetails;

  useEffect(() => {
    setPage(1);
  }, []);

  const _onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
    setPage(1);
    dispatch({
      type: actions.GET_REVIEWS_PRODUCT,
      params: {
        item_id: route.params.item_id,
        p: 1,
      },
    });
  };

  const _loadMore = () => {
    if (page < totalPage) {
      setPage(page + 1);
      dispatch({
        type: actions.GET_REVIEWS_PRODUCT,
        isLoadMore: true,
        params: {
          item_id: route.params.item_id,
          p: page + 1,
        },
      });
    }
  };

  const _renderHeader = () => {
    return (
      <Block padding={12} backgroundColor="white">
        <Text fontSize={16} marginVertical={7} fontType="semibold">
          {locale.t('evaluate.product')}
        </Text>
        <Block row alignCenter>
          <Block alignCenter justifyCenter marginRight={10}>
            <Text marginBottom={8} fontSize={26} fontType="bold">
              {dataDetails?.rating?.average}
            </Text>
            <Rating
              imageSize={13}
              startingValue={dataDetails?.rating?.average}
            />
            <Text marginTop={8}>
              {dataDetails?.rating?.count &&
              Object.values(dataDetails?.rating?.count).length > 0
                ? Object.values(dataDetails?.rating?.count)?.reduce(
                    (total, item) => total + item,
                  )
                : null}{' '}
              {locale.t('evaluate.comment')}
            </Text>
          </Block>
          <Block
            alignSelf="center"
            width={1}
            marginRight={12}
            height={height * 0.1}
            backgroundColor="smoke"
          />
          <Block flex>
            <FlatList
              data={
                dataDetails?.rating?.count
                  ? Object.values(dataDetails?.rating?.count)
                  : []
              }
              renderItem={({item, index}) => (
                <RenderProgress
                  item={item}
                  index={index}
                  hasCombo={route.params.hasCombo}
                />
              )}
              keyExtractor={(_, index) => String(index)}
            />
          </Block>
        </Block>
      </Block>
    );
  };

  const _renderItem = ({item}) => <Comment item={item} />;

  return (
    <Block flex backgroundColor="white">
      <Header title={locale.t('evaluate.reviews')} canGoBack />
      {isLoading && <EvaluateHolder />}
      {!isLoading && !data?.length ? null : (
        <ListWrapper
          data={data}
          VSeparator={0}
          numColumns={2}
          onLoadMore={_loadMore}
          refreshing={refreshing}
          onRefresh={_onRefresh}
          renderItem={_renderItem}
          ListHeaderComponent={_renderHeader}
          isLoading={isLoading}
          page={page}
        />
      )}
    </Block>
  );
};

export default CommentDetails;
