import Link from "next/link";

const Projects = () => {
  return (
    <section className="block relative z-1 bg-blueGray-600 -mt-32">
      <div className="container mx-auto">
        <div className="justify-center flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4">
            <h6 className="text-4xl text-center mb-12 font-semibold tracking-widest">
              Proyectos
            </h6>

            <div className="flex flex-wrap ">
              <div className="w-full lg:w-4/12 px-4">
                <Link href="/auth/login">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      //   src="/img/logpg"
                      src="https://lh3.googleusercontent.com/p/AF1QipMPPhD5Kt-3zIFnTBsYtkA2B-540yuQ8mYrSE_w=w960-h960-n-o-v1"
                    />
                  </div>
                </Link>
              </div>

              <div className="w-full lg:w-4/12 px-4">
                <Link href="/profile">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src="https://lh3.googleusercontent.com/p/AF1QipP_1XvSirzdoMqC5RRehsQTlEf7JxYYDEJStb6F=w960-h960-n-o-v1"
                    />
                  </div>
                </Link>
              </div>

              <div className="w-full lg:w-4/12 px-4">
                <Link href="/landing">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src="https://lh3.googleusercontent.com/p/AF1QipNvHzgV1IlcTjrMI-ScnrCo_09QYBAESxl4tlZm=w960-h960-n-o-v1"
                    />
                  </div>
                </Link>
              </div>

              <div className="w-full lg:w-4/12 px-4">
                <Link href="/profile">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src="https://lh3.googleusercontent.com/p/AF1QipPpE5AfLO-55SdgiyJlDwH4B86F3hqng6xFd2qE=w960-h960-n-o-v1"
                      // src="https://lh3.googleusercontent.com/p/AF1QipNvHzgV1IlcTjrMI-ScnrCo_09QYBAESxl4tlZm=w960-h960-n-o-v1"
                    />
                  </div>
                </Link>
              </div>

              <div className="w-full lg:w-4/12 px-4">
                <Link href="/profile">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src="https://lh3.googleusercontent.com/p/AF1QipNMRhu1WOx6_NU13ISMlTB1uIli9phiC5QMwC-f=w960-h960-n-o-v1"
                      // src="https://lh3.googleusercontent.com/p/AF1QipNvHzgV1IlcTjrMI-ScnrCo_09QYBAESxl4tlZm=w960-h960-n-o-v1"
                    />
                  </div>
                </Link>
              </div>

              <div className="w-full lg:w-4/12 px-4">
                <Link href="/profile">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src="	https://lh3.googleusercontent.com/p/AF1QipOle_jxFSN4iLUpWf-pXCOPbQrTjahUioO0-LGr=w960-h960-n-o-v1"
                      // src="https://lh3.googleusercontent.com/p/AF1QipNvHzgV1IlcTjrMI-ScnrCo_09QYBAESxl4tlZm=w960-h960-n-o-v1"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
