import dbConnect from "../../utils/dbConnect";
import Course from "../../models/Course";
import { useRouter } from "next/router";
import { ObjectID } from "bson";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    try {
      // const id = req.query.id;
      // let course = await Course.findById(id);
      /////////////////////////get last added/////////////////////////////////
      let course = await Course.find({}).sort({ _id: -1 }).limit(1);
      course = course[0]; //get last added
      res.status(200).json(course);
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false });
    }
  }
}
