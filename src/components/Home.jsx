function Home() {
  const style = {
    backgroundImage: "url('image.jpg')",
    backgroundSize: "cover", // Or "contain" based on your preference
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat", // Ensures no tiling of the image
    height: "100vh", // Full viewport height
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  };

  return <div style={style}>Welcome to the Home Page!</div>;
}

export default Home;
