import * as fs from 'fs';

export default async function handler(req, res) {
  let myfile;
  let allblog = [];
  let data = await fs.promises.readdir("blogdata")
  // console.log(data);

  for (let index = 0; index < data.length; index++) {
    const item = data[index];

    myfile = await fs.promises.readFile(("blogdata/" + item), "utf-8")
    allblog.push(JSON.parse(myfile))
    // console.log(myfile);
  }

  res.status(200).json(allblog)
}