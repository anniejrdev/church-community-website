import React from "react";

const Events = () => {
  const events = [
    {
      img: "https://preview.colorlib.com/theme/byfaith/images/img_1.jpg",
      date: "15 Jan 2020 • By Pastor Campbell",
      name: "Living and Sharing The Gospel",
    },
    {
      img: "https://preview.colorlib.com/theme/byfaith/images/img_2.jpg",
      date: "15 Jan 2020 • By Pastor Campbell",
      name: "Living and Sharing The Gospel",
    },
    {
      img: "https://preview.colorlib.com/theme/byfaith/images/img_4.jpg",
      date: "15 Jan 2020 • By Pastor Campbell",
      name: "Living and Sharing The Gospel",
    },
    {
      img: "https://images.unsplash.com/photo-1596933304642-8305b45767e0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "15 Jan 2020 • By Pastor Campbell",
      name: "Living and Sharing The Gospel",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1734014584695-10492f957e2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGNodXJjaCUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
      date: "15 Jan 2020 • By Pastor Campbell",
      name: "Living and Sharing The Gospel",
    },
    {
      img: "https://images.unsplash.com/photo-1633706202327-2370b7505745?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNodXJjaCUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
      date: "15 Jan 2020 • By Pastor Campbell",
      name: "Living and Sharing The Gospel",
    },
  ];

  return (
    <div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1474814947326-d835369963a5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-screen object-cover"
          alt="Scenic view"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl font-bold text-white">Upcoming Events</h1>
          <p className="mt-5 text-white max-w-2xl">
            Join us in fellowship and faith. Explore our upcoming church events
            where we worship, serve, and grow together as one family in Christ.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-5">
          {events.map((event, index) => (
            <div key={index} className="relative group">
              <img
                src={event.img}
                alt={event.name}
                className="rounded-lg w-full"
              />
              <div className="mt-4">
                <p className="text-gray-600">{event.date}</p>
                <p className="font-bold text-lg mt-2">{event.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
