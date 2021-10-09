import axios from "axios";
import React, { useEffect } from "react";
import { MDBDataTableV5 } from "mdbreact";

const PageBootsrap = () => {
  let [apiData, setApiData] = React.useState([]);
  console.log(apiData);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setApiData(response.data);
      });
  }, []);

  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "ID",
        field: "id",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "ID",
        },
      },
      {
        label: "ThumbnaiURL",
        field: "thumbnaiURL",
        width: 270,
      },
      {
        label: "Title",
        field: "title",
        width: 200,
      },
      {
        label: "Url",
        field: "url",
        width: 100,
      },
    ],
    rows: apiData,
  });

  return (
    <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={datatable}
      materialSearch
    />
  );
};

export default PageBootsrap;
