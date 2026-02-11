import { useWishlist } from "../../../../Store";

export default function WishlistInfo() {
  let borderBetween = "pt-18.75 border-t border-[#E9E9EB]";

  const { wishlist, removeWishlistProduct } = useWishlist();

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const today = new Intl.DateTimeFormat("en-GB", options).format(new Date());

  return (
    <>
      {wishlist.length > 0 ? (
        wishlist.map((el, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-1 pt-18.75 text-darky font-medium ${wishlist.length > 0 && index == 0 ? "" : borderBetween}`}
          >
            <div className="flex gap-8">
              <div className="w-25 h-25 ">
                <img src={el.img} className="object-contain" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-[16px]">{el.name}</h1>
                <span className="text-[14px] text-[#5C5F6A]">
                  Added on: {today}
                </span>
                <button
                  onClick={() => removeWishlistProduct(el.id)}
                  className="text-[14px] cursor-pointer text-left hover:underline hover:underline-offset-1"
                >
                  Remove item
                </button>
              </div>
            </div>
            <div className="flex gap-8 text-[14px] items-center">
              <div className="">$ {el.price}</div>
              <button
                className="border border-darky rounded-md h-fit py-2.5 px-6 transition-all duration-300 ease-in-out
                 hover:bg-darky hover:text-white active:scale-9 cursor-pointer"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1 className="tracking-wide font-semibold text-[16px]">
          Go ! Like Some Products
        </h1>
      )}
    </>
  );
}
