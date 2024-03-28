"use server";

import { Button } from "@mui/material";
import React from "react";

interface Props {
  count: number;
  handlePlus: () => 0;
  handleMinus: () => 0;
}

const CounterComponent = React.memo(
  ({ count, handlePlus, handleMinus }: Props) => {
    return (
      <>
        <div className="flex flex-col justify-center items-center w-screen mt-10 text-blue-950 text-lg">
          <h1 className="font-semibold">Counter : {count}</h1>
          <div className="flex gap-4 mt-3 text-black">
            <Button
              className="margin-2 border-black bg-slate-100 w-9 h-9"
              onClick={handlePlus}
            >
              +
            </Button>
            <Button
              className="border-2 border-black bg-slate-100 w-9 h-9"
              onClick={handleMinus}
            >
              -
            </Button>
          </div>
        </div>
      </>
    );
  }
);

export default CounterComponent;
