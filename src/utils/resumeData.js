import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import TwitterIcon from '@mui/icons-material/Twitter';

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
    // {
    //   title: "Shoper",
    //   slug: "shoper",
    //   image: "/img/shoper.png",
    //   projectInfo: {
    //     name: "Shoper",
    //     library: "React",
    //     link: "https://cfd-shoper.vercel.app/",
    //     member: 1,
    //     position: "Front End Developer",
    //   },
    //   projectFunc: {
    //     auth: "Login, logout and create a new account",
    //     cart: "Add to cart, increment, decrement or remove product item",
    //     filter: "Filter product by category,price,rating,...",
    //     checkout: "ádasd",
    //     reponsive: "Responsive is suitable for all screen types",
    //   },
    // },
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
        search: "Search to find product",
        changeInfo: "Change user information, password",
        reponsive: "Responsive is suitable for all screen types",
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


export default resumeData;