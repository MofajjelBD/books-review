import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const data = [
  {
    name: "The Great Gatsby",
    uv: 328,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "To kill a mocking bird",
    uv: 300,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "1984",
    uv: 200,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "The Alchemist",
    uv: 278,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Pride and prejudice",
    uv: 189,
    pv: 4800,
    amt: 2181,
  },
];

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
  const [WidthBar, setWidthBar] = useState(0);

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
      <div className="bg-base-200 rounded-2xl p-12">
        <div id="chartContainer">
          <BarChart
            className="w-full"
            width={WidthBar}
            height={(WidthBar / 6) * 3}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="uv"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
};
