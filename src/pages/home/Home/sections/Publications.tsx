import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import { Badge } from '@components/ui/badge';
import { Button } from '@components/ui/button';
import { ExternalLink, Calendar, BookOpen, FileText } from 'lucide-react';
import type { MainPageUserPublications } from '@apptypes/entities/mainPageUser';

interface PublicationsSectionProps {
  publications: MainPageUserPublications[];
}

const PublicationsSection = ({ publications }: PublicationsSectionProps) => {
  if (!publications || publications.length === 0) {
    return null;
  }

  return (
    <section id="publications" className="bg-white py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Akademik Yayınlar
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Akademik araştırmalarım ve bilimsel makalelerim
          </p>
        </div>

        <div className={`flex flex-row flex-wrap justify-center gap-8`}>
          {publications.map((publication, index) => (
            <Card
              key={index}
              className="w-full max-w-md overflow-hidden transition-shadow hover:shadow-lg">
              <div className="flex h-32 items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900">
                <FileText className="h-12 w-12 text-blue-600" />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge variant="secondary" className="mb-2 w-fit">
                    Q2 Journal
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{publication.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <BookOpen className="h-4 w-4" />
                    <span className="font-medium">{publication.journal}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{publication.year}</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-medium">DOI:</span> {publication.doi}
                  </div>
                  <Button size="sm" variant="outline" asChild className="w-full">
                    <a
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Makaleyi Görüntüle
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* {publications.length > 0 && (
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <BookOpen className="mr-2 h-5 w-5" />
                Google Scholar Profilim
              </a>
            </Button>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default PublicationsSection;
