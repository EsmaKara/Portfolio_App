import { Card, CardContent } from '@components/ui/card';
import { StarIcon } from 'lucide-react';
import type { MainPageUserAchievements } from '@apptypes/entities/mainPageUser';

interface AchievementsSectionProps {
  achievements: MainPageUserAchievements[];
}

const AchievementsSection = ({ achievements }: AchievementsSectionProps) => {
  return (
    <section className="bg-white py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Başarılarım
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Akademik ve profesyonel hayatımdaki önemli başarılarım.
          </p>
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-8">
          {achievements.slice(0, 6).map((achievement, index) => (
            <Card key={index} className="w-full max-w-md transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900">
                    <StarIcon className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {achievement.title}
                    </p>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
