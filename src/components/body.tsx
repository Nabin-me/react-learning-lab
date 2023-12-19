import React from "react";

interface UserData {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  location: {
    city: string;
    country: string;
  };
  email: string;
}

const Main = () => {
  const [data, setData] = React.useState<UserData | null>(null);
  const [loading, setLoading] = React.useState(false);

  const fetchData = async () => {
    setData(null);
    try {
      setLoading(true);
      const response = await fetch("https://randomuser.me/api");
      const data = await response.json();

      // Add a delay of half a second before setting the data
      setTimeout(() => {
        setData(data.results[0]);
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col items-center gap-8">
      <h1 className="text-accent font-semibold text-xl mt-10">
        Hey! Here's my first API request handle in react!
      </h1>
      <h2 className="text-gray-300">
        To see it in action, press the magic button!
      </h2>
      <button
        className="transition-all  bg-primary text-accent rounded-lg p-2 hover:bg-accent hover:text-primary border border-gray-600 "
        onClick={fetchData}
      >
        Magic Button ✨
      </button>
      {loading && (
        <div className=" bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg animate-spin"></div>
      )}
      {data ? (
        <div className="w-1/2 bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
          <h2 className="text-2xl text-center text-accent">
            {data.name.first} {data.name.last}
          </h2>
          <img
            className="rounded-full mx-auto"
            src={data.picture.large}
            alt="profile"
          />
          <p className="text-center text-gray-300">
            {data.location.city}, {data.location.country}
          </p>
          <p className="text-center text-gray-300">{data.email}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Main;
