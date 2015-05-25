var bio  = {
	"name": "Dina Gringauz",
	"role": "Web Developer",
	"contacts": 
	{
		"mobile": "0545900197",
		"email": "contact1@gmail.com",
		"github": "contact1",
		"twitter": "contact1",
		"location": "Nesher, Israel"
	},
	"welcomeMessage": "Hello everybody!!",
	"skills": ["great","smart","beutiful","funny"],
	"biopic": ["images/fry.jpg"],
	"display": function(){
		var formattedheaderName = HTMLheaderName.replace("%data%",bio.name);
		var formattedheaderRole = HTMLheaderRole.replace("%data%",bio.role);
		$("#header").append(formattedheaderName);
		$("#header").append(formattedheaderRole);
		var formattedmobile = HTMLmobile.replace(/%data%/g,bio.contacts.mobile);
		$(".center-content:last").append(formattedmobile);
		var formattedemail = HTMLemail.replace(/%data%/g,bio.contacts.email);
		$(".center-content:last").append(formattedemail);
		var formattedtwitter = HTMLtwitter.replace(/%data%/g,bio.contacts.twitter);
		$(".center-content:last").append(formattedtwitter);
		var formattedgithub = HTMLgithub.replace(/%data%/g,bio.contacts.github);
		$(".center-content:last").append(formattedgithub);
		var formattedlocation = HTMLlocation.replace(/%data%/g,bio.contacts.location);
		$(".center-content:last").append(formattedlocation);
		$("#footerContacts").append(formattedmobile);
		$("#footerContacts").append(formattedemail);
		$("#footerContacts").append(formattedtwitter);
		$("#footerContacts").append(formattedgithub);
		$("#footerContacts").append(formattedlocation);
		var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").append(formattedwelcomeMsg);
		if (bio.biopic.length > 0)
			{
				for (pic in bio.biopic)
					{
						var formattedbiopic = HTMLbioPic.replace("%data%",bio.biopic[pic]);
						$("#header").append(formattedbiopic);
					}
			}
		$("#header:last").append(HTMLskillsStart);
		for (skill in bio.skills)
		{
			var formattedskills = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#header:last").append(formattedskills);
		}
	}
};

bio.display();

var work = {
	"jobs": [
	{
		"employer": "Medatech",
		"title": "Project manager",
		"location": "Tirat Hakarmel, Israel",
		"dates": "2011-2013",
		"description": "Project Manager in Information Systems"
	},
	{
		"employer": "Contel ITS",
		"title": "Information Systems Analyst",
		"location": "Petah tikva, Israel",
		"dates": "2013-today",
		"description": "Managing system implementation in 2 sites abroad. Charectarazing new proceses in the system. Developing reports using SQL and SSRS. Analysing data to improve proceses in the organization."
	}
	],
	"display": function()
	{
		for(job in work.jobs)
		{
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedworkLocation =  HTMLworkLocation.replace("%data%",work.jobs[job].location);
			$(".work-entry:last").append(formattedworkLocation);
			var formattedDates =  HTMLworkDates.replace("%data%",work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription =  HTMLworkDescription.replace("%data%",work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);

		}
	}
};
work.display();

var projects  = {
	"projects": [
	{
		"title": "Project 1",
		"dates": "01/01/2015 - 01/03/2015",
		"description": "A very interesting ptoject",
		"images": ["images/proj1.jpg","images/proj2.jpg"]}],
	"display": function()
	{
		for(proj in projects.projects)
		{
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[proj].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDate = HTMLprojectDates.replace("%data%",projects.projects[proj].dates);
			$(".project-entry:last").append(formattedDate);
			var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[proj].description);
			$(".project-entry:last").append(formattedDescription);
		}
	}
};

projects.display();


var education = {
	"schools": [
		{
			"name":"tichon nesher",
			"location": "Nesher, Israel",
			"degree": "tichon",
			"majors": ["Theatre", "Computer sience"],
			"dates": "2003-2006",
			"url" : "school1"
		},
		{
			"name":"technion",
			"location": "Haifa, Israel",
			"degree": "taasia",
			"majors": ["busieanes system information"],
			"dates": "2008-2012",
			"url": "school1"
		}
	],
	"onlineCourses": {
		"title": "Web development",
		"school": "Udacity",
		"dates": "01/03/2015 - 01/05/2015",
		"url": "https://www.udacity.com/course/viewer#!/c-ud804-nd/l-1930528550/e-1935058561/m-2948908664"
	},
	"display": function(){
		for(school in education.schools)
			{
				$("#education").append(HTMLschoolStart);
				var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
				$(".education-entry:last").append(formattedschoolName);
				var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
				$(".education-entry:last").append(formattedschoolDegree);
				var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
				$(".education-entry:last").append(formattedschoolLocation);
				var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
				$(".education-entry:last").append(formattedschoolDates);
				for(major in education.schools[school].majors)
				{
					var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
					$(".education-entry:last").append(formattedschoolMajor);
				}
			}
		$(".education-entry:last").append(HTMLonlineClasses);
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses.title);
		$(".education-entry:last").append(formattedonlineTitle);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses.school);
		$(".education-entry:last").append(formattedonlineSchool);
		var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses.dates);
		$(".education-entry:last").append(formattedonlineDates);
		var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses.url);
		$(".education-entry:last").append(formattedonlineURL);		
	}
};
education.display();
$("#mapDiv").append(googleMap);

function inName(fullName)
{
	var tmpFullName = fullName.split(" ");
	var firstName = tmpFullName[0].toLowerCase();
	var lastName = tmpFullName[1].toUpperCase();
	var NewFullName = firstName+ " "+ lastName;
	return NewFullName;
};
//$("#main").append(internationalizeButton);
