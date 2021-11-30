import {
  Block,
  ButtonSubmit,
  CustomInputErr,
  FormContainer,
  Icon,
  Pressable,
  Text,
  TextInput,
} from '@components';
import {swapCommission} from '@store/actions/funcActions/userActions';
import {SIZES} from '@theme';
import {convertCurrency} from '@utils';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';

const TotalCommission = () => {
  const dispatch = useDispatch();
  const [valueCommission, setValueCommission] = useState('');
  const rSwapCommission = useSelector(state => state.swapCommission);
  const rCommission = useSelector(state => state.commission);

  const info = rCommission?.info;

  const _onSubmit = () => {
    if (valueCommission) {
      dispatch(
        swapCommission({
          num_commission: Number(valueCommission),
        }),
      );
    }
  };

  return (
    <FormContainer>
      <Block padding={SIZES.medium}>
        <Text flex paddingVertical={SIZES.normal}>
          <Text>commission.total_commission</Text>
          <Text color="red">
            {convertCurrency(info?.total_commissions)} VNĐ
          </Text>
        </Text>

        <Text flex paddingVertical={SIZES.normal}>
          <Text>commission.converted</Text>
          <Text color="red">{convertCurrency(info?.swap_commmission)} VNĐ</Text>
        </Text>

        <Text flex paddingVertical={SIZES.normal}>
          <Text>commission.current</Text>
          <Text color="red">{convertCurrency(info?.user_commission)} Đ</Text>
        </Text>
      </Block>

      <Block height={SIZES.small} backgroundColor="background" />

      <Block padding={SIZES.medium}>
        <Text flex medium paddingVertical={SIZES.normal}>
          commission.requirements
        </Text>

        <Text>commission.note_swap_1</Text>

        <Text flex paddingVertical={SIZES.normal}>
          <Text>
            <Text>commission.note_swap_2</Text>
            <Text color="red">{info?.wcoin2money}VNĐ</Text>
          </Text>
        </Text>
      </Block>
      <Text
        flex
        marginBottom={SIZES.normal}
        padding={12}
        fontType="light"
        backgroundColor="background">
        commission.note
      </Text>
      <Block marginHorizontal={SIZES.medium} marginBottom={SIZES.normal}>
        <Block rowCenter borderBottomWidth={1} borderColor="background">
          <TextInput
            flex
            placeholder="commission.input_conversion"
            keyboardType="number-pad"
            value={valueCommission}
            onChangeText={setValueCommission}
          />
          <Pressable
            paddingHorizontal={SIZES.normal}
            onPress={() => setValueCommission('')}>
            <Icon
              IconType={AntDesign}
              iconName="close"
              iconColor="placeholder"
            />
          </Pressable>
        </Block>
        {!valueCommission && (
          <Block rowCenter>
            <CustomInputErr
              renderInputErr={() => (
                <Text small color="red" marginTop={SIZES.normal}>
                  commission.validation
                </Text>
              )}
            />
          </Block>
        )}
      </Block>
      <ButtonSubmit
        loading={rSwapCommission.isLoading || rCommission.isLoading}
        onPress={_onSubmit}>
        commission.submit
      </ButtonSubmit>
    </FormContainer>
  );
};

export default TotalCommission;
