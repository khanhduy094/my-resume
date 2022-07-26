import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import TwitterIcon from "@mui/icons-material/Twitter";

const resumeData = {
  name: "Nguyễn Khánh Duy",
  title: "Front-end Developer",
  birthday: "9/4/1999",
  email: "khanhduy090499@gmail.com",
  address: "quận Bình Thạnh, tp Hồ Chí Minh",
  phone: "0349 997 283",
  socials: {
    GitHub: {
      link: "https://github.com/khanhduy094?tab=repositories",
      text: "myGithub",
      icon: <GitHubIcon />,
    },
    Twitter: {
      link: "https://twitter.com/twitter?lang=vi",
      text: "myTwitter",
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/",
      text: "myLinkedIn",
      icon: <LinkedInIcon />,
    },
  },
  about:
    "My name is Duy, I am interested in IT and everything in its orbit. Especially Web Development! I had 6 months to learning and working as an intern. I am looking for a chance to increase skills in Computer Science. I would offer my full commitment, and be a pleasant and friendly addition to your team. I am therefore currently looking for a job as a front-end developer.",
  experience: [
    {
      title: "Intership - CFD Circle",
      date: "9/2021 - 11/2021",
      description: "Studying and working as an intern at CFD Circle",
    },
  ],
  educations: [
    {
      title: "Su Pham University",
      date: "9/2017 - 9/2020",
      description: "",
    },
    {
      title: "CFD Circle",
      date: "9/2021 - 11/2021",
      description: "",
    },
  ],
  hobbies: [
    {
      title: "Football",
      des: "I have been played football for 5 years.",
      icon: <SportsSoccerIcon />,
    },
    {
      title: "Music",
      des: "One good thing about music, when it hits you, you feel no pain",
      icon: <MusicNoteOutlinedIcon />,
    },
    {
      title: "Read",
      des: "Books are a uniquely portable magic",
      icon: <MenuBookIcon />,
    },
    {
      title: "Game",
      des: "Game is a great way to relax",
      icon: <SportsEsportsOutlinedIcon />,
    },
  ],
  projects: [
    {
      title: "Shopee",
      slug: "shopee",
      image: "/img/react-shopee.png",
      projectInfo: {
        name: "Shopee Project",
        library: "React",
        link: "https://react-shopee.vercel.app/",
        member: 1,
        position: "Front End Developer",
        technology:
          "React-Hooks, React-Hook-Form, React-Router-Dom, Redux, Axios",
      },
      projectFunc: {
        auth: "Login and Register the account",
        cart: "add to cart, get cart, update cart",
        search: "Search product",
        changeInfo: "Change user information, password",
      },
    },
    {
      title: "Chat App",
      slug: "chat-app",
      image: "/img/chat-app.png",
      projectInfo: {
        name: "Shopee Project",
        library: "React",
        link: "https://react-chatapp-neon.vercel.app/",
        member: 1,
        position: "Front End Developer",
        technology:
          "React-Hooks, React-Hook-Form, React-Router-Dom, Redux, Axios",
      },
      projectFunc: {
        
      },
    },
    {
      title: "Resume Online",
      slug: "resume",
      image: "/img/resume-app.png",
      projectInfo: {
        name: "Resume Online",
        library: "React",
        link: "https://my-resume-sand-nu.vercel.app/",
        member: 1,
        position: "Front End Developer",
        technology: "HTML, CSS, React-Hook, Material-ui, React-Router-Dom",
      },
      projectFunc: {
        changeTheme: "Change theme color in website use css variable",
        reponsive: "Responsive is suitable for all screen types",
      },
    },
  ],
};




export const projectsData = [
  {
    title: "Shopee",
    slug: "shopee",
    image1: "/img/shopee-login.png",
    image2: "/img/react-shopee.png",
    link: "https://react-shopee.vercel.app/",
    projectInfo: [
      {
        title: "Project Name",
        content: "Shopee Project",
      },
      {
        title: "Library",
        content: "React",
      },
      {
        title: "Link demo",
        content: "https://react-shopee.vercel.app/",
      },
      {
        title: "Member",
        content: "1",
      },
      {
        title: "Position",
        content: "Front End Developer",
      },
      {
        title: "Technology",
        content: "React-Hooks, React-Hook-Form, React-Router-Dom, Redux, Axios",
      },
    ],

    projectFunc: [
      {
        title: "Auth",
        content: "Login and register",
      },
      {
        title: "Cart",
        content: "Add to cart, get cart, update cart, buy product",
      },
      {
        title: "Filters",
        content: "Filter product buy price, category, star rating, search",
      },
      {
        title: "Update User",
        content: "Change user information, password",
      },
    ],
  },
  {
    title: "Chat App",
    slug: "chat-app",
    image1: "/img/chat-app-login.png",
    image2: "/img/chat-app.png",
    link: "https://react-chatapp-neon.vercel.app/",
    projectInfo: [
      {
        title: "Project Name",
        content: "Chat App",
      },
      {
        title: "Library",
        content: "React",
      },
      {
        title: "Link demo",
        content: "https://react-chatapp-neon.vercel.app/",
      },
      {
        title: "Member",
        content: "1",
      },
      {
        title: "Position",
        content: "Front End Developer",
      },
      {
        title: "Technology",
        content: "React-Hooks, React-Router-Dom, Context, Styled-Component, Firebase",
      },
    ],
    projectFunc: [
      {
        title: "Auth",
        content: "Login with Google, Facebook",
      },
      {
        title: "Chat",
        content: "Chat with real time",
      },
      {
        title: "Invite member",
        content: "Invite member to the chat room",
      },
      {
        title: "Add new room",
        content: "Add the new chat room",
      },
    ],
  },
  {
    title: "Resume Online",
    slug: "resume",
    image1: "/img/resume-app.png",
    image2: "/img/resume-app2.png",
 
    link: "https://my-resume-sand-nu.vercel.app/",
    projectInfo: [
      {
        title: "Project Name",
        content: "Resume Online",
      },
      {
        title: "Library",
        content: "React",
      },
      {
        title: "Link demo",
        content: "https://my-resume-sand-nu.vercel.app/",
      },
      {
        title: "Member",
        content: "1",
      },
      {
        title: "Position",
        content: "Front End Developer",
      },
      {
        title: "Technology",
        content: "HTML, CSS, React-Hook, Material-ui, React-Router-Dom",
      },
    ],
    projectFunc: [
      {
        title: "Change Theme",
        content: "Change theme color in website use css variable",
      },
      {
        title: "Reponsive",
        content: "Responsive is suitable for all screen types",
      },
    ],
  },
];

export default resumeData;
