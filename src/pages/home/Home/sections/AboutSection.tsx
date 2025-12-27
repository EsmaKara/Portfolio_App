import { GraduationCapIcon, CodeIcon, AwardIcon, LanguagesIcon } from 'lucide-react';
import type { MainPageUser } from '@apptypes/entities/mainPageUser';
import Accordion from '@components/custom/Accordion';

interface AboutSectionProps {
  user: MainPageUser;
}

const AboutSection = ({ user }: AboutSectionProps) => {
  // Accordion için veriler
  const accordionItems = [
    {
      id: 'education',
      title: 'Eğitim',
      icon: <GraduationCapIcon className="h-6 w-6 text-blue-600" />,
      badge: `${user.educations.length} Eğitim`,
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      content: (
        <div className="space-y-4">
          {user.educations.map((education, index) => (
            <div key={index} className="border-l-4 border-blue-200 py-2 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">{education.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{education.description}</p>
              {education.date && (
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{education.date}</p>
              )}
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'experience',
      title: 'Deneyim',
      icon: <CodeIcon className="h-6 w-6 text-green-600" />,
      badge: `${user.experiences.length} Deneyim`,
      badgeColor: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      content: (
        <div className="space-y-4">
          {user.experiences.map((experience, index) => (
            <div key={index} className="border-l-4 border-green-200 py-2 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">{experience.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{experience.description}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'languages',
      title: 'Diller',
      icon: <LanguagesIcon className="h-6 w-6 text-purple-600" />,
      badge: `${user.languages.length} Dil`,
      badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      content: (
        <div className="grid gap-3 md:grid-cols-2">
          {user.languages.map((language, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                <LanguagesIcon className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {language.split(' (')[0]}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {language.match(/\(([^)]+)\)/)?.[1] || 'Ana Dil'}
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'certifications',
      title: 'Sertifikalar',
      icon: <AwardIcon className="h-6 w-6 text-orange-600" />,
      badge: `${user.certifications.length} Sertifika`,
      badgeColor: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      content: (
        <div className="grid gap-3 md:grid-cols-2">
          {user.certifications.map((certification, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
                <AwardIcon className="h-4 w-4 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{certification}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section className="bg-white py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Hakkımda
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            Teknolojiye olan tutkum ve sürekli öğrenme isteğimle, yazılım geliştirme alanında
            kendimi geliştiriyorum. Detayları görmek için aşağıdaki bölümlere tıklayın.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            <Accordion items={accordionItems.slice(0, 2)} />
            <Accordion items={accordionItems.slice(2, 4)} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
