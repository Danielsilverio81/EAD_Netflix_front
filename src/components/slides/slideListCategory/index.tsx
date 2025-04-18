import categoriesService from "@/services/categoryServices";
import useSWR from "swr";
import stylesLoading from "../../../styles/loadingCourses.module.scss";
import styles from "../../../styles/slideCategory.module.scss";
import SlideComponent from "../slideComponent";

interface props {
  categoryId: number;
  categoryName: string;
}

const ListCategoriesSlide = ({ categoryId, categoryName }: props) => {
  const { data, error } = useSWR(`/categoriesCourses/${categoryId}`, () =>
    categoriesService.getCourses(categoryId)
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
  return (<>
   <p className={styles.titleCategory}>{categoryName}</p>
  <SlideComponent course={data.data.courses} />
  </>);
};

export default ListCategoriesSlide;
