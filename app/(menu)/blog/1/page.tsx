import Link from "next/link";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: "Fei - Post1",
};

export default function blog1() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center" data-aos="zoom-y-out">
          <h1 className="text-5xl font-bold text-gray-800">Post 1</h1>
          <p className="mt-4 text-xl text-gray-600">Discription for post 1.</p>
        </div>

        <div id="introduction" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">INTRODUCTION</h2>
          <div className="mt-4">
            <p className="mt-2 text-gray-600 text-lg">Placeholder</p>
          </div>
        </div>

        <div id="features" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">FEATURES</h2>
          <div className="mt-4">
            <h3 className="text-2xl text-gray-700 font-medium">Placeholder</h3>
            <p className="mt-2 text-gray-600 text-lg">Placeholder</p>
          </div>
        </div>
        {/* Repeat the same structure for other sections... */}

        <div className="text-center mt-12">
          <a
            href={`${basePath}/blog`}
            className="text-blue-600 hover:underline text-lg"
          >
            ← Back to Blogs
          </a>
        </div>
      </div>
    </section>
  );
}
