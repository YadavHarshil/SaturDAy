import axios from "axios";
import React, { useEffect } from "react";
import _ from "lodash";

const pageSize = 10;

const AxiosPagination = () => {
  let [apiData, setApiData] = React.useState();
  let [paginatedPost, setPaginatedPost] = React.useState([]);
  let [currentPage, setcurrentPage] = React.useState();
  let [searchData, setSearchData] = React.useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        console.log(response.data);
        setApiData(response.data);
        setPaginatedPost(_(response.data).slice(0).take(pageSize).value());
      });
  }, []);

  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };

  const pageCount = apiData ? Math.ceil(apiData.length / pageSize) : 0;

  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount / 20 + 1);

  const pagination = (pageNo) => {
    setcurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(apiData).slice(startIndex).take(pageSize).value();
    setPaginatedPost(paginatedPost);
  };

  return (
    <div className="container">
      <label>
        Search:{" "}
        <input
          type="text"
          name="searchBox"
          id="searchBox"
          onChange={handleSearch}
        />
      </label>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>ThumbnaiURL</th>
            <th>Title</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPost
            .filter((item) => {
              if (searchData === "") {
                return item;
              } else if (item.title.includes(searchData)) {
                return item;
              }
            })
            .map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.thumbnailUrl}</td>
                  <td>{data.title}</td>
                  <td>{data.url}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <p className="page-link" onClick={() => pagination(page)}>
                {page}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default AxiosPagination;
