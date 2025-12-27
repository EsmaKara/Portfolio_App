export interface MainPageUser {
  id: string;
  name: string;
  email: string;
  image: string;
  description: string;
  resume: MainPageUserResume;
  communicationChannels: MainPageUserCommunicationChannels[];
  skills: MainPageUserSkills[];
  experiences: MainPageUserExperiences[];
  educations: MainPageUserEducations[];
  projects: MainPageUserProjects[];
  achievements: MainPageUserAchievements[];
  certifications: string[];
  publications: MainPageUserPublications[];
  languages: string[];
  interests: string[];
  hobbies: string[];
}

export interface MainPageUserResume {
  url: string;
}
export interface MainPageUserPublications {
  title: string;
  journal: string;
  year: string;
  doi: string;
}

export interface MainPageUserCommunicationChannels {
  type:
    | 'email'
    | 'phone'
    | 'linkedin'
    | 'github'
    | 'twitter'
    | 'instagram'
    | 'facebook'
    | 'youtube'
    | 'website'
    | 'other';
  value: string;
}

export interface MainPageUserSkills {
  icon: React.ReactNode;
  category: string;
  items: string[];
}

export interface MainPageUserExperiences {
  title: string;
  description: string;
}

export interface MainPageUserEducations {
  title: string;
  description: string;
  date: string;
}

export interface MainPageUserProjects {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

export interface MainPageUserAchievements {
  title: string;
  description: string;
}
