// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Code from "../../models/Code";
import connectDb from "../../db/conn";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = await Code.findByIdAndUpdate(req.body[i]._id, req.body[i]);
    }
    res.status(200).json({ success: "Successfully code updated." });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDb(handler);
