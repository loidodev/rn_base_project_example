import {Block, Image, Pressable, ScaleAmin, Text} from '@components';
import {GRADIENTS, SIZES} from '@theme';
import React from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Badge} from 'react-native-elements';

const DATA = [
  {title: 'Mới giao', picture: 'https://source.unsplash.com/daily'},
  {title: 'Mới giao', picture: 'https://source.unsplash.com/daily'},
  {title: 'Mới giao', picture: 'https://source.unsplash.com/daily'},
  {title: 'Mới giao', picture: 'https://source.unsplash.com/daily'},
  {title: 'Mới giao', picture: 'https://source.unsplash.com/daily'},
  {title: 'Mới giao', picture: 'https://source.unsplash.com/daily'},
];

const Delivery = () => {
  return (
    <ScaleAmin>
      {/* divider */}
      <Block height={SIZES.small} backgroundColor="background" />
      {/* content */}
      <Block padding={12} marginTop={SIZES.medium}>
        <Block row alignCenter space="between">
          <Text medium heavy>
            Đơn hàng của tôi
          </Text>
          <Pressable>
            <Text small color="blue">
              Xem lịch sử
            </Text>
          </Pressable>
        </Block>
        {/* list status */}
        <ScrollView
          horizontal
          contentContainerStyle={styles.scrollView}
          showsHorizontalScrollIndicator={false}>
          {DATA?.map((item, index) => {
            const badge = 10;
            return (
              <Pressable key={`Delivery-${index}`} paddingTop={10}>
                <Block alignCenter width={80} marginHorizontal={5}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.container}
                    colors={GRADIENTS.easyMed}>
                    <Image source={{uri: item.picture}} square={25} />
                  </LinearGradient>
                  {!!badge && (
                    <Badge
                      value={badge > 99 ? '99+' : badge}
                      status="error"
                      containerStyle={styles.badge}
                    />
                  )}
                  <Text center size={12}>
                    {item.title}
                  </Text>
                </Block>
              </Pressable>
            );
          })}
        </ScrollView>
      </Block>
    </ScaleAmin>
  );
};

export default Delivery;
