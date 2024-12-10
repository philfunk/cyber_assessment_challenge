import React from 'react';
import { Question as QuestionType, Language } from '../types/game';

interface QuestionProps {
  question: QuestionType;
  onAnswer: (answerIndex: number) => void;
  showFeedback: boolean;
  selectedAnswer: number | null;
  language: Language;
}

export function Question({ question, onAnswer, showFeedback, selectedAnswer, language }: QuestionProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">{question.scenario[language]}</h3>
      <div className="space-y-3">
        {question.options[language].map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            disabled={showFeedback}
            className={`w-full p-4 text-left rounded-lg transition-colors ${
              showFeedback
                ? index === question.correctAnswer
                  ? 'bg-green-100 border-green-500'
                  : index === selectedAnswer
                  ? 'bg-red-100 border-red-500'
                  : 'bg-gray-50'
                : 'bg-gray-50 hover:bg-gray-100'
            } border-2`}
          >
            {option}
          </button>
        ))}
      </div>
      {showFeedback && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800">{question.explanation[language]}</p>
        </div>
      )}
    </div>
  );
}