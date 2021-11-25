import {Block, Rating, Text} from '@components';
import {COLORS} from '@theme';
import React from 'react';
import {Animated} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

const RenderProgress = ({item, index, hasCombo}) => {
  const productDetails = useSelector(state => state.productDetails.data);
  const rCombo = useSelector(state => state.comboProductDetails.data);
  const data = hasCombo ? rCombo : productDetails;

  return (
    <Block row alignCenter>
      <Rating imageSize={10} startingValue={index + 1} />
      <Block
        flex
        justifyCenter
        height={5}
        borderRadius={30}
        marginVertical={8}
        backgroundColor={COLORS.smoke}>
        <Animated.View
          style={[
            styles.AnimatedView,
            {
              width:
                (item /
                  Object.values(data?.rating?.count)?.reduce(
                    (total, i) => total + i,
                  )) *
                  100 +
                '%',
            },
          ]}
        />
      </Block>
      <Text marginLeft={8} size={13}>
        {item}
      </Text>
    </Block>
  );
};

export default RenderProgress;
