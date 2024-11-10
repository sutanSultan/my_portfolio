


import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Page() {
  return (
    <div>
      <section className="text-white bg-gradient-to-r from-blue-900 via-purple-900 to-black min-h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-4 text-orange-400">
              Feature Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
              A passionate student of Information Technology, focusing on Cloud Computing, Generative AI, and Web 3.0 technologies, gaining valuable experience and applying skills in real-world projects.
            </p>
          </div>
          <div className="flex flex-wrap m-5 mt-8">
            {/* Project Cards */}
            {[
              {
                img: '/clinic img.jpg',
                title: 'clinic web Project',
                subtitle: 'clinical website',
                description: 'I made this ID Card project. Here is the link to my Website.',
                link: 'https://clinic-website-azure.vercel.app/',
              },
              {
                img: '/portfolioimg.jpg',
                title: 'Portfolio Project',
                subtitle: 'Portfolio with Next.js',
                description: 'A dynamic and responsive portfolio built using Next.js 14 with TypeScript (TSX), showcasing projects and skills.',
                link: '',
              },
              {
                img: '/resumeimg.jpg',
                title: 'Resume Project',
                subtitle: 'Resume',
                description: 'I made this Resume project with HTML, CSS, and JavaScript, featuring interactive TypeScript quizzes.',
                link: 'https://static-resume-sgm4.vercel.app/',
              },
              {
                img: '/clicurrency.png',
                title: 'CLI Currency Converter',
                subtitle: 'Cli Currency Converter',
                description: 'I made this CLI Currency Converter project. Share your feedback!',
                link: '',
              },
              {
                img: '/quiz.png',
                title: 'snake game Project',
                subtitle: 'snake game',
                description: 'I made this  Project. Here is the link to my game.',
                link: 'https://snack-game-xi.vercel.app/',
              },
              {
                img: '/game.png',
                title: '45-assignment questions answer',
                subtitle: '45-questions- assignment ',
                description: 'I made this CLI Adventure Game project. Share your feedback!',
                link: 'https://github.com/sutanSultan/Assignment-45-questions-',
              },
            ].map((project, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 object-cover object-center cursor-pointer border-4 border-orange-300 rounded-lg"
                    src={project.img}
                    height={500}
                    width={380}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-700 bg-gray-800 bg-opacity-90 opacity-0 hover:opacity-100 rounded-lg text-white transition-opacity duration-300 ease-in-out">
                    <h2 className="tracking-widest text-sm title-font font-medium text-orange-400 mb-1">
                      {project.title}
                    </h2>
                    <h1 className="title-font text-lg font-semibold text-white mb-3">
                      {project.subtitle}
                    </h1>
                    <p className="leading-relaxed text-gray-300">
                      {project.description}
                    </p>
                    <Link target="_blank" href={project.link}>
                      <p className="leading-relaxed text-blue-400 mt-3 hover:underline">View Project</p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;