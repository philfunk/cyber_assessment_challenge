import { Level } from '../types/game';

export const levels: Level[] = [
  {
    id: 1,
    title: {
      en: 'Basic Digital Safety',
      de: 'Grundlegende digitale Sicherheit',
      fr: 'Sécurité numérique de base',
      lb: 'Basis digital Sécherheet'
    },
    description: {
      en: 'Learn fundamental concepts of digital security and safe computing practices.',
      de: 'Lernen Sie grundlegende Konzepte der digitalen Sicherheit und sichere Computerpraktiken.',
      fr: 'Apprenez les concepts fondamentaux de la sécurité numérique et les pratiques informatiques sûres.',
      lb: 'Léiert Grondkonzepter vun der digitaler Sécherheet a sécher Computergewunnechten.'
    },
    badge: '🛡️',
    questions: [
      {
        id: 'l1q1',
        scenario: {
          en: 'What is the most secure way to store your passwords?',
          de: 'Was ist der sicherste Weg, Ihre Passwörter zu speichern?',
          fr: 'Quelle est la façon la plus sûre de stocker vos mots de passe?',
          lb: 'Wat ass dee séicherste Wee fir är Passwierder ze späicheren?'
        },
        options: {
          en: [
            'Write them in a notebook',
            'Save them in a text file on your computer',
            'Use a reputable password manager',
            'Use the same password for all accounts'
          ],
          de: [
            'In einem Notizbuch aufschreiben',
            'In einer Textdatei auf dem Computer speichern',
            'Einen seriösen Passwort-Manager verwenden',
            'Das gleiche Passwort für alle Konten verwenden'
          ],
          fr: [
            'Les écrire dans un carnet',
            'Les enregistrer dans un fichier texte sur votre ordinateur',
            'Utiliser un gestionnaire de mots de passe réputé',
            'Utiliser le même mot de passe pour tous les comptes'
          ],
          lb: [
            'An engem Notizbuch opschreiwen',
            'An enger Textdatei um Computer späicheren',
            'E serióse Passwuert-Manager benotzen',
            'Dat selwecht Passwuert fir all Konten benotzen'
          ]
        },
        correctAnswer: 2,
        explanation: {
          en: 'Password managers encrypt your passwords and offer secure access across devices.',
          de: 'Passwort-Manager verschlüsseln Ihre Passwörter und bieten sicheren Zugriff über verschiedene Geräte.',
          fr: 'Les gestionnaires de mots de passe cryptent vos mots de passe et offrent un accès sécurisé sur tous vos appareils.',
          lb: 'Passwuert-Manager verschlësselen är Passwierder a bidden e sécheren Zougrëff iwwer verschidden Apparater.'
        },
        points: 10
      },
      {
        id: 'l1q2',
        scenario: {
          en: 'Which of these is a sign of a potential phishing email?',
          de: 'Welches ist ein Zeichen für eine potenzielle Phishing-E-Mail?',
          fr: 'Lequel de ces éléments est un signe d\'un possible e-mail de phishing?',
          lb: 'Wat ass en Zeeche fir eng méiglech Phishing-E-Mail?'
        },
        options: {
          en: [
            'The sender\'s email matches the company name',
            'The email contains the company\'s correct logo',
            'Urgent request for personal information',
            'The email was sent during business hours'
          ],
          de: [
            'Die E-Mail-Adresse des Absenders stimmt mit dem Firmennamen überein',
            'Die E-Mail enthält das korrekte Firmenlogo',
            'Dringende Anfrage nach persönlichen Informationen',
            'Die E-Mail wurde während der Geschäftszeiten gesendet'
          ],
          fr: [
            'L\'adresse e-mail de l\'expéditeur correspond au nom de l\'entreprise',
            'L\'e-mail contient le logo correct de l\'entreprise',
            'Demande urgente d\'informations personnelles',
            'L\'e-mail a été envoyé pendant les heures de bureau'
          ],
          lb: [
            'D\'E-Mail-Adress vum Ofsender stëmmt mam Firmennumm iwwereneen',
            'D\'E-Mail enthält de richtege Firmelogo',
            'Dringend Ufro no perséinlechen Informatiounen',
            'D\'E-Mail gouf während de Bürosstonnen geschéckt'
          ]
        },
        correctAnswer: 2,
        explanation: {
          en: 'Urgent requests for personal information are a common phishing tactic.',
          de: 'Dringende Anfragen nach persönlichen Informationen sind eine häufige Phishing-Taktik.',
          fr: 'Les demandes urgentes d\'informations personnelles sont une tactique courante de phishing.',
          lb: 'Dringend Ufroen no perséinlechen Informatiounen sinn eng heefeg Phishing-Taktik.'
        },
        points: 10
      },
      {
        id: 'l1q3',
        scenario: {
          en: 'What is the best practice for mobile device security?',
          de: 'Was ist die beste Praxis für die Sicherheit mobiler Geräte?',
          fr: 'Quelle est la meilleure pratique pour la sécurité des appareils mobiles?',
          lb: 'Wat ass déi bescht Praktik fir mobil Apparater Sécherheet?'
        },
        options: {
          en: [
            'Only use public Wi-Fi',
            'Never update the operating system',
            'Use biometric lock and auto-lock timer',
            'Share your PIN with trusted friends'
          ],
          de: [
            'Nur öffentliches WLAN nutzen',
            'Betriebssystem nie aktualisieren',
            'Biometrische Sperre und Auto-Sperre verwenden',
            'PIN mit vertrauenswürdigen Freunden teilen'
          ],
          fr: [
            'Utiliser uniquement le Wi-Fi public',
            'Ne jamais mettre à jour le système d\'exploitation',
            'Utiliser le verrouillage biométrique et la minuterie de verrouillage automatique',
            'Partager votre code PIN avec des amis de confiance'
          ],
          lb: [
            'Nëmmen ëffentlecht WLAN benotzen',
            'Betribssystem ni aktualiséieren',
            'Biometresch Spär an Auto-Lock Timer benotzen',
            'PIN mat vertrauenswürdege Frënn deelen'
          ]
        },
        correctAnswer: 2,
        explanation: {
          en: 'Biometric locks and auto-lock timers help protect your device if it\'s lost or stolen.',
          de: 'Biometrische Sperren und Auto-Sperr-Timer schützen Ihr Gerät bei Verlust oder Diebstahl.',
          fr: 'Les verrous biométriques et les minuteries de verrouillage automatique protègent votre appareil en cas de perte ou de vol.',
          lb: 'Biometresch Spären an Auto-Lock Timer schützen Äert Gerät bei Verloscht oder Déifstall.'
        },
        points: 10
      },
      {
        id: 'l1q4',
        scenario: {
          en: 'What should you do before downloading an app?',
          de: 'Was sollten Sie vor dem Herunterladen einer App tun?',
          fr: 'Que devez-vous faire avant de télécharger une application?',
          lb: 'Wat sollt Dir maachen ier Dir eng App erofluet?'
        },
        options: {
          en: [
            'Download immediately if it\'s free',
            'Check reviews and permissions required',
            'Share it with all your contacts',
            'Give it all requested permissions'
          ],
          de: [
            'Sofort herunterladen, wenn sie kostenlos ist',
            'Bewertungen und erforderliche Berechtigungen prüfen',
            'Mit allen Kontakten teilen',
            'Alle angeforderten Berechtigungen erteilen'
          ],
          fr: [
            'Télécharger immédiatement si c\'est gratuit',
            'Vérifier les avis et les autorisations requises',
            'La partager avec tous vos contacts',
            'Donner toutes les autorisations demandées'
          ],
          lb: [
            'Direkt eroflueden wann et gratis ass',
            'Bewäertungen a gefuerdert Berechtegunge kontrolléieren',
            'Mat all Kontakter deelen',
            'All gefuerdert Berechtegungen ginn'
          ]
        },
        correctAnswer: 1,
        explanation: {
          en: 'Reviewing app permissions and user reviews helps identify potentially harmful apps.',
          de: 'Die Überprüfung von App-Berechtigungen und Nutzerbewertungen hilft, potenziell schädliche Apps zu erkennen.',
          fr: 'L\'examen des autorisations et des avis des utilisateurs aide à identifier les applications potentiellement dangereuses.',
          lb: 'D\'Iwwerpréiwung vun App-Berechtegungen a Benotzer-Bewäertungen hëlleft potenziell schiedlech Apps z\'erkennen.'
        },
        points: 10
      },
      {
        id: 'l1q5',
        scenario: {
          en: 'What is a secure way to browse the internet?',
          de: 'Was ist ein sicherer Weg, im Internet zu surfen?',
          fr: 'Quelle est une façon sécurisée de naviguer sur Internet?',
          lb: 'Wat ass e séchere Wee fir am Internet ze surfen?'
        },
        options: {
          en: [
            'Click on all interesting ads',
            'Share personal information freely',
            'Use HTTPS-enabled websites',
            'Disable all security settings'
          ],
          de: [
            'Auf alle interessanten Werbungen klicken',
            'Persönliche Informationen frei teilen',
            'HTTPS-aktivierte Websites nutzen',
            'Alle Sicherheitseinstellungen deaktivieren'
          ],
          fr: [
            'Cliquer sur toutes les publicités intéressantes',
            'Partager librement les informations personnelles',
            'Utiliser des sites web avec HTTPS',
            'Désactiver tous les paramètres de sécurité'
          ],
          lb: [
            'Op all interessant Reklamme klicken',
            'Perséinlech Informatiounen fräi deelen',
            'HTTPS-aktivéiert Websäite benotzen',
            'All Sécherheetsastellungen desaktivéieren'
          ]
        },
        correctAnswer: 2,
        explanation: {
          en: 'HTTPS ensures your connection to the website is encrypted and secure.',
          de: 'HTTPS stellt sicher, dass Ihre Verbindung zur Website verschlüsselt und sicher ist.',
          fr: 'HTTPS garantit que votre connexion au site web est cryptée et sécurisée.',
          lb: 'HTTPS stellt sécher datt Är Verbindung zur Websäit verschlësselt a sécher ass.'
        },
        points: 10
      },
      {
        id: 'l1q6',
        scenario: {
          en: 'What is the best practice for backing up important data?',
          de: 'Was ist die beste Praxis für die Sicherung wichtiger Daten?',
          fr: 'Quelle est la meilleure pratique pour sauvegarder des données importantes?',
          lb: 'Wat ass déi bescht Praktik fir wichteg Donnéeën ze sécheren?'
        },
        options: {
          en: [
            'Never back up anything',
            'Keep one copy on your computer',
            'Maintain multiple backups in different locations',
            'Email everything to yourself'
          ],
          de: [
            'Nie etwas sichern',
            'Eine Kopie auf dem Computer behalten',
            'Mehrere Sicherungen an verschiedenen Orten aufbewahren',
            'Alles per E-Mail an sich selbst senden'
          ],
          fr: [
            'Ne jamais rien sauvegarder',
            'Garder une copie sur votre ordinateur',
            'Maintenir plusieurs sauvegardes à différents endroits',
            'Tout s\'envoyer par e-mail'
          ],
          lb: [
            'Ni eppes sécheren',
            'Eng Kopie um Computer halen',
            'Méi Kopien op verschiddene Plazen halen',
            'Alles per E-Mail un sech selwer schécken'
          ]
        },
        correctAnswer: 2,
        explanation: {
          en: 'Multiple backups in different locations protect against hardware failure and other disasters.',
          de: 'Mehrere Sicherungen an verschiedenen Orten schützen vor Hardwareausfällen und anderen Katastrophen.',
          fr: 'Plusieurs sauvegardes à différents endroits protègent contre les pannes matérielles et autres catastrophes.',
          lb: 'Méi Kopien op verschiddene Plaze schütze géint Hardware-Ausfäll an aner Katastrophen.'
        },
        points: 10
      },
      {
        id: 'l1q7',
        scenario: {
          en: 'What should you do if you receive a suspicious link?',
          de: 'Was sollten Sie tun, wenn Sie einen verdächtigen Link erhalten?',
          fr: 'Que devez-vous faire si vous recevez un lien suspect?',
          lb: 'Wat sollt Dir maache wann Dir e verdächtege Link kritt?'
        },
        options: {
          en: [
            'Click it to check if it\'s safe',
            'Forward it to all contacts',
            'Don\'t click and report it as suspicious',
            'Enter your personal information'
          ],
          de: [
            'Darauf klicken, um zu prüfen, ob er sicher ist',
            'An alle Kontakte weiterleiten',
            'Nicht klicken und als verdächtig melden',
            'Persönliche Informationen eingeben'
          ],
          fr: [
            'Cliquer pour vérifier s\'il est sûr',
            'Le transférer à tous les contacts',
            'Ne pas cliquer et le signaler comme suspect',
            'Entrer vos informations personnelles'
          ],
          lb: [
            'Drop klicke fir ze kontrolléieren ob en sécher ass',
            'Un all Kontakter weiderleeden',
            'Net klicken an als verdächteg mellen',
            'Perséinlech Informatiounen aginn'
          ]
        },
        correctAnswer: 2,
        explanation: {
          en: 'Never click suspicious links as they may contain malware or lead to phishing sites.',
          de: 'Klicken Sie nie auf verdächtige Links, da sie Malware enthalten oder zu Phishing-Seiten führen können.',
          fr: 'Ne jamais cliquer sur des liens suspects car ils peuvent contenir des malwares ou mener à des sites de phishing.',
          lb: 'Klickt ni op verdächteg Links well se Malware enthalen oder op Phishing-Säite féiere kënnen.'
        },
        points: 10
      },
      {
        id: 'l1q8',
        scenario: {
          en: 'What is a good practice for public Wi-Fi security?',
          de: 'Was ist eine gute Praxis für die Sicherheit in öffentlichen WLANs?',
          fr: 'Quelle est une bonne pratique pour la sécurité du Wi-Fi public?',
          lb: 'Wat ass eng gutt Praktik fir ëffentlech WLAN Sécherheet?'
        },
        options: {
          en: [
            'Share files with everyone',
            'Do online banking immediately',
            'Use a VPN for sensitive activities',
            'Disable firewall protection'
          ],
          de: [
            'Dateien mit allen teilen',
            'Sofort Online-Banking durchführen',
            'VPN für sensible Aktivitäten nutzen',
            'Firewall-Schutz deaktivieren'
          ],
          fr: [
            'Partager des fichiers avec tout le monde',
            'Faire immédiatement des opérations bancaires',
            'Utiliser un VPN pour les activités sensibles',
            'Désactiver la protection du pare-feu'
          ],
          lb: [
            'Dateie mat jidderengem deelen',
            'Direkt Online-Banking maachen',
            'VPN fir sensibel Aktivitéite benotzen',
            'Firewall-Schutz ausschalten'
          ]
        },
        correctAnswer: 2,
        explanation: {
          en: 'A VPN encrypts your data and protects your privacy on public networks.',
          de: 'Ein VPN verschlüsselt Ihre Daten und schützt Ihre Privatsphäre in öffentlichen Netzwerken.',
          fr: 'Un VPN crypte vos données et protège votre vie privée sur les réseaux publics.',
          lb: 'E VPN verschlësselt Är Donnéeën a schützt Är Privatsphär an ëffentleche Netzwierker.'
        },
        points: 10
      },
      {
        id: 'l1q9',
        scenario: {
          en: 'What should you do with software updates?',
          de: 'Was sollten Sie mit Software-Updates tun?',
          fr: 'Que devez-vous faire avec les mises à jour logicielles?',
          lb: 'Wat sollt Dir mat Software-Updates maachen?'
        },
        options: {
          en: [
            'Ignore them completely',
            'Wait several months',
            'Install them promptly',
            'Only update games'
          ],
          de: [
            'Komplett ignorieren',
            'Mehrere Monate warten',
            'Zeitnah installieren',
            'Nur Spiele aktualisieren'
          ],
          fr: [
            'Les ignorer complètement',
            'Attendre plusieurs mois',
            'Les installer rapidement',
            'Mettre à jour uniquement les jeux'
          ],
          lb: [
            'Komplett ignoréieren',
            'Méi Méint waarden',
            'Direkt installéieren',
            'Nëmme Spiller aktualiséieren'
          ]
        },
        correctAnswer: 2,
        explanation: {
          en: 'Prompt installation of updates helps protect against known security vulnerabilities.',
          de: 'Die zeitnahe Installation von Updates schützt vor bekannten Sicherheitslücken.',
          fr: 'L\'installation rapide des mises à jour aide à protéger contre les vulnérabilités de sécurité connues.',
          lb: 'Direkt Installatioun vun Updates schützt géint bekannt Sécherheetslécker.'
        },
        points: 10
      },
      {
        id: 'l1q10',
        scenario: {
          en: 'What is the safest way to handle unknown email attachments?',
          de: 'Was ist der sicherste Umgang mit unbekannten E-Mail-Anhängen?',
          fr: 'Quelle est la façon la plus sûre de gérer les pièces jointes inconnues?',
          lb: 'Wat ass dee sécherstste Wee fir mat onbekannten E-Mail-Unhäng ëmzegoen?'
        },
        options: {
          en: [
            'Open them immediately',
            'Forward them to friends',
            'Don\'t download unless verified',
            'Save them for later'
          ],
          de: [
            'Sofort öffnen',
            'An Freunde weiterleiten',
            'Nicht herunterladen ohne Verifizierung',
            'Für später speichern'
          ],
          fr: [
            'Les ouvrir immédiatement',
            'Les transférer aux amis',
            'Ne pas télécharger sans vérification',
            'Les sauvegarder pour plus tard'
          ],
          lb: [
            'Direkt opmaachen',
            'U Frënn weiderleeden',
            'Net eroflueden ouni Iwwerpréiwung',
            'Fir méi spéit späicheren'
          ]
        },
        correctAnswer: 2,
        explanation: {
          en: 'Unknown attachments may contain malware and should only be downloaded from trusted sources.',
          de: 'Unbekannte Anhänge können Malware enthalten und sollten nur von vertrauenswürdigen Quellen heruntergeladen werden.',
          fr: 'Les pièces jointes inconnues peuvent contenir des malwares et ne doivent être téléchargées que de sources fiables.',
          lb: 'Onbekannten Unhäng kënne Malware enthalen a sollten nëmme vu vertrauenswürdege Quelle erofgeluede ginn.'
        },
        points: 10
      }
    ]
  },
  // Rest of the levels remain unchanged...
  {
    id: 2,
    title: {
      en: 'Email and Web Security',
      de: 'E-Mail- und Websicherheit',
      fr: 'Sécurité des e-mails et du Web',
      lb: 'E-Mail a Web Sécherheet'
    },
    description: {
      en: 'Learn how to identify and protect against online threats.',
      de: 'Lernen Sie, Online-Bedrohungen zu erkennen und sich davor zu schützen.',
      fr: 'Apprenez à identifier et à vous protéger contre les menaces en ligne.',
      lb: 'Léiert Online-Bedroungen z\'erkennen a sech dergéint ze schützen.'
    },
    badge: '📧',
    questions: []
  },
  {
    id: 3,
    title: {
      en: 'Advanced Security Concepts',
      de: 'Fortgeschrittene Sicherheitskonzepte',
      fr: 'Concepts de sécurité avancés',
      lb: 'Fortgeschratte Sécherheetskonzepter'
    },
    description: {
      en: 'Master complex security scenarios and expert-level challenges.',
      de: 'Meistern Sie komplexe Sicherheitsszenarien und Experten-Herausforderungen.',
      fr: 'Maîtrisez des scénarios de sécurité complexes et des défis de niveau expert.',
      lb: 'Meeschtert komplex Sécherheetsszenarie an Experten-Erausfuerderungen.'
    },
    badge: '🔒',
    questions: []
  }
];