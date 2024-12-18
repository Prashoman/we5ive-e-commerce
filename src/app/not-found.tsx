"use client";
import { useRouter } from "next/navigation";
const NotFound = (): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-40 text-primary">
        Sorry, this page could not be found
        </h1>
        <button
          className="text-primary border border-primary hover:bg-primary hover:text-white px-[18px] rounded-md mt-3"
          onClick={() => router.back()}
        >
          Back
        </button>
      </section>
    </>
  );
};
export default NotFound;