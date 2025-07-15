'use client';

import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import SectionHeader from '@/src/components/ui/SectionHeader';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <SectionHeader
        id="aboutme"
        title="About Me"
        content={`Hey, I'm Karim — a DevOps Engineer with a strong foundation in infrastructure automation and a passion for continuous learning.`}
      />

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white">
        From PowerShell to Kubernetes<br />
        Before starting my current role, I spent over three years immersed in automation and cloud infrastructure. During my IT specialist apprenticeship (2021–2024) at a healthcare company with over 1000 employees, I worked across various IT departments and eventually specialized in DevOps.<br />
        After completing my training, I continued there as a Junior DevOps Engineer, focusing on:
      </p>
      <ul className="list-disc ml-6 text-sm sm:text-base md:text-lg text-foreground dark:text-white">
        <li>CI/CD with Azure DevOps</li>
        <li>Infrastructure as Code with Terraform</li>
        <li>Configuration Management using Ansible</li>
        <li>Cloud operations in Microsoft Azure</li>
      </ul>
      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        This phase gave me a solid base in automating complex systems and deploying scalable infrastructure.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        <strong>A New Chapter</strong><br />
        In January 2025, I joined a new organization — and with it came a completely new tech stack. I transitioned from a Microsoft-heavy environment (Windows, PowerShell, Azure) to a setup driven by macOS, Linux, Docker, Kubernetes, AWS, and OTC Cloud.<br />
        This shift was intense. I had to relearn my workflow, dive into new tools, and get comfortable fast. My focus areas quickly became:
      </p>
      <ul className="list-disc ml-6 text-sm sm:text-base md:text-lg text-foreground dark:text-white">
        <li>Docker &amp; Kubernetes for container orchestration</li>
        <li>Linux for scripting and day-to-day operations</li>
        <li>AWS &amp; OTC for cloud infrastructure</li>
      </ul>
      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        A personal highlight: I took the lead on a full Atlassian Suite migration, introducing Jira and Confluence to the team and aligning workflows around them. At the same time, I optimized and stabilized legacy pipelines in Bamboo, integrating AWS and Cloudflare into our deployment flow.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        <strong>Building Infrastructure</strong><br />
        I also worked extensively with Terraform, building five custom modules for the OTC Cloud — including networking and IAM — to ensure consistent and scalable environments.<br />
        Meanwhile, in my Homelab, I set up a full K3s cluster on a Proxmox host. I used Ansible for provisioning and integrated ArgoCD for continuous delivery. That setup became a sandbox for experimentation and has helped me sharpen my skills in CI/CD, GitOps, and Kubernetes-based workflows.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        We are currently exploring a new self-hosted CI/CD platform that combines code hosting and pipeline management — I’m excited to help shape this next phase.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        <strong>Currently</strong><br />
        I’m working as a DevOps Engineer with a strong focus on:
      </p>
      <ul className="list-disc ml-6 text-sm sm:text-base md:text-lg text-foreground dark:text-white">
        <li>Docker</li>
        <li>Kubernetes</li>
        <li>Linux</li>
        <li>AWS</li>
      </ul>
      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        Every week brings new challenges, and I’m constantly growing — both technically and personally.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        <strong>On the blog</strong><br />
        I regularly share insights from my Homelab, cloud experiments, and automation work. If you’re into real-world DevOps, infrastructure as code, or want to see what works (and what doesn’t) in automation — stay tuned.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        <strong>A bit more personal</strong><br />
        raised in the 90s — curious by nature and driven by systems that scale.
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
