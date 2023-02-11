# WeLoveMovies
backend / frontend, Render deployed, React, Node, Express, RESTful API, PostgreSQL, Knex

## Please note: The site will have slow load times!

The site is deployed for free on Render with database support hosted on ElephantSQL, so load times can be slow. 

If the page recieves to many hits to my tiny database server you may recieve a too many connects error as well. 

Navigating to either the All Movies tab or the All Theaters Tab in the upper left hand corner will usually speed up the processes. Users can click on the WeLoveMovies text in the upper left-hand corner to navigate back to the home page.   

I regularly check on the database and clear connections. Sorry if you got an error my sites are hosted and small free services provided by ElephantSQL, Render and sometimes Vercel. However they are successully deployed and under the right conditions work well.
---

## Homepage 

User can click on the img of the movie to find movie information. The header has three links, WeLoveMovies, All Movies, All Theaters.

![frontPage](/readme_images/welovemovies_frontPage.PNG)

## Movie Information Page

User can find a movie description and location of theaters where movie is being show. The user can scroll down to find reviews.

![moviePage](/readme_images/welovemovies_moviePage.PNG)

## Movie Reviews and User Ratings

Users can scroll to read reviews and provide up and down votes on each review by clicking the small blue arrows pointing either up or down. 

**In the code I developed CRUD operations that delete reviews, but I have disabled / hiding the button so that users cannot change the database at this time. However, the button is located in the Reveiws.js component.

![movieRatingReview](/readme_images/welovemovies_reviewWithRating.PNG)

## All Movies Tab

This will list all the movies their descriptions and a button to see more information.

![allMovies](/readme_images/welovemovies_AllMoviesTab.PNG)

## All Theaters Tab

All Theaters tab will list all the theaters and display movies at each theater.

![allTheaters](/readme_images/welovemovies_AllTheatersTab.PNG)
