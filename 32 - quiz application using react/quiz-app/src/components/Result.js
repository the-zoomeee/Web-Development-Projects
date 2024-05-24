import React from 'react';

const Result = ({ questions, selectedOptions }) => {
  const calculateScore = () => {
    return questions.reduce((score, question, index) => {
      if (question.answer === selectedOptions[index]) {
        score += 1;
      }
      return score;
    }, 0);
  };

  const score = calculateScore();

  return (
    <div>
      <h2>Your Score: {score}/{questions.length}</h2>
      {questions.map((question, index) => (
        <div key={index}>
          <h4>{question.question}</h4>
          <p>Your Answer: {selectedOptions[index]}</p>
          <p>Correct Answer: {question.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Result;
