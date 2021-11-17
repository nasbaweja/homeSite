// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#006666, #003366",
  firstName: "Nimer",
  middleName: "Amol",
  lastName: "Singh",
  message: "Research Driven Technologist.",
  message2: "Alice and Bob? I know them personally, and they told me to tell you 'asjghd asdjhg deuwb uag'",
  icons: [
    {
        image:"fa-searchengin",
        url: "https://www.researchgate.net/profile/Nimer-Singh-2"
    },
    {
      image: "fa-github",
      url: "https://github.com/nasbaweja",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/pirate.sardar/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/nimer-amol-singh/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/amolnimer",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/pirate.sardar.jpg"),
    // imageLink:"pirate.sardar",
  imageSize: 375,
  message:
    "Hi, I am Nimer Amol Singh. I am an alumnus of Manipal University Jaipur. I am passionate about Cryptography, Blockchain and their real world applications. Right now, I am working in Shivoham Techno Services Pvt. Ltd., A New-Delhi based Start-up in the field of IoT and Automation where I am acting as a Project Lead. In my free time I like to solve puzzles, design art, and watch Formula 1.",
  resume: require("../editable-stuff/resume.pdf"),
	//resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "nasbaweja", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

const PGP = {
	title:"End-to-End PGP Module",
	year: 2018,
	type: "Academic Project",
	link:null,
	information: ['Built using Python with no support of External Libraries',
				 'End to end encryption and decryption technique using socket communication',
				  'Implemented Random sleep timers in core RSA encryption and decryption modules as suggested by Adi Shamir and research team in RSA Key Extraction via Low-Bandwidth Acoustic Cryptanalysis',
				  'Presented a modified function for Dell Hack-To-Hire Hackathon'
				 ],
	page:"PGP"
}


// Leadership SECTION
const leadership = {
  show: true,
  heading: "Projects",
  message:
	[
		{title: "Implementation And Analysis of Blockchain Based DAPP for Secured Sharing of Students’ Credentials",
		year: 2019,
		type: "Research Paper",
		link: "https://ieeexplore.ieee.org/document/9045196",
		information: [
					  'Architected, Designed and Implemented a solution for sharing students’ credentials', 
					  'Built using HTML, CSS, Bootstrap, React, NodeJs, IPFS', 
					  'Integrated with Rinkeby Test Network on Ethereum using Smart Contracts',
					  'Performed cost and performance analysis on various experiments'
					 ],
		image: require("../editable-stuff/blockchainanalysis.png"),
		 page: "BlockchainAnalysis"
		},
		{
			title:"End-to-End PGP Module",
			year: 2018,
			type: "Academic Project",
			link:null,
			information: ['Built using Python with no support of External Libraries',
						 'End to end encryption and decryption technique using socket communication',
						  'Implemented Random sleep timers in core RSA encryption and decryption modules as suggested by Adi Shamir and research team in RSA Key Extraction via Low-Bandwidth Acoustic Cryptanalysis',
						  'Presented a modified function for Dell Hack-To-Hire Hackathon'
						 ],
			page:"PGP",
			image: require("../editable-stuff/PGP.png")
			
		},
		{
			title: "Machine Translation Model",
			year: '2018',
			type: "Academic Project",
			link: null,
			information: [
				"Built model using python to create a Natural Language Processing Application for converting English to Spanish",
				"Implemented RNN’s which utilized Seq2Seq models for final trainings",
				"Built front end using HTML, CSS and React",
				"Created API calls through FLASK backend to use the trained model"
			],
			page:"NLP",
			image: require("../editable-stuff/neural-network.jpg")
		}
	],
  images: [
    { 
      img: require("../editable-stuff/pirate.sardar.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/pirate.sardar.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
gradientColors: "#5f2c82, #49a09d",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Data Structures", value: 85 },
	{ name: "SQL", value: 65 },
    // { name: "C/C++", value: 65 },
    // { name: "JavaScript", value: 90 },
    { name: "React", value: 90 },
	{name: "Blockchain", value: 80}
    // { name: "HTML/CSS", value: 55 },
    // { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    // { name: "Positivity", value: 75 },
    // { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    //{ name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    //{ name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Open to explore all opportunities. To get in touch, or just say hi, please feel free to email me",
  email: "nasbawejas@gmail.com",    
};

const experiences = {
  show: true,
	gradientColors: "#4b6cb7, #182848",
  heading: "Experiences",
  data: [
    {
      role: 'Shivoham Techno Services Pvt. Ltd. - Project Lead (I.T.)',
      companylogo: require('../assets/img/shivoham.png'),
      date: 'Aug 2020 – Present',
    },
    {
      role: 'Dell International Services - Software Developer Intern',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'May 2019 – Jun 2019, Jan 2020 – May 2020',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
