import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = () => {
      const genres = ['React', 'JavaScript', 'Node.js', 'jQuery', 'AngularJS'];

      const data = genres.map((genre) => {
        const value = events.filter(({ summary }) =>
          summary.split(' ').includes(genre)
        ).length;
        return { name: genre, value };
      });
      return data;
    };
    setData(() => getData());
  }, [events]);

  const colors = ['#9ad5ca', '#acdde7', '#adb9e3', '#a379c9', '#b744b8']


  return (
    <ResponsiveContainer height={400} >
      <PieChart width={200}
      margin={{
        top: 20, right: 20, bottom: 20, left: 20,
      }}>
        <Pie
          data={data}
          labelLine={false}
          outerRadius={100}
          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}>
            
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}

        </Pie>
        <Legend verticalAlign="bottom" height={36}/>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre;