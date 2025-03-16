"use client";
import CourseService from "@/services/courseService";
import useSWR from "swr";
import styles from "../../styles/slideCategory.module.scss";
import SlideComponent from "../slideComponent";

const FeaturedCategory = () => {
  const { data, error } = useSWR("/featured", CourseService.getFeaturedCourses);
  if (error) return error;
  if (!data)
    return (
      <>
        <p>Loading courses...</p>
      </>
    );
  return(
  <>
    <p className={styles.titleCategory}>EM DESTAQUE</p>
    <SlideComponent course={data.data} />
  </>
  );
};

export default FeaturedCategory;
