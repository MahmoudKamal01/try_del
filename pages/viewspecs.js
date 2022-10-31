import axios from "axios";
import jsPDF from "jspdf";
import Link from "next/link";
import autoTable from "jspdf-autotable";
import { useRouter, useContext } from "next/router";

function viewspecs(courseData) {
  function generate() {
    console.log(courseData);
    var doc = new jsPDF();
    let courseTitle = courseData.name;
    let courseCode = courseData.code;
    let courseCredits = courseData.credits;
    let courseInfo = courseData.information;
    // "a. brief description of the content of the course\n" +
    // "Brief description of the content: This course is an introduction to Human-\n" +
    // "Computer Interaction concerned with the design, evaluation, and\n" +
    // "implementation of interactive computing systems for human use and with the\n" +
    // "study of major phenomena surrounding them. The course considers the\n" +
    // "inherently multi- and interdisciplinary nature of HCI and situates various HCI\n" +
    // "issues in the organizational and societal contexts. It introduces theories of\n" +
    // "human psychology, principles of computer systems and user interfaces designs,\n" +
    // "a methodology of developing effective HCI for information systems, and issues\n" +
    // "involved in using technologies for different purposes. It is intended to give\n" +
    // "students an overview of the entire HCI field by covering most aspects of it.\n" +
    // "b. prerequisites or co-requisites: CS 212T\n" +
    // "c. Required, elective, or selected elective: Required\n";
    let courseGoals = courseData.goals;
    // "i. Recall the human Capabilities and limitations regarding interaction with computer\n" +
    // "ii. Describe computer system components and functions regarding interaction with human.\n" +
    // "iii. Recognize the interaction and its models.\n" +
    // "iv. Use interaction styles and Paradigms in interaction to develop interactive interface.\n" +
    // "vi. Apply HCI principles of user interface design to practical application.\n" +
    // "vii. Evaluate user interface design and implementation using different evaluation techniques.\n";
    let courseTopics = courseData.topics;
    // "- The human\n" +
    // "- The computer\n" +
    // "- The interaction\n" +
    // "- Paradigms\n" +
    // "- Interaction design basics \n" +
    // "- HCI in the software process \n" +
    // "- Design rules\n" +
    // "- Implementation support\n" +
    // "- Evaluation techniques\n";
    let courseTextBook = courseData.textBook;
    // "Main text book: “Human Computer Interaction”,by Dix, J. Finlay, G. Abowd\n" +
    // "and R. Beale, Third Edition, Prentice Hall, 2014.\n" +
    // "b. other supplemental materials:\n" +
    // "i. “Human-Computer Interaction”, by Jenny Preece, 1994.\n" +
    // "ii. “The Human-Computer Interaction Handbook: Fundamentals, Evolving \n" +
    // "Technologies”, By Julie A. Jacko, Andrew Sears, Technology & Engineering, 2003.\n";
    let courseInstructorName = courseData.instructorName;
    let selectedAbetCri = courseData.selectedAbetCri;
    let selectedProgOutcomes = courseData.selectedProgOutcomes;

    doc.setTextColor("black");
    doc.text(`1- Course title: ${courseTitle}`, 5, 20);

    doc.setTextColor("black");
    doc.text(`2- Course code: ${courseCode}`, 5, 30);

    doc.setTextColor("black");
    doc.text(`3- Credits: ${courseCredits}`, 5, 40);

    doc.setTextColor("black");
    doc.text(
      `4- Instructor’s or course coordinator’s name: ${courseInstructorName}`,
      5,
      50
    );

    doc.setTextColor("black");
    doc.text("5- Text book:", 5, 60);

    doc.setTextColor("black");
    doc.text(courseTextBook, 50, 70);
    /////////////////////////////////
    doc.setTextColor("black");
    doc.text("6- Specific course information:", 5, 120);

    doc.setTextColor("200");
    doc.text("6-a  Specific outcomes of instruction", 5, 130);

    doc.setTextColor("black");
    doc.text(courseInfo, 5, 140);

    doc.addPage();

    doc.setTextColor("black");
    let criteriaTitle =
      "6-b explicitly indicate which of the student outcomes listed in Criterion 3 or\n" +
      "any other outcomes are addressed by the course.";
    doc.text(criteriaTitle, 5, 20);

    // doc.setTextColor("blue");
    // doc.text(selectedAbetCri[0].toString(), 5, 40);

    const abetTicks = ["Achieved", "", "", "", "", "", "", ""];
    selectedAbetCri.forEach((el) => {
      abetTicks[el] = "X";
    });
    autoTable(doc, {
      head: [["ABET Course Criteria", "1", "2", "3", "4", "5", "6", "7"]],
      startY: 50,
      body: [abetTicks],
    });

    const programTicks = ["Achieved", "", "", "", "", "", "", ""];
    selectedProgOutcomes.forEach((el) => {
      programTicks[el] = "X";
    });
    autoTable(doc, {
      head: [["Program outcomes", "1", "2", "3", "4", "5", "6", "7"]],
      startY: 80,
      body: [programTicks],
    });

    doc.text("7- Brief list of topics to be covered", 5, 110);

    doc.setTextColor("black");
    doc.text(courseTopics, 5, 120);

    doc.save("a4.pdf");
  }
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl mb-16">Reports</h1>
        <div className="bg-white w-[60%] h-[500px] rounded flex flex-col justify-center items-center">
          <button
            onClick={generate}
            className="flex justify-center items-center cursor-pointer hover:text-blue-600  text-3xl font-semibold text-white bg-gray-900 rounded-lg w-64 h-16"
          >
            Download Report
          </button>
          <Link
            href="/"
            className=" text-center mt-5 flex justify-center items-center cursor-pointer hover:text-blue-600  text-2xl font-semibold text-white bg-gray-900 rounded-lg w-64 h-16"
          >
            Back to Home Page
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const courseId = 5;
  const courseData = await axios.get(`http://localhost:3000/api/2`);
  // .then(console.log("KKKKKKKKKK", courseData.data));

  return {
    props: courseData.data,
  };
}

export default viewspecs;
