import { For, createSignal } from 'solid-js'; // Added createSignal for active category

const ToolsDirectoryModern = () => {
  // Sample data for your tools with an added 'category' field
  const allTools = [
    {
      id: 1,
      name: "Color Palette",
      icon: "🎨", // Using emoji for simplicity, replace with SVG/img components
      link: "https://coolors.co/",
      category: "Design",
    },
    {
      id: 2,
      name: "Markdown Editor",
      icon: "📝",
      link: "https://stackedit.io/",
      category: "Writing",
    },
    {
      id: 3,
      name: "CSS Grid Cheatsheet",
      icon: "📐",
      link: "https://css-tricks.com/snippets/css/complete-guide-grid/",
      category: "Development",
    },
    {
      id: 4,
      name: "Image Optimizer",
      icon: "📸",
      link: "https://tinypng.com/",
      category: "Design",
    },
    {
      id: 5,
      name: "Lorem Ipsum",
      icon: "✍️",
      link: "https://lipsum.com/",
      category: "Writing",
    },
    {
      id: 6,
      name: "Regex Tester",
      icon: "🔍",
      link: "https://regex101.com/",
      category: "Development",
    },
    {
      id: 7,
      name: "API Mock Server",
      icon: "⚙️",
      link: "https://jsonplaceholder.typicode.com/",
      category: "Development",
    },
    {
      id: 8,
      name: "SVG Compressor",
      icon: "⚡",
      link: "https://jakearchibald.github.io/svgomg/",
      category: "Design",
    },
    {
      id: 9,
      name: "ChatGPT",
      icon: "🤖",
      link: "https://chat.openai.com/",
      category: "AI",
    },
    {
      id: 10,
      name: "Midjourney",
      icon: "🖼️",
      link: "https://www.midjourney.com/",
      category: "AI",
    },
    {
      id: 11,
      name: "Netlify",
      icon: "☁️",
      link: "https://www.netlify.com/",
      category: "Hosting",
    },
    {
      id: 12,
      name: "Vercel",
      icon: "🚀",
      link: "https://vercel.com/",
      category: "Hosting",
    },
  ];

  // Extract unique categories
  const categories = ["All", ...new Set(allTools.map(tool => tool.category))];

  // State for active category
  const [activeCategory, setActiveCategory] = createSignal("All");

  // Filtered tools based on active category
  const filteredTools = () => {
    if (activeCategory() === "All") {
      return allTools;
    }
    return allTools.filter(tool => tool.category === activeCategory());
  };

  return (
    <div class="bg-gray-950 min-h-screen py-16 text-gray-50"> {/* Darker background for modern feel */}
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-5xl font-extrabold text-center mb-6 leading-tight">
          NRP's Open Toolbox
        </h1>
        <p class="text-center text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          A curated collection of essential tools for design, development, and more.
        </p>

        {/* Category Navigation */}
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <For each={categories}>
            {(category) => (
              <button
                onClick={() => setActiveCategory(category)}
                class={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200
                  ${activeCategory() === category
                    ? 'bg-allOrange text-white shadow-md' // Active state
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300' // Inactive state
                  }`}
              >
                {category}
              </button>
            )}
          </For>
        </div>

        {/* Tools Grid */}
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          <For each={filteredTools()}>
            {(tool) => (
              <a
                href={tool.link}
                target="_blank" // Open in new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
                class="flex flex-col items-center justify-center text-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-700 transition-all duration-200 group relative overflow-hidden"
              >
                {/* Icon */}
                <div class="text-6xl mb-3 transform group-hover:scale-110 transition-transform duration-200 ease-out">
                  {tool.icon}
                </div>
                {/* Tool Name */}
                <h3 class="text-md font-semibold text-gray-100 group-hover:text-white transition-colors duration-200">
                  {tool.name}
                </h3>
                {/* Overlay for "Visit" (Optional, for a more button-like hover) */}
                <div class="absolute inset-0 bg-blue-600 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span class="text-white text-lg font-bold">Visit</span>
                </div>
              </a>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};

export default ToolsDirectoryModern;