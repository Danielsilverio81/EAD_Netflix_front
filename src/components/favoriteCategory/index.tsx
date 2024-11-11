"use client";
import CourseService from "@/services/courseService";
import styles from "../../styles/slideCategory.module.scss";
import useSWR from "swr";
import SlideComponent from "../slideComponent";

const FavoriteCategory = () => {
  const { data, error } = useSWR("/favorites", CourseService.getFavCourses);
  if (error) return error;
  if (!data) 
    return (
      <>
        <p>Loading courses...</p>
      </>
    );
    return (
      <>
        <p className={styles.titleCategory}>Minha Lista</p>
        {data.data.courses.length >= 1 ? (
            <SlideComponent course={data.data.courses}/>
        ): (
            <p className="text-center pt-4 h5">
                <strong>Você não tem nenhum curso na lista!</strong>
            </p>
        )}
      </>
    );
};

export default FavoriteCategory;
