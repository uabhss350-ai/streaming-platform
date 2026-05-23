import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useCallback, useEffect, useRef } from "react";
import { Play, Info, VolumeX, Volume2, ChevronLeft, ChevronRight, Flame, Star, Crown, Globe } from "lucide-react";
import { c as contentDatabase, C as ContentCard, h as getTrending, a as getContentByType, e as getOriginals, b as getContinueWatching, f as getTopRated, d as getNewReleases, F as Footer } from "./Footer-BxCtXtYb.js";
const heroItems = contentDatabase.filter(
  (c) => ["avengers-endgame", "dune", "attack-on-titan", "interstellar", "house-of-dragon", "demon-slayer"].includes(c.id)
);
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [muted, setMuted] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const goTo = useCallback(
    (idx) => {
      if (transitioning) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(idx);
        setTransitioning(false);
      }, 400);
    },
    [transitioning]
  );
  const next = useCallback(() => goTo((current + 1) % heroItems.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + heroItems.length) % heroItems.length), [current, goTo]);
  useEffect(() => {
    setLoaded(true);
    const timer = setInterval(next, 7e3);
    return () => clearInterval(timer);
  }, [next]);
  const item = heroItems[current];
  return /* @__PURE__ */ jsxs("div", { style: { position: "relative", width: "100%", height: "100vh", minHeight: "600px", overflow: "hidden" }, children: [
    heroItems.map((h, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          position: "absolute",
          inset: 0,
          opacity: i === current ? 1 : 0,
          transition: "opacity 0.8s ease",
          willChange: "opacity"
        },
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "hero-bg-image",
              style: { backgroundImage: `url(${h.backdrop})` }
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "hero-vignette" })
        ]
      },
      h.id
    )),
    /* @__PURE__ */ jsx("div", { style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "radial-gradient(ellipse at 20% 50%, rgba(220,38,38,0.08) 0%, transparent 60%)"
    } }),
    /* @__PURE__ */ jsx("div", { style: {
      position: "relative",
      zIndex: 10,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "0 48px 120px",
      maxWidth: "1600px",
      margin: "0 auto",
      opacity: transitioning ? 0 : 1,
      transform: transitioning ? "translateY(8px)" : "translateY(0)",
      transition: "opacity 0.4s ease, transform 0.4s ease"
    }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: "600px" }, children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }, children: [
        /* @__PURE__ */ jsx("span", { className: `type-badge ${item.type}`, children: item.type }),
        item.isOriginal && /* @__PURE__ */ jsx("span", { style: {
          background: "linear-gradient(135deg, var(--crimson), var(--gold))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "11px",
          fontWeight: "700",
          letterSpacing: "0.1em",
          textTransform: "uppercase"
        }, children: "CINEVERSE ORIGINAL" }),
        item.isTrending && /* @__PURE__ */ jsxs("span", { style: { fontSize: "11px", color: "var(--gold-bright)", fontWeight: "600", display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ jsx("span", { style: { color: "var(--gold-bright)" }, children: "★" }),
          " TRENDING"
        ] })
      ] }),
      /* @__PURE__ */ jsx("h1", { style: {
        fontFamily: "var(--font-title)",
        fontSize: "clamp(42px, 7vw, 88px)",
        letterSpacing: "0.04em",
        lineHeight: "1",
        color: "var(--text-primary)",
        marginBottom: "16px",
        textShadow: "0 4px 30px rgba(0,0,0,0.5)"
      }, children: item.title }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxs("span", { className: "rating-badge", children: [
          "★ ",
          item.rating
        ] }),
        /* @__PURE__ */ jsx("span", { style: { fontSize: "13px", color: "var(--text-secondary)" }, children: item.year }),
        /* @__PURE__ */ jsx("span", { style: { fontSize: "13px", color: "var(--text-secondary)" }, children: item.duration }),
        /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: "6px", flexWrap: "wrap" }, children: item.genre.slice(0, 3).map((g) => /* @__PURE__ */ jsx("span", { style: { fontSize: "12px", color: "var(--text-muted)", padding: "2px 10px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px" }, children: g }, g)) })
      ] }),
      /* @__PURE__ */ jsx(
        "p",
        {
          style: {
            fontSize: "15px",
            color: "var(--text-secondary)",
            lineHeight: "1.65",
            marginBottom: "32px",
            maxWidth: "500px"
          },
          className: "line-clamp-3",
          children: item.description
        }
      ),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxs(Link, { to: `/watch/${item.id}`, className: "btn-play", children: [
          /* @__PURE__ */ jsx(Play, { size: 18, fill: "white" }),
          "Play Now"
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: `/watch/${item.id}`, className: "btn-secondary", children: [
          /* @__PURE__ */ jsx(Info, { size: 16 }),
          "More Info"
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setMuted(!muted),
            style: {
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "var(--text-secondary)",
              padding: "14px",
              borderRadius: "6px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s"
            },
            children: muted ? /* @__PURE__ */ jsx(VolumeX, { size: 16 }) : /* @__PURE__ */ jsx(Volume2, { size: 16 })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: {
      position: "absolute",
      bottom: "80px",
      right: "48px",
      zIndex: 10,
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "flex-end"
    }, children: heroItems.map((_, i) => /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => goTo(i),
        style: {
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px 0",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        },
        children: [
          i === current && /* @__PURE__ */ jsx("span", { style: { fontSize: "11px", color: "var(--text-muted)" }, children: heroItems[i].title.split(":")[0] }),
          /* @__PURE__ */ jsx("div", { style: {
            height: "3px",
            width: i === current ? "40px" : "20px",
            background: i === current ? "var(--crimson)" : "rgba(255,255,255,0.2)",
            borderRadius: "2px",
            transition: "all 0.3s ease",
            boxShadow: i === current ? "0 0 8px rgba(220,38,38,0.5)" : "none"
          } })
        ]
      },
      i
    )) }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: prev,
        style: {
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "rgba(0,0,0,0.4)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "50%",
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "white",
          transition: "all 0.2s",
          backdropFilter: "blur(8px)"
        },
        onMouseEnter: (e) => {
          e.currentTarget.style.background = "rgba(220,38,38,0.4)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.background = "rgba(0,0,0,0.4)";
        },
        children: /* @__PURE__ */ jsx(ChevronLeft, { size: 20 })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: next,
        style: {
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "rgba(0,0,0,0.4)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "50%",
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "white",
          transition: "all 0.2s",
          backdropFilter: "blur(8px)"
        },
        onMouseEnter: (e) => {
          e.currentTarget.style.background = "rgba(220,38,38,0.4)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.background = "rgba(0,0,0,0.4)";
        },
        children: /* @__PURE__ */ jsx(ChevronRight, { size: 20 })
      }
    ),
    /* @__PURE__ */ jsx("div", { style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "200px",
      zIndex: 5,
      background: "linear-gradient(to bottom, transparent 0%, var(--void) 100%)",
      pointerEvents: "none"
    } })
  ] });
}
function ContentRow({ title, label, items, cardWidth = 180, cardHeight = 270 }) {
  const rowRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scroll = (dir) => {
    if (!rowRef.current) return;
    const amount = cardWidth * 4 + 48;
    rowRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    setTimeout(() => {
      if (!rowRef.current) return;
      setCanScrollLeft(rowRef.current.scrollLeft > 0);
      setCanScrollRight(rowRef.current.scrollLeft < rowRef.current.scrollWidth - rowRef.current.clientWidth - 10);
    }, 400);
  };
  return /* @__PURE__ */ jsxs("div", { style: { marginBottom: "48px" }, children: [
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "20px", padding: "0 48px" }, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        label && /* @__PURE__ */ jsx("div", { className: "section-label", style: { marginBottom: "4px" }, children: label }),
        /* @__PURE__ */ jsx("h2", { className: "section-heading", children: title })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "8px" }, children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scroll("left"),
            disabled: !canScrollLeft,
            style: {
              background: canScrollLeft ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: canScrollLeft ? "var(--text-primary)" : "var(--text-muted)",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: canScrollLeft ? "pointer" : "not-allowed",
              transition: "all 0.2s"
            },
            children: /* @__PURE__ */ jsx(ChevronLeft, { size: 16 })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scroll("right"),
            disabled: !canScrollRight,
            style: {
              background: canScrollRight ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: canScrollRight ? "var(--text-primary)" : "var(--text-muted)",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: canScrollRight ? "pointer" : "not-allowed",
              transition: "all 0.2s"
            },
            children: /* @__PURE__ */ jsx(ChevronRight, { size: 16 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { position: "relative" }, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: rowRef,
          className: "scroll-row",
          style: { padding: "0 48px", paddingBottom: "16px" },
          children: items.map((item) => /* @__PURE__ */ jsx(ContentCard, { item, width: cardWidth, height: cardHeight }, item.id))
        }
      ),
      canScrollLeft && /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: "16px",
        width: "80px",
        background: "linear-gradient(to right, var(--void), transparent)",
        pointerEvents: "none",
        zIndex: 5
      } }),
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: "16px",
        width: "80px",
        background: "linear-gradient(to left, var(--void), transparent)",
        pointerEvents: "none",
        zIndex: 5
      } })
    ] })
  ] });
}
function TrendingTicker() {
  const items = getTrending();
  const repeated = [...items, ...items];
  return /* @__PURE__ */ jsx("div", { style: {
    background: "rgba(220,38,38,0.06)",
    borderTop: "1px solid rgba(220,38,38,0.12)",
    borderBottom: "1px solid rgba(220,38,38,0.12)",
    padding: "10px 0",
    overflow: "hidden",
    position: "relative",
    zIndex: 2
  }, children: /* @__PURE__ */ jsxs("div", { style: {
    display: "flex",
    alignItems: "center"
  }, children: [
    /* @__PURE__ */ jsxs("div", { style: {
      flexShrink: 0,
      padding: "0 16px 0 20px",
      background: "var(--crimson)",
      alignSelf: "stretch",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      fontSize: "10px",
      fontWeight: "700",
      letterSpacing: "0.18em",
      color: "white",
      textTransform: "uppercase",
      marginRight: "0"
    }, children: [
      /* @__PURE__ */ jsx(Flame, { size: 11 }),
      " Live"
    ] }),
    /* @__PURE__ */ jsx("div", { style: {
      overflow: "hidden",
      flex: 1
    }, children: /* @__PURE__ */ jsx("div", { className: "ticker-inner", children: repeated.map((item, i) => /* @__PURE__ */ jsxs("span", { style: {
      fontSize: "12px",
      color: "var(--text-secondary)",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      whiteSpace: "nowrap"
    }, children: [
      /* @__PURE__ */ jsx(Star, { size: 9, fill: "var(--gold)", color: "var(--gold)" }),
      item.title,
      /* @__PURE__ */ jsxs("span", { style: {
        color: "var(--text-muted)",
        fontSize: "10px"
      }, children: [
        item.rating,
        " ★"
      ] }),
      /* @__PURE__ */ jsx("span", { style: {
        color: "rgba(255,255,255,0.08)",
        padding: "0 6px"
      }, children: "|" })
    ] }, `${item.id}-${i}`)) }) })
  ] }) });
}
function SpotlightBanner() {
  const item = contentDatabase.find((c) => c.id === "blade-runner-2049");
  return /* @__PURE__ */ jsxs("div", { style: {
    margin: "0 48px 56px",
    borderRadius: "16px",
    overflow: "hidden",
    position: "relative",
    height: "260px"
  }, children: [
    /* @__PURE__ */ jsx("div", { style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${item.backdrop})`,
      backgroundSize: "cover",
      backgroundPosition: "center 30%"
    } }),
    /* @__PURE__ */ jsx("div", { style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to right, rgba(5,5,8,0.97) 0%, rgba(5,5,8,0.55) 55%, rgba(5,5,8,0.05) 100%)"
    } }),
    /* @__PURE__ */ jsxs("div", { style: {
      position: "relative",
      zIndex: 1,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "40px"
    }, children: [
      /* @__PURE__ */ jsxs("span", { style: {
        fontSize: "10px",
        fontWeight: "700",
        letterSpacing: "0.2em",
        color: "var(--gold-bright)",
        textTransform: "uppercase",
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        gap: "6px"
      }, children: [
        /* @__PURE__ */ jsx(Crown, { size: 12 }),
        " CINEVERSE SPOTLIGHT"
      ] }),
      /* @__PURE__ */ jsx("h3", { style: {
        fontFamily: "var(--font-title)",
        fontSize: "clamp(26px, 3.5vw, 48px)",
        letterSpacing: "0.04em",
        marginBottom: "10px",
        lineHeight: 1
      }, children: item.title }),
      /* @__PURE__ */ jsx("p", { style: {
        fontSize: "13px",
        color: "var(--text-secondary)",
        maxWidth: "380px",
        lineHeight: "1.6",
        marginBottom: "20px"
      }, className: "line-clamp-2", children: item.description }),
      /* @__PURE__ */ jsx(Link, { to: `/watch/${item.id}`, className: "btn-play", style: {
        width: "fit-content",
        fontSize: "13px",
        padding: "10px 24px"
      }, children: "Watch Now" })
    ] })
  ] });
}
function StatsBar() {
  return /* @__PURE__ */ jsx("div", { style: {
    margin: "0 48px 56px",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1px",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "12px",
    overflow: "hidden"
  }, children: [{
    icon: /* @__PURE__ */ jsx(Globe, { size: 18 }),
    value: "147M+",
    label: "Global Viewers",
    color: "var(--ice)"
  }, {
    icon: /* @__PURE__ */ jsx(Flame, { size: 18 }),
    value: "4,200+",
    label: "Titles Available",
    color: "var(--crimson)"
  }, {
    icon: /* @__PURE__ */ jsx(Crown, { size: 18 }),
    value: "380+",
    label: "Originals",
    color: "var(--gold)"
  }, {
    icon: /* @__PURE__ */ jsx(Star, { size: 18 }),
    value: "98.7%",
    label: "Satisfaction",
    color: "#a78bfa"
  }].map((stat, i) => /* @__PURE__ */ jsxs("div", { style: {
    background: "rgba(13,13,26,0.85)",
    padding: "28px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6px"
  }, children: [
    /* @__PURE__ */ jsx("div", { style: {
      color: stat.color,
      opacity: 0.7
    }, children: stat.icon }),
    /* @__PURE__ */ jsx("div", { style: {
      fontFamily: "var(--font-title)",
      fontSize: "28px",
      letterSpacing: "0.04em",
      color: stat.color
    }, children: stat.value }),
    /* @__PURE__ */ jsx("div", { style: {
      fontSize: "10px",
      color: "var(--text-muted)",
      letterSpacing: "0.06em",
      textAlign: "center",
      textTransform: "uppercase"
    }, children: stat.label })
  ] }, i)) });
}
function HomePage() {
  const trending = getTrending();
  const movies = getContentByType("movie");
  const anime = getContentByType("anime");
  const tvShows = getContentByType("tv");
  const originals = getOriginals();
  const continueWatching = getContinueWatching();
  const topRated = getTopRated();
  const newReleases = getNewReleases();
  return /* @__PURE__ */ jsxs("div", { style: {
    background: "var(--void)",
    minHeight: "100vh"
  }, children: [
    /* @__PURE__ */ jsx(HeroSlider, {}),
    /* @__PURE__ */ jsx(TrendingTicker, {}),
    /* @__PURE__ */ jsxs("div", { style: {
      paddingTop: "56px"
    }, children: [
      continueWatching.length > 0 && /* @__PURE__ */ jsx(ContentRow, { title: "Continue Watching", label: "Pick Up Where You Left Off", items: continueWatching }),
      /* @__PURE__ */ jsx(ContentRow, { title: "Trending Now", label: "What The World Is Watching", items: trending }),
      /* @__PURE__ */ jsx(SpotlightBanner, {}),
      /* @__PURE__ */ jsx(ContentRow, { title: "Anime Universe", label: "Japanese Animation Empire", items: anime }),
      /* @__PURE__ */ jsx(ContentRow, { title: "Hollywood Blockbusters", label: "Cinema's Greatest Works", items: movies }),
      /* @__PURE__ */ jsx(StatsBar, {}),
      /* @__PURE__ */ jsx(ContentRow, { title: "CINEVERSE Originals", label: "Exclusive Productions", items: originals, cardWidth: 220, cardHeight: 330 }),
      /* @__PURE__ */ jsx(ContentRow, { title: "Top Rated", label: "Critically Acclaimed", items: topRated.slice(0, 8) }),
      /* @__PURE__ */ jsx(ContentRow, { title: "Premium TV Series", label: "Binge-Worthy Television", items: tvShows }),
      /* @__PURE__ */ jsx(ContentRow, { title: "New Releases", label: "Just Arrived", items: newReleases })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  HomePage as component
};
