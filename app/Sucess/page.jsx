import { useSearchParams } from "next/navigation";

export default function SuccessPage(){
  const params = useSearchParams();
  const sessionId = params.get("session_id");

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>Payment successful ✅</h1>
      <p style={{ color: "#666", marginTop: 12 }}>Thanks! Your download is below.</p>

      <div style={{ marginTop: 20 }}>
        <a href="/downloads/ai-prompts-500.zip" style={{ padding: "12px 18px", background: "#0b1220", color: "#fff", borderRadius: 8, textDecoration: "none" }}>
          Download: 500 Viral AI Prompts Pack
        </a>
      </div>

      <p style={{ marginTop: 18, color: "#999", fontSize: 13 }}>Session: {sessionId}</p>
    </div>
  );
}
