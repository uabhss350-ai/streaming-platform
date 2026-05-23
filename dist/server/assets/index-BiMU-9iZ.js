import { jsxs, jsx } from "react/jsx-runtime";
import { a as getContentByType, C as ContentCard, F as Footer } from "./Footer-BxCtXtYb.js";
import { Zap } from "lucide-react";
import "react";
import "@tanstack/react-router";
function AnimePage() {
  const anime = getContentByType("anime");
  return /* @__PURE__ */ jsxs("div", { style: {
    background: "var(--void)",
    minHeight: "100vh"
  }, children: [
    /* @__PURE__ */ jsxs("div", { style: {
      position: "relative",
      height: "320px",
      overflow: "hidden",
      display: "flex",
      alignItems: "flex-end"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${anime[0]?.backdrop})`,
        backgroundSize: "cover",
        backgroundPosition: "center 30%"
      } }),
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(5,5,8,1) 0%, rgba(5,5,8,0.5) 50%, rgba(5,5,8,0.1) 100%)"
      } }),
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at 30% 60%, rgba(167,139,250,0.12) 0%, transparent 70%)"
      } }),
      /* @__PURE__ */ jsxs("div", { style: {
        position: "relative",
        zIndex: 1,
        padding: "0 48px 48px",
        maxWidth: "1600px",
        width: "100%",
        margin: "0 auto"
      }, children: [
        /* @__PURE__ */ jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "8px"
        }, children: [
          /* @__PURE__ */ jsx(Zap, { size: 20, color: "#c4b5fd" }),
          /* @__PURE__ */ jsx("span", { style: {
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#c4b5fd"
          }, children: "Japanese Animation Empire" })
        ] }),
        /* @__PURE__ */ jsx("h1", { style: {
          fontFamily: "var(--font-title)",
          fontSize: "clamp(36px, 5vw, 64px)",
          letterSpacing: "0.05em",
          lineHeight: 1
        }, children: "Anime Universe" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: {
      padding: "48px",
      maxWidth: "1600px",
      margin: "0 auto"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: {
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        marginBottom: "40px"
      }, children: ["All", "Action", "Dark Fantasy", "Supernatural", "Adventure", "Comedy", "Horror"].map((genre) => /* @__PURE__ */ jsx("button", { style: {
        background: genre === "All" ? "#7c3aed" : "rgba(255,255,255,0.06)",
        border: genre === "All" ? "none" : "1px solid rgba(255,255,255,0.08)",
        color: "var(--text-primary)",
        fontSize: "13px",
        fontWeight: "500",
        padding: "8px 18px",
        borderRadius: "20px",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        transition: "all 0.2s"
      }, children: genre }, genre)) }),
      /* @__PURE__ */ jsx("div", { className: "content-grid", children: anime.map((item) => /* @__PURE__ */ jsx(ContentCard, { item }, item.id)) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  AnimePage as component
};
