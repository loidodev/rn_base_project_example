import {Block, Rating, Text} from '@components';
import React from 'react';
import locale from 'locale';
import {FlatList} from 'react-native';
import {height} from '@utils/responsive';
import RenderProgress from '../RenderProgress';

const HeaderCommen = ({data, route}) => {
  return (
    <Block padding={12} backgroundColor="white">
      <Text fontSize={16} marginVertical={7} fontType="semibold">
        {locale.t('evaluate.product')}
      </Text>
      <Block row alignCenter>
        <Block alignCenter justifyCenter marginRight={10}>
          <Text marginBottom={8} fontSize={26} fontType="bold">
            {data?.rating?.average}
          </Text>
          <Rating imageSize={13} startingValue={data?.rating?.average} />
          <Text marginTop={8}>
            {data?.rating?.count &&
            Object.values(data?.rating?.count).length > 0
              ? Object.values(data?.rating?.count)?.reduce(
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
            data={data?.rating?.count ? Object.values(data?.rating?.count) : []}
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

export default HeaderCommen;
