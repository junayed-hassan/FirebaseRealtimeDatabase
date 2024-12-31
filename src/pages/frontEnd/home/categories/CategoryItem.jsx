export default function CategoryItem({ category }) {
    const { categoryImageUrl, categoryName } = category;

    return (
        <div className="border bg-white mx-3 cursor-pointer">
            <div className="w-full text-center h-[120px] mt-3">
                <img
                    className="max-w-[120px] mx-auto"
                    src={categoryImageUrl}
                    alt={categoryName}
                />
            </div>
            <h4 className="border-t mt-2 text-lg py-2 text-center font-semibold">
                {categoryName}
            </h4>
        </div>
    );
}
