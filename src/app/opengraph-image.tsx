import { ImageResponse } from "next/og";

export const alt =
  "Aditya Ayushman Sahoo — AI & Machine Learning Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#0d0d0d",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#ff6b35",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 4,
          }}
        >
          AI • COMPUTER VISION • CLOUD AI
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 800,
            marginTop: 24,
            lineHeight: 1.05,
          }}
        >
          Aditya Ayushman Sahoo
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 44,
            fontWeight: 600,
            color: "#9ca3af",
            marginTop: 18,
          }}
        >
          AI & Machine Learning Engineer
        </div>
        <div
          style={{
            display: "flex",
            width: 140,
            height: 8,
            background: "#ff6b35",
            borderRadius: 4,
            marginTop: 40,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#9ca3af",
            marginTop: 40,
          }}
        >
          YOLOv8 · PyTorch · TensorFlow · FastAPI · Reinforcement Learning
        </div>
      </div>
    ),
    { ...size }
  );
}
