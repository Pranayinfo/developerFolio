// Change this file to get your Personal Portfolio

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pranay Paunikar",
  title: "Hi all, I'm Pranay",
  subTitle: emoji(
    "A passionate DevOps Engineer 🚀 with experience in automating cloud infrastructure using AWS, GCP, Kubernetes, Docker, and other DevOps tools."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Y8o7uhyTmr3pLQLFy41DIDud9YlAZVSl/view?usp=drive_link", // Updated with the correct resume link
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Pranayinfo",
  linkedin: "https://www.linkedin.com/in/pranay-paunikar",
  gmail: "mailto:pranaypaunikar48@gmail.com", // Updated email link
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "EXPLORING EVERY DEVOPS AND CLOUD STACK",
  skills: [
    emoji("⚡ Automating CI/CD pipelines for efficient deployment using Jenkins, Cloud Build, and GCP."),
    emoji("⚡ Building scalable cloud infrastructure with Kubernetes, Docker, and Helm."),
    emoji("⚡ Ensuring high availability and security of cloud services on AWS and GCP."),
    emoji("⚡ Managing databases and in-memory storage systems like PostgreSQL and Redis."),
    emoji("⚡ Monitoring infrastructure using Prometheus and Grafana for real-time insights.")
  ],
  softwareSkills: [
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "GCP", fontAwesomeClassname: "fas fa-cloud" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fab fa-kubernetes" }, // Correct Font Awesome class
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Jenkins", fontAwesomeClassname: "fas fa-tools" },
    { skillName: "Terraform", fontAwesomeClassname: "fas fa-code" }, // Alternative for Terraform
    { skillName: "Helm", fontAwesomeClassname: "fas fa-ship" }, // Added Helm
    { skillName: "Ansible", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "Prometheus", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "Grafana", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Other sections (education, work experience, projects, etc.) remain unchanged

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Intellipaat via IIT Roorkee",
      subHeader: "Post Graduation, Cloud Computing",
      duration: "June 2023 – Present",
      desc: "Focused on cloud infrastructure, DevOps, and scalable architectures."
    },
    {
      schoolName: "Yeshwantrao Chavan College of Engineering",
      subHeader: "Bachelor of Engineering, Mechanical Engineering",
      duration: "June 2015 - May 2019",
      desc: "Gained a strong foundation in engineering principles and problem-solving skills."
    }
  ]
};

// Tech Stack Section
const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    { Stack: "Cloud Platforms (AWS, GCP)", progressPercentage: "90%" },
    { Stack: "Containerization & Orchestration (Docker, Kubernetes, Helm)", progressPercentage: "85%" },
    { Stack: "CI/CD Automation (Jenkins, Cloud Build, Terraform)", progressPercentage: "80%" }
  ],
  displayCodersrank: false // Set true to display codersrank badges section, defaults to false
};

// Work Experience Section (with placeholder logos)
const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps Engineer",
      company: "ExcelR Pvt. Ltd.",
      companyLogo: "https://via.placeholder.com/150", // Placeholder for ExcelR logo
      date: "Feb 2024 – Present",
      desc: "Strategized and implemented end-to-end deployment solutions on GCP, ensuring high availability and optimized performance under heavy traffic while enhancing security measures.",
      descBullets: [
        "Implemented CI/CD pipelines using Cloud Build with Secret Manager for secure environment handling.",
        "Automated Docker image builds to GCR and deployed to GKE private clusters via Helm charts.",
        "Set up CI/CD for Cloud Run using Cloud Build, automating serverless deployments.",
        "Deployed applications using GKE and Helm Charts, configured NGINX Ingress, load balancers, and SSL certificates.",
        "Managed CloudSQL PostgreSQL and Redis instances for creation, data migration, and maintenance.",
        "Created a Jump server (bastion host) for secure SSH access to GKE clusters with IAM roles and RBAC."
      ]
    },
    {
      role: "DevOps Engineer",
      company: "Molecular Connections Pvt. Ltd.",
      companyLogo: "https://via.placeholder.com/150", // Placeholder for Molecular Connections logo
      date: "April 2022 – June 2023",
      desc: "Managed CI/CD workflows, deployed applications using Docker and Kubernetes, and optimized AWS cloud infrastructure.",
      descBullets: [
        "Administered GitLab, Jenkins, and Docker for application deployments.",
        "Orchestrated services using Kubernetes on AWS EKS.",
        "Deployed and monitored server pools, handled AWS IAM, EC2, RDS."
      ]
    },
    {
      role: "Analyst",
      company: "HCL Technologies",
      companyLogo: "https://via.placeholder.com/150", // Placeholder for HCL logo
      date: "Dec 2020 – Sep 2021",
      desc: "Provided technical support and managed platform transitions for P&G employees."
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Big Projects Section
const bigProjects = {
  title: "Projects",
  subtitle: "SOME MAJOR PROJECTS I HAVE CONTRIBUTED TO",
  projects: [
    {
      projectName: "EKS/GKE Deployment with Helm and Ingress",
      projectDesc: "Deployed a 3-tier application using Helm on GKE/EKS with secure, scalable infrastructure.",
      footerLink: [
        { name: "View Project", url: "https://github.com/Pranayinfo/EKS-Helm-deployment" }
      ]
    },
    {
      projectName: "Jenkins CI/CD Deployment on AWS EKS",
      projectDesc: "Automated EKS setup using Terraform with Jenkins pipelines for CI/CD.",
      footerLink: [
        { name: "View Project", url: "https://github.com/Pranayinfo/terraform-eks-jenkins-deploy" }
      ]
    },
    {
      projectName: "Serverless GCP Cloud Run CI/CD",
      projectDesc: "Developed and deployed serverless applications using GCP Cloud Run and Cloud Build.",
      footerLink: [
        { name: "View Project", url: "https://github.com/Pranayinfo/cloud-run-cicd" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievements Section
const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Certifications and awards showcasing my expertise.",
  achievementsCards: [
    {
      title: "AWS Solution Architect Certification",
      subtitle: "Certified AWS Solution Architect - Associate Level.",
      footerLink: [
        { name: "View Certificate", url: "https://www.your-cert-link.com" }
      ]
    },
    {
      title: "DevOps Certification",
      subtitle: "Certified DevOps Engineer from Intellipaat.",
      footerLink: [
        { name: "View Certificate", url: "https://www.your-cert-link.com" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open.",
  number: "+91-9049490697",
  email_address: "pranaypaunikar48@gmail.com"
};

// Blog Section
const blogSection = {
  title: "Blogs",
  subtitle: "I love to write and share my knowledge on various tech topics.",
  blogs: [
    {
      url: "https://medium.com/@pranaypaunikar",
      title: "Example Blog Title",
      description: "A short description of your blog post."
    }
  ],
  display: true // Set false to hide this section
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume to learn more about my experience.",
  resumeLink: "https://drive.google.com/file/d/1Y8o7uhyTmr3pLQLFy41DIDud9YlAZVSl/view?usp=drive_link", // Updated resume link
  display: true // Set false to hide this section
};

// isHireable
const isHireable = true; // Set true if you are open for job opportunities

// Twitter Section
const twitterDetails = {
  userName: "Pranayinfo",
  display: true // Set true to display this section, defaults to false
};

// Export all sections
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  blogSection,
  resumeSection,
  isHireable,
  twitterDetails
};
