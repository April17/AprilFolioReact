import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    infosys,
    cognizant,
    aprilfolio,
    dungeon_offline,
    pokeball,
    metaversus,
    threejs,
    amplify,
    cloudwatch,
    s3,
    lambda,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const overview = {
    text: "I'm a skilled React developer with experience in JavaScript and expertise in frameworks like React, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!"
  }

  const projectOverView = {
    text: "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."
  }
  
  const services = [
    {
      title: "React Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "amplify",
      icon: amplify,
    },
    {
      name: "cloudwatch",
      icon: cloudwatch,
    },
    {
      name: "s3",
      icon: s3,
    },
    {
      name: "lambda",
      icon: lambda,
    },
  ];
  
  const experiences = [
    {
      title: "Sr. Software Developer ",
      company_name: "Cognizant",
      icon: cognizant,
      iconBg: "#E6DEDD",
      date: "August 2021 - June 2023",
      points: [
        "Work as a Front-End Developer using React.js, Redux.js and many other technologies to create user-friendly web applications for clients.",
        "Built reusable cross-platform components and front-end libraries for future use.",
        "Optimized components for maximum performance across a vast array of web-capable devices and browsers.",
        "Used React.js, React Hooks and Redux.js to build the UI and do state management.",
        "Used React.js to implement rich functions in various pages: form validation, grid list, search, sort, multi-selection, tags-input, advanced/custom directives.",
        "Used Redux.js to manage global state used by multiple components in different levels of the Application.",
        "Involved in writing application-level code to interact with REST APIs using AJAX, JSON.",
        "Used Higher-Order Component for reusing component logic.",
        "Create web pages and components using Figma and user stories.",
        "Work with a group in an agile environment to enable fast past development cycles which allows finishing projects on time and meeting specification.",
        "Recreating an existing app from using AWS Lambda to Spring Boot allows a more robust back-end.",
        "Create a React Native App using Expo, React Navigation and material UI for Android in order to reach more customers.",
        "Worked closely with UX teams to turn mockups into layout/styles and fixed stylesheet conflict bugs.",
        "Maintained the application, implemented add-on features, updates, and case documents."
      ],
    },
    {
      title: "Full-Stack Developer ",
      company_name: "Infosys",
      icon: infosys,
      iconBg: "#383E56",
      date: "November 2019 - August 2021",
      points: [
        "Work as Dell Boomi Production Support with client Blue Shield of California using Dell Boomi to support 200+ processes and solving data errors, login errors etc to improve stability and shorten down time on business side.",
        "Analyzed process deployments using Dell Boomi to keep processes not meeting requirements out of production which will prevent duplication errors, run time errors etc that will impact business operation.",
        "Managed and revamped support documentations using excel and VBA to create 2 automation tools which can check 100+ fields in one click and give analyzed results saving around $12,480 yearly from manual work.",
        "Managed and revamped system detail documentations using excel and VBA to create a search to find all connectors using same username which helps support team update all connectors to prevent account lock out in all environments.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Metaversus",
      description:
        "A Next.js front page app that explain what Metaversus is about, how to start it and what's new about it.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "framer motion",
          color: "green-text-gradient",
        },
        {
          name: "tailwind_css",
          color: "pink-text-gradient",
        },
      ],
      image: metaversus,
      source_code_link: "https://github.com/April17/metaversus",
      live_demo:"https://main.dkigblllmeue4.amplifyapp.com/",
      video_demo:""
    },
    {
      name: "Pokéball",
      description:
        "A full-stack e-commerce app that sells Pokémon Trade Cards with PayPal integration.",
      demo_account:"demo@example.com",
      demo_password:"Abc12345678!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "aws_lambda",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: pokeball,
      source_code_link: "https://github.com/April17/pokemon_card_frontend_v2",
      live_demo:"https://master.d3keg1p12xavsq.amplifyapp.com/",
      video_demo:""
    },
    {
      name: "AprilFolio",
      description:
        "A full Three.js based JavaScript Portfolio prototype used to test new ideas in 3D applications with some custome texture and animations.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: aprilfolio,
      source_code_link: "https://github.com/April17/AprilFolio",
      live_demo:"http://threejstestproject-dev.s3-website.us-east-2.amazonaws.com/",
      video_demo:""
    },
    {
      name: "Dungeon Offline",
      description:
        "A full-stack application that runs on React.js and Rails API. This is a game that store player's game progress and let them get back to where they are in the next login.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSql",
          color: "pink-text-gradient",
        },
      ],
      image: dungeon_offline,
      source_code_link: "https://github.com/April17/Mod5_project",
      live_demo:"",
      video_demo:"https://www.youtube.com/watch?v=nCkT6MDTnR0"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, overview, projectOverView };
