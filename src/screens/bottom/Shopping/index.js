import {Block, HeaderLogo, ScrollView} from '@components';
import React from 'react';
import Banner from './components/Banner';
import BoxAddress from './components/BoxAddress';
import HotProduct from './components/HotProduct';
import OptionGroup from './components/OptionGroup';
import SellProduct from './components/SellProduct';

const Shopping = () => {
  return (
    <Block flex>
      <HeaderLogo />
      <BoxAddress />
      <OptionGroup />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Banner source="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
        <Banner source="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80" />
        <SellProduct />
        <HotProduct />
      </ScrollView>
    </Block>
  );
};

export default Shopping;
