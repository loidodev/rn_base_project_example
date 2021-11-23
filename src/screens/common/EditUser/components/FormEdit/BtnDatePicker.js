import {Block, Pressable, Text} from '@components';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const setTimestamp = date => {
  return new Date(date).getTime() / 1000;
};

const getTimestamp = date => {
  return new Date(date).getTime() * 1000;
};

const BtnDatePicker = ({value, onChange, containerStyle}) => {
  const [isDatePicker, setIsDatePicker] = useState(false);

  const _getDate = () => {
    return Number(value) ? new Date(getTimestamp(value)) : new Date();
  };

  const _onConfirmDate = date => {
    setIsDatePicker(false);
    onChange(setTimestamp(date));
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
          {Number(value)
            ? moment(getTimestamp(value)).format('DD/MM/YYYY')
            : 'personal.not_update'}
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
