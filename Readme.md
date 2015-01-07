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

  -Intro to Dev Tools/ Finding your way around the page
    -View source
    -change css in elements pane
    -run JS in the console


  Example: DOM Exercise

  If you are having trouble or finish early, check out:
    https://developer.chrome.com/devtools/docs/dom-and-styles

    
       
  -AJAX
    -We need data from other places
    -XMLHttpRequest
    -From JS, make requests to other URLs and get responses.
    -Add new content anytime or change what is displayed based on remote info
    -Web 2.0

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

  The web is now an application platform
    -google maps

But before the nitty-gritty...

Where do sites come from?
  - Old talk

Servers are computers that are meant to share files and data.
  - On the server machine a program is running that is waiting for connections and knows how to handle them
  - For web apps, this is a web server, commonly listening for http requests
    - Data is actually sent via TCP which involves a connection to an IP at a given port number (80 for the web).
    - The bytes that make up the HTTP request are sent via TCP to the server on the appropriate port
    - The web server translates the data received over TCP into an HTTP request and responds accordingly

  - Internet Architecture lite
    -http://www.escotal.com/Images/Network%20parts/osi.gif
  - REST... HTTP as the preferred way to connect systems.
    -Instead of complex and ad hoc request methods, use standard verbs.
    -Allow resources and actions to be identified via URL
    -Don't entangle client-server state

    -Don't need knowledge of the server application internals or specialized client programs to interact with the server
    -...With REST our browser which speaks HTTP can easily interact with the server program
 
How does mapping fit in
  - delta bathymetry catalog
  - walk through how maps function
    --Image tiles as basemap
    --SVG drawn from geometries
    --Images rendered dynamically and sent over the wire

ArcGIS Server API
  -http://resources.arcgis.com/en/help/rest/apiref/ --> Getting started
  - The way you interface with the ArcGIS Server program.. but complex
  - Operations! Identify, query
  - Data are identified by parameters

Esri JS API
  - https://developers.arcgis.com/javascript/jshelp/
  - JS API is a bunch of JS files that knows how to write geo information into SVG, pan a map, etc.
  - Pre-built widgets
  - Tutorials
  - Layer of Javascript between you and the Server API so you don't have to manually construct queries/work with raw data.
  - Built on top of Dojo, a JS library

You should use libraries.
  -Abstract browser differences.
    -Browsers don't all get the DOM right... old versions will always be wrong
    -Provide solutions for easier AJAX, DOM manipulation, and provide prebuilt UI elements
  -jQuery is incredibly popular, but you already have Dojo as a part of the JS API, so you might as well use it


ArcGIS Server itself is populated with data from services published via ArcMap/Catalog, which become the resources you access through the API
  Services exist as processes running on the server.. when the server gets a request for a service
  It passes control to this process which queries the underlying data and produces the desired output
  (PNG for dynamicMapServer, JSON for a query, etc.)

So let's talk publishing.


OUR ARCHITECTURE

SERVER WORK
---Prepare data folders for everyone---

Make staging server connection
Publish simple boundaries
  -Step by step
  -File share as service
  -choose the proper output folder
  -Analyze and note warnings/errors
  -http://help.arcgis.com/en/arcgisdesktop/10.0/help/003r/pdf/geographic_transformations.pdf
  -Publish slow version (see brownbag)
 
Check out the service at the rest endpoint
Work with service manager to edit service
  -Change your max requested features from 1000 to 2000

Talk about service design.. do as much processing as you need to beforehand (project!)
Keep things relatively simple

  
-- Lunnnnch --

TEMPLATE EDITING
  -main focus of the rest of the day.


Drop in simple service to see how it works.
  - Walkthrough
    - Discuss modules
      - shadowing / reassigning trouble
      - separate concerns
      - maintainability
      - Extensibility
  - Change titles/downloads
  - See how legends/downloads work


Another server exercise:
Show you that publishing services isn't really hard. When you run into issues, usually there are proscribed solutions.
Publish three services
  -Depth
  -Elevation
  -Change
  -Fix associated errors in the services

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
