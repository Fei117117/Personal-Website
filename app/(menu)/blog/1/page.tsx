import Link from "next/link";

export default function ProjectOne() {
  // Placeholder data for Project One
  const project = {
    title: "Post 1",
    description:
      "A web application designed to enhance the experience of using Dublin Bikes. It provides real-time and predictive information on bike availability and weather conditions.",
    imageUrl: "/images/RIDEMATE.png", // Path to the image file
    details: [
      {
        title: "Background",
        content: "An overview of the project background and context.",
      },
      {
        title: "Challenges",
        content: "A description of challenges faced during the project.",
      },
      {
        title: "Solutions",
        content: "The solutions implemented to overcome the challenges.",
      },
      {
        title: "Results",
        content: "The results and impact of the project after completion.",
      },
      // More sections as needed...
    ],
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center" data-aos="zoom-y-out">
          <h1 className="text-4xl font-bold text-gray-800">{project.title}</h1>
          <p className="mt-4 text-lg text-gray-600">{project.description}</p>
        </div>

        <div className="mb-8">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full object-cover rounded-lg shadow-md"
          />
        </div>

        {project.details.map((detail, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              {detail.title}
            </h2>
            <p className="mt-2 text-gray-600">{detail.content}</p>
          </div>
        ))}

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
