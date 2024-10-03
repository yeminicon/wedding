const Numbers = () => {
  const listOfData = [
    {
      name: "Total Appointment",
      digit: "4111+",
    },
    {
      name: "On Site Visit",
      digit: 231,
    },
    {
      name: "State Visit",
      digit: 10,
    },
    {
      name: "Referrals",
      digit: 2000,
    },
  ];
  return (
    <div className="w-[95%] mx-auto md:max-w-[1200px] p-10">
    <div className="flex md:flex-row flex-col justify-between">
      {listOfData.map((list) => (
        <div className="md:w-[200px] flex flex-col justify-center">
          <h1 className="text-[2rem] text-center font-bold">{list.digit}</h1>
          <p className="text-[1rem] text-center">{list.name}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Numbers;
