"use client";
import H1 from "./../uis/H1";


const ArkCarbonProjects = () => {
  // Sample data for the projects section
  const projectsData = [
    {
      title: 'Rainforest Reforestation',
      description: 'A project focused on planting native trees to restore a rainforest ecosystem and combat deforestation.',
      image: 'https://placehold.co/400x200/22c55e/ffffff?text=Project+1'
    },
    {
      title: 'Solar Farm Development',
      description: 'Investing in the creation of large-scale solar farms to provide clean energy to local communities.',
      image: 'https://placehold.co/400x200/22c55e/ffffff?text=Project+2'
    },
    {
      title: 'Ocean Cleanup Initiative',
      description: 'Funding a global effort to remove plastic waste and debris from the world\'s oceans.',
      image: 'https://placehold.co/400x200/22c55e/ffffff?text=Project+3'
    },
  ];

  return (
    <div className="container mx-auto p-2 lg:p-4 max-w-5xl">

        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-white text-center">
          Submit Your Project
        </h1>

      {/* Projects Page Section */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold text-green-500 mb-4">Green Projects</h2>
        
        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Your Project Form */}
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-lg font-bold text-green-500 mb-4">Submit Your Project</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="projectName" className="block text-sm font-medium text-gray-400 mb-1">
                Project Name
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="e.g., Coastal Restoration"
              />
            </div>
            <div>
              <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-400 mb-1">
                Project Description
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Describe your project's environmental impact..."
              ></textarea>
            </div>
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