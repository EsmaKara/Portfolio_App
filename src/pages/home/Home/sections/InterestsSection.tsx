import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import { Badge } from '@components/ui/badge';
import { BookOpenIcon, UserIcon } from 'lucide-react';

interface InterestsSectionProps {
  interests: string[];
  hobbies: string[];
}

const InterestsSection = ({ interests, hobbies }: InterestsSectionProps) => {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            İlgi Alanlarım
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Teknoloji dünyasındaki ilgi alanlarım ve hobilerim.
          </p>
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-8">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <BookOpenIcon className="h-5 w-5 text-blue-600" />
                Teknoloji İlgi Alanları
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserIcon className="h-5 w-5 text-green-600" />
                Hobilerim
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {hobby}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
