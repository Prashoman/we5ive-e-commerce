"use client";

import { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function GlobalError({ error, reset }:any) {
  useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}