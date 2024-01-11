import Link from "next/link";
import React from "react";

export const metadata = {
  title: "My Blog - Web Developer",
  description: "Insights and articles on web development",
};

export default function Blog() {
  // Dummy data for blog posts, replace with your actual blog data
  const blogPosts = [
    {
      id: 1,
      title: "Blog Post One",
      description: "Brief description of Blog Post One...",
      imageUrl: "/images/BLOG1.webp", // Replace with your image path
      blogUrl: "/blog/1/page", // Replace with your blog post link
    },
    // ... other blog posts
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
            <h1 className="h1 mb-4">My Blog</h1>
            <p className="text-lg text-gray-600">
              Sharing my thoughts and experiences in software development
            </p>
          </div>

          {/* Blog posts grid */}
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-aos="zoom-y-out"
          >
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} passHref>
                <div className="flex flex-col h-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-32 object-contain rounded-t-lg"
                  />
                  <div className="p-4 flex-grow">
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <p className="text-gray-600 text-sm">{post.description}</p>
                  </div>
                  <div className="px-4 pb-4 mt-auto">
                    <span className="text-blue-600 hover:text-blue-700 text-sm">
                      Read More
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
