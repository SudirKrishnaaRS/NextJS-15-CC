"use client";
import React, { useEffect } from "react";

type ErrorType = {
  error: Error;
};

const Error = ({ error }: ErrorType) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-2xl text-red-500">
        Error fetching users data, Please check the log
      </div>
    </div>
  );
};

export default Error;
