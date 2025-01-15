// import React from "react";
// import { Link } from "react-router-dom";
// import data from "../../data/index.json";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Observer from "tailwindcss-intersect";

// export default function MyPortfolio() {
//   // React.useEffect(() => {
//   //   AOS.init();
//   // }, []);
//   Observer.start();
//   return (
//     <section className="px-4 md:px-28 py-20 md:py-28" id="MyPortfolio">
//       <div className="flex flex-col md:flex-row justify-between  mb-16">
//         <div className="mb-8 md:mb-0">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white text-start">
//             Projects
//           </h1>
//         </div>
//         <div>
//           <a
//             href="https://github.com/ayushp2563"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-decoration-none"
//           >
//             <button className="flex items-center gap-4 px-6 py-3 bg-primary  rounded-2xl shadow-md  text-white transition-transform duration-300 hover:scale-110">
//               <svg
//                 height={30}
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 16 16"
//                 id="github"
//               >
//                 <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
//               </svg>
//               Visit My GitHub
//             </button>
//           </a>
//         </div>
//       </div>
//       <div
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 "
//         data-aos="fade-up"
//         data-aos-duration="3000"
//       >
//         {data?.portfolio?.map((item, index) => (
//           <div
//             key={index}
//             className="sticky top-40 bg-[#e2e8f0] dark:bg-[#242424] dark:elevation-10 rounded-2xl  overflow-hidden scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 transition"
//           >
//             <div className="portfolio--section--img">
//               <img
//                 src={item.src}
//                 alt={item.title}
//                 className="w-full h-auto p-4 transition-transform duration-300 hover:scale-105"
//               />
//             </div>
//             <div className="p-6">
//               <div>
//                 <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-md text-black  dark:text-white ">
//                   {item.description}
//                 </p>
//               </div>
//               <p className="text-sm mt-4">
//                 <button className="bg-primary text-white hover:bg-primary-dark rounded-full px-6 py-3 transition-transform duration-300 hover:scale-110">
//                   <a
//                     href={item.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 font-semibold"
//                   >
//                     Visit Link
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 20 20"
//                       fill="none"
//                     >
//                       <path
//                         d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
//                         stroke="currentColor"
//                         strokeWidth="2.66667"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </a>
//                 </button>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// import React from 'react';
// import { ExternalLink, Github } from 'lucide-react';
// import data from '../../data/index.json';

// export function ProjectCard({ title, description, tags, githubUrl, liveUrl, image }) {
//   return (
//     // <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl">
//     <div className='sticky top-40 bg-[#ffffff] dark:bg-[#242424] rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl '>
//       <img src={image} alt={title} className="w-full h-48 object-cover" />
//       <div className="p-6">
//         <h3 className="text-xl font-bold mb-2 text-gray-900 ">{title}</h3>
//         <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {tags.map((tag) => (
//             <span
//               key={tag}
//               className="px-3 py-1 bg-[#7DD3FC] text-darkblue dark:bg-darkblue  dark:text-[#7DD3FC] rounded-full text-sm"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//         <div className="flex gap-4">
//           {githubUrl && (
//             <a
//               href={githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
//             >
//               <Github className="w-5 h-5" />
//               Code
//             </a>
//           )}
//           {liveUrl && (
//             <a
//               href={liveUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
//             >
//               <ExternalLink className="w-5 h-5" />
//               Live Demo
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function MyPortfolio() {
//   return (
//     <section className="px-4 md:px-28 py-20 md:py-28" id="MyPortfolio">
//       <div className="flex flex-col md:flex-row justify-between mb-16">
//         <div className="mb-8 md:mb-0">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white text-start">Projects</h1>
//         </div>
//         <div>
//           <a
//             href="https://github.com/ayushp2563"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-decoration-none"
//           >
//             <button className="flex items-center gap-4 px-6 py-3 bg-primary rounded-2xl shadow-md text-white transition-transform duration-300 hover:scale-110">
//               <Github className="w-6 h-6" />
//               Visit My GitHub
//             </button>
//           </a>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {data?.portfolio?.map((project, index) => (
//           <ProjectCard
//             key={index}
//             title={project.title}
//             description={project.description}
//             tags={project.tags}
//             githubUrl={project.githubUrl}
//             liveUrl={project.liveUrl}
//             image={project.src}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import data from '../../data/index.json';

export function ProjectCard({ title, description, tags, githubUrl, liveUrl, image }) {
  return (
    <div className="sticky top-40 bg-[#ffffff] dark:bg-[#242424] rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-[#7DD3FC] text-darkblue dark:bg-darkblue dark:text-[#7DD3FC] rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Github className="w-5 h-5" />
              Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function MyPortfolio() {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const handleViewMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, data?.portfolio?.length));
  };

  return (
    <section className="px-4 md:px-28 py-20 md:py-28" id="MyPortfolio">
      <div className="flex flex-col md:flex-row justify-between mb-16">
        <div className="mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white text-start">Projects</h1>
        </div>
        <div>
          <a
            href="https://github.com/ayushp2563"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <button className="flex items-center gap-4 px-6 py-3 bg-primary rounded-2xl shadow-md text-white transition-transform duration-300 hover:scale-110">
              <Github className="w-6 h-6" />
              Visit My GitHub
            </button>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.portfolio?.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            image={project.src}
          />
        ))}
      </div>
      {visibleProjects < data?.portfolio?.length && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleViewMore}
            className="px-6 py-3 bg-primary text-white rounded-xl shadow-md transition-transform duration-300 hover:scale-110"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
}
