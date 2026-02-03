import Filtered from "../components/Sections/SearchSections/Filtered";
import SearchShoping from "../components/Layout/SearchShoping";
import TopSection from "../components/UI/TopSection";

export default function Search() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow flex flex-col items-center">
        <TopSection name="Search" />
        <div className="flex flex-col md:flex-row justify-between container gap-8 py-10 px-5 md:px-0">
          <Filtered />
          <SearchShoping />
        </div>
      </main>
    </div>
  );
}
