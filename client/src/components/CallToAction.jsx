import { Button } from "flowbite-react";

export default function CallToAction() {
      return (
            <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
                  <div className="flex-1 justify-center flex flex-col">
                        <h2 className="text-2xl">Want to see my projects?</h2>
                        <p className="text-gray-500 my-2">
                              Checkout my github repositories
                        </p>
                        <Button
                              gradientDuoTone="purpleToPink"
                              className="rounded-tl-xl rounded-bl-none"
                        >
                              <a
                                    href="https://github.com/mohammadkarimijashni?tab=repositories"
                                    target="_blank"
                                    rel="noopener noreferrer"
                              >
                                    MY PROJECTS
                              </a>
                        </Button>
                  </div>
                  <div className="p-7 flex-1">
                        <img src="https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png" />
                  </div>
            </div>
      );
}
