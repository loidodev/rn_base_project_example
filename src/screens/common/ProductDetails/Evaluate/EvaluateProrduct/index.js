import {Block, Rating, Text} from '@components';
import {commonRoot} from '@navigator/navigationRef';
import router from '@navigator/router';
// import {routes} from '@navigation/routes';
import {height} from '@utils/responsive';
import locale from 'locale';
import React from 'react';
import {Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import Comment from '../components/Comment';
import RenderProgress from '../components/RenderProgress';
import styles from './styles';

const EvaluateProduct = ({data, isShowAll, item_id, hasCombo}) => {
  const productDetails = useSelector(state => state.productDetails.data);
  const rCombo = useSelector(state => state.comboProductDetails.data);
  const dataDetails = hasCombo ? rCombo : productDetails;

  if (dataDetails?.rating?.average > 0) {
    return (
      <Block marginTop={8}>
        <Block padding={12} backgroundColor="white">
          <Text fontSize={16} marginVertical={7} fontType="semibold">
            {locale.t('evaluate.product')}
          </Text>
          <Block row alignCenter>
            <Block alignCenter justifyCenter marginRight={10}>
              <Text marginBottom={8} fontSize={26} fontType="bold">
                {dataDetails.rating?.average}
              </Text>
              <Rating
                imageSize={13}
                startingValue={dataDetails?.rating?.average}
              />
              <Text marginTop={8}>
                {dataDetails?.rating?.count &&
                Object.values(dataDetails.rating?.count).length > 0
                  ? Object.values(dataDetails.rating?.count)?.reduce(
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
              {Object.values(dataDetails?.rating?.count).map((item, index) => (
                <RenderProgress
                  key={index}
                  item={item}
                  index={index}
                  hasCombo={hasCombo}
                />
              ))}
            </Block>
          </Block>
        </Block>
        <Block paddingHorizontal={12} paddingTop={16} backgroundColor="white">
          {data?.map((item, index) => (
            <Comment key={index} item={item} />
          ))}
          {isShowAll && (
            <Pressable
              style={styles.btnViewDetails}
              onPress={() =>
                commonRoot.navigate(router.COMMENT_DETAILS, {item_id, hasCombo})
              }>
              <Text alignCenter size={13} color="blue" fontType="semibold">
                {locale.t('evaluate.all_comments')}
                {' >'}
              </Text>
            </Pressable>
          )}
        </Block>
      </Block>
    );
  }

  return null;
};

export default EvaluateProduct;
