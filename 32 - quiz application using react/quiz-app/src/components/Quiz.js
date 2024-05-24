import React, { useState } from 'react';
import Question from './Question';
import questions from '../questions';
import Result from './Result';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionChange = (e) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = e.target.value;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <Result questions={questions} selectedOptions={selectedOptions} />;
  }

  return (
    <div>
      <Question
        question={questions[currentQuestionIndex].question}
        options={questions[currentQuestionIndex].options}
        selectedOption={selectedOptions[currentQuestionIndex]}
        handleOptionChange={handleOptionChange}
      />
      {currentQuestionIndex > 0 && (
        <button onClick={handlePreviousQuestion}>Previous</button>
      )}
      {currentQuestionIndex < questions.length - 1 && (
        <button onClick={handleNextQuestion}>Next</button>
      )}
      {currentQuestionIndex === questions.length - 1 && (
        <button onClick={handleSubmitQuiz}>Submit</button>
      )}
    </div>
  );
};

export default Quiz;
