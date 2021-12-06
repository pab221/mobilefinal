Peter Bernard

Professor Chuah

CSE-371

December 6, 2021

OneApp

The website is live at <https://oneapp371.herokuapp.com/>
# Motivation
`	`My motivation for this project was to create a website that would function as an everyday tool for me. I thought of three things I am interested in that do not revolve around email and other social media websites. Thus, I concluded I usually look at weather, news and sports. However, the big issue with this is that I’m constantly having to use multiple applications to do so. I have to use three websites when one is much easier. Hence, the name *OneApp.* I also got the idea for the news section from homework 1. In this project, there was a news section. However, the news was being pulled from a static database which I thought was useless because news should be new. This led me to looking into the a news api and the rest of the project. 
# Architecture
`	`Express.js is a back end web application framework for Node.js which controls the routes for the website. What this means is that it is the framework that controls the logic for each url in addition to other things. For example, when the url is <http://oneapp371.herokuapp.com/>, the backend controls what frontend page should be shown. Sometimes, it is used to also send data to the frontend that was retrieved from the database. 

`	`MongoDB is the database software that is used for storing user data. The schema for the data is {Username, Password, Locations, Interests, Teams}. The username and password are both strings that represent the username and password used for logging in. The username must be unique so only one can exist. Next, you will see locations. This represents a feature that I wanted to have but couldn’t figure out how to implement with the time constraints. I wanted to have the user be able to add different cities they were interested in looking at the weather for. However, this was more complex than anticipated so it was not done. However, it stayed in the schema for possible future use. Next, we have the interests which is an array of the interests of the user for the news section such as business and film. Lastly, we have the teams section. The teams part is an array of objects with the schema of {Name, Id, Logo}. Name represents the team name, id represents the id of the team for the sports api being used and Logo is the url of the logo of the team. 

`	`Pug.js is a template engine that was used to develop the web pages for the website. I chose it because I have used it previously and I enjoyed the “[each](https://pugjs.org/language/iteration.html)” feature which allows you to take an array of items and create individual elements for each of them. CSS was used to style the website and make it customized for mobile use. Javascript was used to fetch data from apis as well as manipulate the web pages when they load. 

`	`The 

`	`Mongoose is used to simplify the connection between MongoDB and the Web Application. The database is currently hosted by Amazon Web Services using MongoDB Atlas for free. The website as a whole is hosted by Heroku, although testing was done locally. 
# Feature 1: Weather
The goal of this feature was to give the user weather information based on their current location. This is done by using the HTML Geolocation API to get the user’s longitude and latitude. After these numbers are collected, the [One Call API](https://openweathermap.org/api/one-call-api), a subset of the Open Weather Map API, is used to get weather data for that location. 

First, the current weather is provided. It displays an icon that represents the weather, a weather type, the temperature in Fahrenheit, what the temperature feels like in Fahrenheit, the Humidity and the Wind Speed in mph. I chose these because I thought they were what I was most interested in. 



Next, the daily weather for the week is provided. Because it might be too cluttered, I chose to have the daily forecast only be displayed when a button is clicked. Once clicked it displays the weather for seven days. The information included is an icon that represents the weather, the date of the day, the type of weather, the temperature high in fahrenheit, the temperature low in fahrenheit, the humidity and the wind speed in miles per hour. 

# Feature 2: News
The goal of this feature was to operate as an updated version of the news section in project 1. I wanted the user to be able to choose interests they had and would be provided news based on these interests. The possible interests they could select were business, education, environment, film, general, politics, science, sports, technology, and world. For each interest, a maximum of 20 articles would be displayed. This was done through the use of the [Guardian News API](https://open-platform.theguardian.com/documentation/). I had originally developed the application to work with the [News API](https://newsapi.org/), but the free version was only available to be used on localhost. This meant I could not use Heroku. For each interest, a get request is sent out to get the 20 articles and their corresponding data. For each article, the webpage displays a title, an image if available, a short description of the article and a link to the original article. All the interests are by default hidden. The user must click on the interest to reveal the articles. 


`	`The news feature also gives the user the ability to search for news. This is also done through the use of the Guardian News API. To search, the user will type their query into the search bar at the top of the page and press search. This will provide the user with a maximum of 20 articles that match their search. 

# Feature 3: Sports
`	`The goal of this feature was for the user to see the most recent scores for teams they are interested in. This is done by first receiving their sports teams from the database. These teams can be any team from the MLB, NFL, NBA, and NHL. For each team, their team name and logo is displayed as a dropdown button. When clicked, this provides the five most games for this team with the title of the event, the date of the event, and the final scores for both teams. The data is collected using the [The SportsDB API](https://www.thesportsdb.com/api.php).  



# Other Pages
The Login and Register page operates as the home page which is where users can login or register for an account. 



The Settings page is used to modify the users interests and teams. When the settings page is loaded, it prechecks interests and teams that the user has previously selected. The user must enter their password to confirm changes.


#
# Survey Results


|Feature|User 1 Rating /5|User 2 Rating /5|
| :- | :- | :- |
|Weather |4|5|
|News|5|4.5|
|Sports|4.5|3|
|Format|4|3.5|

User 1 Suggestions

The user should be able to see news from different websites/sources instead of one. They could also choose which ones they are interested in. 

User 2 Suggestions

There should be a stock and crypto feature where users can see how their investments are doing. Also,  the format should be updated so it doesn’t look as boxy. 



# Future Extension 
`	`First, I would add a finance section to the application so users could see their stocks and crypto currencies. I had this idea early on and one of the users I surveyed said the same thing. I would have to do some research into a good finance api. I also liked the idea of adding different news apis to the news section but I do not believe there are too many free ones available. Also, I would clean up the website some more and make it more responsive for desktop use. Right now, it is much better on mobile. I would also like to add the other locations for weather in the future. 
