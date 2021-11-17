import {
  Block,
  HeaderInput,
  ItemHistory,
  ItemProduct,
  LoadMore,
  Pressable,
  Text,
} from '@components';
import {LOTTIES} from '@constants';
import {height, hs} from '@responsive';
import actions from '@store/actions';
import {COLORS, SIZES} from '@theme';
import Storage from '@utils/storage';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Empty from '../Empty';

const SearchScreen = () => {
  const [keyword, setKeyword] = useState('');
  const [discern, setDiscern] = useState(true);
  const dispatch = useDispatch();
  const {data, totalPage, isLoading} = useSelector(state => state.search);
  const suggestions = useSelector(state => state.suggestions.data);
  const [history, setHistory] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch({
      type: actions.GET_SEARCH_SCREEN,
      params: {
        keyword: keyword,
      },
    });

    setDiscern(true);
  }, [dispatch, keyword]);

  useEffect(() => {
    dispatch({
      type: actions.GET_SEARCH_SUGGESTIONS,
    });
  }, [dispatch]);

  useEffect(() => {
    Storage.getItem('@history').then(res => setHistory(res?.reverse() || []));
  }, []);

  const _renderKeywordSearch = (item, index) => {
    return (
      <Pressable
        key={`Search-${index}`}
        marginLeft={index !== 0 ? SIZES.small : 0}
        onPress={() => setKeyword(item.keyword)}>
        <Block radius={20} padding={7} backgroundColor="smoke">
          <Text>{item.keyword}</Text>
        </Block>
      </Pressable>
    );
  };

  const _renderHistorySearch = (item, index) => {
    return (
      item !== '' && (
        <ItemHistory
          item={item}
          index={index}
          setHistory={setHistory}
          setKeyword={setKeyword}
        />
      )
    );
  };

  //  xóa lịch sử
  const _removeHistory = () => {
    setHistory([]);
    Storage.removeItem('@history');
  };

  //  empty

  const _renderEmpty = () => (
    <Block flex height={height / 2}>
      <Empty lottie={LOTTIES.search} content="Không tìm thấy sản phẩm" />
    </Block>
  );

  const _onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
    setPage(1);
    dispatch({
      type: actions.GET_SEARCH_SCREEN,
      params: {
        keyword: keyword,
        p: 1,
      },
    });
  };

  const _loadMore = () => {
    if (page < totalPage) {
      setPage(page + 1);
      dispatch({
        type: actions.GET_SEARCH_SCREEN,
        isLoadMore: true,
        params: {
          keyword: keyword,
          p: page + 1,
        },
      });
    }
  };

  return (
    <Block flex backgroundColor={COLORS.background}>
      {/* header */}
      <HeaderInput
        keyword={keyword}
        setKeyword={setKeyword}
        discern={discern}
        setDiscern={setDiscern}
      />
      <Block height={8} backgroundColor="smoke" />
      {/* list keyword */}
      {discern ? (
        <Block flex>
          <Block marginVertical={SIZES.normal}>
            {suggestions && (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: hs(SIZES.medium)}}>
                {suggestions.map(_renderKeywordSearch)}
              </ScrollView>
            )}
          </Block>
          {/* list product */}
          <Block flex>
            <FlatList
              data={data}
              numColumns={2}
              onEndReached={_loadMore}
              refreshing={refreshing}
              onRefresh={_onRefresh}
              onEndReachedThreshold={0.5}
              keyExtractor={(_, index) => String(index)}
              renderItem={({item}) => <ItemProduct item={item} />}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{padding: hs(SIZES.normal)}}
              ListEmptyComponent={_renderEmpty}
            />
            {isLoading && page > 1 && <LoadMore />}
          </Block>
        </Block>
      ) : history.length > 0 ? (
        <Block flex>
          <Block row alignCenter margin={12} space="between">
            <Text size={16} fontType="semibold">
              Lịch sử tìm kiếm
            </Text>
            <Pressable onPress={_removeHistory}>
              <Text color="blue">Xóa tất cả</Text>
            </Pressable>
          </Block>
          {history && (
            <ScrollView
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingHorizontal: hs(SIZES.medium)}}>
              {history.map(_renderHistorySearch)}
            </ScrollView>
          )}
        </Block>
      ) : (
        <Empty lottie={LOTTIES.search} content="Bạn chưa có lịch sử" />
      )}
    </Block>
  );
};

export default SearchScreen;
