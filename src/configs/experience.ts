'use client';
import { siteConfig } from '@/src/configs/config';

export interface ExperienceEntry {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive?: boolean;
  companyUrl?: string;
  linkedin?: string;
  xing?: string;
  blog?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: 'DevOps Engineer | Jan. 2025 - Present',
    description:
      'Working as a DevOps Engineer with focus on Docker, Kubernetes, Linux, AWS and OTC Cloud. Leading a migration project for the Atlassian Suite and optimizing CI/CD pipelines integrated with AWS and Cloudflare.',
    startDate: 'Jan 2025',
    endDate: 'Present',
    isActive: true,
    companyUrl: siteConfig.social.linkedin,
    linkedin: siteConfig.social.linkedin,
    xing: siteConfig.social.xing.username,
    blog: 'https://salad1n.dev'
  },
  {
    title: 'Homelab & Personal Projects | Always Evolving',
    description:
      'Running a Homelab with Proxmox, K3s Kubernetes, ArgoCD, GitLab CI/CD, Terraform, Ansible and self-hosted infrastructure. Continuously experimenting with new tools and technologies.',
    startDate: 'Ongoing',
    endDate: 'Present',
    isActive: true,
    companyUrl: siteConfig.baseUrl + '/blog',
    linkedin: siteConfig.social.linkedin,
    xing: siteConfig.social.xing.username,
    blog: 'https://salad1n.dev'
  },
  {
    title: 'Junior DevOps Engineer | Jan. 2024 - Dec. 2024',
    description:
      'Worked as a Junior DevOps Engineer in the same organization where I completed my apprenticeship. Focused on CI/CD with Azure DevOps, Azure Cloud, Terraform, and Ansible.',
    startDate: 'Jan 2024',
    endDate: 'Dec 2024',
    companyUrl: siteConfig.social.linkedin,
    linkedin: siteConfig.social.linkedin,
    xing: siteConfig.social.xing.username,
    blog: 'https://salad1n.dev'
  },
  {
    title: 'IT Specialist Apprenticeship (System Integration) | Aug. 2021 - Jan. 2024',
    description:
      'Completed an IT specialist apprenticeship in a healthcare company with 1000+ employees. Rotated through several IT departments and specialized in DevOps during the final year.',
    startDate: 'Aug 2021',
    endDate: 'Jan 2024',
    companyUrl: siteConfig.social.linkedin,
    linkedin: siteConfig.social.linkedin,
    xing: siteConfig.social.xing.username,
    blog: 'https://salad1n.dev'
  },
  {
    title: 'Office Management Apprenticeship | 2016 - 2019',
    description:
      'Apprenticeship in office management at a globally known NGO. Gained organizational and administrative experience before transitioning into IT.',
    startDate: '2016',
    endDate: '2019',
    companyUrl: siteConfig.social.linkedin,
    linkedin: siteConfig.social.linkedin,
    xing: siteConfig.social.xing.username,
    blog: 'https://salad1n.dev'
  },
];
