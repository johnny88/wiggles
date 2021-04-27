import * as functions from "firebase-functions";

export const posts = functions.https.onRequest((_req, res) => {
  res.status(200);
});
