import React, { useState } from 'react';
import { GameProgress } from './components/GameProgress';
import { Question } from './components/Question';
import { LevelComplete } from './components/LevelComplete';
import { GameOver } from './components/GameOver';
import { LanguageSelector } from './components/LanguageSelector';
import { LandingPage } from './components/LandingPage';
import { levels } from './data/levels';
import { GameState, Language } from './types/game';

function App() {
  const [gameState, setGameState] = useState<GameState>({
    currentLevel: 1,
    score: 0,
    completedLevels: [],
    badges: [],
    language: 'en'
  });
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showLevelComplete, setShowLevelComplete] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const handleLanguageChange = (language: Language) => {
    setGameState(prev => ({ ...prev, language }));
  };

  const handleGameStart = () => {
    setGameStarted(true);
  };

  const checkGameOver = (currentScore: number, totalQuestions: number) => {
    // Calculate percentage for Level 1
    const maxPossibleScore = totalQuestions * 10; // Each question is worth 10 points
    const percentage = (currentScore / maxPossibleScore) * 100;
    
    if (gameState.currentLevel === 1 && percentage < 70) {
      setGameOver(true);
    }
  };

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);

    const currentLevelData = levels.find(level => level.id === gameState.currentLevel);
    const currentQuestion = currentLevelData?.questions[currentQuestionIndex];
    let newScore = gameState.score;

    if (answerIndex === currentQuestion?.correctAnswer) {
      newScore += currentQuestion.points;
      setGameState(prev => ({
        ...prev,
        score: newScore,
      }));
    }

    setTimeout(() => {
      if (currentQuestionIndex + 1 < (currentLevelData?.questions.length || 0)) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        // Check for game over when level is complete
        checkGameOver(newScore, currentLevelData?.questions.length || 0);
        if (!gameOver) {
          setShowLevelComplete(true);
          setGameState(prev => ({
            ...prev,
            completedLevels: [...prev.completedLevels, gameState.currentLevel],
            badges: [...prev.badges, currentLevelData?.badge || ''],
          }));
        }
      }
      setShowFeedback(false);
      setSelectedAnswer(null);
    }, 2000);
  };

  const handleNextLevel = () => {
    if (gameState.currentLevel < levels.length) {
      setGameState(prev => ({
        ...prev,
        currentLevel: prev.currentLevel + 1,
      }));
      setCurrentQuestionIndex(0);
      setShowLevelComplete(false);
    }
  };

  const handleRestart = () => {
    setGameState(prev => ({
      currentLevel: 1,
      score: 0,
      completedLevels: [],
      badges: [],
      language: prev.language
    }));
    setCurrentQuestionIndex(0);
    setShowLevelComplete(false);
    setGameStarted(false);
    setGameOver(false);
  };

  const currentLevelData = levels.find(level => level.id === gameState.currentLevel);
  const currentQuestion = currentLevelData?.questions[currentQuestionIndex];

  if (!gameStarted) {
    return (
      <>
        <LanguageSelector
          currentLanguage={gameState.language}
          onLanguageChange={handleLanguageChange}
        />
        <LandingPage
          onStart={handleGameStart}
          language={gameState.language}
        />
      </>
    );
  }

  if (gameOver || gameState.completedLevels.length === levels.length) {
    return (
      <>
        <LanguageSelector
          currentLanguage={gameState.language}
          onLanguageChange={handleLanguageChange}
        />
        <GameOver
          finalScore={gameState.score}
          badges={gameState.badges}
          onRestart={handleRestart}
          language={gameState.language}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      <LanguageSelector
        currentLanguage={gameState.language}
        onLanguageChange={handleLanguageChange}
      />
      <div className="max-w-3xl mx-auto">
        <GameProgress
          currentLevel={gameState.currentLevel}
          score={gameState.score}
          badges={gameState.badges}
          language={gameState.language}
        />
        
        {currentQuestion && (
          <Question
            question={currentQuestion}
            onAnswer={handleAnswer}
            showFeedback={showFeedback}
            selectedAnswer={selectedAnswer}
            language={gameState.language}
          />
        )}

        {showLevelComplete && currentLevelData && !gameOver && (
          <LevelComplete
            level={gameState.currentLevel}
            score={gameState.score}
            badge={currentLevelData.badge}
            onNext={handleNextLevel}
            language={gameState.language}
          />
        )}
      </div>
    </div>
  );
}

export default App;