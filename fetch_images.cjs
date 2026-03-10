const https = require('https');

const urls = [
  'https://i.postimg.cc/QVpRJj01.png',
  'https://i.postimg.cc/QVpRJj01.jpg',
  'https://i.postimg.cc/BtCccv1T.png',
  'https://i.postimg.cc/BtCccv1T.jpg'
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(url + ' -> ' + res.statusCode);
  });
});
