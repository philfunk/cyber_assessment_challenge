import React from 'react';
import { Shield, Clock, Award, ChevronRight } from 'lucide-react';
import { Language } from '../types/game';
import { useTranslation } from '../hooks/useTranslation';

interface LandingPageProps {
  onStart: () => void;
  language: Language;
}

export function LandingPage({ onStart, language }: LandingPageProps) {
  const { t } = useTranslation(language);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('landing.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('landing.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Clock className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold text-lg mb-2">{t('landing.timeEstimate')}</h3>
            <p className="text-gray-600">{t('landing.timeDetail')}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Award className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold text-lg mb-2">{t('landing.scoring')}</h3>
            <p className="text-gray-600">{t('landing.scoringDetail')}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Shield className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold text-lg mb-2">{t('landing.levels')}</h3>
            <p className="text-gray-600">{t('landing.levelsDetail')}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">{t('landing.whatToExpect')}</h2>
          <ul className="space-y-4">
            {[1, 2, 3].map((level) => (
              <li key={level} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">{level}</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    {t(`landing.level${level}Title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`landing.level${level}Description`)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full md:w-auto mx-auto px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center hover:bg-blue-700 transition-colors"
        >
          {t('landing.startButton')}
          <ChevronRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  );
}