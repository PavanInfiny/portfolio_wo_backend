import { createContext, useContext, useEffect, useState } from "react";
import axois from "axios";
export const Contextstore = createContext({
  projectdetail: [],
  skills: [],
  setprojectdetail: () => {},
  change: 0,
  setchange: () => {},
  setloading: () => {},
  loading: true,
  skillload: true,
  adminbutton: "project",
  setadminbutton: () => {},
  projectdropid: 1,
  setprojectdropid: () => {},
  skilldropid: 1,
  setskilldropid: () => {},
  onsubmitbutton: () => {},
  setskills: () => {},
  onsubmitbuttonskill: () => {},
  errorresponse: 0,
  seterroeresponse: () => {},
});
import React from "react";

function Store({ children }) {
  const [change, setchange] = useState(1);
  const [adminbutton, setadminbutton] = useState("project");
  const [skills, setskills] = useState([]);
  const [projectdropid, setprojectdropid] = useState(1);
  const [skilldropid, setskilldropid] = useState(1);
  const [projectdetail, setprojectdetail] = useState([]);
  const [loading, setloading] = useState(true);
  const [skillload, setskillload] = useState(true);
  const [errorresponse, seterroeresponse] = useState(0);
  const onsubmitbutton = async (obj, pass) => {
    try {
      const responce = await axois
        .post(`https://pavanportfolio.pagekite.me/projects/${pass}`, obj)
        .then((n) =>
          n.data === "ok" ? seterroeresponse(1) : seterroeresponse(2)
        );
    } catch (error) {
      console.log("error generated");
    }
  };
  useEffect(() => {
    // console.log("fetching started");
    // fetch("https://pavanportfolio.pagekite.me/projects")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Fetched data:", data);
    //     setprojectdetail(data); // Update the state with the fetched data
    //     setloading(false);
    //   })
    //   .catch((error) => console.error("Error fetching data:", error));
    var data=[
   
  {
    "abstract": "QuizWiz is a dynamic and interactive quiz application developed using React Native for the frontend and Spring Boot with MySQL for the backend. The application is designed to provide an engaging and seamless quiz-taking experience with real-time feedback and score tracking. A key highlight of QuizWiz is its automatic quiz generation capability, powered by the Gemini API, which is hosted on AWS. This feature enables users to generate quiz questions directly from provided text, leveraging advanced natural language processing techniques. The backend ensures efficient data management and scalability, while the React Native frontend offers a smooth and intuitive user interface.",
    "code": "https://github.com/PavanInfiny/Quizwiz_Frontend",
    "id": 6,
    "img": "https://res.cloudinary.com/dwm4oeyz9/image/upload/v1738766988/portfolio/portfolio/Projects/quizwiz/lqplmpehdargtvxfk5gr.png",
    "ppt": "https://docs.google.com/presentation/d/1aTgRwdMmRlJ4Gb7F9PCpvl7ao178MsYp/edit?usp=sharing&ouid=107160956969018352399&rtpof=true&sd=true",
    "projectdesc": "QuizWiz is a feature-rich quiz application designed with React Native for the frontend and Spring Boot with MySQL for the backend. It offers an engaging and seamless quiz-taking experience with real-time feedback, score tracking, and a user-friendly interface",
    "projecttitle": "QuizWiz",
    "report": "https://drive.google.com/file/d/1j_mZGtfAsGJ4gn1uZYac4I6hwQ-gMLw-/view?usp=sharing",
    "technology": "React_Native spring_boot hibernet AWS Mysql",
    "working": "Initialize the frontend using React Native and design an intuitive UI for seamless navigation. sep Develop the backend using Spring Boot and MySQL to manage user data and quiz records. sep Implement user authentication and session management for a personalized experience. sep Integrate the Gemini API hosted on AWS to enable automatic quiz generation from provided text. sep Design the quiz-taking functionality, including question display, answer selection, and real-time feedback. sep Implement a scoring system to track user performance and provide insights. sep Ensure smooth communication between the frontend and backend using REST APIs. sep Optimize the database for efficient data storage and retrieval of quiz questions and user progress. sep Add error handling and validation for a reliable and secure user experience. sep Deploy the application on a cloud platform for scalability and accessibility."
  },
  {
    "abstract": "TravelBuddys serves as a practical demonstration of modern web development practices, showcasing proficiency in Angular, responsive design, and cloud deployment.",
    "code": "https://github.com/PavanInfiny/TravelBuddy",
    "id": 7,
    "img": "https://res.cloudinary.com/dwm4oeyz9/image/upload/v1759827980/Screenshot_55_wsrnz8.png",
    "ppt": "https://travelbuddys.netlify.app/",
    "projectdesc": "TravelBuddys is a dynamic, single-page web application built using the Angular framework, designed to simplify and enhance the experience of planning and managing travel with companions. The platform allows users to discover travel destinations, organize trips, and collaborate with fellow travelers in real-time. Leveraging Angular’s component-based architecture, the application ensures modularity, scalability, and a responsive user interface across devices.",
    "projecttitle": "TravelBuddy",
    "report": null,
    "technology": "Angular DotNet c#",
    "working": "The home page contains the top three packages that are either most popular or recently added to give users a quick overview of featured options. sep The packages page displays all available packages and includes sorting functionality, allowing users to sort the packages by name or price for easier browsing. sep The admin page is accessible after entering the default email and password, where administrators can update existing packages, add new packages with relevant details, and delete packages that are no longer needed."
  },
      {
    "abstract": "The portfolio website is a comprehensive platform designed and developed using React for the front-end and Spring Boot for the back-end. It features a dynamic and user-friendly interface that showcases Pavan Kumar P's projects, skills, and contact information. Each project is accompanied by detailed descriptions, including the technologies used, functionality, and key features. The website serves as a personal portfolio, highlighting his expertise in web development, programming, and technical proficiency. Additionally, it offers easy navigation and responsiveness, ensuring a seamless user experience across different devices.",
    "code": "https://github.com/PavanInfiny/Portfolio",
    "id": 4,
    "img": "https://res.cloudinary.com/dwm4oeyz9/image/upload/v1728115807/portfolio/portfolio/Projects/portfolio/uup3c9pahhodhedo1joe.png",
    "ppt": "ppt",
    "projectdesc": "A dynamic portfolio website built with React and Spring Boot, showcasing Pavan Kumar P's projects, skills, and contact details with detailed project descriptions.",
    "projecttitle": "Portfolio Website",
    "report": "report",
    "technology": "SpringBoot ReactJS API JDBC MYSQL Hibernate HTML CSS JavaScript",
    "working": "The working of the portfolio website can be explained as follows: sep The front-end is built using React to create an interactive user interface. sep Users can navigate through different sections showcasing projects and skills. sep Each project has a dedicated page with detailed descriptions, technologies used, and key features. sep The back-end is developed with Spring Boot to manage data and handle requests. sep Users can view contact details for further inquiries or collaboration. sep The website is designed to be responsive and user-friendly across various devices."
  },
  {
    "abstract": "OptiPath is a cutting-edge project designed to revolutionize route optimization between two points. Through advanced algorithms and real-time data analysis, OptiPath streamlines navigation, reducing travel time and enhancing resource utilization. The system adapts to evolving conditions, considering factors like traffic patterns and user preferences. With a user-friendly interface and the ability to accommodate various transportation modes, OptiPath caters to individual users and holds potential applications in logistics, emergency services, and urban planning. This project represents a significant leap towards a smarter, more efficient future in transportation, where optimized pathfinding contributes to gains in productivity, sustainability, and overall quality of life.",
    "code": "https://github.com/PavanInfiny/FinFriend",
    "id": 3,
    "img": "https://res.cloudinary.com/dwm4oeyz9/image/upload/v1728115807/portfolio/portfolio/Projects/optipath/qw6ooeyjlzamcmcmfvro.png",
    "ppt": "https://docs.google.com/presentation/d/1oE9zx27xzZ3RTKbZeu5yozaNrDGSVc3O/edit?usp=drive_link&ouid=107160956969018352399&rtpof=true&sd=true",
    "projectdesc": "OptiPath is a Java-based web application that uses Dijkstra's algorithm to determine the shortest path between cities, with applications in logistics and navigation. It offers an interactive interface with real-time map visualization and user-friendly features for efficient route planning.",
    "projecttitle": "OptiPath",
    "report": "https://drive.google.com/file/d/1B6WVwbxrO4PfZSBBjgaMH29HAxlpMmD3/view?usp=drive_link",
    "technology": "JAVA SWING OPPS DSA Dijkstra's",
    "working": "To use OptiPath, open the application. sep Press the 'Reset' button to clear any previous data. sep Select the number of cities for the map. sep A random map will be generated based on the selected number of cities. sep Choose the start and destination points from the map. sep Press the 'Submit' button. sep The shortest path between the selected cities will be displayed on the screen."
  },
  {
    "abstract": "'FIN FRIEND' is a web-based expense management tool designed to simplify group expense tracking and settlement. The user enters a list of people involved, selects who paid and for whom, and records the transaction amount. After all transactions are entered, the tool calculates the amount each person owes or is owed, providing a transparent and efficient way to manage shared expenses. Built using HTML, CSS, and JavaScript, the application ensures easy navigation and a user-friendly experience for fair financial collaboration.",
    "code": "https://drive.google.com/drive/folders/1cGtxfwb3pNYmLe8Ol8TdreXJF-AmA6m3?usp=drive_link",
    "id": 2,
    "img": "https://res.cloudinary.com/dwm4oeyz9/image/upload/v1728115809/portfolio/portfolio/Projects/finfriend/eecuknpkfflwq14tlli6.png",
    "ppt": "https://drive.google.com/file/d/19tUQWplRtv916GylV5zQNNOQp813Rev_/view?usp=drive_link",
    "projectdesc": "'FIN FRIEND' is a web tool that tracks group expenses and calculates how much each person owes, built with HTML, CSS, and JavaScript. ",
    "projecttitle": "FIN FRIEND",
    "report": "https://drive.google.com/file/d/1hNvtBKmdXftwGuN7l83foOBOy4QdrC3_/view?usp=drive_link",
    "technology": "HTML CSS JavaScript",
    "working": "The working of the 'FIN FRIEND' project can be explained as follows: sep Enter a list of people involved in the transactions. sep Choose the person who paid. sep Input the amount paid. sep Select the person for whom the payment was made. sep Click 'Submit' to record the transaction. sep After all transactions are entered, click 'End' to calculate. sep The final output will display how much each person owes or is owed."
  },
  
 
  {
    "abstract": "This project presents a simple yet engaging implementation of the Brick Breaker game using Java and the Swing framework for graphical user interface (GUI). The game mechanics revolve around collision detection between the ball, bricks, and paddle. The paddle's movement is controlled by the user, while the ball's trajectory changes upon collision. The objective is to clear all bricks by strategically directing the ball to hit them while preventing the ball from dropping off the screen. This project demonstrates practical application of core Java concepts, including object-oriented programming, event handling, and GUI design using Swing. The game serves as a platform for enhancing logical thinking and user interface development skills.",
    "code": "https://drive.google.com/file/d/1CPqUL2GX9IJjTlL6YqdbYHHu1CJGzChA/view?usp=sharing",
    "id": 5,
    "img": "https://res.cloudinary.com/dwm4oeyz9/image/upload/v1728463516/portfolio/portfolio/Projects/brickbreaker/mudkdgkvvqs4hfpmr253.png",
    "ppt": "ppt",
    "projectdesc": "The Brick Breaker game is a classic arcade-style game developed using Java and Swing. The game involves a set number of bricks, a ball, and a movable block (paddle) controlled by the player.",
    "projecttitle": "Brick Breaker",
    "report": "report",
    "technology": "JAVA SWING OOPS",
    "working": "Initialize the game components: bricks, ball, and paddle using Java and Swing. sep The paddle is placed at the bottom of the screen and is controlled by the player. sep The ball starts moving automatically in a random direction. sep Collision detection is implemented to identify when the ball hits the paddle, bricks, or screen boundaries. sep When the ball hits the paddle, it reflects back, changing direction based on the point of impact. sep Upon hitting a brick, the ball reflects back, and the brick is removed from the screen. sep The player must continuously move the paddle to keep the ball in play and prevent it from falling off the bottom of the screen. sep The game continues until all bricks are destroyed or the ball falls off the screen, resulting in game over. sep Scoring is tracked based on the number of bricks destroyed. sep The game ends with a win when all bricks are destroyed, or a loss when the player fails to keep the ball in play."
  },
  {
    "abstract": "This mini-project develops a water level detection system using an ultrasonic sensor and Arduino Uno. The system monitors water levels by emitting sound waves from the sensor, which reflect off the water surface, allowing the Arduino to calculate the distance based on the time taken for the waves to return. The project involves key phases like sensor interfacing, data acquisition, signal processing, and output display. By ensuring accurate measurement through coding and calibration, the system offers real-time monitoring with minimal maintenance. Its cost-effective, simple design can be applied in agriculture, industrial automation, and home water management for efficient resource use and sustainability",
    "code": "code",
    "id": 1,
    "img": "https://res.cloudinary.com/dwm4oeyz9/image/upload/v1728115814/portfolio/portfolio/Projects/iot%20project/fr82qyw9dhoyibuzznjr.png",
    "ppt": "ppt",
    "projectdesc": "This project involves developing a water level detection system using an ultrasonic sensor and an Arduino Uno to monitor water levels in real-time. ",
    "projecttitle": "IOT Project",
    "report": "report",
    "technology": "IOT Ardiuno Electronics ArdiunoIDE Circuits",
    "working": "The system has two modes: automatic and manual (On/Off) mode. sep In automatic mode, the water level is continuously monitored using the ultrasonic sensor. sep When the water level falls below 10%, the motor automatically turns on to start filling the tank. sep As the tank fills, the system continues to measure the water level using the ultrasonic sensor. sep Once the water level reaches 95%, the motor is automatically turned off to stop the filling process. sep In manual mode, the user can turn the motor On/Off based on their preference, overriding automatic control. sep The current water level is displayed on the 7-segment display as a percentage. sep Simultaneously, the water level data is sent to a smartphone via a Bluetooth sensor, providing real-time monitoring on the mobile device. sep The system ensures that the water tank is efficiently managed, reducing water wastage and manual intervention."
  },
];
setprojectdetail(data);
setloading(false);

  }, [change]);
  useEffect(() => {
    // fetch("https://pavanportfolio.pagekite.me/Skills")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setskills(data);
    //     setskillload(false);
    //   })
    //   .catch((error) => console.error("Error fetching data:", error));
    var data = [
      {
        id: 1,
        name: "Java",
        link: "https://drive.google.com/file/d/1xKqGIJF1maEwaWBnqO99-e9eSxBtNCe5/view?usp=sharing",
        percent: "70",
      },

      {
        id: 2,
        name: "React JS",
        link: "https://drive.google.com/file/d/12Jd4N378IViiZaK4xchG-YVo52zmlbk8/view?usp=sharing",
        percent: "70",
      },

      {
        id: 3,
        name: "JDBC & Hibernet",
        link: "https://drive.google.com/file/d/1hruMGtL-OIJaP8FstVdWwd7maeuKtD2j/view?usp=sharing",
        percent: "70",
      },

      {
        id: 4,
        name: "JUNIT",
        link: "https://drive.google.com/file/d/1o9tmx5N3qmdBPh9u-mfGvQEywmZsSpAl/view?usp=sharing",
        percent: "70",
      },

      {
        id: 5,
        name: "DBMS",
        link: "https://drive.google.com/file/d/1b0N3eReA5eDw0IB8opYgXS4h8psOelAJ/view?usp=sharing",
        percent: 75,
      },

      {
        id: 6,
        name: "GIT",
        link: "https://drive.google.com/file/d/1M52lZ2u9p-CnA0FcJhqBFEudpaHMxQ6b/view?usp=sharing",
        percent: 75,
      },

      {
        id: 7,
        name: "Hibernate",
        link: "https://drive.google.com/file/d/1hruMGtL-OIJaP8FstVdWwd7maeuKtD2j/view?usp=sharing",
        percent: 75,
      },

      {
        id: 8,
        name: "Operating System",
        link: "https://drive.google.com/file/d/16LpJ8YioEz-S81nXt1SzEYXzjxj8NSBe/view?usp=sharing",
        percent: 75,
      },

      {
        id: 9,
        name: "Computer Networks",
        link: "https://drive.google.com/file/d/1bhjvzNVX8szD8hcUfrZmVvQ5WOWpaplW/view?usp=sharing",
        percent: 75,
      },

      {
        id: 10,
        name: "Servlet & JSP",
        link: "https://drive.google.com/file/d/1nlWUHQZmYxYbC8jhM1mcQTK7zH6q70d9/view?usp=sharing",
        percent: "70",
      },
      ,
      {
        id: 11,
        name: "C#",
        link: "https://drive.google.com/file/d/12Jd4N378IViiZaK4xchG-YVo52zmlbk8/view?usp=sharing",
        percent: "70",
      },

      {
        id: 12,
        name: "DotNet",
        link: "https://drive.google.com/file/d/12Jd4N378IViiZaK4xchG-YVo52zmlbk8/view?usp=sharing",
        percent: "70",
      },

      {
        id: 13,
        name: "Angular",
        link: "https://drive.google.com/file/d/12Jd4N378IViiZaK4xchG-YVo52zmlbk8/view?usp=sharing",
        percent: "70",
      }
    ];
    setskills(data);
    setskillload(false);
  }, []);
  const onsubmitbuttonskill = async (obj, pass) => {
    try {
      const response = await axois
        .post(`https://pavanportfolio.pagekite.me/Skills/${pass}`, obj)
        .then((n) =>
          n.data === "ok" ? seterroeresponse(1) : seterroeresponse(2)
        );
    } catch (error) {}
  };

  return (
    <Contextstore.Provider
      value={{
        projectdetail,
        skills,
        setprojectdetail,
        setchange,
        setloading,
        loading,
        skillload,
        adminbutton,
        setadminbutton,
        projectdropid,
        setprojectdropid,
        setskilldropid,
        skilldropid,
        onsubmitbutton,
        setskills,
        onsubmitbuttonskill,
        errorresponse,
        seterroeresponse,
      }}
    >
      {children}
    </Contextstore.Provider>
  );
}

export default Store;
