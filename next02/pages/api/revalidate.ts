// http://localhost:3000/api/revalidate?path=/&secret=OmathDevelopCreateBuildDevelop

import { NextApiRequest, NextApiResponse } from "next";


export default async function (
    req:NextApiRequest,
    res:NextApiResponse
) {
  if(req.query.secret !== process.env.DATA_TOKEN_SECRET) return res.status(401).json({"message": "Invalid Token"})

  const path = req.query.path as string;
  await res.revalidate(path);
  const isRevalidated = true;
  console.log({path, isRevalidated});
  return res.json({isRevalidated})
}