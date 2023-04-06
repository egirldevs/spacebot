const Twit = require('twit');
const axios = require('axios');
const cron = require('node-cron');

const T = new Twit({
  consumer_key: 'YOUR_CONSUMER_KEY',
  consumer_secret: 'YOUR_CONSUMER_SECRET',
  access_token: 'YOUR_ACCESS_TOKEN',
  access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET',
});

cron.schedule('0 0 * * *', function() {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=APIKEYHERE')
    .then((response) => {
      const data = response.data;
      const text = data.title + "\n" + data.explanation;
      const imageUrl = data.url;

      T.postMediaChunked({ file_path: imageUrl }, function (err, data, response) {
        if (err) {
          console.log('Error uploading media:', err);
        } else {
          const mediaIdStr = data.media_id_string;
          const params = {
            status: text,
            media_ids: [mediaIdStr]
          };

          T.post('statuses/update', params, function (err, data, response) {
            if (err) {
              console.log('Error tweeting:', err);
            } else {
              console.log('Tweeted successfully!');
            }
          });
        }
      });
    })
    .catch((error) => {
      console.log('Error retrieving APOD:', error);
    });
});