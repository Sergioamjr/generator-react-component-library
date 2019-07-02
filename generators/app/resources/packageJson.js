const defaultPkgInfo = {
  version: '1.0.0',
  license: 'MIT',
};

const defaultMeta = {
  main: 'dist/index.js',
  module: 'dist/index.es.js',
  'jsnext:main': 'dist/index.es.js',
  files: ['dist'],
  engines: {
    node: '>=8',
    npm: '>=5',
  },
};

const defaultScripts = {
  build: 'rollup -c',
  start: 'rollup -c -w',
  prepare: 'yarn run build',
};

const defaultPeerDependencies = {
  'prop-types': '^15.7.2',
  react: '^16.8.0',
  'react-dom': '^16.8.0',
};

const defaultDevDependencies = {
  '@babel/cli': '^7.4.4',
  '@babel/core': '^7.4.5',
  '@babel/plugin-proposal-class-properties': '^7.4.4',
  '@babel/preset-env': '^7.4.5',
  '@babel/preset-react': '^7.0.0',
  '@svgr/rollup': '^4.3.0',
  'babel-eslint': '^10.0.2',
  'cross-env': '^5.2.0',
  eslint: '^6.0.0',
  'eslint-config-standard': '^12.0.0',
  'eslint-config-standard-react': '^7.0.2',
  'eslint-plugin-import': '^2.17.3',
  'eslint-plugin-node': '^9.1.0',
  'eslint-plugin-promise': '^4.1.1',
  'eslint-plugin-react': '^7.13.0',
  'eslint-plugin-standard': '^4.0.0',
  react: '^16.8.6',
  'react-dom': '^16.8.6',
  rollup: '^1.16.2',
  'rollup-plugin-babel': '^4.3.3',
  'rollup-plugin-commonjs': '^10.0.0',
  'rollup-plugin-node-resolve': '^5.0.4',
  'rollup-plugin-peer-deps-external': '^2.2.0',
  'rollup-plugin-postcss': '^2.0.3',
  'rollup-plugin-url': '^2.2.2',
};

module.exports = ({
  appName,
  description,
  devDependencies,
  meta,
  peerDependencies,
  pkgInfo,
  scripts,
}) => {
  const nextPkg = {
    ...defaultPkgInfo,
    ...defaultMeta,
    ...pkgInfo,
    ...meta,
    name: appName,
  };

  nextPkg.devDependencies = {
    ...defaultDevDependencies,
    ...devDependencies,
  };

  nextPkg.peerDependencies = {
    ...defaultPeerDependencies,
    ...peerDependencies,
  };

  nextPkg.scripts = {
    ...defaultScripts,
    ...scripts,
  };

  if (description) {
    nextPkg.description = description;
  }

  return nextPkg;
};
