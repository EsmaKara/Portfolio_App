import { mockUserData } from './mockdata';
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  AchievementsSection,
  InterestsSection,
  PublicationsSection,
  ContactSection,
} from './sections';

const HomeScreen = () => {
  const user = mockUserData;

  // Skills zaten kategorilere ayrılmış
  const skills = user.skills;

  // Projeleri mock data'dan al

  return (
    <div className="min-h-screen">
      <HeroSection user={user} />
      <AboutSection user={user} />
      <SkillsSection skills={skills} />
      <ProjectsSection
        projects={user.projects}
        githubUrl={user.communicationChannels.find((channel) => channel.type === 'github')?.value}
      />
      <AchievementsSection achievements={user.achievements} />
      <PublicationsSection publications={user.publications} />
      <InterestsSection interests={user.interests} hobbies={user.hobbies} />
      <ContactSection user={user} />
    </div>
  );
};

export default HomeScreen;
