import PlayingArea from '../components/playing-area/playing-area';
import userClick from '../components/user-click/user-click';

document.addEventListener('DOMContentLoaded', () => {
  const playingArea = new PlayingArea(document.querySelector('.playing-area'));

  setInterval(playingArea.randomMovingGoblin, 2000);

  userClick();
})
