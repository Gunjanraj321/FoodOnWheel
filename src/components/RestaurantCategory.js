import ItemList from "./ItemList.js";

const RestaurantCategory = ({ data, showItem ,setShowIndex}) => {
  const HandleClick = () => {
    // console.log("clicked");
      setShowIndex();
  };

  return (
    <div className="">
      <div className="w-6/12 my-3 mx-auto border-solid border-2 border-sky-500  p-2 rounded-lg">
        {/* header */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={HandleClick}
        >
          <span className="font-semibold text-lg ">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* accordion body */}
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
