// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Code from "../../models/Code";
import connectDb from "../../db/conn";

const handler = async (req, res) => {
  let codes = await Code.find();
  res.status(200).json(codes);
};
export default connectDb(handler);
