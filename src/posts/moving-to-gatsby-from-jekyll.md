---
layout: post
title:  "Moving to Gatsby from Jekyll"
image: "./gatsby-from-jekyll-header-LG.jpg"
date:   2019-05-06 20:20:00 +0000
author: Dale
categories: ["gatsby", "javascript", "jekyll"]
---

I talk about why I decided to move idesignpixels.com from a static [Jekyll](https://jekyllrb.com/) site to a static [Gatsby](https://www.gatsbyjs.org/) site and why you may also want to.

## The goal of "idesignpixels"

I had been wanting to have a creative outlet to to share some of my discoveries and journeys whilst working as a developer, something simple where I can create \*hopefully engaging content about front end development and design that I myself would have found helpful when learning as well as to come back and reference.

About 4 years ago I started working professionally and was very fortunate to be in a position to try and explore many new and emerging frameworks, view libraries and tools.

I learned among many other things:
* [Polymer](https://www.polymer-project.org/)
* [Angular](https://angularjs.org/)
* [React](https://reactjs.org/)
* [Vue](https://vuejs.org/)
* [Meteor](https://www.meteor.com/)
* [Ionic](https://ionicframework.com/)
* [Node](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
* [Drupal](https://www.drupal.org/)
* [Wordpress](https://wordpress.com/)

I really wanted to get this site up and running but kept changing my mind depending on what I was learning at the time, perhaps using polymer and the shadow DOM? maybe Google's Angular? no wait! what about Meteor and MongoDB!.
As you can see I had a major option paralysis and couldn't settle on a single approach.

## Why I chose Jekyll

Eventually I came across [Jekyll](https://jekyllrb.com/) from seeing some other peoples blogs and after some research it was very straight forward and easy to setup and took much of the thinking out of what tools to use and simply got the content out there.

I decided to go ahead with [Jekyll](https://jekyllrb.com/) and got the site up and running pretty quickly, don't get me wrong there were some problems and restrictions around this approach but finally the end goal was clear and more importantly in sight.

I wrote some initial posts and gradually added to them all whilst continuing my full time developer job, still learning but also starting to find out my own preferences.

# Becoming clearer

I didn't know it at the time of creating the [Jekyll](https://jekyllrb.com/) site but I would start to have a strong preference and working relationship with [React](https://reactjs.org/) and it's flexibility that lends itself to continually evolve and stay relatively simple.

<adsense></adsense>

When I start new projects I always like to try and use something new each time, whether it's a new programming style, tool or framework. This way I can make much more informed decisions when planning a projects architecture.

Fast forward a year or so and one particular [React](https://reactjs.org/) project I was starting needed strong SEO.
[React](https://reactjs.org/) and SEO has been a shadowy subject where most solutions seemed too heavy, came with consequences or were too new and emerging to invest in, it was time for something new.  
During a conversation with a co-worker [Next](https://nextjs.org/) and [Gatsby](https://www.gatsbyjs.org/) were mentioned while we talked about potentially server rendering the [React](https://reactjs.org/) application, although we'd never used them before I decided to spend some time checking them out.

After some initial skepticism thinking it was just a way to render your application server side I was pleasantly surprised when looking at [Gatsby](https://www.gatsbyjs.org/) as it also uses [GraphQL](https://graphql.org/) to communicate with data sources, I had build some apps that interacted with a headless CMS in the past and it was often a little painful and at least a little too much work than I wanted to do in my spare time with this site.

The more I explored [Gatsby](https://www.gatsbyjs.org/) and how it uses [Markdown](https://en.wikipedia.org/wiki/Markdown) and [Contentful](https://www.contentful.com/) data sources I saw how simple it was to implement, how little maintenance it needed and best of all I had the freedom of [React](https://reactjs.org/) components to take control of UI how I wanted, not easily done with [Jekyll](https://jekyllrb.com/).

After using I decided as the title of this post suggests to move to [Gatsby](https://www.gatsbyjs.org/) from [Jekyll](https://jekyllrb.com/) for exactly these reasons and for the most part it was really simple and easy.  
I decided to build from the ground up but keep the same simple design as before this time adding the features I wish I could have done with [Jekyll](https://jekyllrb.com/) from the start, as for the data source I'm continuing to use markdown for the posts, fortunately [Gatsby](https://www.gatsbyjs.org/) has some great plugins to handle markdown.


## Conclusion

I have no ill feeling towards [Jekyll](https://jekyllrb.com/) I always knew it was and still is a simple tool for rapid development, it's served its purpose for me but it was time to have more control using the tools I love.

Should you move from [Jekyll](https://jekyllrb.com/) to [Gatsby](https://www.gatsbyjs.org/)?  
Well that really depends if you're comfortable with [React](https://reactjs.org/), if you are you'll enjoy the flexibility it has because it gives you the best of [Jekyll](https://jekyllrb.com/) and [React](https://reactjs.org/) in one as well as some really cool features like transforming data with graphQl and handling image loading like a pro with a single query line.

## One more thing...

As I mentioned before I always like to try something new with every new project and this was no exception, I've been putting off [css grids](https://www.w3schools.com/css/css_grid.asp) for awhile as professionally it seemed a little too risky having limited browser support but now most modern browsers support the [css grid spec](https://www.w3.org/TR/css-grid-1/), see here [browser support](https://caniuse.com/#feat=css-grid).  
I went ahead and started adding it to this site on the main layout structure and a few components and will continue adding it in other areas in the future and write some posts detailing my findings but so far I'm very impressed! more soon...
