import { useEffect, useState, type JSX } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  content: string;
}

export function PostDetail(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);

  useEffect((): void => {
    // Try real API, fallback to fake data
    axios.get(`http://localhost:3000/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(() => {
        console.warn("Backend API not available, using fake data");
        // Fake post data
        const fakePost = {
          id: parseInt(id || "1"),
          title: `Post de ejemplo #${id}`,
          content: `Este es el contenido del post #${id}.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        };
        setPost(fakePost);
      });
  }, [id]);

  if (!post) return <p>Cargando...</p>;

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>{post.title}</Typography>
      <Typography variant="body1" paragraph>{post.content}</Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        ← Volver
      </Button>
    </Box>
  );
}