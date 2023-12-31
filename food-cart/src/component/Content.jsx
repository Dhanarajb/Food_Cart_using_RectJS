import React, { useEffect, useState } from 'react'
import './component.css'
import { restaurantList } from '../ConfigData/Constant'
import { IMG_CDN_URL } from '../ConfigData/Constant'
import RestaurantCard from './CardComponent'



const Content = () => {
    const [data, setData] = useState(restaurantList)
    const [searchText, setSearchText] = useState("")

    useEffect(() => {

    })
    function filterData(searchText, data) {
        const filterData = data.filter((restaurant) =>
            restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
        );
        return filterData;
    }

    return (
        <div className='main-content'>
            <div className="search-container">
                <input className='search-input' type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button className='search-btn' type="submit" onClick={() => {
                    // filter the data
                    const data = filterData(searchText, data);
                    // update the state of restaurants list
                    setData(data);
                    console.log(data)
                }}>Search</button>
            </div>
            <div className="restaurant-list">
                {
                    data.map((restaurant) => {
                        return (
                            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Content