import { useState, useEffect } from "react";

export default function BackendMessage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`/api/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <p>{message}</p>
    </>
  );
}
