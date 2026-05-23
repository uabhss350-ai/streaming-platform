import { useLocation, Link, createRootRoute, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Play, Search, Bell, User, X, Menu } from "lucide-react";
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/movies", label: "Movies" },
  { href: "/anime", label: "Anime" },
  { href: "/tv", label: "TV Shows" },
  { href: "/originals", label: "Originals" },
  { href: "/trending", label: "Trending" },
  { href: "/top-rated", label: "Top Rated" }
];
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "nav",
      {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9e3,
          height: "var(--nav-height)",
          transition: "all 0.3s ease",
          ...scrolled ? { background: "rgba(5,5,8,0.95)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.05)" } : { background: "linear-gradient(to bottom, rgba(5,5,8,0.85) 0%, transparent 100%)" }
        },
        children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: "1600px", margin: "0 auto", padding: "0 24px", height: "100%", display: "flex", alignItems: "center", gap: "40px" }, children: [
          /* @__PURE__ */ jsx(Link, { to: "/", style: { textDecoration: "none", flexShrink: 0 }, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
            /* @__PURE__ */ jsx("div", { style: {
              width: "32px",
              height: "32px",
              background: "var(--crimson)",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 20px rgba(220,38,38,0.5)"
            }, children: /* @__PURE__ */ jsx(Play, { size: 16, fill: "white", color: "white" }) }),
            /* @__PURE__ */ jsx("span", { style: { fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: "700", color: "var(--text-primary)", letterSpacing: "0.08em" }, children: "CINEVERSE" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: "28px", flex: 1 }, className: "hidden-mobile", children: navLinks.map((link) => /* @__PURE__ */ jsx(
            Link,
            {
              to: link.href,
              className: `nav-link ${location.pathname === link.href ? "active" : ""}`,
              children: link.label
            },
            link.href
          )) }),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }, children: [
            /* @__PURE__ */ jsx(Link, { to: "/search", style: { textDecoration: "none" }, children: /* @__PURE__ */ jsx(
              "button",
              {
                style: {
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--text-secondary)",
                  padding: "8px",
                  borderRadius: "8px",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center"
                },
                onMouseEnter: (e) => {
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.background = "transparent";
                },
                children: /* @__PURE__ */ jsx(Search, { size: 18 })
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { style: { position: "relative" }, children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setNotifOpen(!notifOpen),
                  style: {
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--text-secondary)",
                    padding: "8px",
                    borderRadius: "8px",
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                    position: "relative"
                  },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.background = "transparent";
                  },
                  children: [
                    /* @__PURE__ */ jsx(Bell, { size: 18 }),
                    /* @__PURE__ */ jsx("span", { style: { position: "absolute", top: "8px", right: "8px", width: "6px", height: "6px", background: "var(--crimson)", borderRadius: "50%", boxShadow: "0 0 6px var(--crimson)" } })
                  ]
                }
              ),
              notifOpen && /* @__PURE__ */ jsxs("div", { style: {
                position: "absolute",
                top: "calc(100% + 8px)",
                right: 0,
                width: "320px",
                background: "rgba(13,13,26,0.97)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
              }, children: [
                /* @__PURE__ */ jsxs("div", { style: { padding: "16px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
                  /* @__PURE__ */ jsx("span", { style: { fontWeight: "600", fontSize: "14px" }, children: "Notifications" }),
                  /* @__PURE__ */ jsx("span", { style: { fontSize: "11px", color: "var(--crimson)", cursor: "pointer" }, children: "Mark all read" })
                ] }),
                [
                  { icon: "🔥", title: "Demon Slayer S4 is live!", time: "2m ago", unread: true },
                  { icon: "⭐", title: "New in Top Rated: Oppenheimer", time: "1h ago", unread: true },
                  { icon: "🎬", title: "Your watchlist updated", time: "3h ago", unread: false },
                  { icon: "📺", title: "House of Dragon S2 finale", time: "1d ago", unread: false }
                ].map((n, i) => /* @__PURE__ */ jsxs("div", { style: {
                  padding: "14px 16px",
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                  background: n.unread ? "rgba(220,38,38,0.05)" : "transparent",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  cursor: "pointer"
                }, children: [
                  /* @__PURE__ */ jsx("span", { style: { fontSize: "20px", flexShrink: 0 }, children: n.icon }),
                  /* @__PURE__ */ jsxs("div", { style: { flex: 1 }, children: [
                    /* @__PURE__ */ jsx("div", { style: { fontSize: "13px", color: n.unread ? "var(--text-primary)" : "var(--text-secondary)" }, children: n.title }),
                    /* @__PURE__ */ jsx("div", { style: { fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }, children: n.time })
                  ] }),
                  n.unread && /* @__PURE__ */ jsx("div", { style: { width: "6px", height: "6px", borderRadius: "50%", background: "var(--crimson)", flexShrink: 0, marginTop: "5px" } })
                ] }, i))
              ] })
            ] }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                style: {
                  background: "rgba(220,38,38,0.15)",
                  border: "1px solid rgba(220,38,38,0.3)",
                  cursor: "pointer",
                  color: "var(--text-primary)",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "13px",
                  fontFamily: "var(--font-body)",
                  fontWeight: "500",
                  transition: "all 0.2s"
                },
                onMouseEnter: (e) => {
                  e.currentTarget.style.background = "rgba(220,38,38,0.25)";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.background = "rgba(220,38,38,0.15)";
                },
                children: [
                  /* @__PURE__ */ jsx(User, { size: 14 }),
                  /* @__PURE__ */ jsx("span", { className: "hidden-mobile", children: "Profile" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setMobileOpen(!mobileOpen),
                style: {
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--text-secondary)",
                  padding: "8px",
                  borderRadius: "8px",
                  display: "none"
                },
                className: "show-mobile",
                children: mobileOpen ? /* @__PURE__ */ jsx(X, { size: 20 }) : /* @__PURE__ */ jsx(Menu, { size: 20 })
              }
            )
          ] })
        ] })
      }
    ),
    mobileOpen && /* @__PURE__ */ jsx("div", { style: {
      position: "fixed",
      inset: 0,
      zIndex: 8999,
      background: "rgba(5,5,8,0.97)",
      backdropFilter: "blur(20px)",
      paddingTop: "calc(var(--nav-height) + 20px)",
      display: "flex",
      flexDirection: "column"
    }, children: /* @__PURE__ */ jsxs("div", { style: { padding: "0 24px", display: "flex", flexDirection: "column", gap: "4px" }, children: [
      navLinks.map((link) => /* @__PURE__ */ jsx(
        Link,
        {
          to: link.href,
          style: {
            padding: "16px 0",
            fontSize: "24px",
            fontFamily: "var(--font-title)",
            letterSpacing: "0.08em",
            color: location.pathname === link.href ? "var(--crimson)" : "var(--text-primary)",
            textDecoration: "none",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            transition: "color 0.2s"
          },
          children: link.label
        },
        link.href
      )),
      /* @__PURE__ */ jsx(Link, { to: "/search", style: { padding: "16px 0", fontSize: "24px", fontFamily: "var(--font-title)", letterSpacing: "0.08em", color: "var(--text-primary)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.05)" }, children: "Search" })
    ] }) }),
    /* @__PURE__ */ jsx("style", { children: `
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      ` })
  ] });
}
const Route$a = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CINEVERSE — The Ultimate Cinematic Streaming Universe" },
      { name: "description", content: "CINEVERSE: Experience Hollywood blockbusters, anime epics, and premium originals in one breathtaking cinematic streaming universe." },
      { name: "theme-color", content: "#050508" },
      { property: "og:title", content: "CINEVERSE — Cinematic Streaming Universe" },
      { property: "og:description", content: "Movies. Anime. Originals. All in one universe." },
      { property: "og:type", content: "website" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "icon", href: "/favicon.ico" }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { style: { background: "var(--void)", color: "var(--text-primary)", minHeight: "100vh" }, children: [
      /* @__PURE__ */ jsx("div", { className: "grain-overlay", "aria-hidden": "true" }),
      /* @__PURE__ */ jsx(Navigation, {}),
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$9 = () => import("./index-CzUPQrGE.js");
const Route$9 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./index-KhDmll9m.js");
const Route$8 = createFileRoute("/tv/")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./index-BMwgTr2x.js");
const Route$7 = createFileRoute("/trending/")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./index-Bs2F5IAX.js");
const Route$6 = createFileRoute("/top-rated/")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./index-D-ZB0uGC.js");
const Route$5 = createFileRoute("/search/")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./index-D8kdHtld.js");
const Route$4 = createFileRoute("/originals/")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./index-r1nT2CDS.js");
const Route$3 = createFileRoute("/movies/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-BiMU-9iZ.js");
const Route$2 = createFileRoute("/anime/")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./_id-DWKhxsIp.js");
const Route$1 = createFileRoute("/watch/$id")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./_productId-gszhdHJY.js");
const Route = createFileRoute("/products/$productId")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$9.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const TvIndexRoute = Route$8.update({
  id: "/tv/",
  path: "/tv/",
  getParentRoute: () => Route$a
});
const TrendingIndexRoute = Route$7.update({
  id: "/trending/",
  path: "/trending/",
  getParentRoute: () => Route$a
});
const TopRatedIndexRoute = Route$6.update({
  id: "/top-rated/",
  path: "/top-rated/",
  getParentRoute: () => Route$a
});
const SearchIndexRoute = Route$5.update({
  id: "/search/",
  path: "/search/",
  getParentRoute: () => Route$a
});
const OriginalsIndexRoute = Route$4.update({
  id: "/originals/",
  path: "/originals/",
  getParentRoute: () => Route$a
});
const MoviesIndexRoute = Route$3.update({
  id: "/movies/",
  path: "/movies/",
  getParentRoute: () => Route$a
});
const AnimeIndexRoute = Route$2.update({
  id: "/anime/",
  path: "/anime/",
  getParentRoute: () => Route$a
});
const WatchIdRoute = Route$1.update({
  id: "/watch/$id",
  path: "/watch/$id",
  getParentRoute: () => Route$a
});
const ProductsProductIdRoute = Route.update({
  id: "/products/$productId",
  path: "/products/$productId",
  getParentRoute: () => Route$a
});
const rootRouteChildren = {
  IndexRoute,
  ProductsProductIdRoute,
  WatchIdRoute,
  AnimeIndexRoute,
  MoviesIndexRoute,
  OriginalsIndexRoute,
  SearchIndexRoute,
  TopRatedIndexRoute,
  TrendingIndexRoute,
  TvIndexRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$1 as R,
  router as r
};
