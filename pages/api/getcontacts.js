// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Contact from "../../models/Contact";
import connectDb from "../../db/conn";

const handler = async (req, res) => {
  let contacts = await Contact.find();
  res.status(200).json(contacts);
};
export default connectDb(handler);
