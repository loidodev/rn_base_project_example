import {Block, Image, Pressable, ScaleAmin, Text} from '@components';
import {ICONS} from '@constants';
import {SIZES} from '@theme';
import React from 'react';

const ShareAndReferredCode = ({delay}) => {
  const _onShare = () => {
    // Share.share({
    //   url: userInfo.link_invitaion,
    // });
  };
  const _copyCode = () => {
    // Clipboard.setString(userInfo?.code_invitaion);
    // CustomToast(I18n.t('coupon.coppy'));
  };

  return (
    <ScaleAmin delay={delay}>
      {/* divider */}
      <Block height={SIZES.small} backgroundColor="background" />
      {/* content */}
      <Block>
        <Block
          row
          alignCenter
          borderBottomWidth={1}
          borderColor="smoke"
          paddingVertical={8}
          paddingHorizontal={12}
          space="between">
          <Block row alignCenter>
            <Image
              square={22}
              marginRight={16}
              resizeMode="contain"
              source={ICONS.referred_people}
            />
            <Text>profileScreen.referralCode</Text>
          </Block>
          <Pressable onPress={_onShare}>
            <Block
              radius={5}
              paddingVertical={8}
              paddingHorizontal={10}
              backgroundColor="smoke">
              <Text size={13} color="blue">
                Share link
              </Text>
            </Block>
          </Pressable>
        </Block>
        <Block
          row
          alignCenter
          borderBottomWidth={1}
          borderColor="smoke"
          paddingVertical={8}
          paddingHorizontal={12}
          space="between">
          <Block row alignCenter>
            <Image
              square={22}
              marginRight={16}
              resizeMode="contain"
              source={ICONS.affiliate}
            />
            <Text>profileScreen.inviation_code</Text>
          </Block>
          <Pressable onPress={_copyCode}>
            <Block
              radius={5}
              paddingVertical={8}
              paddingHorizontal={10}
              backgroundColor="smoke">
              <Text size={13} color="blue">
                code_invitaion
              </Text>
            </Block>
          </Pressable>
        </Block>
      </Block>
    </ScaleAmin>
  );
};

export default ShareAndReferredCode;
