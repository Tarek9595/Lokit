import CheckBox from "../components/CheckBox";
import Colors from "../components/Colors";
import Price from "../components/Price";
import SearchFilter from "../components/SearchFilter";
import Sizes from "../components/Sizes";

export default function Filtered() {
  return (
    <div
      className="
      w-full flex flex-col gap-10 p-6 rounded-xl h-fit
      md:w-[35%] md:px-5
      lg:w-[30%] lg:max-w-95 lg:p-10
      xl:max-w-105
    "
    >
      <h1 className="font-oswald font-medium text-[28px] lg:text-[32px]">
        Filter
      </h1>
      <div className="flex flex-col gap-8">
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
        <SearchFilter filterName="price range">
          <Price />
        </SearchFilter>
      </div>
      <button className="btn py-2.5 p-7 w-fit bg-[#F0F2F2] border-2 border-[#C4C4C4] font-[oswald] font-semibold text-[#615e5e] self-end-safe mr-6 md:mr-15 lg:mr-0">
        Apply
      </button>
    </div>
  );
}
