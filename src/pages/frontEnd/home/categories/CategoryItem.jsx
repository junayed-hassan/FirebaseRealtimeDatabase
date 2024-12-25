/* eslint-disable react/prop-types */
export default function CategoryItem({ category }) {
  const { categoryImageUrl, categoryName } = category;

  return (
    <div className="border bg-gradient-to-br from-white via-gray-50 to-gray-100 mx-3 cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="relative">
        
        {/* Image Section */}
        <div className="w-full text-center  mt-4 flex justify-center items-center">
          <img
            className="max-w-[140px] max-h-[120px] mx-auto object-contain transition-transform duration-300 hover:scale-105"
            src={categoryImageUrl}
            alt={`Category: ${categoryName}`}
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="px-4 pb-4">
        <h4 className="border-t mt-3 pt-3 text-lg text-center font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
          {categoryName}
        </h4>
        
      </div>
    </div>
  );
}
