import {Block, Pressable, Text} from '@components';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const BtnDatePicker = ({...rest}) => {
  const [isDatePicker, setIsDatePicker] = useState(false);

  return (
    <Block>
      {/* button */}
      <Pressable
        {...rest}
        justifyCenter
        paddingLeft={4}
        onPress={() => setIsDatePicker(true)}>
        <Text medium color="placeholder">
          {/* {birthday
                  ? moment(birthday * 1000).format('DD/MM/YYYY')
                  : I18n.t('personal.not_update')} */}
          personal.not_update
        </Text>
      </Pressable>
      {/* modal */}
      <DateTimePickerModal
        mode="date"
        locale="vi_VN"
        headerTextIOS={'Ngày sinh'}
        isVisible={isDatePicker}
        // onConfirm={_onConfirmDate}
        onCancel={() => setIsDatePicker(false)}
      />
    </Block>
  );
};

export default BtnDatePicker;
