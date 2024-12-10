import React from 'react';
import { Shield } from 'lucide-react';
import { Language } from '../types/game';
import { useTranslation } from '../hooks/useTranslation';

interface GameProgressProps {
  currentLevel: number;
  score: number;
  badges: string[];
  language: Language;
}

export function GameProgress({ currentLevel, score, badges, language }: GameProgressProps) {
  const { t } = useTranslation(language);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="w-6 h-6 text-blue-600" />
          <span className="text-lg font-semibold">{t('level')} {currentLevel}</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-lg font-semibold">{t('score')}: {score}</div>
          <div className="flex space-x-1">
            {badges.map((badge, index) => (
              <span key={index} className="text-2xl" role="img" aria-label="badge">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}