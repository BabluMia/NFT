import React from "react";
import CountUp from "react-countup";

import "./Counter.css";

const Counter = () => {
  return (
    <div className="max-w-7xl counter-text grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-16 px-8 text-white mx-auto">
      <div className="border p-10 counter-bg  my-4 mx-4 lg:mx-3">
        <div className="flex font-bold text-6xl  justify-center items-center">
          <CountUp start={0} end={58} duration={6} />
          <h5 >B+</h5>
        </div>
        <div>
          <p className="text-center">Market Cap</p>
        </div>
      </div>

      <div className="border p-10 counter-bg my-4 mx-4 lg:mx-3">
        <div className="flex font-bold text-6xl  justify-center items-center">
          <CountUp start={0} end={15} duration={6} />
          <h5 >K+</h5>
        </div>
        <div>
          <p className="text-center">Daily Transaction</p>
        </div>
      </div>
      <div className="border p-10 counter-bg my-4 mx-4 lg:mx-3">
        <div className="flex font-bold text-6xl  justify-center items-center">
          <CountUp start={0} end={8250} duration={10} />
          <h5>+</h5>
        </div>
        <div>
          <p className="text-center">Active Accounts</p>
        </div>
      </div>
      <div className="border p-10 counter-bg my-4 mx-4 lg:mx-3">
        <div className="flex font-bold text-6xl  justify-center items-center">
          <CountUp start={0} end={15} duration={2} />
          <h5 >+</h5>
        </div>
        <div>
          <p className="text-center">Years on the Market</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
