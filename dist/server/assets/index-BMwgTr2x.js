import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { h as getTrending, C as ContentCard, F as Footer } from "./Footer-BxCtXtYb.js";
import { Flame, TrendingUp } from "lucide-react";
import "react";
function TrendingPage() {
  const trending = getTrending();
  const topItem = trending[0];
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
      topItem && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { style: {
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${topItem.backdrop})`,
          backgroundSize: "cover",
          backgroundPosition: "center 25%"
        } }),
        /* @__PURE__ */ jsx("div", { style: {
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(5,5,8,1) 0%, rgba(5,5,8,0.5) 50%, rgba(5,5,8,0.1) 100%)"
        } }),
        /* @__PURE__ */ jsx("div", { style: {
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 30% 60%, rgba(220,38,38,0.12) 0%, transparent 60%)"
        } })
      ] }),
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
          /* @__PURE__ */ jsx(Flame, { size: 20, color: "var(--crimson)" }),
          /* @__PURE__ */ jsx("span", { className: "section-label", children: "Right Now" })
        ] }),
        /* @__PURE__ */ jsx("h1", { style: {
          fontFamily: "var(--font-title)",
          fontSize: "clamp(36px, 5vw, 64px)",
          letterSpacing: "0.05em",
          lineHeight: 1
        }, children: "Trending" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: {
      padding: "48px",
      maxWidth: "1600px",
      margin: "0 auto"
    }, children: [
      /* @__PURE__ */ jsxs("div", { style: {
        marginBottom: "48px"
      }, children: [
        /* @__PURE__ */ jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "20px"
        }, children: [
          /* @__PURE__ */ jsx(TrendingUp, { size: 16, color: "var(--gold)" }),
          /* @__PURE__ */ jsx("span", { style: {
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "0.15em",
            color: "var(--gold)",
            textTransform: "uppercase"
          }, children: "Top 3 Right Now" })
        ] }),
        /* @__PURE__ */ jsx("div", { style: {
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }, children: trending.slice(0, 3).map((item, i) => /* @__PURE__ */ jsx(Link, { to: `/watch/${item.id}`, style: {
          textDecoration: "none"
        }, children: /* @__PURE__ */ jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: "20px",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "12px",
          padding: "16px",
          cursor: "pointer",
          transition: "all 0.2s"
        }, onMouseEnter: (e) => {
          e.currentTarget.style.background = "rgba(220,38,38,0.06)";
          e.currentTarget.style.borderColor = "rgba(220,38,38,0.15)";
        }, onMouseLeave: (e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.03)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
        }, children: [
          /* @__PURE__ */ jsx("span", { style: {
            fontFamily: "var(--font-title)",
            fontSize: "56px",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            minWidth: "60px",
            textAlign: "center",
            color: i === 0 ? "var(--gold)" : i === 1 ? "var(--text-secondary)" : "var(--text-muted)",
            opacity: i === 0 ? 1 : i === 1 ? 0.7 : 0.5
          }, children: i + 1 }),
          /* @__PURE__ */ jsx("img", { src: item.poster, alt: item.title, style: {
            width: "60px",
            height: "90px",
            objectFit: "cover",
            borderRadius: "6px",
            flexShrink: 0
          }, onError: (e) => {
            e.currentTarget.style.display = "none";
          } }),
          /* @__PURE__ */ jsxs("div", { style: {
            flex: 1
          }, children: [
            /* @__PURE__ */ jsx("div", { style: {
              fontFamily: "var(--font-title)",
              fontSize: "22px",
              letterSpacing: "0.04em",
              marginBottom: "4px"
            }, children: item.title }),
            /* @__PURE__ */ jsxs("div", { style: {
              fontSize: "12px",
              color: "var(--text-muted)"
            }, children: [
              item.year,
              " · ",
              item.genre[0],
              " · ★ ",
              item.rating
            ] })
          ] }),
          /* @__PURE__ */ jsx("span", { className: `type-badge ${item.type}`, style: {
            flexShrink: 0
          }, children: item.type })
        ] }) }, item.id)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "section-label", style: {
        marginBottom: "20px"
      }, children: "All Trending" }),
      /* @__PURE__ */ jsx("div", { className: "content-grid", children: trending.map((item) => /* @__PURE__ */ jsx(ContentCard, { item }, item.id)) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  TrendingPage as component
};
