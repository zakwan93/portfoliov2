var data = {
  projects: [
    {
      id: 1,
      github: "https://github.com/zakwan93/github-finder",
      url: "https://easygithubfinder.netlify.com/",
      name: "Easy Github Finder",
      disc:
        "Designed a ​React.js application using react hooks to search a GitHub profile by username using Github API. Implemented using useState, useEffect, useContext, useReducer and other new hooks.",
      languages: ["React", "Github API", "Netlify", "CSS3"],
      hidden: false
    },
    {
      id: 2,
      github: "https://github.com/zakwan93/letstalk",
      url: "https://letscodee.herokuapp.com/",
      name: "Lets' Code",
      disc:
        "Designed a ​Ruby on Rails​ chat application to find people with different skills from around the world. Used rails Action Cable feature for chatroom and Active Storage to store images directly in database locally and on AWS S3.",
      languages: ["Ruby on Rails", "Coffee Script", "Bootstrap", "PostgreSQL"],
      hidden: false
    },
    {
      id: 3,
      github: "https://github.com/zakwan93/resume-builder",
      url: "https://resumegenius.herokuapp.com/",
      name: "Resume Genius",
      disc:
        "Designed and developed Ruby on rails application that helps to generate online resume in different design templates and enables a user to download a pdf version in a click for free.",
      languages: ["Ruby on Rails", "UIKit", "PostgreSQL"],
      hidden: false
    },
    {
      id: 4,
      github: "https://github.com/skhoule/nycda-shipped-app",
      url: "https://sal-zakshipment.herokuapp.com/",
      name: "SalZak Shipment",
      disc:
        "Designed a Ruby on rails application for shippers to help them organize all of the ships in their fleet, with a user login system. Implemented Paperclip gem for uploading of a picture locally and Bootstrap framework for mobile responsive layout by high design standards.",
      languages: ["Ruby on Rails", "Bootstrap", "PostgreSQL"],
      hidden: false
    },
    {
      id: 5,
      github: "https://github.com/zakwan93/mini-blog-app",
      url: "https://creatyourownblog.herokuapp.com/",
      name: "Blog App",
      disc:
        "Built an app that allows authenticated users to post their own blog. User can Sign up, Sign in, Sign out, Edit and Delete their account and can see a profile page with all of their account details and micro-blog posts to date. Display 10 most recent posts (the “feed”) of app on user's homepage.",
      languages: ["Ruby", "Sinatra", "JavaScript", "Sqlite3"],
      hidden: false
    },
    {
      id: 6,
      github: "https://github.com/zakwan93/FlashCardVueApp",
      url: "https://zakwan93.github.io/FlashCardVueApp/",
      name: "Flash Card",
      disc:
        "Built a Vue.js webpage that adds a flash card dynamically on a page. The page allows the user to enter text on the front and the back of the card. CSS animation were added to make the card flip when hovered over by the user.",
      languages: ["Vue.js", "CSS3", "HTML5"],
      hidden: false
    },
    {
      id: 7,
      github: "https://github.com/zakwan93/budgetapp",
      url: "https://zakwan93.github.io/budgetapp/",
      name: "Budgety",
      disc:
        "Built a pure vanilla JavaScript budget app to manage user's monthly budget. User's are able to add and delete new income and expenses dynamically.",
      languages: ["JavaScript", "CSS3", "HTML5"],
      hidden: true
    },
    {
      id: 8,
      github: "https://github.com/zakwan93/VuePublicLibrary",
      url: "https://zakwan93.github.io/VuePublicLibrary/",
      name: "Public Library",
      disc:
        "A simple Vue.js webpage built to retrieve data from a JavaScript object which also enables the user to search for a specific book.",
      languages: ["Vue.js", "CSS3", "HTML5"],
      hidden: true
    },
    {
      id: 9,
      github: "https://github.com/zakwan93/pig-game",
      url: "https://zakwan93.github.io/pig-game/",
      name: "Pig Game",
      disc:
        "Built a simple Pig game using pure vanilla JavaScript where two players can compete with each other and winner will announce when one of the users reached to the set winning score by default it set to 100.",
      languages: ["JavaScript", "CSS3", "HTML5"],
      hidden: true
    },
    {
      id: 10,
      github: "https://github.com/zakwan93/Pokedex",
      url: "https://zakwan93.github.io/Pokedex/",
      name: "Pokemon Go",
      disc:
        "Built a web page to retrieve the stats of selected pokemon from Pokemon API like Name, Height, HP, Attack, Defence etc. Added few animationn to make it more attractive using CSS animations.",
      languages: ["JavaScript", "API", "CSS3", "HTML5"],
      hidden: true
    },
    {
      id: 11,
      github: "https://github.com/zakwan93/tictactoe",
      url: "https://zakwan93.github.io/tictactoe/",
      name: "Tic-Tac-Toc Game",
      disc:
        "Two player tic-tac-toe game which keeps track of the number of wins per each player until the page is refreshed by the user.",
      languages: ["JavaScript", "CSS3", "HTML5"],
      hidden: true
    },
    {
      id: 12,
      github: "https://github.com/zakwan93/outdoors",
      url: "https://zakwan93.github.io/outdoors/",
      name: "Outdoors",
      disc:
        "Built a single page mobile responsive website for a tour company that held information about the different tour packages provided by the company. Implemented CSS floating method for whole website and added various type of animation for mordern website look.",
      languages: ["NPM", "(S)CSS", "HTML5"],
      hidden: true
    },
    {
      id: 13,
      github: "https://github.com/zakwan93/nexter",
      url: "https://zakwan93.github.io/nexter/",
      name: "Nexter",
      disc:
        "Designed a single page website using CSS Grid for realtors who help people to find their perfect homes. Cleared the fundamentales of CSS Grid and become much more comfortable with it.",
      languages: ["NPM", "CSS Grid", "(S)CSS", "HTML5"],
      hidden: true
    },
    {
      id: 14,
      github: "https://github.com/zakwan93/portfoliov1",
      url: "https://zakwan93.github.io/portfoliov1/",
      name: "Outdoors",
      disc:
        "Personal website V1 using CSS floating method. Learned quite a lot about HTML, CSS, and JavaScript. Since then, I think my web development and design skills have improved immensely.",
      languages: ["JavaScript", "CSS3", "HTML5"],
      hidden: true
    },
    {
      id: 15,
      github: "https://github.com/zakwan93/Hacker_Rank_Solution",
      url: "https://github.com/zakwan93/Hacker_Rank_Solution",
      name: "HackerRank Solution",
      disc:
        "A platform that enables me to improve my programming fundamentales and test my skills as a programmer through their challenges.",
      languages: ["JavaScript", "Ruby", "Python"],
      hidden: true
    }
  ]
};

var myProjects = document.getElementById("projects");
var myData = data.projects;

for (let i = 0; i < myData.length; i++) {
  var div = document.createElement("div");
  myProjects.appendChild(div);

  // console.log(myData[i].hidden);

  if (myData[i].hidden) {
    div.classList.add("hidden", "project", "show-on-scroll");
  } else {
    div.classList.add("project", "show-on-scroll");
  }

  let project = `
  <div class="project--inner">
    <header>
      <div class="project__icons">
        <div class="project__icons--left">
          <svg class="project__icons-folder">
            <use xlink:href="img/sprite.svg#icon-folder" />
          </svg>
        </div>
        <div class="project__icons--right">
          <a
            href=${myData[i].github}"
            class="project__icons--link
                project__icons--right"
            target="_blank"
          >
            <svg class="project__icons-github">
              <use xlink:href="img/sprite.svg#icon-github" />
            </svg>
          </a>
          <a
            href=${myData[i].url}
            class="project__icons--link project__icons--right"
            target="_blank"
          >
            <svg class="project__icons-globe">
              <use xlink:href="img/sprite.svg#icon-globe" />
            </svg>
          </a>
        </div>
      </div>
      <div class="project__name">
        <h5 class="heading-6 project__name--heading">${myData[i].name}</h5>
      </div>

      <div class="project__discription">
      ${myData[i].disc}
      </div>
    </header>
    <footer>
      <ul class="project__language">
      ${myData[i].languages
        .map(language => {
          // let l = language.replace(",", "");
          // console.log(language);
          return `<li class="project__language--list"> ${language} </li>`;
        })
        .join("")}
        
      </ul>
    </footer>
  </div>
  </div>
      `;

  div.insertAdjacentHTML("afterbegin", project);

  // console.log(project.length);
}
