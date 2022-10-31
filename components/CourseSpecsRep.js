const CourseSpecsRep = () => {
  let courseTitle = "Human-Computer Interaction";
  let courseCode = "CS 351T";
  let courseInstructor = "Fayza Ahmed";
  let textBook = `a. Main text book: “Human Computer Interaction”, by Dix, J. Finlay, G. Abowd and R. Beale, Third Edition, Prentice Hall, 2014.
  b. other supplemental materials:
  i. “Human-Computer Interaction”, by Jenny Preece, 1994.
  ii. “The Human-Computer Interaction Handbook: Fundamentals, Evolving Technologies”, By Julie A. Jacko, Andrew Sears, Technology & Engineering, 2003.`;

  let courseInfo = `a. brief description of the content of the course
  Brief description of the content: This course is an introduction to Human- Computer Interaction concerned with the design, evaluation, and implementation of interactive computing systems for human use and with the study of major phenomena surrounding them. The course considers the inherently multi- and interdisciplinary nature of HCI and situates various HCI issues in the organizational and societal contexts. It introduces theories of human psychology, principles of computer systems and user interfaces designs, a methodology of developing effective HCI for information systems, and issues involved in using technologies for different purposes. It is intended to give students an overview of the entire HCI field by covering most aspects of it.
  b. prerequisites or co-requisites: CS 212T
  c. Required, elective, or selected elective: Required`;

  let courseGoals = `The student will be able to:
  i. Recall the human Capabilities and limitations regarding interaction with computer.
  ii. Describe computer system components and functions regarding interaction with human.
  iii. Recognize the interaction and its models.
  iv. Use interaction styles and Paradigms in interaction to develop interactive interface.
  v. Organize and layout windows and pages using the principles of good screen design.
  vi. Apply HCI principles of user interface design to practical application.
  vii. Evaluate user interface design and implementation using different evaluation techniques.`;

  let selectedAbet = [1, 2, 3, 4];
  let courseTopics = ` The human
   The computer
   The interaction
   Paradigms
   Interaction design basics
   HCI in the software process
   Design rules
   Implementation support
   Evaluation techniques`;
  return (
    <>
      <div className=" flex items-center justify-center bg-white w-[80%] p-9 m-auto">
        <div className="  flex flex-col w-[70%] justify-center items-center">
          <div className="w-[60%] flex flex-col justify-center">
            <h3 className="underline text-left">1. Course Title:</h3>
            <p className="text-center">{courseTitle}</p>
          </div>
          <div className="w-[60%]">
            <h3 className="underline text-left">2. Course Code:</h3>
            <p className="text-center">{courseCode}</p>
          </div>
          <div className="w-[60%]">
            <h3 className="underline text-left">3. Course Instructor:</h3>
            <p className="text-center">{courseInstructor}</p>
          </div>
          <div className="w-[60%]">
            <h3 className="underline text-left">4. Text Book:</h3>
            <p className="text-center">{textBook}</p>
          </div>
          <div className="w-[60%]">
            <h3 className="underline text-left">
              5. Specific course information:
            </h3>
            <p className="text-center">{courseInfo}</p>
          </div>
          <div className="w-[60%]">
            <h3 className="underline text-left">6. Course Goals:</h3>
            <h4>a. Specific outcomes of instruction</h4>
            <p className="text-center">{courseGoals}</p>
            <h4>
              b. explicitly indicate which of the student outcomes listed in
              Criterion 3 or any other outcomes are addressed by the course.
            </h4>

            <div>
              <table class="table-auto">
                <thead>
                  <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                  </tr>
                  <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                  </tr>
                  <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-[60%]">
            <h3 className="underline text-left">7. Course Topics:</h3>
            <p className="text-center">{courseTopics}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseSpecsRep;
