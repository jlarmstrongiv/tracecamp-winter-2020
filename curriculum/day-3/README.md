<h1 align="center">
  🌐 Day 3 - Intro to APIs 🤝
</h1>


## 🎯 Learning Objectives

- Understand APIs conceptually and how to use them in a Hooks-based React project

## 🧠 Lecture Content

### What are APIs?

An API is basically a way for computers to talk to each other. Experienced programmers might have heard of APIs before in different contexts, but we are going to talk specifically about ***Web APIs***. Web APIs define how applications talk to each other over networks, and in our apps today we will be talking over the internet.

Another important note is that when we are programming in React, we are programming the ***front-end*** of our web apps. You've probably heard of front-end and back-end development and maybe you've wondered, "what does the back-end do? how do these connect?" Well, back-end developers are basically writing **Web APIs** for us front-end people to get information from. So today, when we use other people's **Web APIs**, we are connecting to a back-end to get information from a database.

### Examples of Web APIs

##### Organizations' public-facing APIs

Tech companies use APIs internally all the time. When you browse Instagram, your Instagram app is constantly making API calls to get the information that's displayed on your screen. Some companies make their APIs public-facing, meaning that developers like you and I can use their APIs to get interesting data into our apps.

- Examples:
  - [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview) - get location data, display a map on your website, get all restaurants within 10 miles of a given location, etc
  - [Instagram API](https://developers.facebook.com/docs/instagram-basic-display-api) - get images, videos, and profile data from users, get hashtag and location data, post to an account programmatically, etc
  - [Spotify API](https://developer.spotify.com/documentation/web-api/) - get music data, create/modify playlists, get top artists/songs for a user, get a song's qualitative features (loudness, excitement, sadness, etc) 
  - [Marvel API](https://developer.marvel.com/docs) - get info about Marvel characters, comics, creators, etc
  - [NASA API](https://api.nasa.gov/index.html) - get Mars weather data, images of cool space stuff, NASA patents, NASA's Astronomy Picture Of the Day
- Pros: feature-rich (does lots of stuff), has good documentation, and reliable (won't suddenly stop working a year from now because the developers got tired of maintaining it)
- Cons: Usually involves more strict authentication, creating an account, paying for access, and generally more overhead that is time-consuming or otherwise costly. ***Important note for projects:*** many of these take days to process your account when you sign up, so make sure you do your research before basing your entire around an API you can't actually access

##### Community-made APIs

These APIs are made by developers like you and I who want to make information more easily accessible to other developers. They usually don't cost money or require an account, but to reduce server costs they will still often require that you register for an API key.

- Examples: 
  - [Open Movie Database](https://www.omdbapi.com/) - get images and information about all sorts of movies
  - [PokeAPI](https://pokeapi.co/) - get information about Pokémon
  - [Open Food Facts](https://world.openfoodfacts.org/data) - get useful information about food 
  - [Kanye.rest](https://kanye.rest/) - get not-so-useful random quotes from Kanye West
- Pros: low-cost, usually open-source, and requires relatively minimal setup (sometimes requires authentication), documentation varies
- Cons: poorly maintained (might stop working one day), documentation varies

### Understanding APIs

To understand APIs enough to be able to use them, I strongly recommend reading [Chapter 2 of Zapier's guide to APIs](https://zapier.com/learn/apis/chapter-2-protocols/), which is about protocols. The article very clearly explains HTTP Requests, Client vs Server, HTTP Methods, (GET, POST, PUT & DELETE) and the basics of how APIs communicate. There is also a little 30-second "homework" exercise at the bottom of the page that illustrates these methods very well.

### JSON

JSON stands for JavaScripst Object Notation. To understand JSON, the most common format APIs use to send us information, read [Chapter 3 of Zapier's guide to APIs](https://zapier.com/learn/apis/chapter-3-data-formats/). It's great. We won't be talking about XML so feel free to skip those parts. Below are some key takeaways about JSON.

The JSON snippet below is an example of what we might receive if we queried an API for information about a pizza we just ordered.

```json
{
    "crust": "original",
    "toppings": ["cheese", "pepperoni", "garlic"],
    "status": "cooking"
}
```

Here the black words are ***Keys*** and the red words are ***values***. Notice that some values are strings ("original" and "cooking"), while the value of "toppings" is an ***array of strings***. Either is acceptable. Also notice that when you read JSON, you are not reading "code", like when you read JavaScript, because this isn't a set of directions for a computer to compile and run. It is simply a way of storing information. If it is helpful you might even call JSON a "dictionary", where you can lookup a word (key) and get its definition (value).

<img src="https://images.zapier.com/storage/photos/5422e3c48cc047fb5c8f29b66367fffb.png?format=jpg" style="zoom:35%;" />



In this way, JSON files are just sets of ***key-value pairs***. And when you want to get a specific piece of information out of a JSON file, the syntax is very easy. For example, if I want to store all of the toppings in a variable called "favoriteToppings", the code would look like this:

```javascript
const apiResponse = {
    "crust": "original",
    "toppings": ["cheese", "pepperoni", "garlic"],
    "status": "cooking"
}
const favoriteToppings = apiResponse.toppings;

// if you wanted to display the word cheese to the console...
console.log(favoriteToppings[0])
```
## 💞 Promises
A promise is what it sounds like, an IOU, or a placeholder. It's an object that says "hey, i'll be right back", and then when we get our API call, our promise says "i'm back!" More technically, a promise can exist in 3 states: Pending, Fulfilled, or Rejected.

More on Async/Await: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await

https://github.com/jlarmstrongiv/tracecamp-winter-2020/blob/main/curriculum/day-0/reference/10-javascript.md#value-types

## 📔 Assignment

Assignment: SWAPI assignment from [Jake's JS guide](https://github.com/jlarmstrongiv/tracecamp-winter-2020/blob/main/curriculum/day-0/reference/10-javascript.md):

using [SWAPI](https://swapi.dev/api/planets/) (the Star Wars API):

- Fetch all the pages of the planets with [axios](https://www.npmjs.com/package/axios)
- Filter out any planets with an unknown population
- Use Map() to display all planet names with their populations 



## 🔗 Resources

- [Zapier's Intro to APIs](https://zapier.com/learn/apis/) - A long but very beginner-friendly explanation of Web APIs and how they work
- [How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data) - Shows how to use Web APIs in React using Hooks. Helpful reference while coding!
- [RapidApi.com](https://rapidapi.com/marketplace) - Find APIs!
- [Public-Apis.io](https://public-apis.io/) - Find APIs!
- [Big list of open APIs - GitHub](https://github.com/public-apis/public-apis) - Find APIs! Some links are dead and some info is outdated, beware
