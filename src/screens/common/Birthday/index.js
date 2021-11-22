import {Block, HeaderSearch, WebView} from '@components';
import BirthdayHolder from '@components/placeholder/BirthdayHolder';
import actions from '@store/actions';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Birthday = () => {
  const dispatch = useDispatch();
  const {data, isLoading} = useSelector(state => state.birthday);

  useEffect(() => {
    dispatch({type: actions.GET_BIRTHDAY});
  }, [dispatch]);

  useEffect(() => {
    dispatch({
      type: actions.GET_SEARCH_SCREEN,
      params: {
        keyword: '',
      },
    });
  }, [dispatch]);

  return (
    <Block flex>
      <HeaderSearch canGoBack title={data?.title} />
      {isLoading && !data ? (
        <BirthdayHolder />
      ) : (
        <Block flex padding={12} paddingBottom={20}>
          <WebView data={data?.content} />
        </Block>
      )}
    </Block>
  );
};

export default Birthday;
