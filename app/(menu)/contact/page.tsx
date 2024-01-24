export const metadata = {
  title: "Fei - Contact Me",
  description:
    "Find my contact information for collaborations, projects, or inquiries",
};

export default function ContactMe() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos="zoom-y-out">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600">Here's how you can reach me</p>
          </div>

          {/* Contact Information */}
          <div className="max-w-md mx-auto text-center">
            {/* Email Address */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:fei.gao1515@gmail.com">fei.gao1515@gmail.com</a>
              </p>
            </div>
            {/* Phone Number */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">(+353) 087 3532 793</p>
            </div>
            {/* Social Media Profiles */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Social Media
              </h3>
              <p className="text-gray-600">
                <a
                  href="https://www.linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <br />
                <a
                  href="https://github.com/Fei117117"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
