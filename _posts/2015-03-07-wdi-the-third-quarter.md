---
layout: post
title: 'WDI: The Third Quarter'
date: 2015-03-07 13:15:32.000000000 +11:00
categories: wdi learning
---

_**Previous post:** [WDI: The Halfway Mark](http://www.liamdarmody.com/blog/wdi-the-halfway-mark/ "WDI: The Halfway Mark")_

We’ve just hit the 3/4 mark. We've been focused on JavaScript Frameworks the past few weeks. Here's what we covered.

_**Week 7: JavaScript Frameworks**_

*   Comprehensive JavaScript Lab
*   jQuery
*   Advanced DOM manipulation / traversal
*   Events / Animation
*   Plugins
*   AJAX
*   Project Management & Project Planning

In preparation for our upcoming project, we covered a whole lot more JavaScript. We learnt how to traverse and manipulate the [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction "Document Object Model (DOM): Introduction") with jQuery and AJAX, and plenty more. At the end of the week, we jumped into our groups and got cracking on Project Two. My group set out to build a Leap Motion Music Visualiser. We’ll be coding a lot of JavaScript over the coming week.

_**Week 8: Group Project Week**_

As expected, this project was a real challenge. It was extremely JavaScript heavy and we’ve only covered the basics in class. We were using a number of JavaScript libraries and APIs. Here's a full list of the technologies we used:

* [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API "Web Audio API")
* [Three.js](http://threejs.org/ "Three.js")
* [Soundcloud API](https://developers.soundcloud.com/docs/api "Soundcloud API")
* [Leap Motion Javascript SDK](https://developer.leapmotion.com/documentation/javascript/api/Leap_Classes.html "Leap Motion JavaScript SDK")
* [Ruby on Rails](http://rubyonrails.org/ "Ruby on Rails")

If you’re curious to see how much Javascript was involved, check out our rake stats below:

![WDI Project Two - Stats](/public/images/blog/wdi-project-two-stats.png)

Want to dig deeper? Take a look our [Demo Site](http://zensations.herokuapp.com/ "Zensations Demo Site") and [Github Repository](https://github.com/faryar88/Zensations "Zensations Github Repository"). On the demo site, you can select a song from Soundcloud and paste it into the Zensations track field. The visualisations offered are Disco Attack and Space Slug. You will be able to interact with the visualisations using a mouse, touch pad or Leap Motion device.

Shout out to [Mario](https://github.com/martimatix "Mario - Github") and [Faryar](https://github.com/faryar88 "Faryar - Github") for being awesome team members. A big thank you to [Joel](https://github.com/wofockham "Joel - Github") and [Jack](https://github.com/anonymous-wolf "Jack - Github") for answering our countless questions throughout the project. I'd also like to thank WDI graduates [Xaun](https://github.com/xaun "Xaun - Github"), [Charlie](https://github.com/charliegerard "Charlie - Github") and [Daisy](https://github.com/daisymarie128 "Daisy - Github") for their guidance.

_**Week 9: Client Side JavaScript Frameworks**_

* JavaScript Templating
* Backbone.js
* [Burning Airlines](https://gist.github.com/wofockham/7d9ef83a3362c8d4d8af "Burning Airlines")

After a week of Backbone.js we were put into groups for the dreaded Burning Airlines project. We were tasked to build an Airlines Reservation System using Rails and Backbone. We've been told that no student has ever finished it before. How reassuring.

As expected, we found the project incredibly challenging. The finished product looked half decent and allowed administrators to create, edit and destroy planes. The plane and flight CRUD (Create, Read, Update and Delete) systems were created using Rails Scaffolding. The customer-facing search page was built using Backbone. We successfully built the Backbone models, views and collections that allowed a user to view a list of flights and flight information. The seat plan was successfully rendered on the flight view and we were able to save seat information to the server.

Unfortunately we ran out of time and were unable to get the reservation system working as it should. Currently, the system allows seats to be booked multiple times. It's like it's been built for an American airline that consistently overbooks their flights. At this stage of the game, Burning Airlines can offer customers two options - to share their seat with a fellow passenger or wait for the next flight with a token voucher for the inconvenience. While we didn't get it finished, we definitely gave it a good shot. Good work [Tom](https://github.com/tomvalorsa "Tom Valorsa") and [Julia](https://github.com/julia- "Julia Ryan")!

Next week, we move into the final quarter - everything from performance and optimisation to computer science basics & our final project!

![Zensations - Visualiser](/public/images/blog/zensations-visualiser.png)