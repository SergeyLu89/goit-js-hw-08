import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const vimeoPlyer = document.querySelector('#vimeo-player');

const player = new Player(vimeoPlyer);

player.on(
  'timeupdate',
  throttle(data => {
    playerTime = localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    console.log(seconds);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
