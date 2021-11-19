/* eslint-disable react-native/no-inline-styles */
import {Block, LogoTitle} from '@components';
import {vs} from '@responsive';
import {GRADIENTS, SIZES} from '@theme';
import React from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const LinearLogo = ({heightBanner = 350, children}) => {
  const {top} = useSafeAreaInsets();

  const BOX_CONTENT = vs(-heightBanner / 1.1);

  return (
    <Block flex safeAreaBottom backgroundColor="background">
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0}}
        colors={GRADIENTS.easyMed}>
        <Block height={heightBanner} />
      </LinearGradient>
      <KeyboardAvoidingView style={{flex: 1, marginTop: BOX_CONTENT}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingTop: top}}>
          <LogoTitle />
          <Block
            backgroundColor="white"
            margin={SIZES.large}
            marginTop={SIZES.xLarge}
            radius={SIZES.small}
            padding={SIZES.large}>
            {children}
          </Block>
        </ScrollView>
      </KeyboardAvoidingView>
    </Block>
  );
};

export default LinearLogo;
