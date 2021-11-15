import {Block, Pressable, Text} from '@components';
import {SIZES} from '@theme';
import React from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';

const Delivery = () => {
  // const dispatch = useDispatch();
  // const config = useSelector(state => state.config.data);
  // const user = useSelector(state => state.tokenUser.data);
  // const order = useSelector(state => state.order.data);
  // const isOrder = useSelector(state => state.order.isLoading);
  // const orderStatus = useSelector(state => state.orderStatus.data);
  // const isOrderStatus = useSelector(state => state.orderStatus.isLoading);

  // useEffect(() => {
  //   dispatch({
  //     type: actions.GET_ORDER_STATUS,
  //   });
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch({
  //     type: actions.GET_ORDER,
  //     params: {
  //       user,
  //     },
  //   });
  // }, [dispatch, user]);

  // if (isOrder || isOrderStatus) {
  //   return <OrderStatusHolder />;
  // }

  return (
    <Block>
      {/* divider */}
      <Block height={SIZES.medium} backgroundColor="smoke" />
      <Block padding={12}>
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
        <ScrollView
          horizontal
          contentContainerStyle={styles.scrollView}
          showsHorizontalScrollIndicator={false}>
          {/* {orderStatus?.map((item, index) => {
          const isOrderItem = order?.filter(
            ({is_status}) => is_status === item.item_id,
          );
          const badge = isOrderItem?.length || 0;

          return (
            <Pressable
              key={`Delivery-${index}`}
              paddingTop={10}
              onPress={() =>
                navigate(routes.ORDER_MANAGEMENT, {
                  initialRouteName: item.title,
                })
              }>
              <Block alignCenter width={80} marginHorizontal={5}>
                <LinearGradient
                  style={styles.container}
                  colors={[
                    `${config.general_active_color}10`,
                    `${config.general_active_color}1f`,
                    `${config.general_active_color}10`,
                    `${config.general_active_color}10`,
                  ]}>
                  <Image
                    source={item.picture ? {uri: item.picture} : icons.order}
                    style={styles.icon(config)}
                  />
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
        })} */}
        </ScrollView>
      </Block>
    </Block>
  );
};

export default Delivery;
