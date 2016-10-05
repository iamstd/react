let config;
if (__SERVER__) {
  config = {
    isProduction: process.env.NODE_ENV === 'production',
    host: 'insurance.cekid.com',
    port: 9000
  };
} else {
  config = {
    Com: require('./public/src/components/RecognizeeForm').default,
    testData: require('./public/src/components/RecognizeeForm/testData').default
  };
}

export default config;