import { NowRequest, NowResponse } from "@vercel/node";

const production = process.env.NODE_ENV === "production";

const apiHealth = (req: NowRequest, res: NowResponse) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const { uuid } = req.query;

  console.log(`api_health_${uuid}`);

  return res.status(200).json({
    ok: true,
    production,
    nodeEnv: process.env.NODE_ENV,
    uuid,
  });
};

export default apiHealth;
