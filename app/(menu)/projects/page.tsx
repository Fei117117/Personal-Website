import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Fei - My Projects",
  description: "Showcasing my latest web development projects",
};

export default function Projects() {
  const projects = [
    {
      id: "1",
      title: "NYSeeNow",
      description:
        "An innovative web and mobile application designed to transform the tourist experience in Manhattan, New York.",
      imageUrl: "/images/NYSEENOW.png",
      pagePath: "/projects/1/page",
    },
    {
      id: "2",
      title: "RideMate",
      description:
        "A web application designed to enhance the experience of using Dublin Bikes. It provides real-time and predictive information on bike availability and weather conditions.",
      imageUrl: "/images/RIDEMATE.png",
      pagePath: "/projects/2/page",
    },
    {
      id: "3",
      title: "Natour",
      description:
        "Natours is a visually engaging, interactive website designed for a fictional outdoor tour company.",
      imageUrl: "/images/NATOUR.png",
      pagePath: "/projects/3/page",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div
            className="max-w-3xl mx-auto text-center pb-12 md:pb-20"
            data-aos="zoom-y-out"
          >
            <h1 className="h1 mb-4">My Projects</h1>
            <p className="text-lg text-gray-600">
              A showcase of my latest work in web development
            </p>
          </div>

          {/* Projects grid */}
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-aos="zoom-y-out"
          >
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} passHref>
                <div className="flex flex-col h-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-32 object-contain rounded-t-lg"
                  />
                  <div className="p-4 flex-grow">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {project.description}
                    </p>
                  </div>
                  <div className="px-4 pb-4 mt-auto">
                    <span className="text-blue-600 hover:text-blue-700 text-sm">
                      View Project
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
