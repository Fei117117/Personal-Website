1:HL["/Personal-Website/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
2:HL["/Personal-Website/_next/static/css/1a1e386cf48fb5be.css","style",{"crossOrigin":""}]
0:["Wf65Dak7oXK9eKfXlVquJ",[[["",{"children":["(menu)",{"children":["projects",{"children":["1",{"children":["__PAGE__",{}]}]}]}]},"$undefined","$undefined",true],"$L3",[[["$","link","0",{"rel":"stylesheet","href":"/Personal-Website/_next/static/css/1a1e386cf48fb5be.css","precedence":"next","crossOrigin":""}]],"$L4"]]]]
5:HL["/Personal-Website/_next/static/css/65aa3619a1925c9d.css","style",{"crossOrigin":""}]
6:I[4689,["326","static/chunks/326-d6fa33696876feca.js","185","static/chunks/app/layout-0927dfc1ff8f6bfc.js"],""]
7:I[6954,[],""]
8:I[7264,[],""]
9:I[7250,["326","static/chunks/326-d6fa33696876feca.js","496","static/chunks/496-5894c08cc623828f.js","72","static/chunks/app/(menu)/layout-d8542be93bfa29ef.js"],""]
d:I[8326,["326","static/chunks/326-d6fa33696876feca.js","199","static/chunks/app/(menu)/projects/1/page-3c23e3e3c7ed4047.js"],""]
4:[["$","meta","0",{"charSet":"utf-8"}],["$","title","1",{"children":"Fei - NYSeeNow"}],["$","meta","2",{"name":"description","content":"Generated by create next app"}],["$","meta","3",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","meta","4",{"name":"next-size-adjust"}]]
b:T4f6,NYSeeNow is a web and mobile application that aides tourists or residents navigate the bustling attractions in Manhattan, New York. We aid the user by providing accurate real-time busyness predictions. The objectives of this project are to enhance the overall tourist experience, optimise travel planning, and alleviate congestion at popular attractions. To achieve these goals, we adopted a combination of methodologies such as machine learning algorithms, data mining techniques, and more to analyse and utilise taxi and subway data, weather conditions, and other factors, in order to accurately calculate and predict busyness. While developing the application, we focused on a user-centric design, incorporating several UX design principles. The project was developed by a six-member team who used the scrum methodology to manage the development process. The key findings of this project demonstrate that NYSeeNow successfully predicts the busyness of Manhattan’s tourist attractions, enabling users to plan their visits strategically and optimise their stay in Manhattan. The application’s seamless integration of data science and pertinent information provides tourists with personalised itineraries and insights, enhancing their overall experience in the city.c:T44e, I played a critical role in deploying our application. Initially, I utilized three EC2 servers with Jenkins, each assigned to handle the back end, front end, and Flask micro-service components. This approach proved to be inefficient, especially in setting up connections. To optimize deployment, I collaborated closely with the front-end code lead. Together, we decided to leverage Docker to containerize our application, enhancing its deployment efficiency. During the final phase of deployment, I decided to use Nginx as a reverse proxy to route traffic to different back end services while exposing only port 80 for the front end. With Nginx, we can effectively test and use our Spring Boot and Flask back ends without exposing their specific ports to the external world. So I built separate Docker images for each part (front end, Spring Boot back end, Flask back end) and a fourth Docker image for Nginx. This setup ensures that each component of our application (including the reverse proxy) is containerized, making it easier to manage, scale, or replace parts of your infrastructure as needed.3:[null,["$","html",null,{"lang":"en","children":["$","body",null,{"className":"__variable_aa4d39 font-inter antialiased bg-white text-gray-900 tracking-tight","children":["$","div",null,{"className":"flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip","children":[["$","$L6",null,{}],["$","$L7",null,{"parallelRouterKey":"children","segmentPath":["children"],"loading":"$undefined","loadingStyles":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","template":["$","$L8",null,{}],"templateStyles":"$undefined","notFound":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":"404"}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"notFoundStyles":[],"childProp":{"current":[null,["$","$L9",null,{"children":["$","$L7",null,{"parallelRouterKey":"children","segmentPath":["children","(menu)","children"],"loading":"$undefined","loadingStyles":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","template":["$","$L8",null,{}],"templateStyles":"$undefined","notFound":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":"404"}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"notFoundStyles":[],"childProp":{"current":["$","$L7",null,{"parallelRouterKey":"children","segmentPath":["children","(menu)","children","projects","children"],"loading":"$undefined","loadingStyles":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","template":["$","$L8",null,{}],"templateStyles":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined","childProp":{"current":["$","$L7",null,{"parallelRouterKey":"children","segmentPath":["children","(menu)","children","projects","children","1","children"],"loading":"$undefined","loadingStyles":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","template":["$","$L8",null,{}],"templateStyles":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined","childProp":{"current":["$La",["$","section",null,{"className":"bg-white py-12","children":["$","div",null,{"className":"max-w-2xl mx-auto px-4 sm:px-6 lg:px-8","children":[["$","div",null,{"className":"mb-12 text-center","data-aos":"zoom-y-out","children":[["$","h1",null,{"className":"text-5xl font-bold text-gray-800","children":"NYSeeNow"}],["$","p",null,{"className":"mt-4 text-xl text-gray-600","children":"An innovative web and mobile application designed to transform the tourist experience in Manhattan, New York."}]]}],["$","div",null,{"id":"introduction","className":"mb-12","children":[["$","h2",null,{"className":"text-3xl font-semibold text-gray-800","children":"INTRODUCTION"}],["$","div",null,{"className":"mt-4","children":["$","p",null,{"className":"mt-2 text-gray-600 text-lg","children":"$b"}]}]]}],["$","div",null,{"id":"overall-architecture-and-design","className":"mb-12","children":[["$","h2",null,{"className":"text-3xl font-semibold text-gray-800","children":"OVERALL ARCHITECTURE AND DESIGN"}],["$","div",null,{"className":"mt-4","children":[["$","p",null,{"className":"mt-2 text-gray-600 text-lg","children":"The architecture of our application is composed of five main components: Front end, Back end, External APIs, Flask ML(Machine Learning) Micro-service, and DevOps."}],["$","img",null,{"src":"/Personal-Website/images/NYSEENOW1.png","alt":"NYSeeNow_Architecture","className":"w-fulL"}],["$","h3",null,{"className":"text-2xl text-gray-700 font-medium","children":"Front End"}],["$","p",null,{"className":"mt-2 text-gray-600 text-lg","children":"The user’s primary touchpoint, it showcases information and captures inputs. It integrates with the Google Maps API for map services and communicates with the backend through RESTful APIs."}],["$","h3",null,{"className":"text-2xl text-gray-700 font-medium","children":"Back End"}],["$","p",null,{"className":"mt-2 text-gray-600 text-lg","children":["Developed using Java Spring Boot, it is the core of our application, managing logic and data. It splits into: ",["$","br",null,{}],["$","strong",null,{"children":"Business Layer:"}]," This is where our core application logic resides. It ensures that user requests are processed accurately and efficiently. ",["$","br",null,{}],["$","strong",null,{"children":"Persistence Layer:"}],"This layer acts as the bridge be- tween our application and the database. The Persistence Layer leverages JPA (Java Persistence API) to manage data storage and retrieval.",["$","br",null,{}],"Amazon RDS is our chosen platform for data storage. It offers reliability, scalability, and seamless integration with our back end."]}],["$","h3",null,{"className":"text-2xl text-gray-700 font-medium","children":"Flask ML Microservice"}],["$","p",null,{"className":"mt-2 text-gray-600 text-lg","children":"The ML Micro-service was built using Flask. It exposes endpoints that the Spring Boot backend can call to get prediction data. The micro-service ensures that our ML operations are isolated from the main business logic, offering scalability and ease of updates."}],["$","h3",null,{"className":"text-2xl text-gray-700 font-medium","children":"External APIs"}],["$","p",null,{"className":"mt-2 text-gray-600 text-lg","children":"Our application benefits from data sourced from various external APIs. This data was initially scraped and stored in CSV(Comma-Separated Values) format, after which it was uploaded to the database."}],["$","h3",null,{"className":"text-2xl text-gray-700 font-medium","children":"DevOps"}],["$","p",null,{"className":"mt-2 text-gray-600 text-lg","children":"The development process started with writing followed by the testing of our code. Once ready for deployment, the application is dockerized and pushed to Docker Hub. For deployment, the image was pulled from Docker Hub and run on the target server, ensuring a consistent and isolated environment for our application. We used Nginx as a reverse proxy to manage traffic and have containerised components (front end, both back ends, and Nginx) for easier scalability and management."}]]}]]}],["$","div",null,{"id":"back-end","className":"mb-12","children":[["$","h2",null,{"className":"text-3xl font-semibold text-gray-800","children":"BACK-END"}],["$","div",null,{"className":"mt-4","children":[["$","h3",null,{"className":"text-2xl text-gray-700 font-medium","children":"Technologies, Libraries and Frameworks"}],["$","p",null,{"className":"mt-2 text-gray-600 text-lg","children":["Our application was constructed using the following tools:",["$","br",null,{}],["$","strong",null,{"children":"Programming Languages:"}]," Java (back end) and Python (machine learning and certain micro-services).",["$","br",null,{}],["$","strong",null,{"children":"Frameworks:"}]," Spring Boot (Java) for the primary back-end services and Flask (Python) for lightweight services and ML interfacing.",["$","br",null,{}]," ",["$","strong",null,{"children":"Database:"}]," PostgreSQL, a robust database system.",["$","br",null,{}]," ",["$","strong",null,{"children":"Hosting & Deployment:"}]," Docker for containerisation and deployment on the UCD(University College Dublin) server.",["$","br",null,{}]," ",["$","strong",null,{"children":"Security & Authentication:"}]," Leveraging Spring Security, we ensured secure interactions, authorized API endpoints, verified logins with Form-based Authentication, and safeguarded passwords using BCrypt hashing.",["$","br",null,{}]," ",["$","strong",null,{"children":"Testing:"}]," Our robust testing approach encompassed performance checks with Apache Bench and JMeter, security scans via OWASP ZAP and API evaluations using Postman."]}],["$","h3",null,{"className":"text-2xl text-gray-700 font-medium","children":"API Endpoints"}],["$","p",null,{"className":"mt-2 text-gray-600 text-lg","children":[["$","strong",null,{"children":"User Authentication:"}]," Dedicated endpoints for user registration, login, and password reset. These endpoints incorporate secure password hashing and session-based authentication mechanisms.",["$","br",null,{}],["$","strong",null,{"children":"User Profile:"}]," Fetching user-specific data.",["$","br",null,{}]," ",["$","strong",null,{"children":"Attraction Details:"}]," Retrieve comprehensive details about various attractions.",["$","br",null,{}]," ",["$","strong",null,{"children":"Trip Management:"}]," Endpoints for creating, updating, fetching, and deleting user-specific trip lists.",["$","br",null,{}]," ",["$","strong",null,{"children":"Busyness Prediction:"}]," A specialised Flask microservice interfaces with our prediction model, estimating the busyness of attractions and itineraries."]}],["$","h3",null,{"className":"text-2xl text-gray-700 font-medium","children":"Data Entities"}],["$","p",null,{"className":"mt-2 text-gray-600 text-lg","children":[["$","strong",null,{"children":"Attraction:"}],"Represents user-planned trips.",["$","br",null,{}],["$","strong",null,{"children":"Trip:"}]," Fetching user-specific data.",["$","br",null,{}]," ",["$","strong",null,{"children":"TripAttraction:"}]," A bridge linking trips with the attractions they include.",["$","br",null,{}]," ",["$","strong",null,{"children":"UserAccount:"}]," Retains information about registered users."]}]]}]]}],["$","div",null,{"id":"front-end","className":"mb-12","children":[["$","h2",null,{"className":"text-3xl font-semibold text-gray-800","children":"FRONT-END"}],["$","div",null,{"className":"mt-4","children":[["$","h3",null,{"className":"text-2xl text-gray-700 font-medium","children":"Technologies, Libraries and Frameworks"}],["$","p",null,{"className":"mt-2 text-gray-600 text-lg","children":[["$","strong",null,{"children":"React.js:"}]," React.js was chosen as the Javascript library to develop the front end based on several important factors.",["$","br",null,{}],["$","strong",null,{"children":"Create React App:"}]," The development tool that utilised React.js for the development of the application was _Create React App_ (CRA). Using CRA, initiating, configuring, and launching the React.js application was streamlined. The toolkit of CRA includes _Babel_ and _Webpack_, which facilitate the efficient transformation of code, its consolidation, and subsequent optimisation. CRA is therefore suitable for both novices and seasoned developers, as it offers an avenue for prototyping, coding, and releasing single-page applications, websites, and even multifaceted web-based systems."]}],["$","h3",null,{"className":"text-2xl text-gray-700 font-medium","children":"User-flows and Features"}],["$","p",null,{"className":"mt-2 text-gray-600 text-lg","children":"The application required the following user-flows to incorporate features that met the expectations of the application:"}],["$","p",null,{"className":"mt-2 text-gray-600 text-lg","children":[["$","strong",null,{"children":"Login & Register:"}]," To facilitate the retention and retrieval of created trips, the implementation of a user login feature becomes essential. This stems from the fact that trip data necessitates association with distinct users for storage purposes. To realize this objective, a Login and Register User-flow was devised. This user flow interfaces with the back end through the utilisation of RESTful API calls, effectively establishing the vital connection required to facilitate the secure saving and access of trip data under individual user contexts.",["$","br",null,{}],["$","strong",null,{"children":"Now Mode:"}]," The NowModeButton provides an interactive toggle for real-time busyness visualisation of NYC. Upon activation, it dynamically shifts its background to indicate the current mode and reveals the integrated WeatherCard, giving users a snapshot of the current weather. This combined visual experience, achieved through React’s state management, offers users both busyness and weather insights. The underlying heat map utilizes React’s Google Maps API.",["$","br",null,{}]," ",["$","strong",null,{"children":"Locator:"}]," The Locator feature is an integral component designed to provide users with optimal walking routes between selected attractions in NYC. By leveraging the Google Maps Directions Service, the Locator dynamically calculates and displays the most efficient walking path for a given set of attractions. The user flow involves selecting desired attractions, after which the Locator fetches the best route, highlighting it on the map. The route’s total walking time is also computed, offering users a comprehensive understanding of their journey. This feature is seamlessly integrated with the application’s context, ensuring a smooth and intuitive user experience. The Locator’s implementation is primarily in React, utilizing the react-google-maps/API for map interactions and the Locator Context for state management.",["$","br",null,{}]," ",["$","strong",null,{"children":"Trip Planner:"}],"One of the core features of the application was enabling users to plan a trip in advance. This is implemented by including the prediction data fetched from the machine learning models developed using NYC taxi and subway data sets. The user flow consists of three distinct page transitions and two interactions with the back-end via RESTful API calls. The user can select attractions from the home page map, define their trip’s start and end dates, and allocate specific visit days for each chosen attraction to fetch prediction data for all the attractions over each visit day."]}]]}]]}],["$","div",null,{"id":"data-analytics-and-visualization","className":"mb-12","children":[["$","h2",null,{"className":"text-3xl font-semibold text-gray-800","children":"DATA ANALYTICS AND VISUALIZATION"}],["$","div",null,{"className":"mt-4","children":[["$","h3",null,{"className":"text-2xl text-gray-700 font-medium","children":"Data Sets"}],["$","p",null,{"className":"mt-2 text-gray-600 text-lg","children":"We gathered the following data sets in order to predict busyness at Manhattan’s attractions:"}],["$","p",null,{"className":"mt-2 text-gray-600 text-lg","children":[["$","strong",null,{"children":"NYC Yellow Taxi Data:"}]," The 2019 NYC Taxi database contains around 68 million taxicab trip records. The records include the following fea- tures: pick-up time, drop-off time, pickup region, drop-off region, trip distance etc.",["$","br",null,{}],["$","strong",null,{"children":"NYC Overpass Turbo Data:"}]," Overpass Turbo, a powerful tool for extracting Open- StreetMap data, was used to create a query to retrieve information about tourist-centric attractions in Manhattan. This query directed the extraction of data on tourism-related nodes, paths, and relationships within Manhattan. This was used by the front end to display all of the relevant tourist locations in Manhattan.",["$","br",null,{}],["$","strong",null,{"children":"NYC Subway Turnstile Data:"}]," We utilized three different data sets to compile the subway data. The first data set contained the turnstile usage statistics for NYC subway stations which are provided by the NYC Metropolitan Transportation Authority (MTA). The follow- ing details are included in the value records every four hours: station-ID, turnstile-ID, record time, entry value, exit value, etc. The second data set contained all of the station names and coordinates of the stations in the turnstile data, and was also provided by the MTA. Finally, we found a lookup table to map the turnstile data to each station, on GitHub.",["$","br",null,{}],["$","strong",null,{"children":"2019 OpenWeather Data:"}]," We queried OpenWeather’s OneCall API to obtain every hour of weather data in 2019. This data set included important features such as temperature, rain and snow fall, allowing us to determine if the weather has an effect on attraction busyness.",["$","br",null,{}],["$","strong",null,{"children":"BestTime API:"}]," BestTime API is a data service that forecasts how busy a business is at a given hour of the week using foot traffic data gained from anonymous phone signals. It returns busyness data as a percentage. We queried BestTime API to collect busyness data on locations in Manhattan, resulting in busy- ness predictions for every hour in the week for more than 170 attractions."]}],["$","h3",null,{"className":"text-2xl text-gray-700 font-medium","children":"Algorithms and Models"}],["$","p",null,{"className":"mt-2 text-gray-600 text-lg","children":[["$","strong",null,{"children":"Taxi Model:"}]," This model focuses on predicting busyness based on taxi drop-off data. It involves forecasting passenger counts and calculating a relative busyness metric. The use of Random Forest models seems apt due to its proficiency with categorical features.",["$","br",null,{}],["$","strong",null,{"children":"Subway Model:"}]," This integrates subway and weather data to predict busyness. The adoption of the Weibull Min distribution for better representing the data and refining the model with Random Forest regressors demonstrates a thoughtful approach to achieving accurate predictions."]}]]}]]}],["$","div",null,{"id":"my-role","className":"mb-12","children":[["$","h2",null,{"className":"text-3xl font-semibold text-gray-800","children":"MY ROLE"}],["$","p",null,{"className":"mt-2 text-gray-600 text-lg","children":"As the Maintenance Lead in the project, my contributions were both technical and collaborative, ensuring the project’s successful execution. My primary role in the project was to ensure code quality and compatibility across all teams. However, my contributions weren’t confined to my primary role. I contributed to architecture design, API Design and Implementation, database management, server setup, deploy- ment, and even front-end tasks."}],["$","div",null,{"className":"mt-4","children":[["$","h3",null,{"className":"text-2xl text-gray-700 font-medium","children":"Technical Contributions"}],["$","p",null,{"className":"mt-2 text-gray-600 text-lg","children":[["$","strong",null,{"children":"Architecture Design:"}]," I designed the structure for the entire project, ensuring smooth communication between all parts. See the architec- ture diagram.",["$","br",null,{}],["$","strong",null,{"children":"Code Quality Assurance:"}]," I prioritized various aspects to ensure the highest standards of code quality: ",["$","br",null,{}],"Establishing Coding Practices: I established good practices for version control. I set up the feature-develop-main branching strategy, moving features from individual branches to development and finally to the main branch after testing. ",["$","br",null,{}]," Ensuring Code Compatibility: I played a key role in ensuring that our code was compatible across different parts of the project. By consistently reviewing team code and addressing compatibility issues, I ensured seamless interaction between our front-end, back-end, and machine learning components. ",["$","br",null,{}]," Code Cleanliness and Documentation: I consistently cleaned up the codebase to make it easier to read and work with. Additionally, I inserted comments to ensure that the code remained understandable for all members of the team. ",["$","br",null,{}],"Conducting Code Reviews: Reviewed code regularly to identify potential bugs, logic flaws, or security risks, ensuring robustness and reliability of the code.",["$","br",null,{}],["$","strong",null,{"children":"Back-end Development/API Design and Implementation:"}],"I took charge of designing and implementing the API endpoints. Using the Java Spring Boot framework, I developed a range of APIs for various functions: ",["$","br",null,{}],"User Authentication: Created endpoints for user registration, login and password reset, integrating secure password hashing and session-based authentication. ",["$","br",null,{}],"User Profile: Developed endpoints to fetch user-specific information. ",["$","br",null,{}],"Trip Management: Designed APIs for trip list creation and deletion, fetching user-specific trip lists, and updating trips."," ",["$","br",null,{}],"Busyness Prediction: Designed and implemented Flask prediction API micro-service. It is connected with our prediction model to predict the busyness of attractions or itineraries and communicate with Spring Boot back end component.",["$","br",null,{}],["$","strong",null,{"children":"Database Management:"}]," Another major responsibility of mine was managing the project’s database. I set up an Amazon RDS database instance for scalable and reliable data storage. The front-end lead and I designed a comprehensive database schema that included tables for trips, attractions, and trip-attraction associations. I implemented this schema in PostgreSQL, ensuring efficient storage and retrieval of application data. I also designed a user account database schema for the user login, register and reset password feature. To enhance database operations and simplify table creations, I integrated JPA for effective object-relational mapping and streamlined CRUD functionalities.",["$","br",null,{}],["$","strong",null,{"children":"Server Setup and Configuration:"}]," I implemented dual deployment strategies, using both Ama- zon EC2 and the UCD server. On EC2, I configured Jenkins with a personal access token for GitHub integration, enabling automatic CI/CD whenever code changes occurred. After successfully deploying using EC2 and Jenkins, I then set up the server provided by the university. Docker was installed on UCD server, preparing it for the next phase of deployment.",["$","br",null,{}],["$","strong",null,{"children":"Deployment:"}],"$c",["$","br",null,{}],["$","strong",null,{"children":"Front-end Development:"}]," While my primary focus remained on back-end tasks, I also contribute to front-end development. I actively participated in crafting the user registration, reset functionalities, itinerary editing, and the update-delete features for the trip list."]}],["$","h3",null,{"className":"text-2xl text-gray-700 font-medium","children":"Teamwork Contribution"}],["$","p",null,{"className":"mt-2 text-gray-600 text-lg","children":"As a member of the project team, I made several valuable contributions:"}],["$","p",null,{"className":"mt-2 text-gray-600 text-lg","children":[["$","strong",null,{"children":"Feature Ideas:"}]," At the start of our project, I was actively involved in brainstorming sessions. I helped to come up with creative ideas for application features.",["$","br",null,{}],["$","strong",null,{"children":"Active Participation in Meetings:"}]," Throughout the project, I consistently attended group meetings to share my progress, raise any issues I encountered, and discuss potential solutions. I also contributed to the planning of our next steps, ensuring that our team stayed on track towards our project goals.",["$","strong",null,{"children":"Collaboration with Front-end Team:"}]," I collaborated closely with the front-end team to ensure a smooth connection between the front end and back end component. For example, I worked with the front-end Code Lead to design the API endpoints, which involved aligning on data request and response formats. We also collaborated to resolve Cross-Origin Resource Sharing (CORS) issues, which were crucial for the front-end application to make requests to our back-end server.",["$","br",null,{}],["$","strong",null,{"children":"Collaboration with Data Team:"}]," I also collaborated closely with the Data team to ensure an effective integration of our prediction model. This involved setting up a Flask API endpoint that utilize the model and transmitted prediction data to Spring Boot back end.",["$","br",null,{}],["$","strong",null,{"children":"Problem-solving:"}]," My assistance extended beyond my primary duties. I often found myself assisting team members in troubleshooting issues and resolving technical errors. I also wrote detailed guidelines to help the team set up and run both back-end and Flask codes locally."]}]]}]]}],["$","div",null,{"className":"text-center mt-12","children":["$","$Ld",null,{"href":"/projects","passHref":true,"className":"text-blue-600 hover:underline text-lg","children":"← Back to Projects"}]}]]}]}],null],"segment":"__PAGE__"},"styles":[]}],"segment":"1"},"styles":[]}],"segment":"projects"},"styles":[]}],"params":{}}],null],"segment":"(menu)"},"styles":[["$","link","0",{"rel":"stylesheet","href":"/Personal-Website/_next/static/css/65aa3619a1925c9d.css","precedence":"next","crossOrigin":""}]]}]]}]}]}],null]
a:null
