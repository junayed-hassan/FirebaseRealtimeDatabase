import Slider from "react-slick";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";

export default function Categories() {
    const { categories } = useSelector((store) => store.categories);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className="py-8 container mx-auto gap-3">
            <Slider {...settings}>
                {categories.map((category) => (
                    <CategoryItem key={category.id} category={category} />
                ))}
            </Slider>
        </div>
    );
}
