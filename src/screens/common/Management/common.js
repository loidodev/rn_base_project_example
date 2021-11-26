export const DATE_TYPE = {
  begin: 'begin',
  end: 'end',
};

export const getTimeForDate = date => {
  return new Date(date).getTime();
};
