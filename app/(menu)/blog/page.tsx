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
      imageUrl: "@/public/images/blog-image-1.png", // Replace with your image path
      blogUrl: "http://blog-post-one-link.com", // Replace with your blog post link
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
            <h1 className="h1">My Blog</h1>
            <p className="text-lg text-gray-600">
              Sharing my thoughts and experiences in web development
            </p>
          </div>

          {/* Blog posts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <img src={post.imageUrl} alt={post.title} className="w-full" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p className="text-gray-600">{post.description}</p>
                  <a
                    href={post.blogUrl}
                    className="text-blue-600 hover:underline mt-2 inline-block"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
