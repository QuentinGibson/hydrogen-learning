import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";

const FabricImageUpload = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    const fabricCanvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 600,
    });
    setCanvas(fabricCanvas);

    // Clean up on component unmount
    return () => {
      fabricCanvas.dispose();
    };
  }, []);
}

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        fabric.Image.fromURL(reader.result, (img) => {
          img.set({
            left: 100,
            top: 100,
            scaleX: 0.5,
            scaleY: 0.5,
            lockScalingFlip: true, // Prevent flipping when resizing
          });
          canvas.add(img);
          canvas.setActiveObject(img); // Select the uploaded image
        });
      };
      reader.readAsDataURL(file);
    }
  };
export default function CalendarPage() {
  /** @type {LoaderReturnData} */

  return (
    <div className="calendar">
      <h1>Im a calendar page</h1>
      <p>Add cool shit here</p>
      <div className="cool-shit">
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <canvas ref={canvasRef} />
    </div>


      </div>
    </div>
  );
}