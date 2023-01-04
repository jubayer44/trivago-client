import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Cities = () => {
  const [citys, setCitys] = useState([]);
  const location = useLocation();
  const cityName = location.pathname.split("/")[2];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_url}/city?city=${cityName}`)
      .then((res) => res.json())
      .then((data) => {
        setCitys(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [cityName]);

  if (loading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400 mx-auto my-10"></div>
    );
  }

  return (
    <div className="md:w-[1080px] mx-auto my-10 px-4">
      {citys.length > 0 ? (
        <div>
          <h2 className="my-4 text-center text-2xl font-bold">
            Available data
          </h2>
          {citys?.map((city) => {
            return (
              <div className="w-[272px] h-[328px]">
                <div>
                  <img className="rounded-xl" src={city.photo} alt="" />
                </div>
                <div>
                  <h4 className="font-bold mt-1">{city.name}</h4>
                  <div className="flex gap-2 text-sm mt-1">
                    <p>{city.address}</p>
                    <strong>Avg {city.price}</strong>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-2xl font-font text-center my-10 h-screen">
          No data available
        </div>
      )}
    </div>
  );
};

export default Cities;
