import { Button } from '@components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/card';
import { Badge } from '@components/ui/badge';
import { GithubIcon, CodeIcon } from 'lucide-react';
import type { MainPageUserProjects } from '@apptypes/entities/mainPageUser';
import { getRandomColor } from '@utility/randomColor';
interface ProjectsSectionProps {
  projects: MainPageUserProjects[];
  githubUrl: string | undefined;
}

const ProjectsSection = ({ projects, githubUrl }: ProjectsSectionProps) => {
  // Rastgele renk paleti

  return (
    <section className="bg-white py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Projelerim
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            GitHub'da bulunan ve canlı olarak test edebileceğiniz projelerim.
          </p>
        </div>

        <div className={`flex flex-row flex-wrap justify-center gap-8`}>
          {projects.map((project) => (
            <Card
              key={project.title}
              className="w-full max-w-md overflow-hidden transition-shadow hover:shadow-lg">
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                <CodeIcon className="h-16 w-16 text-blue-600" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className={`border text-xs ${getRandomColor(tech)}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="mr-2 h-4 w-4" />
                      GitHub'da kodları gör
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mr-2 h-5 w-5" />
              Tüm Projeleri GitHub'da Gör
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
