"use client";
import { useState } from "react";

const ArkCarbonProjects = () => {
  // Sample data for the projects section
  const projectsData = [
    {
      title: "Rainforest Reforestation",
      description:
        "A project focused on planting native trees to restore a rainforest ecosystem and combat deforestation.",
      image: "https://placehold.co/400x200/55355e/ffffff?text=Project+1",
    },
    {
      title: "Solar Farm Development",
      description:
        "Investing in the creation of large-scale solar farms to provide clean energy to local communities.",
      image: "https://placehold.co/400x200/FF355e/ffffff?text=Project+2",
    },
    {
      title: "Ocean Cleanup Initiative",
      description:
        "Funding a global effort to remove plastic waste and debris from the world's oceans.",
      image: "https://placehold.co/400x200/22AACC/ffffff?text=Project+3",
    },
  ];

  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    projectType: "",
    certification: {
      goldStandard: false,
      verra: false,
      other: "",
    },
    certified: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "goldStandard" || name === "verra") {
      setFormData((prev) => ({
        ...prev,
        certification: {
          ...prev.certification,
          [name]: checked,
        },
      }));
    } else if (name === "otherCert") {
      setFormData((prev) => ({
        ...prev,
        certification: {
          ...prev.certification,
          other: value,
        },
      }));
    } else if (name === "certified") {
      setFormData((prev) => ({
        ...prev,
        certified: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Project submitted! Check console for data.");
  };

  return (
    <div id="submit_project" className="container mx-auto p-2 lg:p-4 max-w-6xl">
      <h1 className="text-3xl md:text-5xl py-3 font-extrabold mb-8 text-white text-center">
        Submit Your Project
      </h1>

      {/* Projects Page Section */}
      <div className="bg-gray-800 p-2 lg:p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold text-green-500 mb-4">Green Projects</h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900  rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Your Project Form */}
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-lg font-bold text-green-500 mb-4">
            Submit Your Project
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Project Name */}
            <div>
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Project Name
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="e.g., Coastal Restoration"
              />
            </div>

            {/* Project Description */}
            <div>
              <label
                htmlFor="projectDescription"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Project Description
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                rows="4"
                value={formData.projectDescription}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Describe your project's environmental impact..."
              ></textarea>
            </div>

            {/* Project Type */}
            <div>
              <label
                htmlFor="projectType"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select type</option>
                <option value="Reforestation">Reforestation</option>
                <option value="Renewable Energy">Renewable Energy</option>
                <option value="Waste Management">Waste Management</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Certification */}
            <div>
              <span className="block text-sm font-medium text-gray-400 mb-2">
                Certification
              </span>
              <div className="space-y-2">
                <label className="flex items-center text-gray-300">
                  <input
                    type="checkbox"
                    name="goldStandard"
                    checked={formData.certification.goldStandard}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Gold Standard
                </label>
                <label className="flex items-center text-gray-300">
                  <input
                    type="checkbox"
                    name="verra"
                    checked={formData.certification.verra}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Verra
                </label>
                <div>
                  <input
                    type="text"
                    name="otherCert"
                    value={formData.certification.other}
                    onChange={handleChange}
                    placeholder="Other (please specify)"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>

            {/* Certified to issue carbon credits */}
            <div>
              <label className="flex items-center text-gray-300">
                <input
                  type="checkbox"
                  name="certified"
                  checked={formData.certified}
                  onChange={handleChange}
                  className="mr-2"
                />
                Certified to issue carbon credits?
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-400 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-green-600 transition-colors"
            >
              Submit Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ArkCarbonProjects;
