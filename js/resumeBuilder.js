/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Esther";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
    "name" : "Esther",
    "role" : "Web Developer",
            "contacts":{
            	"mobile": "079988554433",
            	"email": "esther@example.com",
           		"github": "estherdev",
           		"twitter": "@estherdev",
           		"location": "London"
            	},
            	"welcomeMessage": "Welcome, it's great to see you.",
            	"skills": [
            		"awesomeness", "delivering things", "sleep", "saving the universe"
            	],
            	"bioPic": "images/fry.jpg"
            }

var education = {
    "schools": [
        {
            "name": "Oxford University",
            "city": "Oxford",
            "degree": "Masters",
            "majors": ["Law"],
            "dates": 2011,
            "url": "http://example.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": 2015,
            "url": "http://www.udacity.com/"
        }
    ]
}

var work = {
    "jobs" : [
      {
        "employer": "Home Office",
         "title": "Software Developer",
         "dates": "September 2015 - Present",
          "description": "Building software to serve the public."
      },
      {
       "employer": "DWP",
       "title": "Data Project Analyst",
       "dates": "March 2015 - August 2015",
       "description": "Helping the department to utilise data more efficiently and effectively."
      }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Resume Project",
            "dates": "2015",
            "description": "A resume built using JavaScript",
            "images": [
                "images/fry.jpg",
                "images/fry.jpg"
            ]
        }
    ]
}

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    }

for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
    }