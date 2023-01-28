import type { Job } from '@/types/job'
import { JobCardsContainer } from '@/components/JobCardContainer'

export const JobsPanel = () => (
  <div
    style={{
      width: '1110px',
      height: '2384px',
      display: 'flex',
      alignItems: 'flex-start'
    }}>
    <JobCardsContainer jobs={jobs} />
    <div className="jobInformationContainer"> </div>
  </div>
)

const jobs: Job[] = [
  {
    id: 0,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    rating: undefined,
    role: 'Information Security Auditor',
    lastUpdated: 'about 15 hours ago',
    location: 'Malaysia',
    currencyPrefix: 'RM',
    minSalary: '10,000',
    maxSalary: '20,000',
    category: 'Cybersec Eng',
    techStacks: ['play', 'Strategy'],
    seniority: 'Mid',
    jobType: '-',
    yearsOfExperience: '3',
    jobDescription:
      '<strong>About Hytech</strong>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.\n\nWe provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 0,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    rating: 5,
    role: 'Information Security Auditor',
    lastUpdated: 'about 15 hours ago',
    location: 'Malaysia',
    currencyPrefix: 'RM',
    minSalary: '10,000',
    maxSalary: '20,000',
    category: 'Cybersec Eng',
    techStacks: ['play', 'Strategy'],
    seniority: 'Mid',
    jobType: '-',
    yearsOfExperience: '3',
    jobDescription:
      '<strong>About Hytech</strong>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.\n\nWe provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 0,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    rating: undefined,
    role: 'Information Security Auditor',
    lastUpdated: 'about 15 hours ago',
    location: 'Malaysia',
    currencyPrefix: 'RM',
    minSalary: '10,000',
    maxSalary: '20,000',
    category: 'Cybersec Eng',
    techStacks: ['play', 'Strategy'],
    seniority: 'Mid',
    jobType: '-',
    yearsOfExperience: '3',
    jobDescription:
      '<strong>About Hytech</strong>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.\n\nWe provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 0,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    rating: undefined,
    role: 'Information Security Auditor',
    lastUpdated: 'about 15 hours ago',
    location: 'Malaysia',
    currencyPrefix: 'RM',
    minSalary: '10,000',
    maxSalary: '20,000',
    category: 'Cybersec Eng',
    techStacks: ['play', 'Strategy'],
    seniority: 'Mid',
    jobType: '-',
    yearsOfExperience: '3',
    jobDescription:
      '<strong>About Hytech</strong>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.\n\nWe provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 0,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    rating: undefined,
    role: 'Information Security Auditor',
    lastUpdated: 'about 15 hours ago',
    location: 'Malaysia',
    currencyPrefix: 'RM',
    minSalary: '10,000',
    maxSalary: '20,000',
    category: 'Cybersec Eng',
    techStacks: ['play', 'Strategy'],
    seniority: 'Mid',
    jobType: '-',
    yearsOfExperience: '3',
    jobDescription:
      '<strong>About Hytech</strong>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.\n\nWe provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 0,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    rating: 5,
    role: 'Information Security Auditor',
    lastUpdated: 'about 15 hours ago',
    location: 'Malaysia',
    currencyPrefix: 'RM',
    minSalary: '10,000',
    maxSalary: '20,000',
    category: 'Cybersec Eng',
    techStacks: ['play', 'Strategy'],
    seniority: 'Mid',
    jobType: '-',
    yearsOfExperience: '3',
    jobDescription:
      '<strong>About Hytech</strong>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.\n\nWe provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 0,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    rating: undefined,
    role: 'Information Security Auditor',
    lastUpdated: 'about 15 hours ago',
    location: 'Malaysia',
    currencyPrefix: 'RM',
    minSalary: '10,000',
    maxSalary: '20,000',
    category: 'Cybersec Eng',
    techStacks: ['play', 'Strategy'],
    seniority: 'Mid',
    jobType: '-',
    yearsOfExperience: '3',
    jobDescription:
      '<strong>About Hytech</strong>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.\n\nWe provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 0,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    rating: undefined,
    role: 'Information Security Auditor',
    lastUpdated: 'about 15 hours ago',
    location: 'Malaysia',
    currencyPrefix: 'RM',
    minSalary: '10,000',
    maxSalary: '20,000',
    category: 'Cybersec Eng',
    techStacks: ['play', 'Strategy'],
    seniority: 'Mid',
    jobType: '-',
    yearsOfExperience: '3',
    jobDescription:
      '<strong>About Hytech</strong>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.\n\nWe provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 0,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    rating: undefined,
    role: 'Information Security Auditor',
    lastUpdated: 'about 15 hours ago',
    location: 'Malaysia',
    currencyPrefix: 'RM',
    minSalary: '10,000',
    maxSalary: '20,000',
    category: 'Cybersec Eng',
    techStacks: ['play', 'Strategy'],
    seniority: 'Mid',
    jobType: '-',
    yearsOfExperience: '3',
    jobDescription:
      '<strong>About Hytech</strong>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.\n\nWe provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 0,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    rating: 5,
    role: 'Information Security Auditor',
    lastUpdated: 'about 15 hours ago',
    location: 'Malaysia',
    currencyPrefix: 'RM',
    minSalary: '10,000',
    maxSalary: '20,000',
    category: 'Cybersec Eng',
    techStacks: ['play', 'Strategy'],
    seniority: 'Mid',
    jobType: '-',
    yearsOfExperience: '3',
    jobDescription:
      '<strong>About Hytech</strong>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.\n\nWe provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 0,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    rating: undefined,
    role: 'Information Security Auditor',
    lastUpdated: 'about 15 hours ago',
    location: 'Malaysia',
    currencyPrefix: 'RM',
    minSalary: '10,000',
    maxSalary: '20,000',
    category: 'Cybersec Eng',
    techStacks: ['play', 'Strategy'],
    seniority: 'Mid',
    jobType: '-',
    yearsOfExperience: '3',
    jobDescription:
      '<strong>About Hytech</strong>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.\n\nWe provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 0,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    rating: undefined,
    role: 'Information Security Auditor',
    lastUpdated: 'about 15 hours ago',
    location: 'Malaysia',
    currencyPrefix: 'RM',
    minSalary: '10,000',
    maxSalary: '20,000',
    category: 'Cybersec Eng',
    techStacks: ['play', 'Strategy'],
    seniority: 'Mid',
    jobType: '-',
    yearsOfExperience: '3',
    jobDescription:
      '<strong>About Hytech</strong>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.\n\nWe provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 0,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    rating: undefined,
    role: 'Information Security Auditor',
    lastUpdated: 'about 15 hours ago',
    location: 'Malaysia',
    currencyPrefix: 'RM',
    minSalary: '10,000',
    maxSalary: '20,000',
    category: 'Cybersec Eng',
    techStacks: ['play', 'Strategy'],
    seniority: 'Mid',
    jobType: '-',
    yearsOfExperience: '3',
    jobDescription:
      '<strong>About Hytech</strong>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.\n\nWe provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 0,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    rating: 5,
    role: 'Information Security Auditor',
    lastUpdated: 'about 15 hours ago',
    location: 'Malaysia',
    currencyPrefix: 'RM',
    minSalary: '10,000',
    maxSalary: '20,000',
    category: 'Cybersec Eng',
    techStacks: ['play', 'Strategy'],
    seniority: 'Mid',
    jobType: '-',
    yearsOfExperience: '3',
    jobDescription:
      '<strong>About Hytech</strong>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.\n\nWe provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 0,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    rating: undefined,
    role: 'Information Security Auditor',
    lastUpdated: 'about 15 hours ago',
    location: 'Malaysia',
    currencyPrefix: 'RM',
    minSalary: '10,000',
    maxSalary: '20,000',
    category: 'Cybersec Eng',
    techStacks: ['play', 'Strategy'],
    seniority: 'Mid',
    jobType: '-',
    yearsOfExperience: '3',
    jobDescription:
      '<strong>About Hytech</strong>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.\n\nWe provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 0,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    rating: undefined,
    role: 'Information Security Auditor',
    lastUpdated: 'about 15 hours ago',
    location: 'Malaysia',
    currencyPrefix: 'RM',
    minSalary: '10,000',
    maxSalary: '20,000',
    category: 'Cybersec Eng',
    techStacks: ['play', 'Strategy'],
    seniority: 'Mid',
    jobType: '-',
    yearsOfExperience: '3',
    jobDescription:
      '<strong>About Hytech</strong>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.\n\nWe provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  }
]
