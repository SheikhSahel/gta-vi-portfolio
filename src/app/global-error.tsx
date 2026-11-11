"use client";

export default function GlobalError() {
  const reload = () => window.location.reload();

  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0a0a0c", color: "#fff", fontFamily: "Arial, sans-serif" }}>
        <main style={{ display: "grid", minHeight: "100vh", placeItems: "center", padding: "24px", textAlign: "center" }}>
          <div>
            <p style={{ color: "#ff4d94", letterSpacing: "0.3em", fontSize: "12px" }}>SYSTEM INTERRUPTION</p>
            <h1 style={{ fontSize: "clamp(48px, 10vw, 96px)", margin: "16px 0" }}>Signal lost.</h1>
            <p style={{ color: "rgba(255,255,255,.55)", maxWidth: "420px", lineHeight: 1.6 }}>
              The application could not start correctly. Reload the page to reconnect.
            </p>
            <button onClick={reload} style={{ cursor: "pointer", marginTop: "24px", border: 0, borderRadius: "999px", background: "#ffad36", padding: "14px 24px", fontWeight: 700 }}>
              RECONNECT
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
