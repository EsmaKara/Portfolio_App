import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import { Badge } from '@components/ui/badge';
import type { MainPageUserSkills } from '@apptypes/entities/mainPageUser';

interface SkillsSectionProps {
  skills: MainPageUserSkills[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Teknik Yetenekler
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Modern teknolojilerle çalışıyorum ve sürekli yeni şeyler öğreniyorum.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {skill.icon}
                  {skill.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <Badge key={item} variant="secondary" className="text-sm">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
