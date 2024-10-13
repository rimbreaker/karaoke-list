import { appendFileSync, readFileSync, writeFileSync } from "fs";
import axios from "axios";
import pLimit from "p-limit";

const songs = readFileSync("./data/songlist.txt")
  .toString()
  .split("\n")
  .slice(0, -1);

const limit = pLimit(1);

writeFileSync("./data/yt-songs.txt", "");

const getYoutubeId = async (track) => {
  const [artist, title] = track.split(" - ");
  const reultsPage = (
    await axios.get(
      `https://www.youtube.com/results?search_query=${title}+${artist}`
    )
  ).data.toString();
  const firstResultIDBatch = reultsPage.split("/watch?v=")[1];
  const firstResultID = firstResultIDBatch.slice(
    0,
    firstResultIDBatch.indexOf("\\")
  );
  appendFileSync(
    "./data/yt-songs.txt",
    `${track} - https://www.youtube.com/watch?v=${firstResultID}\n`
  );
  console.log(`https://www.youtube.com/watch?v=${firstResultID}`);
};

Promise.all(songs.map((song) => limit(() => getYoutubeId(song))));
