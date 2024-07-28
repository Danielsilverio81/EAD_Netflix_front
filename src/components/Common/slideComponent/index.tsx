import { Splide, SplideSlide } from '@splidejs/react-splide';
import  "@splidejs/splide/dist/css/splide.min.css"

const SlideComponent = () => {
    return (
    <>
    <div>
        <Splide>
            <SplideSlide options={{
                 type: "loop",
                 perPage: 4,
                 perMove: 1,
                 pagination:false,
            }}></SplideSlide>
        </Splide>
    </div>
    </>
    )
}

export default SlideComponent;