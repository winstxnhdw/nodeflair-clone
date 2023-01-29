import type { Job } from '@/types'
import { JobCardsContainer } from '@/components/job/card/JobCardContainer'
import { JobInformation } from '@/components/job/JobInformation'
import { useState } from 'react'

export const JobsPanel = () => {
  const [selectedJob, setSelectedJob] = useState<number>(0)

  return (
    <div
      style={{
        width: '1110px',
        height: '2384px',
        display: 'flex',
        alignItems: 'flex-start'
      }}>
      <JobCardsContainer jobs={jobs} selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
      <JobInformation {...(jobs[selectedJob] as Job)} />
    </div>
  )
}

const jobs: Job[] = [
  {
    id: 0,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    companyPage:
      'https://nodeflair.com/companies/hytech?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs',
    rating: undefined,
    role: 'Information Security Auditor',
    rolePage:
      'https://nodeflair.com/jobs/hytech-information-security-auditor-125990?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs',
    lastUpdated: 'about 15 hours ago',
    location: 'Malaysia',
    currencyPrefix: 'RM',
    minSalary: '10,000',
    maxSalary: '20,000',
    category: 'Cybersec Eng',
    techStacks: [
      'play',
      'Strategy',
      'Unity',
      'Unreal',
      '.NET',
      'REST API',
      'RPC',
      'Flask',
      'Cloud Foundry',
      'Spring',
      'MariaDB'
    ],
    seniority: 'Mid',
    jobType: '-',
    yearsOfExperience: '3',
    jobDescription:
      '<strong>About Hytech</strong><br><br>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.<br><br>We provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 1,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Nodeflair',
    companyPage:
      'https://nodeflair.com/companies/hytech?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs',
    rating: 5,
    role: 'Information Security Auditor',
    rolePage:
      'https://nodeflair.com/jobs/hytech-information-security-auditor-125990?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs',
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
      '<strong>About Hytech</strong><br><br>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.<br><br>We provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 2,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    companyPage:
      'https://nodeflair.com/companies/hytech?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs',
    rating: undefined,
    role: 'Information Security Auditor',
    rolePage:
      'https://nodeflair.com/jobs/hytech-information-security-auditor-125990?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs',
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
      '<strong>About Hytech</strong><br><br>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.<br><br>We provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 3,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    companyPage:
      'https://nodeflair.com/companies/hytech?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs',
    rating: undefined,
    role: 'Information Security Auditor',
    rolePage:
      'https://nodeflair.com/jobs/hytech-information-security-auditor-125990?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs',
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
      '<strong>About Hytech</strong><br><br>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.<br><br>We provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 4,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    companyPage:
      'https://nodeflair.com/companies/hytech?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs',
    rating: undefined,
    role: 'Information Security Auditor',
    rolePage:
      'https://nodeflair.com/jobs/hytech-information-security-auditor-125990?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs',
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
      '<strong>About Hytech</strong><br><br>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.<br><br>We provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 5,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    companyPage:
      'https://nodeflair.com/companies/hytech?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs',
    rating: 5,
    role: 'Information Security Auditor',
    rolePage:
      'https://nodeflair.com/jobs/hytech-information-security-auditor-125990?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs',
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
      '<strong>About Hytech</strong><br><br>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.<br><br>We provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 6,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    companyPage:
      'https://nodeflair.com/companies/hytech?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs',
    rating: undefined,
    role: 'Information Security Auditor',
    rolePage:
      'https://nodeflair.com/jobs/hytech-information-security-auditor-125990?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs',
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
      '<strong>About Hytech</strong><br><br>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.<br><br>We provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 7,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    companyPage:
      'https://nodeflair.com/companies/hytech?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs',
    rating: undefined,
    role: 'Information Security Auditor',
    rolePage:
      'https://nodeflair.com/jobs/hytech-information-security-auditor-125990?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs',
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
      '<strong>About Hytech</strong><br><br>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.<br><br>We provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 8,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    companyPage:
      'https://nodeflair.com/companies/hytech?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs',
    rating: undefined,
    role: 'Information Security Auditor',
    rolePage:
      'https://nodeflair.com/jobs/hytech-information-security-auditor-125990?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs',
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
      '<strong>About Hytech</strong><br><br>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.<br><br>We provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 9,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    companyPage:
      'https://nodeflair.com/companies/hytech?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs',
    rating: 5,
    role: 'Information Security Auditor',
    rolePage:
      'https://nodeflair.com/jobs/hytech-information-security-auditor-125990?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs',
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
      '<strong>About Hytech</strong><br><br>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.<br><br>We provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  },
  {
    id: 10,
    avatar: 'https://nodeflair.com/companies/6349.png',
    company: 'Hytech',
    companyPage:
      'https://nodeflair.com/companies/hytech?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs',
    rating: undefined,
    role: 'Information Security Auditor',
    rolePage:
      'https://nodeflair.com/jobs/hytech-information-security-auditor-125990?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs',
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
      '<strong>About Hytech</strong><br><br>Hytech is a technology-centered, service-oriented global multi-products online trading service provider. We have representative offices or service centers in Australia, Spain, Malaysia, Seychelles, Canada and Cyprus. We provide global traders with more than 200 types trading products in currencies, metals, commodities, indices, shares and cryptocurrencies.<br><br>We provide multilingual and full range of professional services to more than 120 countries and regions in Oceania, Europe, Asia, Africa and North America. In the spirit of sincere and consistent service philosophy, we provide traders with better market quotes and trade execution. We will continue to refine our technology and strive to provide the best trading environment for our clients.'
  }
]
