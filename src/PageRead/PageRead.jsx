import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
// import { useLoaderData } from "react-router-dom";
import { getStorageBookApp } from "../utilities/localStorage";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};
export const PageRead = () => {
  // const books = useLoaderData([]);
  const [books, setBookData] = useState([]);
  useEffect(() => {
    fetch("BookData.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBookData(data);
      });
  }, []);
  const [WidthBar, setWidthBar] = useState(0);
  const [readData, setReadData] = useState([]);

  useEffect(() => {
    const storeBook = getStorageBookApp("Read");
    const storeBookInt = Array.isArray(storeBook)
      ? storeBook.map((str) => parseInt(str))
      : [];
    if (Array.isArray(books) && books.length > 0) {
      const bookStore = books.filter((book) =>
        storeBookInt.includes(book.bookId)
      );
      setReadData(bookStore);
    }
  }, [books]);

  useEffect(() => {
    const updateWidth = () => {
      const containerWidth =
        document.getElementById("chartContainer")?.offsetWidth || 500;
      setWidthBar(containerWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return (
    <div className="max-w-[1202px] mx-auto px-4 mt-8">
      <div className="bg-base-200 rounded-2xl lg:p-12">
        <div id="chartContainer">
          <BarChart
            className="w-full mx-auto"
            width={WidthBar}
            height={(WidthBar / 6) * 3}
            data={readData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Bar
              dataKey="totalPages"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {readData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
};
