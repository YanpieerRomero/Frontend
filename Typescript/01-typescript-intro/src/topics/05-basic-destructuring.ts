interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}
const song = 'New Song';
const { song: anotherSong, songDuration:duration, details:{ author, year } } = audioPlayer;
// details > author
// const { details } = audioPlayer;
// const { author, year } = details;
// const { author, year } = audioPlayer.details;

// console.log('Song: ', audioPlayer.song);
console.log('Song: ', song);
console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
// console.log('Duration: ', audioPlayer.songDuration);
// console.log('Author: ', audioPlayer.details.author);
console.log('Author: ', author);
console.log('Year: ', year);

const dbz: string[] = ['Goku', 'Vegeta'];
const oldTrunks = dbz[3] || "There's no a character";
const [ , , trunks = 'Not found' ]: string[] = dbz;
console.log('Old Trunks: ', oldTrunks);
console.log('Personaje 3: ', trunks);

export {};