"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function NYSeeNow() {
  // Placeholder data for Project One
  const project = {
    title: "NYSeeNow",
    details: [
      {
        title: "Introduction",
      },
      {
        title: "Overall Architecture and Design",
      },
      {
        title: "Back-end",
      },
      {
        title: "Front-end",
      },
      {
        title: "Data Analytics and Visualization",
      },
      {
        title: "My Role",
      },
    ],
  };

  interface Detail {
    title: string;
  }

  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const [showSidebar, setShowSidebar] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // useEffect for scroll events
  useEffect(() => {
    let timeoutId: number;

    const handleScroll = () => {
      const targetSection = document.getElementById(
        "overall-architecture-and-design"
      );

      // Determine the current section based on scroll position
      const sections = [
        "introduction",
        "overall-architecture-and-design",
        "back-end",
        "front-end",
        "data-analytics-and-visualization",
        "my-role",
      ];

      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
      });

      setCurrentSection(current || null);

      if (targetSection) {
        const position = targetSection.getBoundingClientRect();
        setShowSidebar(position.top <= window.innerHeight);
      }
      // Clear any existing timeout to hide the sidebar
      clearTimeout(timeoutId);
      // Set a timeout to hide the sidebar after 2 seconds of no scrolling
      timeoutId = window.setTimeout(() => {
        if (!isHovering) {
          setShowSidebar(false);
        }
      }, 1500); // Adjust the timeout duration as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId); // Clear the timeout when the component unmounts
    };
  }, [isHovering]);

  const Sidebar = ({
    details,
    show,
    currentSection,
  }: {
    details: Detail[];
    show: boolean;
    currentSection: string | null;
  }) => {
    return (
      <div
        className="sidebar"
        style={{
          display: show ? "block" : "none",
          position: "fixed",
          top: "20%",
          left: "0",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          width: "150px",
          padding: "2px",
          borderRadius: "10px",
          fontSize: "20px",
        }}
      >
        <ul style={{ listStyleType: "none", padding: "15px" }}>
          {details.map((detail: Detail, index: number) => {
            const isActive =
              detail.title.replace(/\s+/g, "-").toLowerCase() ===
              currentSection;
            return (
              <li
                key={index}
                style={{
                  marginBottom: "2px",
                  opacity: isActive ? "1" : "0.5",
                }}
              >
                <a href={`#${detail.title.replace(/\s+/g, "-").toLowerCase()}`}>
                  {detail.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <section className="bg-white py-12">
      <Sidebar
        details={project.details}
        show={showSidebar}
        currentSection={currentSection}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center" data-aos="zoom-y-out">
          <h1 className="text-5xl font-bold text-gray-800">NYSeeNow</h1>
          <p className="mt-4 text-xl text-gray-600">
            An innovative web and mobile application designed to transform the
            tourist experience in Manhattan, New York.
          </p>
        </div>

        {/* <div className="video-container mb-8">
          <video controls width="100%">
            <source src="/videos/NYSEENOW_VIDEO.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}

        <div id="introduction" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">INTRODUCTION</h2>
          <div className="mt-4">
            <p className="mt-2 text-gray-600 text-lg">
              NYSeeNow is a web and mobile application that aides tourists or
              residents navigate the bustling attractions in Manhattan, New
              York. We aid the user by providing accurate real-time busyness
              predictions. The objectives of this project are to enhance the
              overall tourist experience, optimise travel planning, and
              alleviate congestion at popular attractions. To achieve these
              goals, we adopted a combination of methodologies such as machine
              learning algorithms, data mining techniques, and more to analyse
              and utilise taxi and subway data, weather conditions, and other
              factors, in order to accurately calculate and predict busyness.
              While developing the application, we focused on a user-centric
              design, incorporating several UX design principles. The project
              was developed by a six-member team who used the scrum methodology
              to manage the development process. The key findings of this
              project demonstrate that NYSeeNow successfully predicts the
              busyness of Manhattan’s tourist attractions, enabling users to
              plan their visits strategically and optimise their stay in
              Manhattan. The application’s seamless integration of data science
              and pertinent information provides tourists with personalised
              itineraries and insights, enhancing their overall experience in
              the city.
            </p>
          </div>
        </div>
        <div id="overall-architecture-and-design" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            OVERALL ARCHITECTURE AND DESIGN
          </h2>
          <div className="mt-4">
            <p className="mt-2 text-gray-600 text-lg">
              The architecture of our application is composed of five main
              components: Front end, Back end, External APIs, Flask ML(Machine
              Learning) Micro-service, and DevOps.
            </p>
            <img
              src={"/images/NYSEENOW1.png"}
              alt={project.title}
              className="w-fulL"
            />
            <h3 className="text-2xl text-gray-700 font-medium">Front End</h3>
            <p className="mt-2 text-gray-600 text-lg">
              The user’s primary touchpoint, it showcases information and
              captures inputs. It integrates with the Google Maps API for map
              services and communicates with the backend through RESTful APIs.
            </p>
            <h3 className="text-2xl text-gray-700 font-medium">Back End</h3>
            <p className="mt-2 text-gray-600 text-lg">
              Developed using Java Spring Boot, it is the core of our
              application, managing logic and data. It splits into: <br />
              <strong>Business Layer:</strong> This is where our core
              application logic resides. It ensures that user requests are
              processed accurately and efficiently. <br />
              <strong>Persistence Layer:</strong>
              This layer acts as the bridge be- tween our application and the
              database. The Persistence Layer leverages JPA (Java Persistence
              API) to manage data storage and retrieval.
              <br />
              Amazon RDS is our chosen platform for data storage. It offers
              reliability, scalability, and seamless integration with our back
              end.
            </p>
            <h3 className="text-2xl text-gray-700 font-medium">
              Flask ML Microservice
            </h3>
            <p className="mt-2 text-gray-600 text-lg">
              The ML Micro-service was built using Flask. It exposes endpoints
              that the Spring Boot backend can call to get prediction data. The
              micro-service ensures that our ML operations are isolated from the
              main business logic, offering scalability and ease of updates.
            </p>
            <h3 className="text-2xl text-gray-700 font-medium">
              External APIs
            </h3>
            <p className="mt-2 text-gray-600 text-lg">
              Our application benefits from data sourced from various external
              APIs. This data was initially scraped and stored in
              CSV(Comma-Separated Values) format, after which it was uploaded to
              the database.
            </p>
            <h3 className="text-2xl text-gray-700 font-medium">DevOps</h3>
            <p className="mt-2 text-gray-600 text-lg">
              The development process started with writing followed by the
              testing of our code. Once ready for deployment, the application is
              dockerized and pushed to Docker Hub. For deployment, the image was
              pulled from Docker Hub and run on the target server, ensuring a
              consistent and isolated environment for our application. We used
              Nginx as a reverse proxy to manage traffic and have containerised
              components (front end, both back ends, and Nginx) for easier
              scalability and management.
            </p>
          </div>
        </div>
        <div id="back-end" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">BACK-END</h2>
          <div className="mt-4">
            <h3 className="text-2xl text-gray-700 font-medium">
              Technologies, Libraries and Frameworks
            </h3>
            <p className="mt-2 text-gray-600 text-lg">
              Our application was constructed using the following tools:
              <br />
              <strong>Programming Languages:</strong> Java (back end) and Python
              (machine learning and certain micro-services).
              <br />
              <strong>Frameworks:</strong> Spring Boot (Java) for the primary
              back-end services and Flask (Python) for lightweight services and
              ML interfacing.
              <br /> <strong>Database:</strong> PostgreSQL, a robust database
              system.
              <br /> <strong>Hosting & Deployment:</strong> Docker for
              containerisation and deployment on the UCD(University College
              Dublin) server.
              <br /> <strong>Security & Authentication:</strong> Leveraging
              Spring Security, we ensured secure interactions, authorized API
              endpoints, verified logins with Form-based Authentication, and
              safeguarded passwords using BCrypt hashing.
              <br /> <strong>Testing:</strong> Our robust testing approach
              encompassed performance checks with Apache Bench and JMeter,
              security scans via OWASP ZAP and API evaluations using Postman.
            </p>
            <h3 className="text-2xl text-gray-700 font-medium">
              API Endpoints
            </h3>
            <p className="mt-2 text-gray-600 text-lg">
              <strong>User Authentication:</strong> Dedicated endpoints for user
              registration, login, and password reset. These endpoints
              incorporate secure password hashing and session-based
              authentication mechanisms.
              <br />
              <strong>User Profile:</strong> Fetching user-specific data.
              <br /> <strong>Attraction Details:</strong> Retrieve comprehensive
              details about various attractions.
              <br /> <strong>Trip Management:</strong> Endpoints for creating,
              updating, fetching, and deleting user-specific trip lists.
              <br /> <strong>Busyness Prediction:</strong> A specialised Flask
              microservice interfaces with our prediction model, estimating the
              busyness of attractions and itineraries.
            </p>
            <h3 className="text-2xl text-gray-700 font-medium">
              Data Entities
            </h3>
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Attraction:</strong>Represents user-planned trips.
              <br />
              <strong>Trip:</strong> Fetching user-specific data.
              <br /> <strong>TripAttraction:</strong> A bridge linking trips
              with the attractions they include.
              <br /> <strong>UserAccount:</strong> Retains information about
              registered users.
            </p>
          </div>
        </div>
        <div id="front-end" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">FRONT-END</h2>
          <div className="mt-4">
            <h3 className="text-2xl text-gray-700 font-medium">
              Technologies, Libraries and Frameworks
            </h3>
            <p className="mt-2 text-gray-600 text-lg">
              <strong>React.js:</strong> React.js was chosen as the Javascript
              library to develop the front end based on several important
              factors.
              <br />
              <strong>Create React App:</strong> The development tool that
              utilised React.js for the development of the application was
              _Create React App_ (CRA). Using CRA, initiating, configuring, and
              launching the React.js application was streamlined. The toolkit of
              CRA includes _Babel_ and _Webpack_, which facilitate the efficient
              transformation of code, its consolidation, and subsequent
              optimisation. CRA is therefore suitable for both novices and
              seasoned developers, as it offers an avenue for prototyping,
              coding, and releasing single-page applications, websites, and even
              multifaceted web-based systems.
            </p>
            <h3 className="text-2xl text-gray-700 font-medium">
              User-flows and Features
            </h3>
            <p className="mt-2 text-gray-600 text-lg">
              The application required the following user-flows to incorporate
              features that met the expectations of the application:
            </p>
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Login & Register:</strong> To facilitate the retention and
              retrieval of created trips, the implementation of a user login
              feature becomes essential. This stems from the fact that trip data
              necessitates association with distinct users for storage purposes.
              To realize this objective, a Login and Register User-flow was
              devised. This user flow interfaces with the back end through the
              utilisation of RESTful API calls, effectively establishing the
              vital connection required to facilitate the secure saving and
              access of trip data under individual user contexts.
              <br />
              <strong>Now Mode:</strong> The NowModeButton provides an
              interactive toggle for real-time busyness visualisation of NYC.
              Upon activation, it dynamically shifts its background to indicate
              the current mode and reveals the integrated WeatherCard, giving
              users a snapshot of the current weather. This combined visual
              experience, achieved through React’s state management, offers
              users both busyness and weather insights. The underlying heat map
              utilizes React’s Google Maps API.
              <br /> <strong>Locator:</strong> The Locator feature is an
              integral component designed to provide users with optimal walking
              routes between selected attractions in NYC. By leveraging the
              Google Maps Directions Service, the Locator dynamically calculates
              and displays the most efficient walking path for a given set of
              attractions. The user flow involves selecting desired attractions,
              after which the Locator fetches the best route, highlighting it on
              the map. The route’s total walking time is also computed, offering
              users a comprehensive understanding of their journey. This feature
              is seamlessly integrated with the application’s context, ensuring
              a smooth and intuitive user experience. The Locator’s
              implementation is primarily in React, utilizing the
              react-google-maps/API for map interactions and the Locator Context
              for state management.
              <br /> <strong>Trip Planner:</strong>One of the core features of
              the application was enabling users to plan a trip in advance. This
              is implemented by including the prediction data fetched from the
              machine learning models developed using NYC taxi and subway data
              sets. The user flow consists of three distinct page transitions
              and two interactions with the back-end via RESTful API calls. The
              user can select attractions from the home page map, define their
              trip’s start and end dates, and allocate specific visit days for
              each chosen attraction to fetch prediction data for all the
              attractions over each visit day.
            </p>
          </div>
        </div>
        <div id="data-analytics-and-visualization" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            DATA ANALYTICS AND VISUALIZATION
          </h2>
          <div className="mt-4">
            <h3 className="text-2xl text-gray-700 font-medium">Data Sets</h3>
            <p className="mt-2 text-gray-600 text-lg">
              We gathered the following data sets in order to predict busyness
              at Manhattan’s attractions:
            </p>
            <p className="mt-2 text-gray-600 text-lg">
              <strong>NYC Yellow Taxi Data:</strong> The 2019 NYC Taxi database
              contains around 68 million taxicab trip records. The records
              include the following fea- tures: pick-up time, drop-off time,
              pickup region, drop-off region, trip distance etc.
              <br />
              <strong>NYC Overpass Turbo Data:</strong> Overpass Turbo, a
              powerful tool for extracting Open- StreetMap data, was used to
              create a query to retrieve information about tourist-centric
              attractions in Manhattan. This query directed the extraction of
              data on tourism-related nodes, paths, and relationships within
              Manhattan. This was used by the front end to display all of the
              relevant tourist locations in Manhattan.
              <br />
              <strong>NYC Subway Turnstile Data:</strong> We utilized three
              different data sets to compile the subway data. The first data set
              contained the turnstile usage statistics for NYC subway stations
              which are provided by the NYC Metropolitan Transportation
              Authority (MTA). The follow- ing details are included in the value
              records every four hours: station-ID, turnstile-ID, record time,
              entry value, exit value, etc. The second data set contained all of
              the station names and coordinates of the stations in the turnstile
              data, and was also provided by the MTA. Finally, we found a lookup
              table to map the turnstile data to each station, on GitHub.
              <br />
              <strong>2019 OpenWeather Data:</strong> We queried OpenWeather’s
              OneCall API to obtain every hour of weather data in 2019. This
              data set included important features such as temperature, rain and
              snow fall, allowing us to determine if the weather has an effect
              on attraction busyness.
              <br />
              <strong>BestTime API:</strong> BestTime API is a data service that
              forecasts how busy a business is at a given hour of the week using
              foot traffic data gained from anonymous phone signals. It returns
              busyness data as a percentage. We queried BestTime API to collect
              busyness data on locations in Manhattan, resulting in busy- ness
              predictions for every hour in the week for more than 170
              attractions.
            </p>
            <h3 className="text-2xl text-gray-700 font-medium">
              Algorithms and Models
            </h3>
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Taxi Model:</strong> This model focuses on predicting
              busyness based on taxi drop-off data. It involves forecasting
              passenger counts and calculating a relative busyness metric. The
              use of Random Forest models seems apt due to its proficiency with
              categorical features.
              <br />
              <strong>Subway Model:</strong> This integrates subway and weather
              data to predict busyness. The adoption of the Weibull Min
              distribution for better representing the data and refining the
              model with Random Forest regressors demonstrates a thoughtful
              approach to achieving accurate predictions.
            </p>
          </div>
        </div>
        <div id="my-role" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">MY ROLE</h2>
          <p className="mt-2 text-gray-600 text-lg">
            As the Maintenance Lead in the project, my contributions were both
            technical and collaborative, ensuring the project’s successful
            execution. My primary role in the project was to ensure code quality
            and compatibility across all teams. However, my contributions
            weren’t confined to my primary role. I contributed to architecture
            design, API Design and Implementation, database management, server
            setup, deploy- ment, and even front-end tasks.
          </p>
          <div className="mt-4">
            <h3 className="text-2xl text-gray-700 font-medium">
              Technical Contributions
            </h3>
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Architecture Design:</strong> I designed the structure for
              the entire project, ensuring smooth communication between all
              parts. See the architec- ture diagram.
              <br />
              <strong>Code Quality Assurance:</strong> I prioritized various
              aspects to ensure the highest standards of code quality: <br />
              Establishing Coding Practices: I established good practices for
              version control. I set up the feature-develop-main branching
              strategy, moving features from individual branches to development
              and finally to the main branch after testing. <br /> Ensuring Code
              Compatibility: I played a key role in ensuring that our code was
              compatible across different parts of the project. By consistently
              reviewing team code and addressing compatibility issues, I ensured
              seamless interaction between our front-end, back-end, and machine
              learning components. <br /> Code Cleanliness and Documentation: I
              consistently cleaned up the codebase to make it easier to read and
              work with. Additionally, I inserted comments to ensure that the
              code remained understandable for all members of the team. <br />
              Conducting Code Reviews: Reviewed code regularly to identify
              potential bugs, logic flaws, or security risks, ensuring
              robustness and reliability of the code.
              <br />
              <strong>
                Back-end Development/API Design and Implementation:
              </strong>
              I took charge of designing and implementing the API endpoints.
              Using the Java Spring Boot framework, I developed a range of APIs
              for various functions: <br />
              User Authentication: Created endpoints for user registration,
              login and password reset, integrating secure password hashing and
              session-based authentication. <br />
              User Profile: Developed endpoints to fetch user-specific
              information. <br />
              Trip Management: Designed APIs for trip list creation and
              deletion, fetching user-specific trip lists, and updating trips.{" "}
              <br />
              Busyness Prediction: Designed and implemented Flask prediction API
              micro-service. It is connected with our prediction model to
              predict the busyness of attractions or itineraries and communicate
              with Spring Boot back end component.
              <br />
              <strong>Database Management:</strong> Another major responsibility
              of mine was managing the project’s database. I set up an Amazon
              RDS database instance for scalable and reliable data storage. The
              front-end lead and I designed a comprehensive database schema that
              included tables for trips, attractions, and trip-attraction
              associations. I implemented this schema in PostgreSQL, ensuring
              efficient storage and retrieval of application data. I also
              designed a user account database schema for the user login,
              register and reset password feature. To enhance database
              operations and simplify table creations, I integrated JPA for
              effective object-relational mapping and streamlined CRUD
              functionalities.
              <br />
              <strong>Server Setup and Configuration:</strong> I implemented
              dual deployment strategies, using both Ama- zon EC2 and the UCD
              server. On EC2, I configured Jenkins with a personal access token
              for GitHub integration, enabling automatic CI/CD whenever code
              changes occurred. After successfully deploying using EC2 and
              Jenkins, I then set up the server provided by the university.
              Docker was installed on UCD server, preparing it for the next
              phase of deployment.
              <br />
              <strong>Deployment:</strong> I played a critical role in deploying
              our application. Initially, I utilized three EC2 servers with
              Jenkins, each assigned to handle the back end, front end, and
              Flask micro-service components. This approach proved to be
              inefficient, especially in setting up connections. To optimize
              deployment, I collaborated closely with the front-end code lead.
              Together, we decided to leverage Docker to containerize our
              application, enhancing its deployment efficiency. During the final
              phase of deployment, I decided to use Nginx as a reverse proxy to
              route traffic to different back end services while exposing only
              port 80 for the front end. With Nginx, we can effectively test and
              use our Spring Boot and Flask back ends without exposing their
              specific ports to the external world. So I built separate Docker
              images for each part (front end, Spring Boot back end, Flask back
              end) and a fourth Docker image for Nginx. This setup ensures that
              each component of our application (including the reverse proxy) is
              containerized, making it easier to manage, scale, or replace parts
              of your infrastructure as needed.
              <br />
              <strong>Front-end Development:</strong> While my primary focus
              remained on back-end tasks, I also contribute to front-end
              development. I actively participated in crafting the user
              registration, reset functionalities, itinerary editing, and the
              update-delete features for the trip list.
            </p>
            <h3 className="text-2xl text-gray-700 font-medium">
              Teamwork Contribution
            </h3>
            <p className="mt-2 text-gray-600 text-lg">
              As a member of the project team, I made several valuable
              contributions:
            </p>
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Feature Ideas:</strong> At the start of our project, I was
              actively involved in brainstorming sessions. I helped to come up
              with creative ideas for application features.
              <br />
              <strong>Active Participation in Meetings:</strong> Throughout the
              project, I consistently attended group meetings to share my
              progress, raise any issues I encountered, and discuss potential
              solutions. I also contributed to the planning of our next steps,
              ensuring that our team stayed on track towards our project goals.
              <strong>Collaboration with Front-end Team:</strong> I collaborated
              closely with the front-end team to ensure a smooth connection
              between the front end and back end component. For example, I
              worked with the front-end Code Lead to design the API endpoints,
              which involved aligning on data request and response formats. We
              also collaborated to resolve Cross-Origin Resource Sharing (CORS)
              issues, which were crucial for the front-end application to make
              requests to our back-end server.
              <br />
              <strong>Collaboration with Data Team:</strong> I also collaborated
              closely with the Data team to ensure an effective integration of
              our prediction model. This involved setting up a Flask API
              endpoint that utilize the model and transmitted prediction data to
              Spring Boot back end.
              <br />
              <strong>Problem-solving:</strong> My assistance extended beyond my
              primary duties. I often found myself assisting team members in
              troubleshooting issues and resolving technical errors. I also
              wrote detailed guidelines to help the team set up and run both
              back-end and Flask codes locally.
            </p>
          </div>
        </div>
        {/* Repeat the same structure for other sections... */}

        <div className="text-center mt-12">
          <Link href="/projects">
            <div className="text-blue-600 hover:underline text-lg">
              ← Back to Projects
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
