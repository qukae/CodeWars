const song = "WUBWUBIWUBAMWUBWUBX";

function songDecoder(song) {
  song = song.replace(/WUB/gi, " ");
  song = song.replace(/\s+/g, " ");
  return song.trim();
}

console.log(songDecoder(song));

//   function songDecoder(song){
//     return song.replace(/(WUB)+/g," ").trim()
//   }

//   function songDecoder(song){
//     return song.split('WUB').filter(Boolean).join(' ');
//   }

// INSANE SPEED

// function songDecoder(song){
//     var str = '';
//     for(var i=0;i<song.length;i++){
//       if((song[i] == 'W' && song[i+1] == 'U' && song[i+2] == 'B')
//       || (song[i-1] == 'W' && song[i] == 'U' && song[i+1] == 'B')
//       || (song[i-2] == 'W' && song[i-1] == 'U' && song[i] == 'B'))
//         str += str.length !== 0 && str[str.length-1] !== ' '? ' ' : '', i+=2;
//       else
//         str += song[i];
//     }
//     return str.trim();
//   }
