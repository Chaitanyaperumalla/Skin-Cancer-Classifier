function Tools() {
  const style = {
    backgroundImage: "url('image3.jpg')", // Replace with your image URL
    backgroundSize: "cover", // Ensures the image covers the entire div
    backgroundPosition: "center", // Centers the image
    height: "100vh", // Makes the div full viewport height
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "24px",
  };

  return <div style={style}>Check out our tools!</div>;
}

export default Tools;
