import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { c as contentDatabase, s as searchContent, C as ContentCard, F as Footer } from "./Footer-BxCtXtYb.js";
import { Search, X, TrendingUp, Sparkles } from "lucide-react";
import "@tanstack/react-router";
const trendingSearches = ["Attack on Titan", "Interstellar", "Breaking Bad", "Dune", "Demon Slayer", "Oppenheimer"];
function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(contentDatabase.slice(0, 12));
  const [focused, setFocused] = useState(false);
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults(contentDatabase.slice(0, 12));
    } else {
      setResults(searchContent(query));
    }
  }, [query]);
  return /* @__PURE__ */ jsxs("div", { style: {
    background: "var(--void)",
    minHeight: "100vh"
  }, children: [
    /* @__PURE__ */ jsxs("div", { style: {
      paddingTop: "calc(var(--nav-height) + 48px)",
      paddingBottom: "40px",
      padding: `calc(var(--nav-height) + 48px) 48px 40px`,
      maxWidth: "1000px",
      margin: "0 auto",
      position: "relative"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        top: "120px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "400px",
        height: "100px",
        background: "radial-gradient(ellipse, rgba(220,38,38,0.15) 0%, transparent 70%)",
        pointerEvents: "none"
      } }),
      /* @__PURE__ */ jsxs("div", { style: {
        textAlign: "center",
        marginBottom: "40px"
      }, children: [
        /* @__PURE__ */ jsx("h1", { style: {
          fontFamily: "var(--font-title)",
          fontSize: "clamp(36px, 5vw, 64px)",
          letterSpacing: "0.06em",
          marginBottom: "8px"
        }, children: "Search" }),
        /* @__PURE__ */ jsx("p", { style: {
          fontSize: "14px",
          color: "var(--text-muted)"
        }, children: "Movies, anime, TV shows, and more" })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: {
        position: "relative",
        marginBottom: "24px"
      }, children: [
        /* @__PURE__ */ jsx(Search, { size: 20, style: {
          position: "absolute",
          left: "18px",
          top: "50%",
          transform: "translateY(-50%)",
          color: focused ? "var(--crimson)" : "var(--text-muted)",
          transition: "color 0.2s",
          pointerEvents: "none",
          zIndex: 1
        } }),
        /* @__PURE__ */ jsx("input", { className: "search-input", type: "text", placeholder: "Search titles, genres, studios...", value: query, onChange: (e) => setQuery(e.target.value), onFocus: () => setFocused(true), onBlur: () => setFocused(false), autoFocus: true }),
        query && /* @__PURE__ */ jsx("button", { onClick: () => setQuery(""), style: {
          position: "absolute",
          right: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.1)",
          border: "none",
          borderRadius: "50%",
          width: "26px",
          height: "26px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--text-secondary)",
          cursor: "pointer"
        }, children: /* @__PURE__ */ jsx(X, { size: 14 }) })
      ] }),
      !query && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "14px"
        }, children: [
          /* @__PURE__ */ jsx(TrendingUp, { size: 14, color: "var(--crimson)" }),
          /* @__PURE__ */ jsx("span", { style: {
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "0.15em",
            color: "var(--crimson)",
            textTransform: "uppercase"
          }, children: "Trending Searches" })
        ] }),
        /* @__PURE__ */ jsx("div", { style: {
          display: "flex",
          gap: "8px",
          flexWrap: "wrap"
        }, children: trendingSearches.map((s) => /* @__PURE__ */ jsxs("button", { onClick: () => setQuery(s), style: {
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "var(--text-secondary)",
          fontSize: "13px",
          padding: "8px 16px",
          borderRadius: "20px",
          cursor: "pointer",
          fontFamily: "var(--font-body)",
          transition: "all 0.2s",
          display: "flex",
          alignItems: "center",
          gap: "6px"
        }, onMouseEnter: (e) => {
          e.currentTarget.style.background = "rgba(220,38,38,0.1)";
          e.currentTarget.style.borderColor = "rgba(220,38,38,0.3)";
          e.currentTarget.style.color = "var(--text-primary)";
        }, onMouseLeave: (e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.05)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
          e.currentTarget.style.color = "var(--text-secondary)";
        }, children: [
          /* @__PURE__ */ jsx(Search, { size: 11 }),
          " ",
          s
        ] }, s)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: {
      padding: "0 48px",
      maxWidth: "1600px",
      margin: "0 auto"
    }, children: [
      /* @__PURE__ */ jsxs("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "24px"
      }, children: [
        /* @__PURE__ */ jsx(Sparkles, { size: 16, color: "var(--gold)" }),
        /* @__PURE__ */ jsx("span", { style: {
          fontSize: "14px",
          color: "var(--text-secondary)"
        }, children: query ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("strong", { style: {
            color: "var(--text-primary)"
          }, children: results.length }),
          ' results for "',
          /* @__PURE__ */ jsx("strong", { style: {
            color: "var(--crimson)"
          }, children: query }),
          '"'
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          "Browsing all ",
          /* @__PURE__ */ jsx("strong", { style: {
            color: "var(--text-primary)"
          }, children: results.length }),
          " titles"
        ] }) })
      ] }),
      results.length > 0 ? /* @__PURE__ */ jsx("div", { className: "content-grid", style: {
        paddingBottom: "60px"
      }, children: results.map((item) => /* @__PURE__ */ jsx(ContentCard, { item }, item.id)) }) : /* @__PURE__ */ jsxs("div", { style: {
        textAlign: "center",
        padding: "80px 0"
      }, children: [
        /* @__PURE__ */ jsx("div", { style: {
          fontSize: "48px",
          marginBottom: "16px",
          opacity: 0.4
        }, children: "🔍" }),
        /* @__PURE__ */ jsx("h3", { style: {
          fontFamily: "var(--font-title)",
          fontSize: "28px",
          letterSpacing: "0.06em",
          marginBottom: "8px"
        }, children: "No Results Found" }),
        /* @__PURE__ */ jsx("p", { style: {
          color: "var(--text-muted)",
          fontSize: "14px"
        }, children: "Try a different search term or genre" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  SearchPage as component
};
