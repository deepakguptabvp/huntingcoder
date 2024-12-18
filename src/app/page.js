"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const skeletonBlog = [1, 2, 3, 4];

  useEffect(() => {
    console.log("useEffect is running...");

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/blogList`, { method: "get" });
        const data = await res.json();
        setLoading(false);
        setBlogs(data.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 ">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          A blog for hunting coders by hunting coder&nbsp;
        </p>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-2 lg:pointer-events-auto lg:p-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Coder's{""}
            <Image
              src="/blog.png"
              alt="Blog Logo"
              className="dark:invert "
              width={100}
              height={34}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute z-[-1]">
        <Image
          className="rounded-full m-5"
          src="/coderblog.png"
          alt="Coding Blog Logo"
          width={200}
          height={47}
          priority
        />

        <h1 className={`text-4xl font-bold ml-5 mr-5`}> Hunting Coder</h1>
      </div>

      <div className="blogs">
        <h3 className="text-2xl my-10 font-bold">
          {" "}
          <u> Latest Blogs </u>
        </h3>
      </div>

      {/*  Fetching all blogs from blogsdata  */}
      <div className="mb-5 grid gap-4 text-center lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {loading
          ? skeletonBlog?.map((item, index) => {
              return (
                <div className="group rounded-lg border border-transparent m-5 px-5 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                  <Skeleton className={`mb-2`} height={"1rem"} width={120} />
                  <hr />
                  <Skeleton
                    className={`text-sm opacity-50 mt-1`}
                    height={"1rem"}
                  />
                  <Skeleton className={`text-sm opacity-50`} height={"1rem"} />
                  <Skeleton className={`text-sm opacity-50`} height={"1rem"} />
                  <Skeleton className={`text-sm opacity-50`} height={"1rem"} />
                </div>
              );
            })
          : blogs?.map((blogs, index) => {
              return (
                <Link
                  href={`/blogpost/${blogs.slug}`}
                  className="group rounded-lg border border-transparent px-5 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  // target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <h3 className={`mb-1 text-base font-semibold`}>
                    {blogs.title}
                    {/* <span className="inline-block">-&gt;</span> */}
                    <hr className="my-1 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-1" />
                  </h3>
                  <p className={`max-w-[190ch] text-sm opacity-50`}>
                    {blogs.content.substr(0, 125)}...{" "}
                  </p>
                  <hr className="my-1 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-1" />
                  <button
                    type="button"
                    className="mt-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Read More ...
                  </button>
                </Link>
              );
            })}
      </div>
    </main>
  );
}
