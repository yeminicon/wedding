const OrderProcess = () => {
  return (
    <div className="w-[95%] md:max-w-[1200px] justify-between bg-blue-900 flex md:flex-row flex-col rounded-lg md:p-20 p-10 mx-auto">
      <div className="w-[100%] md:w-[45%]">
        <h1 className="text-white font-bold text-[1.25rem]">How to order our solutions.</h1>
        <p className="text-white font-medium my-5 md:my-0 text-[0.75rem] mt-1 md:w-[300px] w-[90%]">
          Follow these steps to access our solution, it's as simple as abc.
        </p>
      </div>

      <div className="w-[100%] md:w-[45%] md:h-[300px] flex flex-col justify-between">
        <h1 className="text-white font-medium text-[0.75rem] w-[300px]">
          Download our app and create an account, verify your mail and set a password
        </h1>
        <ul>
          <ol type="1" className="flex flex-col justify-between md:h-[200px]">
            <h1 className="my-5 md:my-0 text-white font-medium text-[0.75rem] w-[300px]">
              Fill in your location and select a plan from our list of packages suited to meet your
              various needs
            </h1>
          </ol>
          <ol>
            <h1 className="my-5 md:my-0 text-white font-medium text-[0.75rem] w-[300px]">
              Download our app and create an account, verify your mail and set a password
            </h1>
          </ol>
        </ul>
      </div>
    </div>
  );
};

export default OrderProcess;
