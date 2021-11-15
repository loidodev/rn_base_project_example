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
      <Block height={SIZES.medium} backgroundColor="smoke" />
      {/* list profile */}
      {data?.map((item, index) => (
        <ItemProfile key={`manager-${index}`} item={item} index={index} />
      ))}
    </ScaleAmin>
  );
};

export default ListProfile;
