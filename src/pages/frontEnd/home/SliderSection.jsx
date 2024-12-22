import BannerImg from "../../../assets/banner-img.png";
import { Link } from "react-router";
import Slider from "react-slick";

export default function SliderSection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <Slider {...settings}>
            <div className="bg-[#F6F9FC]">
                <div className="container m-auto pt-[50px] pb-[120px] grid grid-cols-2 items-center">
                    <div className="w-full">
                        <h3 className=" text-6xl font-bold">
                            Fashionable <br /> Collection
                        </h3>
                        <p className="text-xl">
                            Get free shipping on all orders over $99.00
                        </p>
                        <Link className="bg-red-500 text-white rounded py-3 px-6 inline-block mt-4">
                            Shop Now
                        </Link>
                    </div>

                    <div className="w-full text-center">
                        <img className="max-w-[460px]" src={BannerImg} alt="" />
                    </div>
                </div>
            </div>
            <div className="bg-[#F6F9FC]">
                <div className="container m-auto pt-[120px] pb-[120px] grid grid-cols-2">
                    <div className="w-6/12">
                        <h3 className=" text-6xl font-bold">
                            Fashionable <br /> Collection
                        </h3>
                        <p className="text-xl">
                            Get free shipping on all orders over $99.00
                        </p>
                        <Link className="bg-red-500 text-white rounded py-3 px-6 inline-block mt-4">
                            Shop Now
                        </Link>
                    </div>

                    <div className="w-6/12">
                        <img src={BannerImg} alt="" />
                    </div>
                </div>
            </div>
        </Slider>
    );
}
