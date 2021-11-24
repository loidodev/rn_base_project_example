import moment from 'moment';

export const INPUT_PROPS = {
  height: 45,
  medium: true,
  borderBottomWidth: 1,
  borderColor: 'smoke',
};

export const GENDERS = [
  {value: '0', label: 'personal.man'},
  {value: '1', label: 'personal.women'},
];

export const formatDate = date => {
  return moment(date).format('DD/MM/YYYY');
};

export const convertDate = date => {
  return moment(date, 'DD/MM/YYYY').toDate();
};
