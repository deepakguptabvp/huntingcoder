import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-lvh">
      {/* <h2 className='text-4xl text-center mt-5 ms-8 font-bold border border-transparent rounded-md  hover:bg-opacity-90'><u> About Us </u></h2> */}

      <section className="overflow-hidden p-7">
        <div className=" mx-auto">
          <div className="flex ">
            <div className="lg:w-2/4 text-center">
              <div className="min-w-48">
                <div className="w-full text-center ">
                  <div className="py-3 sm:py-4 text-center">
                    <Image
                      src="/image-1.jpg"
                      alt=""
                      height={600}
                      width={400}
                      className="rounded-full m-auto sm:px-6 xl:w-3/4"
                    />
                  </div>

                  <div className="py-3 sm:py-4">
                    <Image
                      src="/image-2.jpg"
                      alt=""
                      height={200}
                      width={200}
                      className="rounded-full m-auto sm:px-6 xl:w-3/4"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full container mx-auto p-5 lg:w-3/4 xl:w-3/4">
              <div className="mt-10 lg:mt-0">
                {/* <span className="block mb-4 text-lg font-semibold">
                  Why Choose Us
                </span> */}
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white ">
                  <u>
                    <i> About us </i>
                  </u>
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  At Hunting Coders, we believe in the power of coding to
                  transform ideas into reality. Our blog is a digital hub where
                  passionate coders, developers, and tech enthusiasts converge
                  to explore, learn, and share their knowledge about the
                  ever-evolving world of programming.
                </p>
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white ">
                  Making coders community happy by giving services.
                </h2>
                🚀 Crafting Code, Building Dreams <br /> <br />
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  👥<b> Community Building: </b> Join a thriving community of
                  like-minded individuals who share a passion for coding.
                  Connect with fellow developers, ask questions, and engage in
                  discussions that foster learning and collaboration.
                </p>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  🔧<b>Problem Solving: </b>Encounter coding challenges? Our
                  blog provides practical solutions and troubleshooting guides
                  to help you overcome obstacles in your coding journey.
                </p>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  🎓<b>Learning Paths: </b> Join a thriving community of
                  like-minded individuals who share a passion for coding.
                  Connect with fellow developers, ask questions, and engage in
                  discussions that foster learning and collaboration.
                </p>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  🌐<b> Tech Trends and Insights:</b> Stay ahead of the curve
                  with our coverage of the latest trends, tools, and frameworks
                  in the tech industry. Our team of experts keeps you informed
                  about the rapidly changing landscape of programming.
                </p>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  Thank you for being part of the CodeCrafters community.
                  Together, let's code the future! <br /> <br />
                  Happy coding! <br /> <br />
                  The CodeCrafters Team <br />
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-slate-600 hover:bg-opacity-90"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
