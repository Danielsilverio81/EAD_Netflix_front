"use client";
import CourseService from "@/services/courseService";
import styles from "../../styles/slideCategory.module.scss";
import useSWR from "swr";
import SlideComponent from "../slides/slideComponent";
import stylesLoading from "../../styles/loadingCourses.module.scss";

const FavoriteCategory = () => {
  const { data, error } = useSWR("/favorites", CourseService.getFavCourses);
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
      <p className={styles.titleCategory}>MINHA LISTA</p>
      {data.data.courses.length >= 1 ? (
        <SlideComponent course={data.data.courses} />
      ) : (
        <p className="text-center pt-4 h5">
          <strong>Você não tem nenhum curso na lista!</strong>
        </p>
      )}
    </>
  );
};

export default FavoriteCategory;
