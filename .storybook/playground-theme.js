import { create } from '@storybook/theming';
import image from '../stories/assets/material.svg';

export default create({
  base: 'light',
  brandTitle: 'Playground storybook',
  brandUrl: 'https://material.angular.io',
  brandImage: image,
  brandTarget: '_blank',
  fontBase: '"Roboto", sans-serif',

  colorPrimary: '#f1881f',
  colorSecondary: '#f1881f',
  barSelectedColor: '#f1881f',

  appBg: 'white',
  appBorderRadius: 4
});
