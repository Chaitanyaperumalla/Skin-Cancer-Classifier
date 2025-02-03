function OurSolutions() {
  const style = {
    backgroundImage: "url('solutions.jpg')", // Replace with your image URL
    backgroundSize: "cover", // Ensures the image covers the entire div
    backgroundPosition: "center", // Centers the image
    height: "100vh", // Full viewport height
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "24px",
  };

  return <div style={style}>Explore Our Solutions.</div>;
}

export default OurSolutions;
