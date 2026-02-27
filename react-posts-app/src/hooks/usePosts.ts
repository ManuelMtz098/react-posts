import { useState, useEffect } from "react";
import type { Post } from "../types";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(API_URL);

        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }

        const data:Post[] = await res.json();
        setPosts(data);
      } catch (err: any) {
        setError(err.message || 'Error al cargar los posts.')
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    error
  }
};