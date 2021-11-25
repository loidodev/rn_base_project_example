/* eslint-disable react-native/no-inline-styles */
import {
  Block,
  Button,
  ButtonSubmit,
  LazyImage,
  Pressable,
  Text,
} from '@components';
import actions from '@store/actions';
import {COLORS, SIZES} from '@theme';
import {CustomToast} from '@utils/helper';
import locale from 'locale';
import React, {useState} from 'react';
import {Keyboard, Platform, ScrollView, TextInput} from 'react-native';
import {Rating} from 'react-native-elements';
// import {useKeyboard} from 'react-native-keyboard-height';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';

const Evaluate = ({setIsVisible, setIsComment, hasCombo}) => {
  const dispatch = useDispatch();
  const rProduct = useSelector(state => state.productDetails);
  // const [keyboardHeight] = useKeyboard();
  // const {pictures, openMultiPicker} = useImagePicker();
  // const {thumbnail, picture, title, item_id} =
  //   useSelector(state => state.productDetails.data) || {};
 
  // const config = useSelector(state => state.config.data);
  // const rCombo = useSelector(state => state.comboProductDetails);
  const [value, setValue] = useState('Hài lòng');
  const [rating, setRating] = useState(3);
  const [content, setContent] = useState('');
  const [color, setColor] = useState(COLORS.orange);
  const user = useSelector(state => state.tokenUser);
  const userInfo = useSelector(state => state.userInfo);
  // const data = hasCombo ? rCombo.data : rProduct.data;
  const data = rProduct.data;

  const ratingCompleted = index => {
    setRating(index);
    if (index === 1) {
      setValue(locale.t('evaluate.Dissatisfaction'));
      setColor(COLORS.red);
    }
    if (index === 2) {
      setValue(locale.t('evaluate.Normal'));
      setColor(COLORS.placeholder);
    }
    if (index === 3) {
      setValue(locale.t('evaluate.Satisfied'));
      setColor(COLORS.orange);
    }
    if (index === 4) {
      setValue(locale.t('evaluate.Very'));
      setColor(COLORS.green);
    }
    if (index === 5) {
      setValue(locale.t('evaluate.Awesome'));
      setColor(COLORS.yellow);
    }
  };

  const _onSubmit = async () => {
    if (content) {
      const formData = new FormData();
      formData.append('type', 'product');
      formData.append('item_id', data.item_id);
      formData.append('full_name', userInfo.full_name);
      formData.append('phone', userInfo.phone);
      formData.append('email', userInfo.email);
      formData.append('rate', rating);
      formData.append('content', content);

      // await pictures?.slice(0, 5).forEach((item, index) => {
      //   const file = {
      //     uri: item.path,
      //     type: item.mime,
      //     size: item.size,
      //     name: Math.floor(Math.random() * Math.floor(999999999)) + '.jpg',
      //   };
      //   formData.append(`picture[${index}]`, file);
      // });

      dispatch({
        type: actions.RATING_PRODUCT,
        user,
        item_id: data.item_id,
        formData,
      });

      setIsVisible(false);
      setIsComment(false);
    } else {
      CustomToast(locale.t('evaluate.warning'));
    }
  };

  // const _renderItem = ({item}) => {
  //   return (
  //     <Block marginHorizontal={3} marginTop={12}>
  //       <Image style={styles.imagelist} source={{uri: item.path}} />
  //     </Block>
  //   );
  // };

  return (
    <Block
      borderTopLeftRadius={10}
      borderTopRightRadius={10}
      // marginBottom={Platform.OS === 'ios' ? keyboardHeight : 0}
      backgroundColor="white">
      <ScrollView>
        <Block row alignCenter margin={12}>
          <LazyImage
            thumbnail={data?.thumbnail}
            source={data?.picture}
            style={styles.image}
          />
          <Block flex marginLeft={10}>
            <Text numberOfLines={2}>{data?.title}</Text>
          </Block>
        </Block>
        <Block height={8} backgroundColor="smoke" />
        <Block flex>
          <Block alignCenter>
            <Text
              fontSize={18}
              marginVertical={6}
              fontType="semibold"
              color={color}>
              {value}
            </Text>
            <Rating
              fontSize={25}
              imageSize={25}
              ratingCount={5}
              type="custom"
              style={{marginBottom: 12}}
              ratingBackgroundColor={COLORS.background}
              onFinishRating={ratingCompleted}
            />
          </Block>
          {/* <Pressable
            style={styles.btnAddImage(config)}
            onPress={openMultiPicker}>
            <Image
              source={icons.cameraEvaluate}
              style={{...styles.icon, tintColor: config.general_active_color}}
              resizeMode="contain"
            />
            <Text color={config.general_active_color}>
              {locale.t('evaluate.add_product')}
            </Text>
          </Pressable> */}
          {/* <Block flex paddingHorizontal={9}>
            <FlatList
              horizontal
              data={pictures?.slice(0, 5) || []}
              keyExtractor={(item, index) => index.toString()}
              renderItem={_renderItem}
              showsHorizontalScrollIndicator={false}
            />
          </Block> */}
          <Block paddingHorizontal={12} paddingBottom={12}>
            {/* {!pictures?.length && (
              <Block alignCenter marginTop={6}>
                <Text size={12} color="lightGray" fontType="light">
                  Chọn tối đa 5 ảnh
                </Text>
              </Block>
            )} */}
            <TextInput
              multiline
              style={styles.input}
              placeholder={locale.t('evaluate.label')}
              placeholderTextColor={COLORS.placeholder}
              onChangeText={text => setContent(text)}
              returnKeyType="done"
              onSubmitEditing={() => Keyboard.dismiss()}
            />
          </Block>
        </Block>
      </ScrollView>
      <ButtonSubmit
        containerProps={{marginBottom: 20}}
        style={styles.btnSubmit}
        onPress={_onSubmit}
        title="Gửi">
        Gửi
      </ButtonSubmit>
    </Block>
  );
};

export default Evaluate;
