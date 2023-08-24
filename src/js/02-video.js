import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const vimeoPlayer = document.querySelector('#vimeo-player');

const player = new Player(vimeoPlayer);

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(data.seconds)
    );
  }, 1000)
);
const playerCurrentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);
console.log(playerCurrentTime);
function checkPlayerCurrentTime() {
  if (playerCurrentTime !== 0) {
    player.setCurrentTime(playerCurrentTime);
  }
}
checkPlayerCurrentTime(playerCurrentTime);
// player
//   .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
//   .then(function (seconds) {})
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });
