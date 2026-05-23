import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { f as getTopRated, C as ContentCard, F as Footer } from "./Footer-BxCtXtYb.js";
import { Star } from "lucide-react";
import "react";
function TopRatedPage() {
  const topRated = getTopRated();
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
        backgroundImage: `url(${topRated[0]?.backdrop})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      } }),
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(5,5,8,1) 0%, rgba(5,5,8,0.5) 50%, rgba(5,5,8,0.1) 100%)"
      } }),
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at 30% 60%, rgba(217,119,6,0.1) 0%, transparent 60%)"
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
          /* @__PURE__ */ jsx(Star, { size: 20, fill: "var(--gold)", color: "var(--gold)" }),
          /* @__PURE__ */ jsx("span", { style: {
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--gold)"
          }, children: "Critically Acclaimed" })
        ] }),
        /* @__PURE__ */ jsx("h1", { style: {
          fontFamily: "var(--font-title)",
          fontSize: "clamp(36px, 5vw, 64px)",
          letterSpacing: "0.05em",
          lineHeight: 1
        }, children: "Top Rated" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: {
      padding: "48px",
      maxWidth: "1600px",
      margin: "0 auto"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "56px"
      }, children: topRated.map((item, i) => /* @__PURE__ */ jsx(Link, { to: `/watch/${item.id}`, style: {
        textDecoration: "none"
      }, children: /* @__PURE__ */ jsxs("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: "20px",
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: "10px",
        padding: "14px 16px",
        transition: "all 0.2s"
      }, onMouseEnter: (e) => {
        e.currentTarget.style.background = "rgba(217,119,6,0.05)";
        e.currentTarget.style.borderColor = "rgba(217,119,6,0.15)";
      }, onMouseLeave: (e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
      }, children: [
        /* @__PURE__ */ jsx("span", { style: {
          fontFamily: "var(--font-title)",
          fontSize: "40px",
          minWidth: "48px",
          textAlign: "center",
          lineHeight: 1,
          color: i < 3 ? "var(--gold)" : "var(--text-muted)",
          opacity: Math.max(0.3, 1 - i * 0.08)
        }, children: i + 1 }),
        /* @__PURE__ */ jsx("img", { src: item.poster, alt: item.title, style: {
          width: "48px",
          height: "72px",
          objectFit: "cover",
          borderRadius: "5px",
          flexShrink: 0
        }, onError: (e) => {
          e.currentTarget.style.display = "none";
        } }),
        /* @__PURE__ */ jsxs("div", { style: {
          flex: 1
        }, children: [
          /* @__PURE__ */ jsx("div", { style: {
            fontWeight: "600",
            fontSize: "15px",
            marginBottom: "3px"
          }, children: item.title }),
          /* @__PURE__ */ jsxs("div", { style: {
            fontSize: "12px",
            color: "var(--text-muted)"
          }, children: [
            item.year,
            " · ",
            item.genre.slice(0, 2).join(", ")
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: "6px",
          flexShrink: 0
        }, children: [
          /* @__PURE__ */ jsx(Star, { size: 14, fill: "var(--gold)", color: "var(--gold)" }),
          /* @__PURE__ */ jsx("span", { style: {
            fontWeight: "700",
            fontSize: "16px",
            color: "var(--gold)"
          }, children: item.rating })
        ] }),
        /* @__PURE__ */ jsx("span", { className: `type-badge ${item.type}`, style: {
          flexShrink: 0
        }, children: item.type })
      ] }) }, item.id)) }),
      /* @__PURE__ */ jsx("div", { className: "content-grid", children: topRated.map((item) => /* @__PURE__ */ jsx(ContentCard, { item }, item.id)) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  TopRatedPage as component
};
