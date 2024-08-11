import fs from 'node:fs';

fs.stat('./test.txt', (err, stats) => {
  if (err) {
    console.error(err);
  }
  console.log(stats)
  // we have access to the file stats in `stats`
});