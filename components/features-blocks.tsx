const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Work Showcase</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              A showcase of my latest work in web development
            </p>
          </div>

          {/* Items */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            data-aos="zoom-y-out"
          >
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
              <img
                src={`${basePath}/images/NYSEENOW.png`}
                alt="Icon for NYSeeNow"
                className="w-16 h-16 p-1 -mt-1 mb-2"
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                NYSeeNow
              </h4>
              <p className="text-gray-600 text-center">
                An innovative web and mobile application designed to transform
                the tourist experience in Manhattan, New York
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
              <img
                src={`${basePath}/images/RIDEMATE.png`}
                alt="Icon for RideMate"
                className="w-16 h-16 p-1 -mt-1 mb-2"
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                RideMate
              </h4>
              <p className="text-gray-600 text-center">
                A web application designed to enhance the experience of using
                Dublin Bikes. It provides real-time and predictive information
                on bike availability and weather conditions.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
              <img
                src={`${basePath}/images/NATOUR.png`}
                alt="Icon for Natour"
                className="w-16 h-16 p-1 -mt-1 mb-2"
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Natour
              </h4>
              <p className="text-gray-600 text-center">
                Natours is a visually engaging, interactive website designed for
                a fictional outdoor tour company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
