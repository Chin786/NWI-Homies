import React, { useState, useCallback } from "react";
import { FileDown, X } from "lucide-react";
import catalogUrl from "../assets/furniture-catalog.pdf";
import newCatalogUrl from "../assets/new-catalog-25-02-25.pdf";
import catalogImage2025 from "../assets/new-catalog-2025.png";
import catalogImage2024 from "../assets/furniture-catalog-2024.png";

interface CatalogItem {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  pdfUrl: string;
}

function Catalog() {
  const [selectedCatalog, setSelectedCatalog] = useState<CatalogItem | null>(
    null
  );

  const catalogs: CatalogItem[] = [
    {
      id: 1,
      title: "Catalog Collection",
      description: "Explore our latest designs and innovations",
      thumbnailUrl: catalogImage2025,
      pdfUrl: newCatalogUrl,
    },
    {
      id: 2,
      title: "Catalog Collection",
      description: "Contemporary solutions for modern homes",
      thumbnailUrl: catalogImage2024,
      pdfUrl: catalogUrl,
    },
  ];

  const handleCatalogClick = useCallback((catalog: CatalogItem) => {
    setSelectedCatalog(catalog);
  }, []); // useCallback for memoization

  //   const handleCloseModal = useCallback(() => {
  //     setSelectedCatalog(null);
  //   }, []); // useCallback for memoization

  const generateDownloadLink = useCallback((catalog: CatalogItem) => {
    return `${catalog.pdfUrl}`;
  }, []);

  const generateDownloadFilename = useCallback((catalog: CatalogItem) => {
    return `${catalog.title.toLowerCase().replace(/\s+/g, "-")}.pdf`;
  }, []);

  return (
    <section
      id="catalog"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl  mx-auto">
        <h2 className="text-4xl font-bold mb-16 dark:text-white">
          Product Catalog
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogs.map((catalog) => (
            <div
              key={catalog.id}
              onClick={() => handleCatalogClick(catalog)}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <img
                  src={catalog.thumbnailUrl}
                  alt={catalog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400">
                  {catalog.description}
                </p>
                <a
                  href={generateDownloadLink(catalog)}
                  download={generateDownloadFilename(catalog)}
                  className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition whitespace-nowrap"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // Prevents opening the modal
                >
                  <FileDown className="w-5 h-5" />
                  Download Catalog
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Popup Modal */} {/* Popup Modal */}
        {selectedCatalog && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center ">
            <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-7xl h-[720px] flex flex-col">
              <div className="flex justify-between items-center p-1 border-b dark:border-gray-700">
                <h3 className="text-xl font-semibold dark:text-white">
                  {selectedCatalog.title}
                </h3>
                <button
                  onClick={() => setSelectedCatalog(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition"
                >
                  <X className="w-6 h-6 dark:text-white" />
                </button>
              </div>
              <div className="flex-1 min-h-0">
                <iframe
                  src={`${selectedCatalog.pdfUrl}#view=FitH`}
                  className="w-full h-full"
                  title={`${selectedCatalog.title} PDF Viewer`}
                />
              </div>
              {/* <div className="p-4 border-t dark:border-gray-700">
                
                <a
                  href={selectedCatalog.pdfUrl}
                  download={`${selectedCatalog.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}.pdf`}
                  className="flex items-center gap-2 bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition "
                >
                  <FileDown className="w-5 h-5" />
                  Download Catalog
                </a>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Catalog;
