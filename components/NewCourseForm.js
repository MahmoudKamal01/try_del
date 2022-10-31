import { useRef, useState } from "react";
import axios from "axios";
import classes from "./NewCourseForm.module.css";
function NewCourseForm(props) {
  const CourseName = useRef();
  const CourseCode = useRef();
  const CreditInputRef = useRef();
  const TextBookInputRef = useRef();
  const CourseInformationInputRef = useRef();
  const CourseGoalsInputRef = useRef();
  const TopicsInputRef = useRef();
  const InstructorInputRef = useRef();
  const [abetChecked, setAbetChecked] = useState([]);
  const [progOutcomesChecked, setProgOutcomesChecked] = useState([]);
  const checkList = [];
  const criteria = [
    "1- An ability to identify, formulate, and solve complex engineering problems by applying principles of engineering, science, and mathematics.",
    "2- An ability to apply engineering design to produce solutions that meet specified needs with consideration of public health, safety, and welfare, as well as global, cultural, social, environmental, and economic factors.",
    "3- An ability to communicate effectively with a range of audiences.",
    "4- An ability to recognize ethical and professional responsibilities in engineering situations and make informed judgments, which must consider the impact of engineering solutions in global, economic, environmental, and societal contexts.",
    "5- An ability to function effectively on a team whose members together provide leadership, create a collaborative and inclusive environment, establish goals, plan tasks, and meet objectives.",
    "6- An ability to develop and conduct appropriate experimentation, analyze and interpret data, and use engineering judgment to draw conclusions.",
    "7- An ability to acquire and apply new knowledge as needed, using appropriate learning strategies.",
  ];
  const prog_outcomes = [
    "1- ProgOut ability to identify, formulate, and solve complex engineering problems by applying principles of engineering, science, and mathematics.",
    "2- ProgOut ability to apply engineering design to produce solutions that meet specified needs with consideration of public health, safety, and welfare, as well as global, cultural, social, environmental, and economic factors.",
    "3- ProgOut ability to communicate effectively with a range of audiences.",
    "4- ProgOut ability to recognize ethical and professional responsibilities in engineering situations and make informed judgments, which must consider the impact of engineering solutions in global, economic, environmental, and societal contexts.",
    "5- ProgOut ability to function effectively on a team whose members together provide leadership, create a collaborative and inclusive environment, establish goals, plan tasks, and meet objectives.",
    "6- ProgOut ability to develop and conduct appropriate experimentation, analyze and interpret data, and use engineering judgment to draw conclusions.",
    "7- ProgOut ability to acquire and apply new knowledge as needed, using appropriate learning strategies.",
  ];
  let updatedAbetList = [];
  const handleAbetCheck = (event) => {
    updatedAbetList = [...abetChecked];
    if (event.target.checked) {
      updatedAbetList = [...abetChecked, +event.target.value[0]];
    } else {
      updatedAbetList.splice(abetChecked.indexOf(event.target.value), 1);
    }
    setAbetChecked(updatedAbetList);
    console.log(updatedAbetList);
    // let selectedAbetCri = updatedList.map(el=>+el);
  };

  let updatedProgramList = [];
  const handleProgOutcomesCheck = (event) => {
    updatedProgramList = [...progOutcomesChecked];
    if (event.target.checked) {
      updatedProgramList = [...progOutcomesChecked, +event.target.value[0]];
    } else {
      updatedProgramList.splice(
        progOutcomesChecked.indexOf(event.target.value),
        1
      );
    }
    setProgOutcomesChecked(updatedProgramList);
    console.log(updatedProgramList);
    // let selectedProgOutcomes = updatedList.map(el=>+el);
  };

  async function submitHandler(event) {
    event.preventDefault();

    const enteredName = CourseName.current.value;
    const enteredCode = CourseCode.current.value;
    const enteredCredits = CreditInputRef.current.value;
    const enteredInformation = CourseInformationInputRef.current.value;
    const enteredGoals = CourseGoalsInputRef.current.value;
    const enteredTopics = TopicsInputRef.current.value;
    const enteredTextBook = TextBookInputRef.current.value;
    const enteredInstructorName = InstructorInputRef.current.value;

    const courseData = {
      name: enteredName,
      code: enteredCode,
      credits: enteredCredits,
      information: enteredInformation,
      goals: enteredGoals,
      topics: enteredTopics,
      textBook: enteredTextBook,
      instructorName: enteredInstructorName,
      selectedAbetCri: abetChecked,
      selectedProgOutcomes: progOutcomesChecked,
    };
    await console.log(courseData);
    const response = await axios
      .post("http://localhost:3000/api/course", courseData)
      .then(console.log(response));
    // .then(alert(response._id.toString()));
    //  props.onAddMeetup(meetupData);
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="w-[70%] flex flex-col justify-center items-center m-24 ml-72">
          <div className="">
            <h1 className="pb-20  text-4xl font-bold text-slate-900 ">
              Please Enter Course Info
            </h1>
          </div>
          <form className="p-4 bg-white rounded " onSubmit={submitHandler}>
            <div className="mb-2">
              <label className="font-bold mb-2 block" htmlFor="name">
                1- Course title:
              </label>
              <input
                className="block font-inherit rounded-lg border-4 border-[#ccc] border-solid p-1 w-full"
                type="text"
                required
                id="name"
                ref={CourseName}
              />
            </div>
            <div className="mb-2">
              <label className="font-bold mb-2 block" htmlFor="name">
                2- Course code:
              </label>
              <input
                className="block font-inherit rounded-lg border-4 border-[#ccc] border-solid p-1 w-full"
                type="text"
                required
                id="name"
                ref={CourseCode}
              />
            </div>
            <div className="mb-2">
              <label className="font-bold mb-2 block" htmlFor="instructor">
                3- Instructor's or course coordinator's name
              </label>
              <input
                className="block font-inherit rounded-lg border-4 border-[#ccc] border-solid p-1 w-full"
                type="text"
                required
                id="instructor"
                ref={InstructorInputRef}
              />
            </div>
            <div className="mb-2">
              <label className="font-bold mb-2 block" htmlFor="credits">
                4- Credits and Contact hourse:
              </label>
              <input
                className="block font-inherit rounded-lg border-4 border-[#ccc] border-solid p-1 w-full"
                type="number"
                required
                id="credits"
                ref={CreditInputRef}
              />
            </div>
            <div className="mb-2">
              <label className="font-bold mb-2 block" htmlFor="Information">
                5- Specific course information:
              </label>
              <input
                className="block font-inherit rounded-lg border-4 border-[#ccc] border-solid p-1 w-full"
                type="text"
                required
                id="Information"
                ref={CourseInformationInputRef}
              />
            </div>
            <div className="mb-2 border-solid border-black border-2 rounded p-1">
              <div className="mb-2">
                <label className="font-bold mb-2 block" htmlFor="Goals">
                  6- Specific goals of the course
                </label>
                <textarea
                  className="block font-inherit w-full h-64 rounded-lg border-4 border-[#ccc] border-solid p-1 w-full"
                  type="text"
                  required
                  id="Goals"
                  ref={CourseGoalsInputRef}
                />
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold italic">
                  Please check the criteria this course aims to achieve:
                </h4>
                {criteria.map((el, index) => {
                  return (
                    <div
                      className="flex flex-row m-4 abet-criteria"
                      key={index + 1}
                    >
                      <div>
                        <input
                          className="mr-2 w-8 h-8 rounded-lg"
                          type="checkbox"
                          value={el}
                          data-id={index + 1}
                          onChange={handleAbetCheck}
                        />
                      </div>
                      <p> {el}</p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col">
                <h4 className="font-semibold italic">
                  Please check the program outcomes this course aims to achieve:
                </h4>
                {prog_outcomes.map((el, index) => {
                  return (
                    <div
                      className="flex flex-row m-4 program-outcomes"
                      key={index + 1}
                    >
                      <div>
                        <input
                          className="mr-2 w-8 h-8 rounded-lg"
                          type="checkbox"
                          value={el}
                          data-id={index + 1}
                          onChange={handleProgOutcomesCheck}
                        />
                      </div>
                      <p> {el}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mb-2">
              <label className="font-bold mb-2 block" htmlFor="TextBook">
                7- TextBook
              </label>
              <textarea
                className="block font-inherit rounded-lg border-4 border-[#ccc] border-solid p-1 w-full"
                type="text"
                required
                id="TextBook"
                ref={TextBookInputRef}
              />
            </div>
            <div className="mb-2">
              <label className="font-bold mb-2 block" htmlFor="topics">
                8- Brief List of topics to be covered:
              </label>
              <textarea
                className="block font-inherit rounded-lg border-4 border-[#ccc] border-solid p-1 w-full"
                id="topics"
                required
                rows="5"
                ref={TopicsInputRef}
              ></textarea>
            </div>
            <div className="cursor-pointer text-center bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black">
              <button>Add Course</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewCourseForm;
