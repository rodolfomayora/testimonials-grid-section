import {
  userPicture1,
  userPicture2,
  userPicture3,
  userPicture4,
  userPicture5
} from '../../assets/img';

const sampleData: Array<any> = [
  {
    name: "Daniel",
    lastname: "Clifford",
    pictureSource: userPicture1,
    standout: true,
    reviewSummary: "I recieved a job offer mid-course, and the subjects i learned were current, if no more so, in the compnay i joined. I hoestly feel i got every penny's worth." ,
    reviewDescription: "I was an EMT for many years before i joined the bootcamp. I've benn looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and and fount it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, i've successfully switched carrerrs, working as a Software Engineer at a VR sartup.",
    style: 4,
  },
  {
    name: "Jonathan",
    lastname: "Walters",
    pictureSource: userPicture2,
    standout: false,
    reviewSummary: "The team was veray supportive and kept me motivated",
    reviewDescription: "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments i've made in mysefl.",
    style: 2,
  },
  {
    name: "Jeanette",
    lastname: "Harmon",
    pictureSource: userPicture3,
    standout: false,
    reviewSummary: "An overrall wonderful and rewarding experience",
    reviewDescription: "Thank you for the wonderful experience! I now have a job i really enjoy, and make a good living while doing something i love.",
    style: 1,
  },
  {
    name: "Patrick",
    lastname: "Abrams",
    pictureSource: userPicture4,
    standout: true,
    reviewSummary: "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    reviewDescription: "The staff seem genuinely concerned about my progress which i find really refereshing. The program gave me the confience necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.",
    style: 3,
  },
  {
    name: "Kira",
    lastname: "Whittle",
    pictureSource: userPicture5,
    standout: false,
    reviewSummary: "Such a life-changing experience. Highly recommended!",
    reviewDescription: "Before joining the bootcamp, i've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculumn and staff did not disappoint. They were very hands-on and i never had to wait long for asistance. The agile team project. in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, i've oftern referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after recieving multiple offers. 100% recommended!",
    style: 1,
  }
];

export default sampleData;