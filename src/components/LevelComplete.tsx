import React from 'react';
import { Trophy } from 'lucide-react';
import { Language } from '../types/game';
import { useTranslation } from '../hooks/useTranslation';

interface LevelCompleteProps {
  level: number;
  score: number;
  badge: string;
  onNext: () => void;
  language: Language;
}

export function LevelComplete({ level, score, badge, onNext, language }: LevelCompleteProps) {
  const { t } = useTranslation(language);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">{t('levelComplete')}</h2>
          <p className="text-xl mb-4">{t('score')}: {score}</p>
          <div className="text-4xl mb-6">{badge}</div>
          <button
            onClick={onNext}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('continue')}
          </button>
        </div>
      </div>
    </div>
  );
}