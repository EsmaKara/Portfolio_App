import type { MainPageUser } from '@apptypes/entities/mainPageUser';
import { BrainIcon, CodeIcon, ChartNoAxesCombined, DatabaseIcon, Wrench } from 'lucide-react';
// import profileImage from '../../../assets/profile_pic.jpeg';

const githubName = 'EsmaKara';

export const mockUserData: MainPageUser = {
  id: '1',
  name: 'Esma Kara',
  email: 'esma_._kara@hotmail.com',
  image: '/api/placeholder/400/400', // profileImage
  description: 'Bilişim Sistemleri Mühendisliği bölümü 4. sınıf öğrencisi. ',
  resume: {
    url: '/EsmaKara_GuncelCV.pdf',
  },
  communicationChannels: [
    {
      type: 'email',
      value: 'esma_._kara@hotmail.com',
    },
    {
      type: 'linkedin',
      value: 'https://www.linkedin.com/in/esma-kara/',
    },
    {
      type: 'github',
      value: 'https://www.github.com/EsmaKara/',
    },
    {
      type: 'instagram',
      value: 'https://www.instagram.com/esma_._kara/',
    },
  ],
  publications: [
    {
      title:
        'Improved Filter Designs Using Image Processing Techniques for Color Vision Deficiency (CVD) Types',
      journal: 'Symmetry – MDPI vol. 17, no. 7, (Q2 Journal)',
      year: '2025',
      doi: '10.3390/sym17071046',
    },
  ],
  skills: [
    {
      icon: <CodeIcon className="h-5 w-5 text-blue-600" />,
      category: 'Programming Languages',
      items: ['Python', 'C', 'C++', 'C#', 'JavaScript', 'TypeScript', 'HTML/CSS'],
    },
    {
      icon: <ChartNoAxesCombined className="h-5 w-5 text-green-600" />,
      category: 'Data Analysis',
      items: ['Power BI', 'SQL', 'MS SSMS', 'SSIS'],
    },
    {
      icon: <BrainIcon className="h-5 w-5 text-purple-600" />,
      category: 'AI Development',
      items: ['Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'CNN'],
    },
    {
      icon: <CodeIcon className="h-5 w-5 text-blue-600" />,
      category: 'Frontend',
      items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML,CSS', 'Bootstrap'],
    },
    {
      icon: <CodeIcon className="h-5 w-5 text-blue-600" />,
      category: 'Backend',
      items: ['.NET', '.NET MVC', 'Entity Framework'],
    },
    {
      icon: <DatabaseIcon className="h-5 w-5 text-green-600" />,
      category: 'Database',
      items: ['MSSQL'],
    },
    {
      icon: <Wrench className="h-5 w-5 text-blue-600" />,
      category: 'Tools',
      items: ['Git', 'Github', 'Notion', 'Microsoft Office Programları (Excel, Word vb.)', 'Canva'],
    },

    {
      icon: <Wrench className="h-5 w-5 text-blue-600" />,
      category: 'Other',
      items: ['ERP - Odoo (Open Source)', 'Cloud - AWS'],
    },
  ],
  experiences: [
    {
      title: 'İvme Bilişim',
      description: 'Software Developer Internship',
    },
    {
      title: 'Yurt Konserve',
      description: 'Business Internship',
    },
  ],
  educations: [
    {
      title: 'Bilişim Sistemleri Mühendisliği',
      description: 'Sakarya Üniversitesi',
      date: '2022-2026',
    },
  ],
  projects: [
    {
      title:
        'Real Estate Price Prediction using HepsiEmlak Dataset - Data Cleaning and Machine Learning Project ',
      description:
        'Data cleaning/processing and machine learning experiments on 2,180 Turkish real-estate listings (135 features) collected from HepsiEmlak. Built by a 10-person team in Python (pandas, NumPy, scikit-learn, matplotlib, seaborn) with a strong focus on rigorous data preparation. For research and educational purposes.',
      technologies: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'matplotlib', 'seaborn'],
      githubUrl: `https://github.com/${githubName}/MachineLearningAlgorithms_wOpenSourceData`,
    },
  ],
  achievements: [
    {
      title: 'Bilişim Sistemleri Mühendisliği Bölümü öne çıkan öğrencisi',
      description: 'GPA: 3.78/4.0',
    },
    {
      title: 'TÜBİTAK 2209-A Kapsamında Desteklenen Araştırma Projesi',
      description:
        'Üretici Yapay Zekâ Tarafından Sentezlenen Yüz Görüntülerinin Gerçek Görüntüler ile Ayrımının Transfer Öğrenme Mimarileri ve Web Tabanlı Gerçekleştirilmesi',
    },
    {
      title: 'TEKNOFEST Yarı Final Sunumu / SAU INWO',
      description:
        'Kan Hücreleri Görüntülerinden Kanser Tespiti için Yapay Zeka ve Web Tabanlı Klinik Karar Destek Sistemi',
    },
  ],
  certifications: [
    ' T.C. Sanayi ve Teknoloji Bakanlığı Milli Teknoloji Akademisi Yapay Zeka Uzmanlık Programı Temel Eğitimi / Ocak 2025',
    ' Open Source ERP App: Odoo Student Certificate / 22.12.2025 ',
  ],
  languages: ['Turkish (Native)', 'English (Intermediate)'],
  interests: [
    'Artificial Intelligence',
    'Machine Learning',
    'Deep Learning',
    'Data Analysis',
    'Data Science',
    'Business Intelligence',
  ],
  hobbies: ['Drawing', 'Digital Drawing'],
};
