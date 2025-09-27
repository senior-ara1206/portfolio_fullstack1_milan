"use client";
import { useEffect, useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import Blog from "./blog";

export default function ClientBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
      if (res.ok) {
        const data = await res.json();
        const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
        setBlogs(filtered);
      }
    }
    fetchBlogs();
  }, []);

  return <Blog blogs={blogs} />;
}
