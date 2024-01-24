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

        <div id="introduction" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">INTRODUCTION</h2>
          <div className="mt-4">
            <p className="mt-2 text-gray-600 text-lg">
              The repository is for the Dublin bikes app. The project scrapped
              data from
              <a href="https://developer.jcdecaux.com/#/home" target="_blank">
                {" "}
                JCDecauxAPI
              </a>{" "}
              and
              <a href="https://openweathermap.org/api" target="_blank">
                {" "}
                OpenWeather API
              </a>{" "}
              to get data about bikes for 3 months. The Scrapper ran in an
              <a href="https://aws.amazon.com/pm/ec2/" target="_blank">
                {" "}
                AWS EC2
              </a>{" "}
              instance and stored data in an{" "}
              <a href="https://aws.amazon.com/rds/" target="_blank">
                {" "}
                AWS RDS{" "}
              </a>
              (
              <a href="https://www.mysql.com/" target="_blank">
                MySQL
              </a>
              ). An ML model was developed with this data and deployed on a
              <a
                href="https://flask.palletsprojects.com/en/2.3.x/"
                target="_blank"
              >
                {" "}
                Flask
              </a>{" "}
              instance.
            </p>
          </div>
        </div>

        <div id="features" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">FEATURES</h2>
          <div className="mt-4">
            <h3 className="text-2xl text-gray-700 font-medium">
              Display bike stations and occupancy information on a map
            </h3>
            <p className="mt-2 text-gray-600 text-lg">
              Each bike station is a marker on the map, with its color ranges
              from clear (no available bike) to light blue (very few available
              bikes) to darker blue (more available bikes) and to red (many
              available bikes). When hovering on the marker (in the shape of
              bike), user can see some information on the info window.
            </p>
            <h3 className="text-2xl text-gray-700 font-medium">
              Show weather and historical availability
            </h3>
            <p className="mt-2 text-gray-600 text-lg">
              When user click on a marker, the information about weather
              (current and in the next 24 hours) and historical average
              availability of bikes and bikestands (by day of week and by hour
              in the same weekday) shows up on the right sidebar.
            </p>
            <h3 className="text-2xl text-gray-700 font-medium">
              Predict available bikes
            </h3>
            <p className="mt-2 text-gray-600 text-lg">
              When user choose a time of today or tomorrow, they can get the
              prediction of available bikes for that time.
            </p>
            <h3 className="text-2xl text-gray-700 font-medium">
              Find 5 nearest stations
            </h3>
            <p className="mt-2 text-gray-600 text-lg">
              When user types in the search box, the search box is auto
              completed based on Google Places API. User can choose their
              desired location from the dropdown list. When five nearest
              stations to the chosen location are shown, user can click on each
              options to locate the station and interact with the corresponding
              marker.
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
