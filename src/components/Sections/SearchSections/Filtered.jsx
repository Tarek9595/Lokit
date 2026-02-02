import CheckBox from "../../UI/CheckBox";
import Colors from "../../UI/Colors";
import Price from "../../UI/Price";
import Sizes from "../../UI/Sizes";
import SearchFilter from "../../Sections/SearchSections/SearchFilter";

export default function Filtered() {
  const filterData = {
    brands: ["adidas", "nike", "zara", "gucci"],
    departments: ["men", "women", "unisex", "kids", "sports wear"],
    categories: ["tops", "bottoms", "dresses", "active wear", "sets"],
    sizes: ["large", "medium", "small", "x large", "x small"],
  };

  return (
    <div className="w-full flex flex-col gap-10 p-6 rounded-xl h-fit md:w-[35%] md:px-5 lg:w-[30%] lg:max-w-95 lg:p-10 xl:max-w-105">
      <h1 className="font-oswald font-medium text-[28px] lg:text-[32px]">
        Filter
      </h1>

      <div className="flex flex-col gap-8">
        {Object.entries(filterData).map(([key, options]) => (
          <SearchFilter key={key} filterName={key.replace(/s$/, "")}>
            {options.map((item) => (
              <CheckBox key={item} name={item} />
            ))}
          </SearchFilter>
        ))}

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

      <button className="btn py-2.5 p-7 w-fit bg-[#F0F2F2] border-2 border-[#C4C4C4] font-[oswald] font-semibold text-[#615e5e] self-end-safe mr-6 md:mr-15 lg:mr-0 hover:bg-darky hover:text-white transition-colors">
        Apply
      </button>
    </div>
  );
}
