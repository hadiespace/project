const srcPath = 'src';
const destPath = 'build';

const config = {
  src: {
    root: srcPath,
    pug: `${srcPath}/pug`,
    sass: `${srcPath}/scss`,
    js: `${srcPath}/js`,
    fonts: `${srcPath}/assets/fonts`,
    images: `${srcPath}/assets/images`,
    iconsMono: `${srcPath}/assets/icons/mono`,
    iconsMulti: `${srcPath}/assets/icons/multi`,
  },
  dest: {
    root: destPath,
    html: destPath,
    css: `${srcPath}/css`,
    js: `${srcPath}/js`,
    fonts: `${srcPath}/fonts`,
    images: `${srcPath}/images`,
  },

  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
