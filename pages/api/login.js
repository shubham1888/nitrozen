// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "../../models/User";
import connectDb from "../../db/conn";
const CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  // // Encrypt
  // var ciphertext = CryptoJS.AES.encrypt(
  //   "my message",
  //   "secret key 123"
  // ).toString();

  // // Decrypt
  // var bytes = CryptoJS.AES.decrypt(ciphertext, "secret key 123");
  // var originalText = bytes.toString(CryptoJS.enc.Utf8);

  // console.log(originalText); // 'my message'

  if (req.method == "POST") {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      // Decrypt
      let bytes = CryptoJS.AES.decrypt(user.password, "my secret key");
      let originalPassword = bytes.toString(CryptoJS.enc.Utf8);
      if (
        req.body.email == user.email &&
        originalPassword ==
          req.body.password
      ) {
        res
          .status(200)
          .json({ success: true, name: user.name, email: user.email });
      } else {
        res.status(200).json({ success: false, error: "Invalid credential" });
      }
    } else {
      res.status(200).json({ success: false, error: "User not found!" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDb(handler);
