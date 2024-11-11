"use client";
import CourseService from "@/services/courseService";
import useSWR from "swr";
import SlideComponent from "../slideComponent";
import styles from "../../styles/slideCategory.module.scss";

const NewestCategory = () => {
  const { data, error } = useSWR("/newest", CourseService.getNewestCourses);
  if (error) return error;
  if (!data) 
    return (
      <>
        <p>Loading courses...</p>
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
