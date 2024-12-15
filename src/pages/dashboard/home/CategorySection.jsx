/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { removeDataFromFirebase } from "../../../database/firebaseUtils";
import Modal from "./../../../component/Modal";
import {
  deleteCategory,
  getCategories,
} from "./../../../features/category/categorySlice";

export default function CategorySection() {
  const CategoriesData = useSelector((state) => state.categories);

  const [deleteCategoryId, setDeleteCategoryId] = useState(false);

  const dispatch = useDispatch();

  const handleCleack = (id) => {
    setDeleteCategoryId(id);
  };

  const handleClose = () => {
    setDeleteCategoryId(false);
  };

  const handleDelete = () => {
    if (deleteCategoryId) {
      async function deleteCat() {
        const res = await removeDataFromFirebase(
          "categories/" + deleteCategoryId
        );
        dispatch(deleteCategory(deleteCategoryId));
      }
      deleteCat();
      setDeleteCategoryId(false);
    }
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  let categoriesSectionContent;

  if (CategoriesData.isLoading) {
    categoriesSectionContent = <div className="text-xl">Data is Loading</div>;
  }
  if (!CategoriesData.isLoading && CategoriesData.isError) {
    categoriesSectionContent = (
      <div className="text-xl">Error || {CategoriesData.error}</div>
    );
  }
  if (
    !CategoriesData.isLoading &&
    !CategoriesData.isError &&
    CategoriesData.categories.length === 0
  ) {
    categoriesSectionContent = (
      <div className="text-xl">NO categories found</div>
    );
  }
  if (
    !CategoriesData.isLoading &&
    !CategoriesData.isError &&
    CategoriesData.categories.length > 0
  ) {
    categoriesSectionContent = CategoriesData.categories.map(
      (category, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
        >
          <img
            src={category.categoryImageUrl}
            alt={category.name}
            className="w-24 h-24 object-cover mb-3"
          />
          <p className="text-lg font-semibold">{category.categoryName}</p>
          <div className="flex justify-between mt-4">
            <Link
              to={`/edit-category/${category.id}`}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Edit
            </Link>
            <button
              onClick={() => handleCleack(category.id)}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      )
    );
  }

  return (
    <>
      {deleteCategoryId && (
        <Modal onDelete={handleDelete} onClose={handleClose} />
      )}
      ;
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categoriesSectionContent}
          </div>
        </div>
      </section>
    </>
  );
}
