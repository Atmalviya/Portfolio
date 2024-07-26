import React from "react";
import { EDUCATION } from "../constants/index";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Education and Certifications</h2>
      <div>
        {EDUCATION.map((education, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center gap-4"
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold ">
                {education.role} -{"   "}
                <span className="text-sm text-purple-100">
                  {education.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{education.description}</p>
              {education.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 my-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
