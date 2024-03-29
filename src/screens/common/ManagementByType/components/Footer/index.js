import {MANAGEMENT_TYPE} from '@constants';
import React from 'react';
import HistoryPoint from './HistoryPoint';
import Point from './Point';

const Footer = ({type, data}) => {
  switch (type) {
    case MANAGEMENT_TYPE.point:
      return <Point info={data} />;

    case MANAGEMENT_TYPE.history_point:
      return <HistoryPoint info={data} />;

    case MANAGEMENT_TYPE.rose:
      return null;

    default:
      return <Point />;
  }
};

export default Footer;
