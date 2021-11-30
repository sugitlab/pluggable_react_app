import React from "react";

export const Plugin = ({
  value,
  cb,
  label,
}: {
  value: number;
  cb: () => {};
  label: string;
}) => {
  return (
    <>
      <div>Plugin Component {value ?? "NOTFOUND"} </div>
      <p>{label}</p>
      <button onClick={cb}> callback </button>
    </>
  );
};

export default Plugin;
