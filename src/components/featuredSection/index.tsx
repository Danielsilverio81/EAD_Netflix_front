"use client";
import styles from "./styles.module.scss";
import useSWR from "swr";
import CourseService, { CourseType } from "@/services/courseService";
import HeaderAuthComponent from "../headerAuthComponent";
import { Button, Container } from "reactstrap";
import Link from "next/link";
const FeaturedSection = () => {
  const { data, error } = useSWR("/featured", CourseService.getFeaturedCourses);
  if (error) return error;
  if (!data) {
    return(
    <>
      <p>Loading courses...</p>
    </>
    )
  }
  return (
    <>
      {
        data.data?.map((course: CourseType) => (
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, #6666661a, #151515),url(${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "485px"
            }}
            key={course.id}
          >
            <HeaderAuthComponent />
            <Container className="pt-4">
              <p className={styles.title}>{course.name}</p>
              <p className={styles.description}>{course.synopsis}</p>
              <Link className={styles.links} href={`/courses/${course.id}`}>
                <Button outline color="light" className={styles.button}>
                  ACESSE AGORA!
                  <img
                    src="/buttonPlay.svg"
                    alt="button"
                    className={styles.btnImg}
                  />
                </Button>
              </Link>
            </Container>
          </div>
        ))[0]
      }
    </>
  );
};

export default FeaturedSection;
