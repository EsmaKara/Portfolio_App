import { Button } from '@components/ui/button';
import { Card, CardContent } from '@components/ui/card';
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon, MapPinIcon } from 'lucide-react';
import type { MainPageUser } from '@apptypes/entities/mainPageUser';

interface ContactSectionProps {
  user: MainPageUser;
}

const ContactSection = ({ user }: ContactSectionProps) => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            İletişime Geçelim
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            Yeni fırsatlar, projeler veya sadece merhaba demek için benimle iletişime
            geçebilirsiniz.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <Card>
            <CardContent className="p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MailIcon className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPinIcon className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">İstanbul, Türkiye</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GithubIcon className="h-5 w-5 text-blue-600" />
                    <a
                      href={`${user.communicationChannels.find((channel) => channel.type === 'github')?.value}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline">
                      Github
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="h-5 w-5 text-blue-600" />
                    <a
                      href={`${user.communicationChannels.find((channel) => channel.type === 'linkedin')?.value}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline">
                      Linkedin
                    </a>
                  </div>
                </div>
                <div className="space-y-4">
                  <Button className="w-full" size="lg">
                    <MailIcon className="mr-2 h-5 w-5" />
                    E-posta Gönder
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    size="lg"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = user.resume.url || '/assets/EsmaKara_GuncelCV.pdf';
                      link.download = 'Esma_Kara_CV.pdf';
                      link.target = '_blank';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}>
                    <DownloadIcon className="mr-2 h-5 w-5" />
                    CV İndir
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
