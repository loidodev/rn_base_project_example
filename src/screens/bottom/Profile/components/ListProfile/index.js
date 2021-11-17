import {Block, ScaleAmin} from '@components';
import {SIZES} from '@theme';
import React from 'react';
import ItemProfile from './ItemProfile';

const ListProfile = ({data = [], delay = 500}) => {
  if (!data?.length) {
    return null;
  }

  return (
    <ScaleAmin delay={delay}>
      {/* divider */}
      <Block height={SIZES.small} backgroundColor="background" />
      {/* list profile */}
      {data?.map((item, index) => (
        <ItemProfile key={`manager-${index}`} item={item} index={index} />
      ))}
    </ScaleAmin>
  );
};

export default ListProfile;
