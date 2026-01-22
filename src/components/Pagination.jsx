export default function Pagination() {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex justify-center items-center gap-1 text-[#5C5F6A] font-medium font-inter text-[14px]">
        <span>Showing 1-9 of</span>
        <span>36 results.</span>
      </div>
      <div className="join">
        <button className="join-item btn">«</button>
        <button className="join-item btn">1</button>
        <button className="join-item btn">2</button>
        <button className="join-item btn btn-disabled">...</button>
        <button className="join-item btn">99</button>
        <button className="join-item btn">100</button>
        <button className="join-item btn">»</button>
      </div>
    </div>
  );
}
