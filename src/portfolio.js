
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Dilan Loyola",
  title: "Hi all, I'm Dilan",
  subTitle: emoji("A dedicated and energetic individual seeking to join an organization as a software engineer to contribute to the delivery of quality software solutions by applying interpersonal skills and knowledge of program design."),
  resumeLink: "https://drive.google.com/file/d/1ZBY5Lt50-4is9PyQ-OqFRPW5kI-jatxm/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/Ldilan6",
  linkedin: "https://www.linkedin.com/in/dilan-loyola-516433128/",
  gmail: "Ldilan6@gmail.com",
  facebook: "https://www.facebook.com/dilan.loyola"

  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "Software Engineer eager to master new programming languages and tech stacks.",
  skills: [
    emoji("⚡ Develop readable and scalable code ready to deploy."),
    emoji("⚡ Can develop fast, responsive, well designed webistes."),
    emoji("⚡ Proficient in many programming languages, relational databases, and agile methodologies.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "University of Florida",
      logo: require("./assets/images/UF.jpeg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "June 2013 - December 2019",
      desc: "Was a cabinet member of the Society for Hispanic Professional Engineers.",
      descBullets: [
        "GPA: 3.2",
        "Deans List 4 semesters: Spring 15’, Spring 17’, Fall 17’, Spring 18’"
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "75%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "SHMS",
      companylogo: require("./assets/images/SHMS.png"),
      date: "March 2020 – August 2020",
      desc: "Consolidated healthcare data utilizing SQL Server Studio and T-SQL components in order to improve the runtime of stored procedures. Tasked with being available for End-Users and clients to resolve any issues that may occur with the UI application of SHMS. Our team used a priority list to prioritize the tickets we needed to work on immediately.",
    },
    {
      role: "Software Engineer Intern",
      company: "GE Digital",
      companylogo: require("./assets/images/GE_Digital.png"),
      date: "June 2017 – August 2017",
      desc: "Developed a tool with the functionality to automate dependency management for Go written applications and services. In doing so helped decrease the time spent manually configuring all dependencies the Predix Data Services team utilizes. As part of the team, I worked in an Agile development environment.",
    },
    {
      role: "Scrum Master",
      company: "UF CEN3031 Software Eng.",
      companylogo: require("./assets/images/UF.jpeg"),
      date: "August 2017 – December 2015",
      desc: "Led a team of seven members through development in Node JS using the MEAN Stack. Facilitated sprint planning, scrums, retrospectives, and demonstrations. Developed a webpage for our client, which provides business advice for entrepreneurs using a decision tree. Deployed the webpage using the Heroku server."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Ldilan6", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "Penalty kick mobile game developed on Unity engine in C#.",
  projects: [
    {
      image: require("./assets/images/Penaltykicks.gif"),
      link: "http://github.com/ldilan6/PenaltyKick"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

// Blogs Section

// Talks Sections



// Podcast Section



const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(239)440-4416",
  email_address: "Ldilan6@gmail.com"
};

//Twitter Section

export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, contactInfo};
