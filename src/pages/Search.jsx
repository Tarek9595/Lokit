import CheckBox from "../components/CheckBox";
import Colors from "../components/Colors";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import SearchFilter from "../components/SearchFilter";
import Sizes from "../components/Sizes";
export default function Search() {
  return (
    <>
      <MainHeader />
      <div className="flex flex-col p-12.5 gap-10 w-88">
        <h1 className="font-oswald font-medium text-[32px]">Filter</h1>
        <SearchFilter filterName="brand">
          <CheckBox name="adidas" />
          <CheckBox name="nike" />
          <CheckBox name="zara" />
          <CheckBox name="gucci" />
        </SearchFilter>
        <SearchFilter filterName="department">
          <CheckBox name="men" />
          <CheckBox name="women" />
          <CheckBox name="unisex" />
          <CheckBox name="kids" />
          <CheckBox name="sports wear" />
        </SearchFilter>
        <SearchFilter filterName="category">
          <CheckBox name="tops" />
          <CheckBox name="bottoms" />
          <CheckBox name="dresses" />
          <CheckBox name="active wear" />
          <CheckBox name="sets" />
        </SearchFilter>
        <SearchFilter filterName="size">
          <CheckBox name="large" />
          <CheckBox name="medium" />
          <CheckBox name="small" />
          <CheckBox name="x large" />
          <CheckBox name="x small" />
        </SearchFilter>
        <SearchFilter filterName="size (Inches)">
          <Sizes />
        </SearchFilter>
        <SearchFilter filterName="Color">
          <Colors />
        </SearchFilter>
      </div>
      <Footer />
    </>
  );
}
