import React, { useEffect, useState } from "react";
import Search from "./Search";
import trackData from "../response.json";

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(trackData);
  }, []);
  return (
    <div>
      <div className="content-data">
        <Search />
        {/* <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul> */}
        <table>
          <tr>
            <th>Name</th>
          </tr>

          {data && data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.columns.id}</td>
              </tr>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </table>
      </div>
    </div>
  );
};

export default Content;
