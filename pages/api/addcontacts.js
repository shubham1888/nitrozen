// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Contact from "../../models/Contact";
import connectDb from "../../db/conn";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let c = new Contact({
        name: req.body[i].name,
        email: req.body[i].email,
        message: req.body[i].message,
      });
      await c.save();
    }
    res.status(200).json({ success: "Contact saved successfully" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDb(handler);
