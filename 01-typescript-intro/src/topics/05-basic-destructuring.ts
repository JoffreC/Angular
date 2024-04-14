interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}
interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 100,
    songDuration: 204,
    song: "What I've Done",
    details:{
        author: 'LP',
        year: 2007
    }
}

/*const song = 'ND';
const {song: another, songDuration: duration} = audioPlayer;

console.log(song);
console.log(another);
console.log(duration);

const {details} = audioPlayer

const {author, year} = details

// console.log(author);
// console.log(year);*/

const ps: string[] = ['Ps1','Ps2', 'Ps3', 'Ps4', 'Ps5'];

const [,,,,ps5 = 'No hay'] = ps;

console.log(ps5);

export {};