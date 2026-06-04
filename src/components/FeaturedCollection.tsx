import { motion } from "framer-motion";

const FeaturedCollection = () => {
  const products = [
    {
      id: 1,
      name: "Modern Leather Sofa",
      price: "$1,299",
      images: [
        "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80&w=2000",
      ],
      rating: 4.8,
      category: "Living Room",
    },
    {
      id: 2,
      name: "Minimalist Dining Table",
      price: "$899",
      images: [
        "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=2000",
      ],
      rating: 4.9,
      category: "Dining Room",
    },
    {
      id: 3,
      name: "Scandinavian Armchair",
      price: "$599",
      images: [
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=2000",
      ],
      rating: 4.7,
      category: "Living Room",
    },
    {
      id: 4,
      name: "Modern Office Desk",
      price: "$799",
      images: [
        "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=2000",
      ],
      rating: 4.6,
      category: "Office",
    },
  ];

  return (
    <>
      {/* Featured Collection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Featured Collection
          </h2>
          <div className="relative">
            <div className="overflow-x-auto hide-scrollbar">
              <div
                className="flex flex-row gap-6 p-4 w-52"
                style={{ width: "max-content" }}
              >
                {products.slice(0, 3).map((product, index) => (
                  <motion.div
                    key={product.id}
                    className="bg-white dark:bg-gray-500  w-96 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -10 }}
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        <svg
                          className="h-5 w-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-sm text-gray-600 dark:text-white">
                          {product.rating}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 dark:text-white mb-4">
                        {product.price}
                      </p>
                      <button className="w-full bg-yellow-400 font-bold  py-2 rounded-lg hover:bg-yellow-500 ">
                        Add to Cart
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedCollection;
