export interface Question {
  id: string;
  scenario: {
    en: string;
    de: string;
    fr: string;
    lb: string;
  };
  options: {
    en: string[];
    de: string[];
    fr: string[];
    lb: string[];
  };
  correctAnswer: number;
  explanation: {
    en: string;
    de: string;
    fr: string;
    lb: string;
  };
  points: number;
}

export interface Level {
  id: number;
  title: {
    en: string;
    de: string;
    fr: string;
    lb: string;
  };
  description: {
    en: string;
    de: string;
    fr: string;
    lb: string;
  };
  questions: Question[];
  badge: string;
}

export interface GameState {
  currentLevel: number;
  score: number;
  completedLevels: number[];
  badges: string[];
  language: Language;
}

export type Language = 'en' | 'de' | 'fr' | 'lb';
export type Proficiency = 'Novice' | 'Intermediate' | 'Advanced';