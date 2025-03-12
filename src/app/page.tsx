import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 text-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full">
        <h1 className="text-5xl font-bold text-blue-600 mb-6">About Me</h1>
        
        <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
          Hi, I am <span className="font-semibold text-blue-500">Arvind</span>, a dedicated backend developer with over a year of experience in building scalable applications.
          My journey began with a passion for coding, which evolved into a career in cloud computing and DevOps.
        </p>

        <h2 className="text-3xl font-semibold text-blue-500 mt-6 mb-4">Skills & Expertise</h2>
        <ul className="text-left text-gray-600 leading-relaxed list-disc list-inside space-y-2">
          <li>🔹 Proficient in <span className="font-medium">Node.js, Express.js, and MongoDB</span></li>
          <li>🔹 Experienced with <span className="font-medium">AWS, Azure, and serverless architectures</span></li>
          <li>🔹 Strong understanding of <span className="font-medium">CI/CD pipelines, Docker, and Kubernetes</span></li>
          <li>🔹 Passionate about building scalable and reliable cloud solutions</li>
        </ul>

        <h2 className="text-3xl font-semibold text-blue-500 mt-6 mb-4">My Ambition</h2>
        <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
          I'm currently focused on becoming a skilled platform engineer. My goal is to contribute to large-scale projects where I can improve system reliability and performance through cloud-native technologies.
        </p>

        <h2 className="text-3xl font-semibold text-blue-500 mt-6 mb-4">Let's Connect!</h2>
        <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
          Whether you're interested in collaboration, freelance opportunities, or just want to chat tech — feel free to reach out!
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/Arvindkryadav1"
            className="text-blue-600 hover:text-blue-800 font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="mailto:aarviiyadav18@gmail.com"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
