import Facilities from "./Facilities";
import ProductSection from "./product/ProductSection";
import SliderSection from "./SliderSection";

export default function HomeIndex() {
    return (
        <main>
            <SliderSection />
            <Facilities />
            <ProductSection />
        </main>
    );
}
