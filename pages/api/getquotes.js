// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Quote from "../../models/Quote";
import connectDb from "../../db/conn";

const handler = async (req, res) => {
  let quotes = await Quote.find();
  res.status(200).json(quotes);
};
export default connectDb(handler);
