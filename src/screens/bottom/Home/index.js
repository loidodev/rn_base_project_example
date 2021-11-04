/* eslint-disable react-native/no-inline-styles */
import {Block, HeaderLogo, LazyImage} from '@components';
import React from 'react';
import {ScrollView} from 'react-native';
import BannerHome from './components/BannerHome';
import CategoryGroup from './components/CategoryGroup';
import CategoryProduct from './components/CategoryProduct';
import {SIZES} from '@theme';
import HotProduct from './components/HotProduct';

const DATA = [
  {
    img_link:
      'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGwlMjBzaXplfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    img_link:
      'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGwlMjBzaXplfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    img_link:
      'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGwlMjBzaXplfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
];

const Home = () => {
  return (
    <Block flex>
      <HeaderLogo />
      <ScrollView showsVerticalScrollIndicator={false}>
        <BannerHome data={DATA} />
        <CategoryGroup />
        <CategoryProduct />
        <Block marginTop={SIZES.medium} height={100}>
          <LazyImage
            styles={{width: '100%', height: '100%'}}
            source="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </Block>
        <HotProduct />
      </ScrollView>
    </Block>
  );
};

export default Home;
