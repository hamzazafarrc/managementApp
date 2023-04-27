module.exports = {
  presets: ['module:metro-react-native-babel-preset'], // existing
  // add the following
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@src': './src',
          '@screens': './src/screens',
          '@components': './src/components',
          '@images': './src/assets/images',
          '@styles': './src/assets/styles',
          '@hooks': './src/hooks',
          '@states': './src/states',
          '@services': './src/services',
          '@utils': './src/utils',
          '@models': './src/models',
          '@constants': './src/constants'
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};