import Filtered from "../components/Filtered";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import SearchShoping from "../components/SearchShoping";
export default function Search() {
  return (
    <>
      <MainHeader />
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between container">
          <Filtered />
          <SearchShoping />
        </div>
      </div>
      <Footer />
    </>
  );
}
