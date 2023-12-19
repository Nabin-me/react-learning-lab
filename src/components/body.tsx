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
  phone: string;
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
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {data ? (
        <div className="w-1/2 bg-primary p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg border border-gray-600 flex flex-col items-center justify-center">
          <h2 className="text-2xl text-accent">
            {data.name.first} {data.name.last}
          </h2>
          <img
            className="rounded-full mx-auto"
            src={data.picture.large}
            alt="profile"
          />
          <p className=" text-gray-300">
            {data.location.city}, {data.location.country}
          </p>
          <p className=" text-gray-300">{data.email}</p>
          <code className="mt-5 p-2 text-accent  border border-accent rounded-lg hover:bg-gradient-to-t from-primary to-blue-950">
            {data.phone}
          </code>
        </div>
      ) : null}
    </div>
  );
};

export default Main;
