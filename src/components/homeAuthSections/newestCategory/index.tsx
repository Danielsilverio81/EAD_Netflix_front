"use client";
import CourseService from "@/services/courseService";
import useSWR from "swr";
import SlideComponent from "../../slides/slideComponent";
import styles from "../../../styles/slideCategory.module.scss";
import stylesLoading from "../../../styles/loadingCourses.module.scss";

const NewestCategory = () => {
  const { data, error } = useSWR("/newest", CourseService.getNewestCourses);
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
      <p className={styles.titleCategory}>LANÇAMENTOS</p>
      <SlideComponent course={data.data} />
    </>
  );
};

export default NewestCategory;
