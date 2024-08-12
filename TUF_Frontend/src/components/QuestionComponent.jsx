/* eslint-disable react/prop-types */
// QuestionComponent.js
import { useState } from "react";
import questions from "./questions";

const QuestionComponent = ({ onSelectQuestion }) => {
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  const handleClick = (question) => {
    setSelectedQuestionId(question.id);
    onSelectQuestion(question.videoUrl);
  };

  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-full rounded-xl bg-clip-border">
      <nav className="flex flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700 overflow-y-auto max-h-[calc(100vh-12rem)]">
        {questions.map((question) => (
          <a
            href="#"
            className="text-initial"
            key={question.id}
            onClick={(e) => {
              e.preventDefault(); // Prevent the default anchor behavior
              handleClick(question);
            }}
          >
            <div
              role="button"
              className={` font-semibold text-gray-600 flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start ${
                selectedQuestionId === question.id
                  ? "bg-blue-200 text-blue-900" // Highlight when selected
                  : "hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900"
              }`}
            >
              {question.question}
            </div>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default QuestionComponent;
