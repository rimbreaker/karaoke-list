const fs = require("fs");

const songs = fs.readFileSync('./data/yt-songs.txt').toString().split('\n').slice(0, -1);

const songMap = songs.reduce((prev, curr) => {
  const [author, title, link] = curr.split(' - ');
  prev[`${author} - ${title}`] = { author, title, link };
  return prev
}, {});

fs.writeFileSync('./data/songs.json', JSON.stringify(songMap));
