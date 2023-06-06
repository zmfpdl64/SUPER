const app = () => {
  const handleKeydown = (e) => {
    console.log(e.key, e.keyCode);
  };
  window.addEventListener("keydown", handleKeydown);
};

app();
