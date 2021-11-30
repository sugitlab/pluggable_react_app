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
  return <div>Replaced Plugin</div>;
};

export default Plugin;
