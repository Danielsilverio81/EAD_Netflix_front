"use client";
import CourseService from "@/services/courseService";
import useSWR from "swr";
import SlideComponent from "../../slides/slideComponent";
import stylesLoading from "../../../styles/loadingCourses.module.scss";
import styles from "../../../styles/slideCategory.module.scss";

const FeaturedCategory = () => {
  const { data, error } = useSWR("/featured", CourseService.getFeaturedCourses);
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
      <p className={styles.titleCategory}>EM DESTAQUE</p>
      <SlideComponent course={data.data} />
    </>
  );
};

export default FeaturedCategory;
