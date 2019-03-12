import React from "react";

export default function QuizAnswerItem({ answer, onAnswerClick }) {
  return (
    <li
      key={answer.id}
      className="quiz-answer"
      onClick={() => onAnswerClick(answer)}
    >
      {answer.answer}
    </li>
  );
}
