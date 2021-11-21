import {Block, Text, WebView} from '@components';
import {commonRoot} from '@navigator/navigationRef';
import router from '@navigator/router';
import locale from 'locale';
import React from 'react';
import {Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const InformationProduct = ({content, isShowMore = true}) => {
  const _onPress = () => {
    commonRoot.navigate(router.INFORMATION_DETAILS, {params: content});
  };

  return (
    <Block padding={12} paddingTop={16} height={300} backgroundColor="white">
      <Text size={16} marginBottom={16} fontType="semibold">
        {locale.t('productDetails.productInformation')}{' '}
      </Text>
      <WebView scrollEnabled={!isShowMore} data={content} />
      <LinearGradient
        colors={['rgba(250,250,250,0.5)', 'rgba(255,255,255,1)']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.linearGradient}
      />
      {isShowMore && (
        <Pressable style={styles.btnViewDetails} onPress={_onPress}>
          <Text alignCenter size={13} color="blue" fontType="semibold">
            {locale.t('productDetails.seeDetails')}
            {'  >'}
          </Text>
        </Pressable>
      )}
    </Block>
  );
};

export default InformationProduct;
