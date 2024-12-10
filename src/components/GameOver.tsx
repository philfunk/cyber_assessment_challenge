import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Language, Proficiency } from '../types/game';
import { useTranslation } from '../hooks/useTranslation';

interface GameOverProps {
  finalScore: number;
  badges: string[];
  onRestart: () => void;
  language: Language;
}

const getProficiency = (score: number): Proficiency => {
  if (score >= 400) return 'Advanced';
  if (score >= 250) return 'Intermediate';
  return 'Novice';
};

const getRecommendations = (proficiency: Proficiency, language: Language): string[] => {
  const recommendations = {
    en: {
      Novice: [
        'Start with basic password security practices',
        'Learn about common online threats',
        'Practice safe browsing habits'
      ],
      Intermediate: [
        'Practice identifying phishing attempts',
        'Learn about encryption and secure communications',
        'Study network security fundamentals'
      ],
      Advanced: [
        'Consider pursuing cybersecurity certifications',
        'Join cybersecurity communities and forums',
        'Stay updated with the latest security trends'
      ]
    },
    de: {
      Novice: [
        'Beginnen Sie mit grundlegenden Passwort-Sicherheitspraktiken',
        'Lernen Sie häufige Online-Bedrohungen kennen',
        'Üben Sie sicheres Surfverhalten'
      ],
      Intermediate: [
        'Üben Sie das Erkennen von Phishing-Versuchen',
        'Lernen Sie über Verschlüsselung und sichere Kommunikation',
        'Studieren Sie Netzwerksicherheitsgrundlagen'
      ],
      Advanced: [
        'Erwägen Sie Cybersecurity-Zertifizierungen',
        'Treten Sie Cybersecurity-Communities bei',
        'Bleiben Sie über aktuelle Sicherheitstrends informiert'
      ]
    },
    fr: {
      Novice: [
        'Commencez par les pratiques de sécurité des mots de passe',
        'Apprenez les menaces en ligne courantes',
        'Pratiquez une navigation sécurisée'
      ],
      Intermediate: [
        'Entraînez-vous à identifier les tentatives de phishing',
        'Apprenez le chiffrement et les communications sécurisées',
        'Étudiez les principes de sécurité réseau'
      ],
      Advanced: [
        'Envisagez des certifications en cybersécurité',
        'Rejoignez des communautés de cybersécurité',
        'Restez informé des dernières tendances'
      ]
    },
    lb: {
      Novice: [
        'Fänkt mat Basis-Passwuertschutz Praktiken un',
        'Léiert iwwer déi heefegst Online-Gefoeren',
        'Übt sécher Surf-Gewunnechten'
      ],
      Intermediate: [
        'Übt d\'Erkennung vu Phishing-Versich',
        'Léiert iwwer Verschlësselung a sécher Kommunikatioun',
        'Studéiert Netzwierksécherheetsgrondlagen'
      ],
      Advanced: [
        'Iwwerleet Iech Cybersecurity-Zertifizéierungen',
        'Triet Cybersecurity-Communautéiten bäi',
        'Bleift iwwer aktuell Sécherheetsthemen informéiert'
      ]
    }
  };

  return recommendations[language][proficiency];
};

const getNGOMessage = (language: Language): { title: string; message: string } => {
  const messages = {
    en: {
      title: 'Need Additional Help?',
      message: 'For personalized guidance and support in cybersecurity education, visit NGO Erwuessebildung'
    },
    de: {
      title: 'Benötigen Sie zusätzliche Hilfe?',
      message: 'Für persönliche Beratung und Unterstützung in der Cybersicherheitsausbildung besuchen Sie NGO Erwuessebildung'
    },
    fr: {
      title: 'Besoin d\'aide supplémentaire ?',
      message: 'Pour un accompagnement et un soutien personnalisés en matière de cybersécurité, visitez NGO Erwuessebildung'
    },
    lb: {
      title: 'Braucht Dir zousätzlech Hëllef?',
      message: 'Fir perséinlech Berodung an Ënnerstëtzung an der Cybersécherheetsausbildung besicht NGO Erwuessebildung'
    }
  };
  return messages[language];
};

export function GameOver({ finalScore, badges, onRestart, language }: GameOverProps) {
  const { t } = useTranslation(language);
  const proficiency = getProficiency(finalScore);
  const recommendations = getRecommendations(proficiency, language);
  const ngoMessage = getNGOMessage(language);
  const showNGOMessage = finalScore < 70; // Show NGO message if score is less than 70

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        <div className="text-center mb-8">
          <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">{t('assessmentComplete')}</h2>
          <p className="text-xl text-gray-600">{t('finalScore')}: {finalScore}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">
            {t('proficiencyLevel')}: {t(`proficiency.${proficiency}`)}
          </h3>
          <div className="flex justify-center space-x-2 mb-6">
            {badges.map((badge, index) => (
              <span key={index} className="text-3xl">{badge}</span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-4">{t('recommendations')}:</h4>
          <ul className="space-y-2">
            {recommendations.map((rec, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                {rec}
              </li>
            ))}
          </ul>
        </div>

        {showNGOMessage && (
          <div className="mb-8 p-4 bg-blue-50 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">{ngoMessage.title}</h4>
            <p className="mb-3">{ngoMessage.message}</p>
            <a
              href="https://ewb.lu/program/i-stuff/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              ewb.lu
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        )}

        <button
          onClick={onRestart}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {t('startNew')}
        </button>
      </div>
    </div>
  );
}