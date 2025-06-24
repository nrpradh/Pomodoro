import { For, createSignal, onMount, onCleanup } from 'solid-js';
import MyTools from '../data/tools.json';
import { FiSearch } from 'solid-icons/fi'; 
import SearchModal from './SearchBar'; 

// Import specific icons you need from solid-icons
// FiSearch, FiXCircle are now used only within SearchModal, so you can remove them here
// if they are not used elsewhere in MyLayout.

const MyLayout = () => {
  // Your existing category ordering logic
  const orderEm = [
    "AI assistants",
    "UI design inspirations",
    "AI interface generator",
    "Graphic illustration ",
    "Mockups, Pitching",
    "Font resources",
    "Design",
    "Productivity",
  ];

  let categories = [...MyTools];

  categories.sort((a, b) => {
    const indexA = orderEm.indexOf(a.name);
    const indexB = orderEm.indexOf(b.name);

    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }

    if (indexA !== -1) {
      return -1;
    }

    if (indexB !== -1) {
      return -1;
    }

    return 0;
  });

  // Flatten all tools into a single array for easier searching
  const allTools = categories.flatMap(category =>
    category.tools.map(tool => ({ ...tool, categoryName: category.name }))
  );

  // --- Modal State ---
  const [isSearchModalOpen, setIsSearchModalOpen] = createSignal(false);

  const openSearchModal = () => setIsSearchModalOpen(true);
  const closeSearchModal = () => setIsSearchModalOpen(false);

  // --- Keyboard Shortcut Listener (Ctrl+K) ---
  onMount(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault(); // Prevent default browser search/history action
        openSearchModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    onCleanup(() => {
      document.removeEventListener('keydown', handleKeyDown);
    });
  });

  return (
    <div class="min-h-screen lg:py-16 py-8 font-sans">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Floating Search Trigger Button --- */}
        {/* This button will be always visible and trigger the modal */}
        <button
          onClick={openSearchModal}
          class="fixed bottom-4 right-6 gap-2 bg-allOrange text-allWhite p-4 rounded-md  hover:cursor-pointer hover:bg-allBlack transition-colors duration-200 flex items-center justify-center "
          aria-label="Open search"
          title="Search (Ctrl+K)"
        >
          <FiSearch size={20} />
          <kbd class="hidden sm:inline font-mono text-lg ">Ctrl+K</kbd>
        </button>


        {/* --- Search Modal Component --- */}
        <SearchModal
          isOpen={isSearchModalOpen}
          onClose={closeSearchModal}
          allTools={allTools}
        />

        {/* --- Display Categories (Main Content) --- */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-y-6 gap-y-4 ">
          <For each={categories}>
            {(category) => (
              <div class="flex flex-col items-start h-full lg:space-y-4 space-y-2 border border-lightGrey rounded-md p-6 py-8 bg-allWhite hover:border-allBlue hover:shadow-allBlue hover:shadow-sm hover:cursor-crosshair transition-shadow duration-300">
                <div className='text-start'>
                  <h2 class="lg:text-5xl text-3xl text-allBlack font-lbneueReg lg:leading-12 leading-6"> {category.name}  </h2>
                  <p class="text-sm">{category.description}  </p>

                </div>
                <div class="grid lg:grid-cols-1 grid-cols-2  gap-2 w-full ">
                  <For each={category.tools}>
                    {(tool) => (
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center gap-4 p-2 rounded-md border border-lightGrey hover:border-allOrange hover:bg-gradient-to-r  hover:from-allWhite hover:to-allOrange/70 transition-all duration-100"
                      >
                        <span class="w-6 h-6 shrink-0 flex items-center justify-center">
                          {
                            tool.icon.startsWith("http")
                              ? <img src={tool.icon} alt={`${tool.name} logo`} class="w-6 h-6 object-contain" />
                              : tool.icon.includes(".")
                                ? <img src={`https://logo.clearbit.com/${tool.icon}`} alt={`${tool.name} logo`} class="w-6 h-6 object-contain" />
                                : tool.icon
                          }
                        </span>
                        <span class="lg:text-base  font-neuetusReg text-darkGrey ">{tool.name}</span>
                      </a>
                    )}
                  </For>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};

export default MyLayout;