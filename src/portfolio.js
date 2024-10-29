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
  resumeLink: "https://drive.google.com/uc?export=download&id=1Y8o7uhyTmr3pLQLFy41DIDud9YlAZVSl", // Updated with the correct resume link
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
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-cube" }, // Correct Font Awesome class
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Jenkins", fontAwesomeClassname: "fab fa-jenkins" },
    { skillName: "Terraform", fontAwesomeClassname: "fas fa-code" }, // Alternative for Terraform
    { skillName: "Helm", fontAwesomeClassname: "fas fa-ship" }, // Added Helm
    { skillName: "Ansible", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "Prometheus", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "Grafana", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "Github", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Intellipaat via IIT Roorkee",
      logo: require("./assets/images/Indian_Institute_of_Technology_Bombay_Logo.svg.png"),
      subHeader: "Post Graduation, Cloud Computing",
      duration: "June 2023 – Present",
      desc: "Focused on cloud infrastructure, DevOps, and scalable architectures."
    },
    {
      schoolName: "Yeshwantrao Chavan College of Engineering",
      logo: require("./assets/images/yccelogo.png"),
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

// Work Experience Section with logos and colors
const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps Engineer",
      company: "PlutosOne",
      companylogo: require("./assets/images/LogoPlutos.png"),
      date: "Sep 2024 – Oct 2024",
      color: "#002366", // Dark blue color for PlutosOne
      desc: "Focused on cost optimization and migrating infrastructure to Kubernetes Engine (GKE).",
      descBullets: [
        "Containerized applications and wrote Kubernetes manifests.",
        "Packaged applications using Helm charts for efficient deployments.",
        "Implemented CI/CD pipeline with Cloud Build for streamlined deployment.",
        "Deployed the frontend application on Cloud Run for fast, cost-effective scaling."
      ]
    },
    {
      role: "DevOps Engineer",
      company: "ExcelR Edtech",
      companylogo: require("./assets/images/excelr.logo.jpg"),
      date: "Feb 2024 – Sep 2024 (Freelance - present)",
      color: "#87CEEB", // Sky blue color for ExcelR
      desc: "Managed high availability, scalability, and security for their website deployment on GCP.",
      descBullets: [
        "Deployed applications on GKE and managed environments: UAT, PERF, staging, and production.",
        "Configured NGINX Ingress, load balancers, autoscaling groups, and SSL certificates.",
        "Set up secure access to GKE clusters using a bastion host integrated with IAM and RBAC."
      ]
    },
    {
      role: "DevOps Engineer",
      company: "Molecular Connections Pvt. Ltd.",
      companylogo: require("./assets/images/molecularconnection-logo.png"),
      date: "April 2022 – July 2023",
      color: "#FFA500", // Light orange color for Molecular Connections
      desc: "Worked on server administration and DevOps tools across projects like MClexicon and MC Research.",
      descBullets: [
        "Administered Linux servers, GitLab, Jenkins, Docker, and Kubernetes.",
        "Managed tickets and access controls and resolved daily technical issues.",
        "Worked on critical projects: MClexicon and MC Research."
      ]
    },
    {
      role: "Analyst",
      company: "HCL Technologies",
      companylogo: require("./assets/images/HCL-Tech.jpeg"),
      date: "Dec 2020 – Sep 2021",
      color: "#002366", // Dark blue color for HCL
      desc: "Provided technical support and managed platform transitions for P&G employees."
    }
  ]
};

// Big Projects Section with company projects
const bigProjects = {
  title: "Projects",
  subtitle: "SOME MAJOR PROJECTS I HAVE CONTRIBUTED TO",
  projects: [
    {
      projectName: emoji("🚀 CI/CD Pipeline with Cloud Build and GKE"),
      projectDesc: "Implemented CI/CD pipelines using Cloud Build, with Secret Manager for secure environment handling. Automated Docker image builds to GCR and deployed to GKE private clusters using Helm charts.",
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/Pranayinfo/cloudbuild-GCE-docker-compose-deployment" }
      ]
    },
    {
      projectName: emoji("🔐 EKS/GKE Deployment with Helm, Ingress, and ALB"),
      projectDesc: "Deployment of a 3-tier application on AWS EKS and GKE using Helm charts, Ingress, and ALB, ensuring secure, scalable infrastructure with AWS/GCP services.",
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/Pranayinfo/EKS-Helm-deployment/blob/main/README.md" }
      ]
    },
    {
      projectName: emoji("🐳 Deployed Microservices on GCP with Docker-compose"),
      projectDesc: "Microservices application deployment on GCP using Docker-compose, with nginx proxy, PostgreSQL, Redis, and SSL Certbot for secure web services.",
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/Pranayinfo/Docker-deployment/" }
      ]
    },
    {
      projectName: emoji("⚙️ Jenkins CI/CD Deployment on AWS EKS using Terraform"),
      projectDesc: "Automated setup of AWS EKS cluster and VPC using Terraform, with a Jenkins pipeline for CI/CD to streamline deployment.",
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/Pranayinfo/terraform-eks-jenkins-deploy/blob/main/README.md" }
      ]
    },
    {
      projectName: emoji("☁️ Frontend Application Deployment on GCP Cloud Run"),
      projectDesc: "Deployed a frontend application on GCP Cloud Run using serverless architecture with CI/CD via Cloud Build and Secret Manager integration.",
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/Pranayinfo/cloudbuild-cloudrun-deployment" }
      ]
    },
    {
      projectName: emoji("📂 Hesk Help Desk Deployment with Docker-compose"),
      projectDesc: "Deployment of the Hesk Help Desk application using Docker-compose for managing documentation, collaboration, and ticketing.",
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/Pranayinfo/Hesk-help-desk" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

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
  resumeLink: "https://drive.google.com/uc?export=download&id=1Y8o7uhyTmr3pLQLFy41DIDud9YlAZVSl", // Updated resume link
  display: true // Set false to hide this section
};

// Twitter Section
const twitterDetails = {
  userName: "PranayP49",
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer


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
  bigProjects,
  openSource,
  achievementSection,
  contactInfo,
  blogSection,
  resumeSection,
  isHireable,
  twitterDetails
};
