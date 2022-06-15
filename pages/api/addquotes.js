// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Quote from "../../models/Quote";
import connectDb from "../../db/conn";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let q = new Quote({
        quote: req.body[i].quote,
        likes: req.body[i].likes,
      });
      await q.save();
    }
    res.status(200).json({ success: "Quote added successfully" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDb(handler);
