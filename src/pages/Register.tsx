import { User } from "lucide-solid";

const Register = () => {
  return (
    <>
      <section>
        <div class="grid md:h-screen md:grid-cols-2">
          <div class="flex flex-col items-center justify-center bg-gray-900">
            <div class="max-w-lg px-5 py-16 text-center md:px-10 md:py-24 lg:py-32">
              <h2 class="mb-8 text-3xl font-bold md:mb-12 md:text-5xl">
                Create an account
              </h2>

              <form
                class="mx-auto mb-4 max-w-sm pb-4"
                name="wf-form-password"
                method="get"
              >
                <div class="relative">
                  <User class="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block text-black" />
                  <input
                    type="text"
                    class="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
                    maxlength="256"
                    name="name"
                    placeholder="Full Name"
                  />
                </div>
                <div class="relative">
                  <img
                    alt=""
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg"
                    class="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
                  />
                  <input
                    type="email"
                    class="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
                    maxlength="256"
                    name="name"
                    placeholder="Email Address"
                  />
                </div>
                <div class="relative mb-4">
                  <img
                    alt=""
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg"
                    class="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
                  />
                  <input
                    type="password"
                    class="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
                    placeholder="Password (min 8 characters)"
                  />
                </div>
                <div class="relative mb-4">
                  <img
                    alt=""
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg"
                    class="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
                  />
                  <input
                    type="password"
                    class="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
                    placeholder="Confirm Password"
                  />
                </div>
                <label class="mb-6 flex items-center pb-12 font-medium lg:mb-1">
                  <input type="checkbox" name="checkbox" />
                  <span class="ml-4 inline-block cursor-pointer text-sm text-white">
                    I agree with the{" "}
                    <a href="#" class="font-bold text-blue-600">
                      Terms &amp; Conditions
                    </a>
                  </span>
                </label>

                <a
                  href="#"
                  class="flex items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
                >
                  <p class="mr-6 font-bold">Register Now</p>
                  <svg
                    class="h-4 w-4 flex-none"
                    fill="currentColor"
                    viewBox="0 0 20 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Arrow Right</title>
                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                  </svg>
                </a>
              </form>
              <p class="text-sm text-white">
                Already have an account?{" "}
                <a href="/login" class="text-sm font-bold text-blue-600">
                  Login now
                </a>
              </p>
            </div>
          </div>

          <div class="flex flex-col items-center justify-center bg-gray-900">
            <div class="max-w-lg px-5 py-16 md:px-10 md:py-24 lg:py-32">
              <div class="mb-6 ml-2 flex h-14 w-14 items-center justify-center bg-[#276ef1] [box-shadow:rgb(171,_196,_245)_-8px_8px]">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f5ec37c8c32b17d1c725_Vector-9.svg"
                  alt=""
                  class="inline-block"
                />
              </div>
              <p class="mb-8 text-[#647084] md:mb-12 lg:mb-16">
                Sign up now and experience the difference. FileXfer: Your
                reliable file transfer partner.
              </p>
              <p class="font-bold">Garv Aggarwal</p>
              <p class="text-sm">
                Web Developer , Data Scientist and Android Developer
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;