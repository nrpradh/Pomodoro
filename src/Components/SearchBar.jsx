import { For, createSignal, onMount, onCleanup,  createEffect } from 'solid-js';
import { FiSearch, FiXCircle } from 'solid-icons/fi'; 

const SearchModal = (props) => {
  const { allTools, isOpen, onClose } = props; 

  const [searchQuery, setSearchQuery] = createSignal('');
  const [searchResults, setSearchResults] = createSignal([]);
  let searchInputRef;

  // Effect to focus input when modal opens
  onMount(() => {
    // Only focus if the modal is currently open
    if (isOpen()) {
      searchInputRef?.focus();
    }
  });

  
  createEffect(() => {
    if (isOpen()) {
      searchInputRef?.focus();
    } else {
      // Clear search when modal closes
      setSearchQuery('');
      setSearchResults([]);
    }
  });

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query) {
      setSearchResults([]);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();
    const filteredResults = allTools.filter(tool =>
      tool.name.toLowerCase().includes(lowerCaseQuery) ||
      tool.description?.toLowerCase().includes(lowerCaseQuery) ||
      tool.categoryName.toLowerCase().includes(lowerCaseQuery)
    );
    setSearchResults(filteredResults);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    searchInputRef?.focus();
  };

  createEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen()) {
        console.log('Escape key pressed, closing modal');
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    onCleanup(() => {
      document.removeEventListener('keydown', handleEscape);
    });
  });

  return (
    <>
      {isOpen() && (
        <div
          class="fixed inset-0 z-50 flex items-start justify-center bg-allBlack/70 p-4 sm:p-6 lg:p-8 font-neuetusReg"
          onClick={onClose} 
        >
          <div
            class="relative bg-allWhite rounded-md shadow-sm w-full max-w-xl mx-auto mt-40 transform transition-all sm:my-8 sm:align-middle"
            onClick={(e) => e.stopPropagation()} // Prevent click inside from closing modal
          >
            {/* Search Input */}
            <div class="p-4 border-b bg-allWhite border-allBlue">
              <div class="relative">
                <input
                  type="text"
                  placeholder="Find a tool or category..."
                  class="w-full p-3 pl-10 pr-10 border border-lightGrey rounded-md focus:outline-none focus:ring-2 focus:ring-allOrange transition-all text-allBlack duration-200"
                  value={searchQuery()}
                  onInput={(e) => handleSearch(e.target.value)}
                  ref={searchInputRef}
                />
                <FiSearch class="absolute left-3 top-1/2 transform -translate-y-1/2 text-lightGrey" size={20} />
                {searchQuery() && (
                  <button
                    onClick={clearSearch}
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-lightGrey "
                    aria-label="Clear search"
                  >
                    <FiXCircle size={20} />
                  </button>
                )}
              </div>
            </div>

            {/* Search Results */}
            <div class="max-h-96 overflow-y-auto p-4 font-neuetusReg border-b border-lightGrey pb-2 ">
              {searchResults().length > 0 ? (
                <For each={searchResults()}>
                  {(tool) => (
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex justify-start items-start  gap-4 p-2 rounded-md border border-transparent hover:border-allOrange hover:bg-gradient-to-r hover:from-allWhite hover:to-allOrange/70 transition-all duration-100"
                      onClick={onClose} 
                    >
                      <span class="w-6 h-6  ">
                        {
                          tool.icon.startsWith("http")
                            ? <img src={tool.icon} alt={`${tool.name} logo`} class="w-6 h-6 " />
                            : tool.icon.includes(".")
                              ? <img src={`https://logo.clearbit.com/${tool.icon}`} alt={`${tool.name} logo`} class="w-6 h-12 object-contain" />
                              : tool.icon
                        }
                      </span>
                      <div class="flex flex-col justify-start items-start font-neuetusReg ">
                        <h3 class="lg:text-lg  text-allBlack">{tool.name}</h3>
                        <p class="text-sm text-lightGrey">{tool.categoryName}</p>
                        
                      </div>
                    </a>
                  )}
                
                </For>
              ) : (
                searchQuery() && <p class="text-center text-allBlue py-4">No results found for "{searchQuery()}"</p>
              )}
              {!searchQuery() && <p class="text-center text-lightGrey py-4">Start typing to search...</p>}
            </div>

            {/* Footer with shortcut hint */}
            <div class="p-4 text-sm text-lightGrey gap-2 flex justify-end items-center">
                Press <kbd class="px-1 py-0.5 border rounded ">Esc</kbd> to close.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchModal;