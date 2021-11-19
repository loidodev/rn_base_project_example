import {Block, HeaderSearch, Text} from '@components';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import HeaderMenber from './components/HeaderMenber';

const MemberDetails = value => {
  const {
    address,
    arr_picture,
    content,
    district,
    title,
    phone,
  } = value.route.params.param;
  const [index, setIndex] = useState(1);

  return (
    <Block flex>
      <HeaderSearch canGoBack title={'Chi tiết cửa hàng'} />
      <Block height={5} backgroundColor="smoke" marginBottom={12} />
      <ScrollView>
        <HeaderMenber data={arr_picture} index={index} setIndex={setIndex} />

        <Block height={5} backgroundColor="smoke" margin={12} />
        <Block paddingHorizontal={12}>
          <Block paddingVertical={8}>
            <Text heavy fontSize={15} numberOfLines={2} marginTop={5}>
              Cửu hàng: {title}
            </Text>
            <Text fontType="semibold" numberOfLines={2} marginTop={5}>
              {address}
            </Text>
            <Text marginTop={5}>
              <Text bold fontSize={15}>
                Liên hệ:{' '}
              </Text>
              {phone}
            </Text>
            <Text size={13} marginTop={5}>
              {content}
            </Text>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default MemberDetails;
