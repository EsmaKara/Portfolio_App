import { Button } from '@components/ui/button';
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon, CodeIcon, UserIcon } from 'lucide-react';
import type { MainPageUser } from '@apptypes/entities/mainPageUser';

interface HeroSectionProps {
  user: MainPageUser;
}

const HeroSection = ({ user }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"></div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
                Merhaba, Ben{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {user.name}
                </span>
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400">{user.description}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700"
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
              <Button variant="outline" size="lg">
                <MailIcon className="mr-2 h-5 w-5" />
                İletişime Geç
              </Button>
            </div>

            <div className="flex gap-4">
              <a
                href={`${user.communicationChannels.find((channel) => channel.type === 'github')?.value}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-3 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                <GithubIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href={`${user.communicationChannels.find((channel) => channel.type === 'linkedin')?.value}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-3 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                <LinkedinIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href={`mailto:${user.communicationChannels.find((channel) => channel.type === 'email')?.value}`}
                className="rounded-full bg-gray-100 p-3 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                <MailIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="h-80 w-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
                  <UserIcon className="h-32 w-32 text-gray-400" />
                  {/* <img
                    src={user.image}
                    alt="Kullanıcı Profil"
                    className="h-full w-full rounded-full border-4 border-gray-200 object-cover dark:border-gray-700"
                  /> */}
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 rounded-full bg-white p-4 shadow-lg dark:bg-gray-800">
                <CodeIcon className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
