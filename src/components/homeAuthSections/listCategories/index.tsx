"use client";
import categoriesService, { CategoryType } from "@/services/categoryServices";
import useSWR from "swr";
import ListCategoriesSlide from "../../slides/slideListCategory";
import stylesLoading from "../../../styles/loadingCourses.module.scss";

const ListCategories = () => {
  const { data, error } = useSWR(
    "/listCategories",
    categoriesService.getCategories
  );
  if (error) return error;
  if (!data)
    return (
      <>
        <div className={stylesLoading.loadingContainer}>
          <div className={stylesLoading.spinner} />
          <p className={stylesLoading.text}>Carregando...</p>
        </div>
      </>
    );
  return (
    <>
      {data.data.categories?.map((category: CategoryType) => (
        <ListCategoriesSlide key={category.id} categoryId={category.id} categoryName={category.name} />
      ))}
    </>
  );
};

export default ListCategories;
