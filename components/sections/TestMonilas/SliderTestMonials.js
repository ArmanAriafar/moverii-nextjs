//? Required
import { useEffect, useState } from "react";
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
//? Comps
import TestArticle from "./TestArticle";

//? Comp
export default function SliderTestmonials() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get("http://localhost:3000/api/testmonialsdata");
            setData(data);
        };
        getData();
    }, []);
    return (
        <>
            <Swiper
                style={{
                    "--swiper-theme-color": "#12A3BA",
                }}
                slidesPerView={2}
                spaceBetween={34}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                speed={1000}
                loop={true}
                modules={[Pagination, Autoplay]}
                centeredSlides={true}
                className="mt-12"
            >
                {data.map((i, key) => {
                    return (
                        <SwiperSlide key={key}>
                            <TestArticle text={i.text} image={i.image} author={i.author} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}
