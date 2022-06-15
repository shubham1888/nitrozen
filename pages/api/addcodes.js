// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Code from "../../models/Code";
import connectDb from "../../db/conn";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let c = new Code({
        title: req.body[i].title,
        slug: req.body[i].slug,
        desc: req.body[i].desc,
        category: req.body[i].category,
        views: req.body[i].views,
        comment: req.body[i].comment,
      });
      await c.save();
    }
    res.status(200).json({ success: "Successfully code added." });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDb(handler);
