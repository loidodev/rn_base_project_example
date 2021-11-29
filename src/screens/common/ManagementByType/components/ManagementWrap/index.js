import {Block, HeaderTitle} from '@components';
import {MANAGEMENT_TYPE} from '@constants';
import {useRoute} from '@react-navigation/core';
import {CustomToast} from '@utils';
import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {DATE_TYPE, getTimeForDate} from '../../common';
import ChooseDateStartEnd from './ChooseDateStartEnd';

const ManagementWrap = ({
  title = '',
  dateStart = new Date(),
  dateEnd = new Date(),
  setDateStart,
  setDateEnd,
  renderFooter,
  children,
}) => {
  const {type} = useRoute().params || {};

  const [isDatePicker, setIsDatePicker] = useState(false);
  const [typeDate, setTypeDate] = useState(DATE_TYPE.begin);

  const isDateStart = typeDate === DATE_TYPE.begin;

  const _onDateStart = () => {
    setIsDatePicker(true);
    setTypeDate(DATE_TYPE.begin);
  };

  const _onDateEnd = () => {
    setIsDatePicker(true);
    setTypeDate(DATE_TYPE.end);
  };

  const _onConfirmDate = date => {
    setIsDatePicker(false);
    if (isDateStart) {
      getTimeForDate(date) <= getTimeForDate(dateEnd)
        ? setDateStart(date)
        : CustomToast('Chọn ngày bắt đầu nhỏ hơn ngày kết thúc');
    } else {
      getTimeForDate(date) >= getTimeForDate(dateStart)
        ? setDateEnd(date)
        : CustomToast('Chọn ngày kết thúc lớn hơn ngày bắt đầu');
    }
  };

  return (
    <Block flex backgroundColor="background">
      <StatusBar translucent barStyle="dark-content" />
      {type !== MANAGEMENT_TYPE.rose && (
        <HeaderTitle
          title={title}
          canGoBack
          backgroundColor="white"
          color="primary"
        />
      )}
      <ChooseDateStartEnd
        dateStart={dateStart}
        dateEnd={dateEnd}
        onChangeStart={_onDateStart}
        onChangeEnd={_onDateEnd}
      />
      {children}
      {renderFooter && renderFooter()}
      <DateTimePickerModal
        mode="date"
        locale="vi_VN"
        date={isDateStart ? dateStart : dateEnd}
        headerTextIOS={isDateStart ? 'Chọn ngày bắt đầu' : 'Chọn ngày kết thúc'}
        isVisible={isDatePicker}
        onConfirm={_onConfirmDate}
        onCancel={() => setIsDatePicker(false)}
      />
    </Block>
  );
};

export default ManagementWrap;
