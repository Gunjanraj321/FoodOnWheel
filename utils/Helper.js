export const filterData = (searchText, restaurant) => {
    const resFilterData = restaurant.filter((res)=>{
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
    });
    return resFilterData;
}