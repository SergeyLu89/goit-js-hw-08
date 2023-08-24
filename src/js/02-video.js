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

try {
  const playerCurrentTime = JSON.parse(
    localStorage.getItem('videoplayer-current-time')
  );
  if (playerCurrentTime) {
    player.setCurrentTime(playerCurrentTime);
  }
} catch (error) {
  console.error(error.name);
}
