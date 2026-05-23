import { jsxs, jsx } from "react/jsx-runtime";
import { e as getOriginals, C as ContentCard, F as Footer } from "./Footer-BxCtXtYb.js";
import { Crown } from "lucide-react";
import "react";
import "@tanstack/react-router";
function OriginalsPage() {
  const originals = getOriginals();
  return /* @__PURE__ */ jsxs("div", { style: {
    background: "var(--void)",
    minHeight: "100vh"
  }, children: [
    /* @__PURE__ */ jsxs("div", { style: {
      position: "relative",
      height: "380px",
      overflow: "hidden",
      display: "flex",
      alignItems: "flex-end"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(135deg, rgba(220,38,38,0.15) 0%, rgba(124,58,237,0.15) 50%, rgba(5,5,8,0.9) 100%)"
      } }),
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.04
      }, children: /* @__PURE__ */ jsx("div", { style: {
        fontFamily: "var(--font-title)",
        fontSize: "200px",
        letterSpacing: "0.1em",
        color: "var(--crimson)",
        userSelect: "none"
      }, children: "ORIGINAL" }) }),
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
          marginBottom: "10px"
        }, children: [
          /* @__PURE__ */ jsx(Crown, { size: 22, color: "var(--gold)" }),
          /* @__PURE__ */ jsx("span", { style: {
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            background: "linear-gradient(to right, var(--crimson), var(--gold))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }, children: "Exclusively on CINEVERSE" })
        ] }),
        /* @__PURE__ */ jsx("h1", { style: {
          fontFamily: "var(--font-title)",
          fontSize: "clamp(40px, 6vw, 80px)",
          letterSpacing: "0.05em",
          lineHeight: 1,
          marginBottom: "12px"
        }, children: "Originals" }),
        /* @__PURE__ */ jsx("p", { style: {
          fontSize: "15px",
          color: "var(--text-secondary)",
          maxWidth: "460px"
        }, children: "Produced exclusively by CINEVERSE — stories found nowhere else." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { style: {
      padding: "48px",
      maxWidth: "1600px",
      margin: "0 auto"
    }, children: /* @__PURE__ */ jsx("div", { className: "content-grid", children: originals.map((item) => /* @__PURE__ */ jsx(ContentCard, { item, cardWidth: 220, cardHeight: 330 }, item.id)) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  OriginalsPage as component
};
