export default {
    input: 'src/components/widgetContainer.jsx',
    output: [{
      file: 'lib/bundle.js',
      format: 'cjs'
    },
    {
        file: 'lib/bundle-es.js',
        format: 'es'
      }

    ]
  };