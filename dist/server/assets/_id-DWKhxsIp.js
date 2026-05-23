import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { g as getContentById, c as contentDatabase, C as ContentCard, F as Footer } from "./Footer-BxCtXtYb.js";
import { ChevronLeft, Star, Calendar, Clock, Play, Plus, Film, Tv, Globe, Mic } from "lucide-react";
import { useState } from "react";
import { R as Route } from "./router-Dg0oGbo1.js";
function WatchPage() {
  const {
    id
  } = Route.useParams();
  const item = getContentById(id);
  const [activeEp, setActiveEp] = useState(1);
  const [activeSeason, setActiveSeason] = useState(1);
  if (!item) {
    return /* @__PURE__ */ jsxs("div", { style: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: "16px"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: {
        fontFamily: "var(--font-title)",
        fontSize: "48px",
        color: "var(--crimson)"
      }, children: "404" }),
      /* @__PURE__ */ jsx("p", { style: {
        color: "var(--text-secondary)"
      }, children: "Title not found" }),
      /* @__PURE__ */ jsx(Link, { to: "/", className: "btn-play", style: {
        fontSize: "13px",
        padding: "10px 24px"
      }, children: "Back to Home" })
    ] });
  }
  const similar = contentDatabase.filter((c) => c.id !== item.id && (c.type === item.type || c.genre.some((g) => item.genre.includes(g)))).slice(0, 8);
  const seasons = item.seasons || 1;
  const episodes = item.type !== "movie" ? Math.min(item.episodes || 12, 12) : 1;
  return /* @__PURE__ */ jsxs("div", { style: {
    background: "var(--void)",
    minHeight: "100vh"
  }, children: [
    /* @__PURE__ */ jsx("div", { style: {
      position: "fixed",
      inset: 0,
      zIndex: 0,
      pointerEvents: "none",
      overflow: "hidden"
    }, children: /* @__PURE__ */ jsx("div", { style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${item.backdrop})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "blur(60px) saturate(0.4)",
      opacity: 0.07,
      transform: "scale(1.1)"
    } }) }),
    /* @__PURE__ */ jsxs("div", { style: {
      position: "relative",
      zIndex: 1,
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "calc(var(--nav-height) + 32px) 32px 0"
    }, children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        color: "var(--text-secondary)",
        textDecoration: "none",
        fontSize: "13px",
        marginBottom: "24px",
        transition: "color 0.2s"
      }, onMouseEnter: (e) => e.currentTarget.style.color = "var(--text-primary)", onMouseLeave: (e) => e.currentTarget.style.color = "var(--text-secondary)", children: [
        /* @__PURE__ */ jsx(ChevronLeft, { size: 16 }),
        " Back to Browse"
      ] }),
      /* @__PURE__ */ jsxs("div", { style: {
        display: "grid",
        gridTemplateColumns: "1fr 320px",
        gap: "32px"
      }, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { style: {
            marginBottom: "28px"
          }, children: /* @__PURE__ */ jsx("div", { className: "video-wrapper", style: {
            boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(220,38,38,0.08)"
          }, children: /* @__PURE__ */ jsx("iframe", { src: `https://www.youtube.com/embed/${item.trailer}?autoplay=0&rel=0&modestbranding=1&controls=1`, title: `${item.title} Trailer`, allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }) }) }),
          /* @__PURE__ */ jsx("div", { style: {
            marginBottom: "24px"
          }, children: /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap"
          }, children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { style: {
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
                flexWrap: "wrap"
              }, children: [
                /* @__PURE__ */ jsx("span", { className: `type-badge ${item.type}`, children: item.type }),
                item.isOriginal && /* @__PURE__ */ jsx("span", { style: {
                  fontSize: "10px",
                  fontWeight: "700",
                  letterSpacing: "0.12em",
                  color: "var(--gold)",
                  textTransform: "uppercase"
                }, children: "CINEVERSE ORIGINAL" })
              ] }),
              /* @__PURE__ */ jsx("h1", { style: {
                fontFamily: "var(--font-title)",
                fontSize: "clamp(28px, 4vw, 52px)",
                letterSpacing: "0.04em",
                lineHeight: 1.1,
                marginBottom: "12px"
              }, children: item.title }),
              /* @__PURE__ */ jsxs("div", { style: {
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap"
              }, children: [
                /* @__PURE__ */ jsxs("span", { className: "rating-badge", children: [
                  /* @__PURE__ */ jsx(Star, { size: 10, fill: "currentColor" }),
                  " ",
                  item.rating
                ] }),
                /* @__PURE__ */ jsxs("span", { style: {
                  fontSize: "13px",
                  color: "var(--text-secondary)",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }, children: [
                  /* @__PURE__ */ jsx(Calendar, { size: 12 }),
                  " ",
                  item.year
                ] }),
                /* @__PURE__ */ jsxs("span", { style: {
                  fontSize: "13px",
                  color: "var(--text-secondary)",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }, children: [
                  /* @__PURE__ */ jsx(Clock, { size: 12 }),
                  " ",
                  item.duration
                ] }),
                item.seasons && /* @__PURE__ */ jsxs("span", { style: {
                  fontSize: "13px",
                  color: "var(--text-secondary)"
                }, children: [
                  item.seasons,
                  " Seasons"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { style: {
              display: "flex",
              gap: "10px",
              flexShrink: 0,
              flexWrap: "wrap"
            }, children: [
              /* @__PURE__ */ jsxs("button", { className: "btn-play", style: {
                fontSize: "13px",
                padding: "10px 22px"
              }, children: [
                /* @__PURE__ */ jsx(Play, { size: 14, fill: "white" }),
                " Play"
              ] }),
              /* @__PURE__ */ jsxs("button", { className: "btn-secondary", style: {
                fontSize: "13px",
                padding: "10px 22px"
              }, children: [
                /* @__PURE__ */ jsx(Plus, { size: 14 }),
                " My List"
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { style: {
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "20px"
          }, children: item.genre.map((g) => /* @__PURE__ */ jsx("span", { className: "genre-tag", children: g }, g)) }),
          /* @__PURE__ */ jsx("p", { style: {
            fontSize: "15px",
            color: "var(--text-secondary)",
            lineHeight: "1.75",
            marginBottom: "28px"
          }, children: item.description }),
          /* @__PURE__ */ jsx("div", { style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "16px",
            marginBottom: "32px"
          }, children: [{
            label: "Studio",
            value: item.studio || "Unknown",
            icon: /* @__PURE__ */ jsx(Film, { size: 14 })
          }, {
            label: "Type",
            value: item.type.toUpperCase(),
            icon: /* @__PURE__ */ jsx(Tv, { size: 14 })
          }, {
            label: "Release",
            value: String(item.year),
            icon: /* @__PURE__ */ jsx(Calendar, { size: 14 })
          }, {
            label: "Rating",
            value: `★ ${item.rating}/10`,
            icon: /* @__PURE__ */ jsx(Star, { size: 14 })
          }].map((meta) => /* @__PURE__ */ jsxs("div", { style: {
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "10px",
            padding: "16px"
          }, children: [
            /* @__PURE__ */ jsxs("div", { style: {
              fontSize: "10px",
              color: "var(--text-muted)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "6px",
              display: "flex",
              alignItems: "center",
              gap: "5px"
            }, children: [
              meta.icon,
              " ",
              meta.label
            ] }),
            /* @__PURE__ */ jsx("div", { style: {
              fontSize: "14px",
              fontWeight: "600",
              color: "var(--text-primary)"
            }, children: meta.value })
          ] }, meta.label)) }),
          /* @__PURE__ */ jsx("div", { style: {
            display: "flex",
            gap: "12px",
            marginBottom: "32px",
            flexWrap: "wrap"
          }, children: [{
            icon: /* @__PURE__ */ jsx(Globe, { size: 14 }),
            label: "Audio",
            value: "English"
          }, {
            icon: /* @__PURE__ */ jsx(Mic, { size: 14 }),
            label: "Subtitles",
            value: "English"
          }].map((s) => /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            padding: "10px 16px",
            cursor: "pointer",
            transition: "all 0.2s"
          }, onMouseEnter: (e) => e.currentTarget.style.background = "rgba(255,255,255,0.08)", onMouseLeave: (e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)", children: [
            /* @__PURE__ */ jsx("div", { style: {
              color: "var(--text-muted)"
            }, children: s.icon }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { style: {
                fontSize: "10px",
                color: "var(--text-muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase"
              }, children: s.label }),
              /* @__PURE__ */ jsx("div", { style: {
                fontSize: "13px",
                color: "var(--text-primary)",
                fontWeight: "500"
              }, children: s.value })
            ] })
          ] }, s.label)) }),
          item.cast && /* @__PURE__ */ jsxs("div", { style: {
            marginBottom: "40px"
          }, children: [
            /* @__PURE__ */ jsx("div", { className: "section-label", style: {
              marginBottom: "16px"
            }, children: "Cast" }),
            /* @__PURE__ */ jsx("div", { style: {
              display: "flex",
              gap: "16px",
              overflowX: "auto",
              paddingBottom: "8px"
            }, children: item.cast.map((actor) => /* @__PURE__ */ jsxs("div", { style: {
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              textAlign: "center",
              cursor: "pointer"
            }, children: [
              /* @__PURE__ */ jsx("div", { style: {
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, rgba(220,38,38,0.3), rgba(124,58,237,0.3))`,
                border: "2px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: "700",
                color: "var(--text-primary)",
                transition: "border-color 0.2s"
              }, onMouseEnter: (e) => e.currentTarget.style.borderColor = "var(--crimson)", onMouseLeave: (e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)", children: actor.charAt(0) }),
              /* @__PURE__ */ jsx("span", { style: {
                fontSize: "11px",
                color: "var(--text-secondary)",
                maxWidth: "72px",
                lineHeight: "1.3"
              }, children: actor })
            ] }, actor)) })
          ] }),
          item.tags && /* @__PURE__ */ jsxs("div", { style: {
            marginBottom: "40px"
          }, children: [
            /* @__PURE__ */ jsx("div", { className: "section-label", style: {
              marginBottom: "12px"
            }, children: "Tags" }),
            /* @__PURE__ */ jsx("div", { style: {
              display: "flex",
              gap: "8px",
              flexWrap: "wrap"
            }, children: item.tags.map((tag) => /* @__PURE__ */ jsx("span", { style: {
              fontSize: "11px",
              padding: "4px 12px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              color: "var(--text-muted)"
            }, children: tag }, tag)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          item.type !== "movie" && /* @__PURE__ */ jsxs("div", { style: {
            marginBottom: "24px",
            background: "rgba(13,13,26,0.7)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "12px",
            padding: "20px",
            backdropFilter: "blur(12px)"
          }, children: [
            /* @__PURE__ */ jsx("div", { className: "section-label", style: {
              marginBottom: "14px"
            }, children: "Episodes" }),
            /* @__PURE__ */ jsx("div", { style: {
              display: "flex",
              gap: "6px",
              marginBottom: "14px",
              flexWrap: "wrap"
            }, children: Array.from({
              length: Math.min(seasons, 5)
            }, (_, i) => i + 1).map((s) => /* @__PURE__ */ jsxs("button", { onClick: () => setActiveSeason(s), style: {
              background: activeSeason === s ? "var(--crimson)" : "rgba(255,255,255,0.06)",
              border: "none",
              color: "white",
              fontSize: "11px",
              fontWeight: "600",
              padding: "5px 12px",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "all 0.2s",
              fontFamily: "var(--font-body)"
            }, children: [
              "S",
              s
            ] }, s)) }),
            /* @__PURE__ */ jsx("div", { style: {
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              maxHeight: "280px",
              overflowY: "auto"
            }, children: Array.from({
              length: episodes
            }, (_, i) => i + 1).map((ep) => /* @__PURE__ */ jsxs("button", { onClick: () => setActiveEp(ep), style: {
              background: activeEp === ep ? "rgba(220,38,38,0.15)" : "transparent",
              border: activeEp === ep ? "1px solid rgba(220,38,38,0.3)" : "1px solid transparent",
              borderRadius: "6px",
              padding: "10px 12px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textAlign: "left",
              transition: "all 0.15s",
              color: "var(--text-primary)"
            }, children: [
              /* @__PURE__ */ jsx("span", { style: {
                fontFamily: "var(--font-title)",
                fontSize: "18px",
                color: activeEp === ep ? "var(--crimson)" : "var(--text-muted)",
                minWidth: "28px"
              }, children: String(ep).padStart(2, "0") }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { style: {
                  fontSize: "12px",
                  fontWeight: "500"
                }, children: [
                  "Episode ",
                  ep
                ] }),
                /* @__PURE__ */ jsx("div", { style: {
                  fontSize: "10px",
                  color: "var(--text-muted)"
                }, children: "~24 min" })
              ] }),
              activeEp === ep && /* @__PURE__ */ jsx(Play, { size: 12, style: {
                marginLeft: "auto",
                color: "var(--crimson)",
                flexShrink: 0
              } })
            ] }, ep)) })
          ] }),
          /* @__PURE__ */ jsx("div", { style: {
            marginBottom: "24px",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
          }, children: /* @__PURE__ */ jsx("img", { src: item.poster, alt: item.title, style: {
            width: "100%",
            display: "block"
          }, loading: "lazy", onError: (e) => {
            e.currentTarget.style.display = "none";
          } }) })
        ] })
      ] }),
      similar.length > 0 && /* @__PURE__ */ jsxs("div", { style: {
        marginTop: "60px",
        paddingBottom: "16px"
      }, children: [
        /* @__PURE__ */ jsxs("div", { style: {
          marginBottom: "20px"
        }, children: [
          /* @__PURE__ */ jsx("div", { className: "section-label", style: {
            marginBottom: "4px"
          }, children: "More Like This" }),
          /* @__PURE__ */ jsx("h2", { className: "section-heading", children: "You May Also Like" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "content-grid", children: similar.map((s) => /* @__PURE__ */ jsx(ContentCard, { item: s }, s.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  WatchPage as component
};
