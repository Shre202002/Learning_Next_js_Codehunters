// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/get_blogs?slug=how_to_learn_javascript

import * as fs from 'fs';
export default function handler(req, res) {
  // To read File System 
  //
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
    console.log("");
    if (err) {
      res.status(500).json({ error: "No Such Blog Is Found" })
    }
    res.status(200).json(JSON.parse(data))
  })


}