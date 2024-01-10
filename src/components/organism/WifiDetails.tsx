"use client";

import Button from "@/components/atoms/Button";
import Details from "../atoms/Details";
import toast from "react-hot-toast";

const WifiDetails = (): JSX.Element => {
  const ssid = process.env.NEXT_PUBLIC_SSID ?? "";
  const password = process.env.NEXT_PUBLIC_PASSWORD ?? "";

  const onClickCopyPasswordHandler = (): void => {
    if ("clipboard" in navigator) {
      navigator.clipboard.writeText(password);
    } else {
      document.execCommand("copy", true, password);
    }

    toast("Copied to clipboard");
  };
  return (
    <>
      <div className="mb-8">
        <Details heading="Wifi Name" description={ssid} />
      </div>
      <div className="mb-8">
        <Details heading="Wifi Password" description={password} />
      </div>
      <div className="text-center">
        <Button
          onClickCallback={() => onClickCopyPasswordHandler()}
          title="Copy Password"
        />
      </div>
    </>
  );
};

export default WifiDetails;
