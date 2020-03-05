import { Ableton } from "ableton-js";
import { WootingRgb } from './wooting-rgb';
import updateLoops from './update-loops';

const ableton = new Ableton();
const wooting = new WootingRgb();
wooting.initialize();

// ableton.song.addListener('current_song_time', async () => {
//   await updateLoops(ableton, wooting);
// })

// updateLoops(ableton, wooting).then( () => {
//   ableton.close()
// });

setInterval(() => {
  updateLoops(ableton, wooting)
}, 250);