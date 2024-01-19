import Image from "next/image";
import TestimonialImage from "@/public/images/testimonial.jpg";

export default function SkillsAndTechnologies() {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Skills and Technologies</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              Proficiencies in a wide range of technologies and programming
              languages
            </p>
          </div>

          {/* Icons grid */}
          <div
            className="flex flex-col justify-center gap-4"
            data-aos="zoom-y-out"
          >
            <div className="flex justify-center gap-4">
              <img
                src="https://skillicons.dev/icons?i=java,spring,python,django,flask,javascript,react,nodejs,html,css,docker,jenkins"
                alt="Technology Icons Set 1"
                className="max-w-full h-auto"
              />
            </div>
            <div className="flex justify-center gap-4">
              <img
                src="https://skillicons.dev/icons?i=aws,git,github,mysql,postgresql,mongodb,redis,ruby,r,figma,postman,bootstrap"
                alt="Technology Icons Set 2"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Testimonials */}
          <div
            className="text-center max-w-3xl mx-auto mt-20"
            data-aos="zoom-y-out"
          >
            {/* <div className="relative flex items-start border-2 border-gray-200 rounded bg-white"> */}
            {/* Testimonial */}
            {/* <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg
                    className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg> */}
            {/* <Image
                    className="relative rounded-full"
                    src={TestimonialImage}
                    width={96}
                    height={96}
                    alt="Testimonial 01"
                  /> 
                </div> */}
            <div className="max-w-4xl mx-auto mt-20">
              <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl px-6 py-10 transform hover:scale-105 transition duration-300">
                <blockquote className="text-xl font-semibold relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 hover:bg-gradient-to-r transition duration-300">
                    "Thanks for visiting my website! Keep coding and stay
                    awesome!"
                  </span>
                </blockquote>
                {/* Additional content goes here */}
              </div>
            </div>
            {/* <cite className="block font-bold text-lg not-italic mb-1">
                  Darya Finger
                </cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span>{" "}
                  <a className="text-blue-600 hover:underline" href="#0">
                    @Dropbox
                  </a>
                </div> */}
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
