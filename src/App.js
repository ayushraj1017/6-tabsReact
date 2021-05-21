import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const newdatas = await response.json();
    setDatas(newdatas);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="section loading">
        <h1>Loading.....</h1>
      </div>
    );
  }

  const { company, dates, duties, title } = datas[value];

  return (
    <>
      <h1 className="text-center">Experience</h1>

      <main className="flex justify-between ">
        <section className="w-1/4">
          {datas.map((data, index) => {
            return (
              <button
                onClick={() => setValue(index)}
                key={index}
                className="mx-8 px-1 border-l my-2 border-blue-200 hover:border-blue-800 hover:bg-blue-200  "
              >
                {data.company}
              </button>
            );
          })}
        </section>

        <section className="w-3/4">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <small>{dates}</small>
          {duties.map((duty, index) => {
            return (
              <div key={index}>
                <FaAngleDoubleRight /> <p>{duty}</p>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
