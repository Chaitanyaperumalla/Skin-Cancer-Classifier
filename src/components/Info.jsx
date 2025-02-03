import { useNavigate } from "react-router-dom";

function Info() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/tools");
  };

  return (
    <div className="bg-[url('/doctor2.jpg')] bg-cover bg-center min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white bg-opacity-90 shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">
          Deep Learning in Dermatology
        </h2>
        <p className="text-gray-700 text-lg mb-6 text-center">
          Once familiar with skin cancer, we take you to the next stage—exploring how deep learning technology assists dermatologists in their clinical work. 
          By harnessing the power of convolutional neural networks (CNNs), healthcare professionals can make faster and more accurate diagnoses, improving patient outcomes significantly.
        </p>
        <p className="text-gray-700 text-lg mb-6 text-center">
          Deep learning tools can analyze thousands of images to identify patterns and anomalies that might be missed by the human eye. This technology is a critical step toward reducing deaths caused by melanoma and other forms of skin cancer.
        </p>
        <div className="text-center">
          <button
            onClick={handleExploreClick}
            className="mt-4 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;
