import { ImageResponse } from "next/og";

export const alt =
  "Smart Road Guardian AI X — case study";
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
          background: "#000000",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#2997ff",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 4,
          }}
        >
          CASE STUDY
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
          Smart Road Guardian AI X
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 44,
            fontWeight: 600,
            color: "#a1a1a6",
            marginTop: 18,
          }}
        >
          Predict. Explain. Prevent.
        </div>
        <div
          style={{
            display: "flex",
            width: 140,
            height: 8,
            background: "#2997ff",
            borderRadius: 4,
            marginTop: 40,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#a1a1a6",
            marginTop: 40,
          }}
        >
          YOLOv11 · Bayesian causal reasoning · FastAPI · Next.js
        </div>
      </div>
    ),
    { ...size }
  );
}
