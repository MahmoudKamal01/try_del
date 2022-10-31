import dbConnect from "../../utils/dbConnect";
import Course from "../../models/Course";
export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "POST") {
    try {
      const course = await Course.create(req.body);
      res.status(200).json({
        status: "success",
        data: {
          course,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false });
    }
  }
}
