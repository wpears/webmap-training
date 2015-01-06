#SETUP
  Get everyone to log in and visit https://darcgis.water.ca.gov/manager

#BACKGROUND
##How do browsers work? 
  -A browser is a program on your computer that makes requests to other computers on the web for files, parses their responses, and displays the information
  -Content is identified by URLs
  -DNS resolution finds the appropriate computer (say, google's web server) and asks it for a file
  -Typically this is done through a communication system called HTTP, the HyperText Transfer Protocol
    -Dev Tools example
      -GET.. headers, etc.
      -status code, response data, response headers
  -Hypertext? HTML! HyperText Markup Language
    -HTML is a way to structure information
      -what makes it hypertext is the *links* to other documents
      -Following a link results in another HTTP request, DNS resolution, etc.
    -Originally, this is all the WWW was: a way to request information, display documents, and follow embedded links   
    -Now we have google maps 
  
##What's a web app and how do they work?
  -An app is an interactive program in browser
  -How are apps different from sites? 
  -Apps are living programs that can change and be changed at any time.. interactivity is the main focus
    -Compare with a document with links that doesn't change from the time you load it
  -What changed in browsers from their inception to allow the creation of apps?
  -JS! 
    -browsers have a javascript interpreter/engine that allows scripts to be run on any page
      -So what?
  -The DOM!
    -When HTML elements are parsed, they get added to the Document Object Model
    -The DOM is a tree of nodes, with methods for accessing siblings, children, parents, and querying for specific nodes
      -Whiteboard example of tree of nodes
      -Walkthrough of the nodes of a page
      -Show the different functions/properties avaiale on window/document/elements
    -Javascript has a global object where various methods are provided and where global functions and variables are stored.
    -In the browser this object is called window, and provides access to the DOM, including the root node document which gives us access to the root html element.
    -With access to the DOM from Javascript, one can make interactive pages 

  -page vs. app
  -wikipedia vs twitter/facebook
    -wiki: text and images, mostly static, content essentially complete upon load
    -twitter: constantly updated with new information; contents change over time or via interaction.

  Example: DOM Exercise




    
       
  -AJAX
    -XMLHttpRequest
  -HTML5
    -Audio/Video
    -Canvas
    -Geolocation
    -Drag-and-Drop
    -Offline apps
    -Web sockets
    -WebGL!
    -etc!

    These are available as extensions of the DOM or as new HTML elements. 
    
  


   

  -Intro to Dev Tools 

  -do some live examples / live code in some interactivity in a site to show how the web is no longer a document viewer... it's an application platform
  -view source
  -change css in elements pane
  -run JS in the console

  Make them do some of this with an example... maybe water.ca.gov

Where do sites come from?
  - Servers!
  - Internet Architecture lite
  - REST
 
How does mapping fit in
  - delta bathymetry catalog
  - walk through how maps function
    --Image tiles as basemap
    --SVG drawn from geometries
    --Images rendered dynamically and sent over the wire
  - How does this fit in with our understanding of client-side and server side? 

esri JS API and ArcGIS Server API
  - JS API is a bunch of JS files that knows how to write geo into SVG, pan a map, etc.
  - server API is the way to interface with the ArcGIS Server program
  - Operations! Identify, query
  - ArcGIS Server itself is populated with data from services published via ArcMap/Catalog
  - Services exist as processes running on the server.. when the server gets a request for a service
    It passes control to this process which queries the underlying data and produces the desired output
    (PNG for dynamicMapServer, JSON for a query, etc.)

OUR ARCHITECTURE

SERVER WORK
---Prepare data folders for everyone---

Make staging server connection
Publish simple boundaries
  -Step by step
  -File share as service
  -choose the proper output folder
  -Analyze and fix strong warnings/errors
   
Check out the service at the rest endpoint
Work with service manager to edit service
  -Change your max requested features from 1000 to 5000

Talk about service design.. do as much processing as you need to beforehand (project!)
Keep things relatively simple

Another exercise:
Show you that publishing services isn't really hard. When you run into issues, usually there are proscribed solutions.
Publish three services
  -Depth
  -Elevation
  -Change
  -Fix associated errors in the services

  
-- Lunnnnch --

TEMPLATE EDITING
  -main focus of the rest of the day.

Drop in simple service to see how it works.
  - Discuss modules
    -Interactive example with tricky piece of code with shadowing / reassigning trouble
  - Change titles/downloads
  - See how legends/downloads work 
ArcGIS Javascript API

Libraries!~
  -dojo
  -jquery


End of Day 1~



BRING YOUR OWN DATA

Make an app and soar.
  - Fairly free-form

-- Cadre Input --
Prereqs are taking quite a while. Might need to push back date

Two days of training would be best. One for learning, one for building one's own project
