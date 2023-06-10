## Week 1 Assignment: Flixster

Submitted by: **Michael Shiwbaran**

Estimated time spent: **11-12** hours spent in total

Deployed Application (optional): [Flixster Deployed Site](ADD_LINK_HERE)

### Application Features

#### Core Features

- [X] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [X] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [X] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [X] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [X] Website accounts for basic HTML/CSS accessibility features
- [X] Website should be responsive

#### Stretch Features

- [X] Deploy website using GitHub Pages.
- [X] Allow user to view more details about a movie within a popup.
- [X] Improve the user experience through CSS & animation.
- [ ] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [X] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video

<iframe width="560" height="315" src="https://www.loom.com/share/c3949f837cde41de959c0cd212c74e57" title="LoomWalkthoughVideo"></iframe>
- I wasn't sure if this is how you wanted it, but nonetheless the link is there for my walkthrough video. I also wasn't sure what exactly you wanted in the video, so I hope what I have is sufficient enough.

### Reflection

- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

The topics covered in class I feel helped us about 75% of the time. Majority of both the labs and the projects utilized syntax and exmaples used during class. For the projec though, there was a lot of ambiguity in terms of what was needed and it felt as though, in trying to follow the checklist, especially the one ones with the load more and search functionalities, there wasn't much help in regard to those tasks.

- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I'd probably put more effort into making the webpage look better and more responsive to different users such as mobile users. In regards to looking better, having better font stylin ould be nice as well as making the description page of each movie look better, with better spacing between elements and the thumbnail covering the full width of the page. Also, I'd want to make the website have more options in terms of viewing movies, such as being based off genres or off overall ratings so uers can search better. 

- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I think what went well for me for the project was using the API to get the movies to appear on the page. This was a lot easier than I expected it to be because I didn't realize all you needed was the proper url's to make the calls gather the correct information. It's a lot more automated then I thought. I also tried adding an animation to the popcorn emoji on the top of the page. It doesn't exacty work that well but sometimes it will rotate 45 degrees. What didn't go so well was the implementation of the description flex section. As of right now I haven't implemented it properly yet so if I do compplete that, it will be very good, but this feature has proven to be quite difficult in terms of keeping track of the html tags and making sure the proper API calls are made to fill in the correct information for each movie. UPDATE: I managed to have the description page of each movie be displayed when you click on a movie card; however, I wasn't able to add the youtube video to play alongside it because I couldn't figure out how to create the video from the youtube API, so that would be something I would want to continue working on if I had the chance. ONE OF THE MORE IMPORTANT ASPECTS IS THAT WHEN SEARCHING FOR MOVIES, SOMETIMES THE THUMBNAIL FOR THE MOVIE ISN'T THERE, AND SO THERE ARE A LOT OF BLANK SPACES FOR SOME MOVIES, AND I DIDN'T KNOW HOW TO FIX THEM. THIS WOULD BE ANOTHER AREA THAT I WOULD WORK ON.

### Open-source libraries used

- https://developer.themoviedb.org/docs/getting-started

### Shout out

I want to give a shoutout to Daniel, Matthew, Gustavo, and Mikyas. All of us worked together to try and figure out how to complete this project and we all had our own unique ideas that were fun to talk about.
