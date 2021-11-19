import {Block, GridList, Shimmer} from '@components';
import {SIZES} from '@theme';
import {createDataTemplate} from '@utils';
import {width} from '@utils/responsive';
import React from 'react';

const DATA = createDataTemplate(8);

const HomeHolder = () => {
  const _renderCategory = () => {
    return (
      <Block>
        <Block alignSelf="center" round={60} overflow="hidden">
          <Shimmer flex />
        </Block>
        <Shimmer height={15} radius={SIZES.medium} marginTop={SIZES.small} />
      </Block>
    );
  };

  const _renderProductCategory = () => {
    return (
      <Block style={{width: width / 4}} marginLeft={SIZES.medium}>
        <Shimmer
          height={width / 3.8}
          radius={SIZES.small}
          marginBottom={SIZES.small}
        />
        <Shimmer height={15} radius={SIZES.small} />
      </Block>
    );
  };

  return (
    <Block flex>
      {/* banner */}
      <Shimmer
        containerStyle={{width: width - SIZES.medium * 2.2}}
        height={width / 2.3}
        marginTop={SIZES.medium}
        marginHorizontal={SIZES.medium}
        radius={SIZES.small}
      />
      <GridList numColumns={4} data={DATA} renderItem={_renderCategory} />
      <Block height={SIZES.medium} backgroundColor="smoke" />
      <Shimmer
        width={100}
        height={20}
        radius={SIZES.medium}
        margin={SIZES.medium}
      />
      <Block rowCenter>
        {_renderProductCategory()}
        {_renderProductCategory()}
        {_renderProductCategory()}
        {_renderProductCategory()}
        {_renderProductCategory()}
      </Block>
      <Shimmer height={100} marginTop={SIZES.medium} />
    </Block>
  );
};

export default HomeHolder;
