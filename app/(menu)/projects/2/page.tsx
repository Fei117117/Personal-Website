import Link from "next/link";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: "Fei - RideMate",
};

export default function RideMate() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center" data-aos="zoom-y-out">
          <h1 className="text-5xl font-bold text-gray-800">RideMate</h1>
          <p className="mt-4 text-xl text-gray-600">
            A web application designed to enhance the experience of using Dublin
            Bikes. It provides real-time and predictive information on bike
            availability and weather conditions.
          </p>
        </div>

        <div id="project-overview" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Project Overview
          </h2>
          <div className="mt-4">
            <p className="mt-2 text-gray-600 text-lg">
              The Dublin Bikes Web Application is designed to revolutionize the
              biking experience in Dublin by offering real-time and predictive
              insights on bike station occupancy and weather conditions.
              Tailored for regular cyclists, tourists, and those planning their
              rides around bike availability, this user-friendly platform
              features a real-time station locator, occupancy trend analysis,
              and weather integration. Users can easily find available bikes and
              return spaces, while benefiting from the predictive occupancy
              model that considers weather forecasts. The application's
              interactive interface, displaying maps and historical data,
              ensures a seamless experience. By improving decision-making and
              trip planning, it promises to enhance the efficiency and enjoyment
              of using Dublin Bikes, aligning with the city's sustainable
              transportation goals.
            </p>
          </div>
        </div>
        <div id="technology-stack" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Technology Stack
          </h2>
          <div className="mt-4">
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Frontend: </strong>
              <br />
              1. HTML, CSS, and JavaScript: The core building blocks for
              creating the user interface and handling user interactions.
              <br />
              2. Jinja: Templating engine for reusing Python and Flask variables
              in HTML
              <br />
              3. Google Maps JavaScript API: Used for visualising the location
              of bike stations on an interactive map and displaying additional
              information.
              <br />
              <strong>Backend: </strong>
              <br />
              1. Python: The primary programming language used for developing
              the backend server and related modules.
              <br />
              2. Flask: A lightweight web framework for Python, which helps in
              creating the server-side API endpoints and handling bike station
              occupancy and weather data.
              <br />
              3. SQLAlchemy: A SQL toolkit and Object-Relational Mapping (ORM)
              library for Python, used for managing the database connection and
              executing SQL queries.
              <br />
              4. Google Maps Geocoding API: Used for converting addresses to
              geographic coordinates for station locations.
              <br />
              5. External Weather API: An API for fetching real-time weather
              data based on the user's location.
              <br />
              <strong>Data Analytics and Machine Learning: </strong>
              <br />
              1. Pandas: A Python library for data manipulation and analysis,
              used for processing and preparing the dataset for machine learning
              models.
              <br />
              2. Scikit-learn: A machine learning library for Python, used for
              the development of the predictive model to predict bike station
              occupancy based on weather patterns.
              <br />
              3. Database: MySQL (relational databases) for storing historical
              bike occupancy data, weather data, and other relevant information.
              <br />
              4. NumPy: A library for numerical computing in Python, used for
              handling arrays and mathematical operations in the data processing
              stage.
              <br />
              <strong>Development Tools: </strong>
              <br />
              1. Git: A version control system used for tracking changes in the
              source code and collaborating with other developers.
              <br />
              2. GitHub: A web-based platform for hosting Git repositories and
              managing the project's codebase, issues, and collaboration.
              <br />
              3. Visual Studio Code: A code editor used for writing, debugging,
              and testing the application code.
              <br />
              4. Virtual Environments: Used for isolating Python dependencies
              and managing the project's environment.
              <br />
              5. Diagramming Tool: Lucidchart is used for creating architecture
              diagrams and other visual documentation.
            </p>
          </div>
        </div>
        <div id="architecture" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Archtecture</h2>
          <div className="mt-4">
            <img
              src={`${basePath}/images/RIDEMATE1.png`}
              alt={"NYSeeNow_Architecture"}
              className="w-fulL"
            />
            <p className="mt-2 text-gray-600 text-lg">
              <strong>External APIs: </strong>
              <br />
              1. StationAPI: Provides real-time bike station data and their
              status.
              <br />
              2. WeatherAPI (Open Meteo API): Offers weather data for the given
              location, including current weather, hourly, and daily forecasts.
              <br />
              3. Google Maps API: Displays an interactive map with bike stations
              and possibly real- time availability information.
            </p>
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Database: </strong>
              <br />
              Data storage: Stores bike station, availability and weather data.
              It is an AWS RDS instance using a relational database (MySQL).
            </p>
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Backend (Server-side): </strong>
              <br />
              1. Web server: Handles incoming requests from the frontend,
              processes the requests, and sends responses back to the frontend.
              It is mainly built using Python and a framework like Flask.
              <br />
              2. Database interaction: The backend server connects to the
              database to fetch and store bike station data and availability
              statistics.
            </p>
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Frontend (Client-side): </strong>
              <br />
              1. User Interface (UI): Built with HTML, CSS, and JavaScript, the
              UI provides an interactive map with bike stations, sidebars
              displaying station details, and weather information.
              <br />
              2. JavaScript functions: Handle UI interactions, fetch data from
              external APIs, and render charts using Google Charts.
            </p>
          </div>
        </div>
        <div id="features" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">FEATURES</h2>
          <div className="mt-4">
            <p className="mt-2 text-gray-600 text-lg">
              <strong>
                Display bike stations and occupancy information on a map:
              </strong>
              <br />
              Each bike station is a marker on the map, with its color ranges
              from clear (no available bike) to light blue (very few available
              bikes) to darker blue (more available bikes) and to red (many
              available bikes). When hovering on the marker (in the shape of
              bike), user can see some information on the info window.
            </p>

            <p className="mt-2 text-gray-600 text-lg">
              <strong>Show weather and historical availability:</strong>
              <br />
              When user click on a marker, the information about weather
              (current and in the next 24 hours) and historical average
              availability of bikes and bikestands (by day of week and by hour
              in the same weekday) shows up on the right sidebar.
            </p>
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Predict available bikes:</strong>
              <br />
              When user choose a time of today or tomorrow, they can get the
              prediction of available bikes for that time.
            </p>
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Find 5 nearest stations:</strong>
              <br />
              When user types in the search box, the search box is auto
              completed based on Google Places API. User can choose their
              desired location from the dropdown list. When five nearest
              stations to the chosen location are shown, user can click on each
              options to locate the station and interact with the corresponding
              marker.
            </p>
          </div>
        </div>
        <div id="my-contribution" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            My Contribution
          </h2>
          <div className="mt-4">
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Backend development: </strong>
              <br />I developed a comprehensive database schema for the project,
              ensuring efficient entity relationships, normalization, and
              performance. This involved creating tables with appropriate
              columns, data types, and key constraints. For RDS configuration, I
              managed the setup of an RDS instance, selecting the suitable
              database engine and size, and configuring security and access
              controls, while also monitoring its performance. I integrated
              weather data, fetching and processing it from an API, and
              subsequently writing it to the RDS instance. Additionally, I
              configured and set up the Google Maps API with necessary
              credentials and access controls.
            </p>
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Frontend support: </strong>
              <br />
              I implemented key features to enhance the functionality and user
              interface of a map-based application. These features included:
              <br />
              1. Search Functionality: I developed a search feature allowing
              users to find specific locations. The app responds by showing the
              nearest stations to the searched location, improving user
              navigation and experience.
              <br />
              2. Heat Map: Utilizing the Google Maps API, I implemented a heat
              map to visually represent station availability data. This feature
              helps users quickly identify areas with high or low availability
              of stations, enhancing the app's informational value.
              <br />
              3. Markers: To make individual stations easily identifiable, I
              added markers on the map. These markers were accurately placed
              based on the stations' geographic coordinates and provided
              essential information about each station when clicked, improving
              interactive capabilities.
              <br />
              4. Marker Hover: For an enriched user experience, I incorporated a
              marker hover feature. When a user hovers over a station marker,
              additional information about that station is displayed, making the
              application more informative and user-friendly.
            </p>
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Project management: </strong>
              <br />
              1. Participating in software requirement discussions: Identifying
              and defining key project requirements. Collaborating with team
              members to create a comprehensive and detailed project plan.
              <br />
              2. Product mockups design: Collaborating with the team to create
              visual representations of the user interface. Providing feedback
              and suggestions to improve usability and user experience. Ensuring
              the mockups align with project requirements and specifications.
            </p>
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Deployment and testing: </strong>
              <br />
              1. Running the application on an EC2 instance: Configuring and
              setting up the AWS environment, including security groups and
              access controls. Deploying the application to the EC2 instance and
              configuring necessary services.
              <br />
              2. Monitoring any issues during deployment and testing.
            </p>
          </div>
        </div>
        <div id="technical-challenges-and-solutions" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Technical Challenges and Solutions
          </h2>
          <div className="mt-4">
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Learning Obstacles: </strong>
              The project required the use of several new tools and technologies
              that I was not familiar with. For instance, Flask is a new tool
              for me. The time spent on learning it was much more than I
              expected. Also, the deployment process is also challenging for me.
              To address this challenge, I studied online tutorials to
              understand the tools. Then I started with small projects such as
              show a simple searching table of station information with Flask to
              gain hands-on experience with the new tools. For the deployment, I
              reached out to my teammate and other classmates.
              <br />
              <strong>User Interface Design: </strong>Creating a user interface
              that is both visually appealing and user-friendly posed a
              significant challenge. For example, when designing the left-side
              bar to create the interactions between left-side bar, marker, and
              right-side bar, It took me a long time to design the user flow and
              implement the function. To address this challenge, I firstly
              identify users’ needs then I employed an iterative design process,
              which involved creating mockups, gathering feedback, and refining
              the design.
              <br />
              <strong>Performance optimization: </strong>
              As the application grew in complexity, the performance issue was a
              big challenge for me. For example, after realizing all the
              features we designed, we found that application's overall load
              time increased significantly. To address the performance issue, I
              improved database query performance by refining the SQL queries
              and adding appropriate indexes. On the frontend, I minimized the
              use of heavy libraries and implement a spinner to improve user
              experience.
            </p>
          </div>
        </div>
        <div id="repository-information" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Repository Information
          </h2>
          <div className="mt-4">
            <p className="mt-2 text-gray-600 text-lg">
              https://github.com/Fei117117/RideMate
            </p>
          </div>
        </div>
        {/* Repeat the same structure for other sections... */}

        <div className="text-center mt-12">
          <a
            href={`${basePath}/projects`}
            className="text-blue-600 hover:underline text-lg"
          >
            ← Back to Projects
          </a>
        </div>
      </div>
    </section>
  );
}
