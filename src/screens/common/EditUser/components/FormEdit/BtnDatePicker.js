import {Block, Pressable, Text} from '@components';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {convertDate, formatDate} from '../helper';

const BtnDatePicker = ({value, onChange, containerStyle}) => {
  const [isDatePicker, setIsDatePicker] = useState(false);

  const _getDate = () => {
    return value ? convertDate(value) : new Date();
  };

  console.log(new Date(value));

  const _onConfirmDate = date => {
    setIsDatePicker(false);
    onChange(formatDate(date));
  };

  return (
    <Block>
      {/* button */}
      <Pressable
        {...containerStyle}
        justifyCenter
        paddingLeft={4}
        onPress={() => setIsDatePicker(true)}>
        <Text medium color="placeholder">
          {value ? value : 'personal.not_update'}
        </Text>
      </Pressable>
      {/* modal */}
      <DateTimePickerModal
        mode="date"
        locale="vi_VN"
        headerTextIOS={'Ngày sinh'}
        date={_getDate()}
        isVisible={isDatePicker}
        onConfirm={_onConfirmDate}
        onCancel={() => setIsDatePicker(false)}
      />
    </Block>
  );
};

export default BtnDatePicker;
