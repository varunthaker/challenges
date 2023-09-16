import { useEffect, useState } from "react";
import "./StatusCheck.css";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  const [statusIcon, setStatusIcon] = useState("⁉️");
  const [data, setData] = useState("");

  async function handleCheckApiStatus(event) {
    try {
      event.target.textContent = "⏳";
      const response = await fetch(apiStatusUrl);
      event.target.textContent = "Check API Status";
      const data = await response.json();
      setStatusIcon(response.ok ? "✅" : "❌");
      setData(data.status);
    } catch (error) {
      setStatusIcon("🚨");
    }
  }

  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        <span className="status-check__icon">{statusIcon}</span>
      </div>
      <h5>Http Status: {data}</h5>
      <button
        type="button"
        className="status-check__button"
        onClick={() => handleCheckApiStatus(event)}
      >
        Check API Status
      </button>
    </article>
  );
}
