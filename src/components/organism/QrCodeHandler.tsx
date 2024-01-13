"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "../atoms/Button";

const QrCodeHandler = (): JSX.Element => {
  const [qrCodeType, setQrCodeType] = useState<"connect" | "link">("connect");

  const toggleQrCodeType = (): void => {
    if (qrCodeType === "connect") {
      setQrCodeType("link");
      return;
    }

    setQrCodeType("connect");
  };

  return (
    <div className="text-white flex min-h-screen flex-col items-center justify-center p-8">
      {qrCodeType === "connect" && (
        <>
          <div className="p-10 bg-white">
            <Image
              src="/assets/auto-connect-qr-code.png"
              alt="QR Code"
              width="360"
              height="360"
            />
          </div>

          <p className="mt-2">Auto-Connect</p>
        </>
      )}
      {qrCodeType === "link" && (
        <>
          <Image
            src="/assets/link-qr-code.png"
            alt="QR Code"
            width="360"
            height="360"
          />

          <p className="mt-2">Link</p>
        </>
      )}

      <div className="mt-6">
        <Button title="Toggle" onClickCallback={toggleQrCodeType} />
      </div>
    </div>
  );
};

export default QrCodeHandler;
