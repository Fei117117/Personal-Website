import Link from "next/link";
import React from "react";

export const metadata = {
  title: "My Projects - Web Developer",
  description: "Showcasing my latest web development projects",
};

export default function Projects() {
  // Dummy data for projects, replace with your actual project data
  const projects = [
    {
      id: "1",
      title: "Project One",
      description: "Description of Project One...",
      imageUrl: "/images/1.png", // Update the path as necessary
      pagePath: "/projects/1/page", // Assuming you have a page.tsx in the folder project-1
    },
    // ... other projects
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
            <h1 className="h1">My Projects</h1>
            <p className="text-lg text-gray-600">
              A showcase of my latest work in web development
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} passHref>
                <div className="bg-white rounded-lg shadow overflow-hidden cursor-pointer">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                    <span className="text-blue-600 hover:underline mt-2 inline-block">
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
