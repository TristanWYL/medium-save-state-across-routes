import { Link } from "react-router-dom";

export const Counter = ({
  setCount,
  count,
  title,
}: {
  setCount: (arg: number) => void;
  count: number;
  title: string;
}) => (
  <>
    <div style={{ padding: "10px" }}>
      <p style={{ textAlign: "center" }}>{title}</p>
    </div>
    <div style={{ padding: "10px", textAlign: "center" }}>
      <Link to="/">Back to Home</Link>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{ padding: "5px", width: "30px" }}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <div style={{ padding: "20px", fontSize: "60px" }}>{count}</div>
      <button
        style={{ padding: "5px", width: "30px" }}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  </>
);
