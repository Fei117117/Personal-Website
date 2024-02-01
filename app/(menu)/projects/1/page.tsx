import Link from "next/link";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: "Fei - NYSeeNow",
};

export default function NYSeeNow() {
  return (
    <section className="bg-white py-12">
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
        <div id="project-overview" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Project Overview
          </h2>
          <div className="mt-4">
            <p className="mt-2 text-gray-600 text-lg">
              NYSeeNow is an innovative web and mobile application that empowers
              tourists and residents to navigate the vibrant attractions of
              Manhattan, New York, with ease. Our mission is to revolutionize
              the urban exploration experience by offering real-time predictions
              of venue busyness, enabling effective travel planning and
              congestion reduction at popular sites. Utilizing advanced machine
              learning algorithms and data mining techniques, we analyze vast
              datasets, including taxi and subway usage, along with weather
              patterns, to deliver precise busyness forecasts.
            </p>
          </div>
        </div>
        <div id="technology-stack" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Technology Stack
          </h2>
          <div className="mt-4">
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Programming Languages: </strong>Java (back end),
              HTML/CSS/JavaScript (front end)and Python (machine learning and
              certain microservices).
              <br />
              <strong>Frameworks and Libraries: </strong>Spring Boot (Java) for
              the primary back-end services and Flask (Python) for
              micro-services and ML interfacing. Hibernate is used to interact
              with the database. React.js was chosen as the Javascript library
              to develop the front end.
              <br />
              <strong>Database: </strong>PostgreSQL.
              <br />
              <strong>Hosting & Deployment: </strong>Docker for containerisation
              and deployment on the UCD (University College Dublin) server.
              <br />
              <strong>Security & Authentication: </strong>Leveraging Spring
              Security, we ensured secure interactions, authorized API
              endpoints, verified logins with Form-based Authentication, and
              safeguarded passwords using BCrypt hashing.
              <br />
              <strong>Testing: </strong>Our robust testing approach encompassed
              performance checks with Apache Bench and JMeter, security scans
              via OWASP ZAP and API evaluations using Postman.
            </p>
          </div>
        </div>
        <div id="architecture" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Archtecture</h2>
          <div className="mt-4">
            <p className="mt-2 text-gray-600 text-lg">
              The application's backbone is a meticulously designed architecture
              encompassing five main components: the Front End, Back End,
              External APIs, a dedicated Flask ML (Machine Learning)
              Micro-service, and a robust DevOps pipeline.
            </p>
            <img
              src={`${basePath}/images/NYSEENOW1.png`}
              alt={"NYSeeNow_Architecture"}
              className="w-fulL"
            />
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Front End </strong>
              <br />
              The user’s primary touchpoint, it showcases information and
              captures inputs. It integrates with the Google Maps API for map
              services and communicates with the back end through RESTful APIs.
            </p>
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Back End</strong>
              <br />
              Developed using Java Spring Boot, it is the core of our
              application, managing logic and data. It splits into: <br />
              1. Business Layer: This is where our core application logic
              resides. It ensures that user requests are processed accurately
              and efficiently. <br />
              2. Persistence Layer: This layer acts as the bridge between our
              application and the database. The Persistence Layer leverages JPA
              (Java Persistence API) to manage data storage and retrieval,
              underpinned by Amazon RDS to guarantee data storage reliability
              and scalability.
            </p>
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Flask ML Micro-service</strong>
              <br />
              We harness a diverse array of data—from NYC taxi flows to
              real-time weather conditions—analyzed using sophisticated models
              to predict busyness accurately. The ML Micro-service was built
              using Flask. It exposes endpoints that the Spring Boot backend can
              call to get prediction data. The micro-service ensures that our ML
              operations are isolated from the main business logic, offering
              scalability and ease of updates.
            </p>
            <p className="mt-2 text-gray-600 text-lg">
              <strong>External APIs</strong>
              <br />
              Our application benefits from data sourced from various external
              APIs. This data was initially scraped and stored in
              CSV(Comma-Separated Values) format, after which it was uploaded to
              the database.
            </p>
            <p className="mt-2 text-gray-600 text-lg">
              <strong>DevOps</strong>
              <br />
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
        <div id="features-and-functionality" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Features and Functionality
          </h2>
          <p className="mt-2 text-gray-600 text-lg">
            The application required the following user-flows to incorporate
            features that met the expectations of the application:
          </p>
          <div className="mt-4">
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Login & Register: </strong> To facilitate the retention
              and retrieval of created trips, the implementation of a user login
              feature becomes essential. This stems from the fact that trip data
              necessitates association with distinct users for storage purposes.
              To realise this objective, a Login and Register User-flow was
              devised. This user flow interfaces with the back end through the
              utilisation of RESTful API calls, effectively establishing the
              vital connection required to facilitate the secure saving and
              access of trip data under individual user contexts.
              <br />
              <strong>Now Mode: </strong> The NowModeButton provides an
              interactive toggle for real-time busyness visualisation of NYC.
              Upon activation, it dynamically shifts its background to indicate
              the current mode and reveals the integrated WeatherCard, giving
              users a snapshot of the current weather. This combined visual
              experience, achieved through React’s state management, offers
              users both busyness and weather insights. The underlying heat map
              utilises React’s Google Maps API.
              <br />
              <strong>Locator: </strong>
              The Locator feature is an integral component designed to provide
              users with optimal walking routes between selected attractions in
              NYC. By leveraging the Google Maps Directions Service, the Locator
              dynamically calculates and displays the most efficient walking
              path for a given set of attractions. The user flow involves
              selecting desired attractions, after which the Locator fetches the
              best route, highlighting it on the map. The route’s total walking
              time is also computed, offering users a comprehensive
              understanding of their journey. This feature is seamlessly
              integrated with the application’s context, ensuring a smooth and
              intuitive user experience. The Locator’s implementation is
              primarily in React, utilising the react-google-maps/API for map
              interactions and the Locator Context for state management.
              <br />
              <strong>Trip Planner: </strong> One of the core features of the
              application was enabling users to plan a trip in advance. This is
              implemented by including the prediction data fetched from the
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
        <div id="development-process" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Development Process
          </h2>
          <div className="mt-4">
            <p className="mt-2 text-gray-600 text-lg">
              Our team consisted of six members, each assigned a specific lead
              role. The roles were: Data Lead, Coordination Lead, Front-End Code
              Lead, Customer Lead, Back-End Code Lead and Maintenance Lead. This
              structure allowed us to divide tasks effectively and ensure that
              all crucial aspects of the project are covered, from data
              analytics to front-end and back-end development, UI design and
              code quality assurance. Despite our defined roles, we actively
              engaged in diverse tasks to expand our skills and knowledge. To
              ensure effective communication and collaboration, we established
              clear communication rules, met regularly, used a
              'feature-develop-main' branching strategy for code integration,
              and managed tasks via Trello. Decisions were typically made
              collaboratively during our meetings, with the lead of the relevant
              area having the final say.
            </p>
          </div>
        </div>
        <div id="my-role" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">My Role</h2>
          <p className="mt-2 text-gray-600 text-lg">
            As the Maintenance Lead in the project, my contributions were both
            technical and collaborative, ensuring the project’s successful
            execution. My primary role in the project was to ensure code quality
            and compatibility across all teams. However, my contributions
            weren’t confined to my primary role. I contributed to architecture
            design, API Design and Implementation, database management, server
            setup, deployment, and even front-end tasks.
          </p>
          <div className="mt-4">
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Architecture Design: </strong>I designed the structure for
              the entire project, ensuring smooth communication between all
              parts. See the architecture diagram.
              <br />
              <strong>Code Quality Assurance: </strong>I instituted best
              practices for coding standards and version control, meticulously
              reviewed code for quality, and maintained thorough documentation
              to enhance understanding and collaboration across the team.
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
              deletion, fetching user-specific trip lists, and updating trips.
              <br />
              Busyness Prediction: Designed and implemented Flask prediction API
              micro-service. It is connected with our prediction model to
              predict the busyness of attractions or itineraries and communicate
              with Spring Boot back end component.
              <br />
              <strong>Database Management: </strong>I architected the database
              schema and managed the Amazon RDS instance, facilitating efficient
              data management.
              <br />
              <strong>Server Setup and Configuration: </strong>I directed the
              deployment strategy, initially via Amazon EC2 using Jenkins for
              automatic CI/CD and subsequently through Docker on a UCD server,
              optimizing the application’s deployment process with a keen eye
              for security and efficiency. Nginx was used as a reverse proxy to
              route traffic to different back end services.
              <br />
              <strong>Front-end Development: </strong>While my primary focus
              remained on back-end tasks, I also contribute to front-end
              development. I actively participated in crafting the user
              registration, reset functionalities, itinerary editing, and the
              update-delete features for the trip list.
            </p>
          </div>
        </div>
        <div id="technical-challenges-and-solutions" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Technical Challenges and Solutions
          </h2>
          <p className="mt-2 text-gray-600 text-lg">
            Throughout the project, I navigated numerous technical hurdles:
          </p>
          <div className="mt-4">
            <p className="mt-2 text-gray-600 text-lg">
              <strong>Security: </strong>
              The first challenge I met was the security issue. To ensure that
              only authorized users could access the critical components of the
              application, I implemented a Security Filter Chain using Spring
              Security to define access rules for various routes. Aware of the
              significant risks of storing passwords in plain text, I used
              Bcrypt for password hashing. I also implemented session-based
              authentication, which was essential for maintaining user states
              and managing resources.
              <br />
              <strong>Deployment: </strong>Initially, we deployed our
              application across three separate EC2 servers. This approach
              proved to be inefficient, especially in setting up connections. To
              address these issues and optimize our deployment process, we
              shifted to using Docker. By containerizing each application
              components and using Docker networks, we established a more
              coherent connection between the containers and were able to host
              the entire application on a single server (UCD server). At the
              final stage of deployment, I encounter a new challenge with the
              UCD server only exposing port 80. So I decided to use Nginx to
              consolidate external access through a single port.
              <br />
              <strong>Machine Learning Model Integration: </strong>
              Integrating the machine learning model into our Java back end
              posed compatibility problems since the models were in pickle
              format. I initially tried converting the pickle model to PMML, but
              this attempt proved unsuccessful. I then utilized Flask to
              integrate with prediction model and server it as an API
              microservice, ensuring smooth interaction with our back end.
              <br />
              <strong>Code Compatibility and Quality: </strong>Ensuring code
              com- patibility and quality across different parts of the project
              was a constant challenge. As the Maintenance Lead, I reviewed the
              codebase regularly, identifying and addressing any compatibility
              issues, particularly during front end and back end integration
              process.
              <br />
            </p>
          </div>
        </div>
        <div id="repository-information" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Repository Information
          </h2>
          <div className="mt-4">
            <p className="mt-2 text-gray-600 text-lg">
              Frontend: https://github.com/Fei117117/NYSeeNow <br />
              Backend: https://github.com/Fei117117/NYSeeNow-backend <br />
              Micro-service: https://github.com/Fei117117/NYSeeNow-ML
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
