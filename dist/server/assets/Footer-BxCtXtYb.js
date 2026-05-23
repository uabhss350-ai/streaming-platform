import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Star, Play, Plus } from "lucide-react";
const TMDB_POSTER = "https://image.tmdb.org/t/p/w500";
const TMDB_BACKDROP = "https://image.tmdb.org/t/p/original";
const contentDatabase = [
  {
    id: "avengers-endgame",
    title: "Avengers: Endgame",
    type: "movie",
    genre: ["Action", "Adventure", "Sci-Fi"],
    year: 2019,
    rating: 8.4,
    duration: "3h 2m",
    description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos's actions and restore balance to the universe.",
    poster: `${TMDB_POSTER}/or06FN3Dka5tukK1e9sl16pB3iy.jpg`,
    backdrop: `${TMDB_BACKDROP}/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg`,
    trailer: "TcMBFSGVi1c",
    studio: "Marvel Studios",
    cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson", "Mark Ruffalo"],
    tags: ["Superhero", "Epic", "Blockbuster"],
    isTrending: true
  },
  {
    id: "interstellar",
    title: "Interstellar",
    type: "movie",
    genre: ["Sci-Fi", "Drama", "Adventure"],
    year: 2014,
    rating: 8.7,
    duration: "2h 49m",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. When Earth becomes uninhabitable, one father makes a choice that will determine the fate of all mankind.",
    poster: `${TMDB_POSTER}/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg`,
    backdrop: `${TMDB_BACKDROP}/xJHokMbljvjADYdit5fK5VQsXEG.jpg`,
    trailer: "zSWdZVtXT7E",
    studio: "Paramount Pictures",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    tags: ["Mind-Bending", "Epic", "Space"],
    isTrending: true
  },
  {
    id: "john-wick",
    title: "John Wick",
    type: "movie",
    genre: ["Action", "Thriller", "Crime"],
    year: 2014,
    rating: 7.4,
    duration: "1h 41m",
    description: "An ex-hitman comes out of retirement to track down the gangsters that killed his dog and took everything from him. A relentless ballet of violence unfolds across the criminal underworld.",
    poster: `${TMDB_POSTER}/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg`,
    backdrop: `${TMDB_BACKDROP}/mMZRKb3NVTwWQGQm9GerFORjwyj.jpg`,
    trailer: "2AUmvWm5ZDQ",
    studio: "Summit Entertainment",
    cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen", "Willem Dafoe"],
    tags: ["Intense", "Action", "Gun-Fu"],
    isTrending: false
  },
  {
    id: "dune",
    title: "Dune",
    type: "movie",
    genre: ["Sci-Fi", "Adventure", "Drama"],
    year: 2021,
    rating: 8,
    duration: "2h 35m",
    description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
    poster: `${TMDB_POSTER}/d5NXSklXo0qyIYkgV94XAgMIckC.jpg`,
    backdrop: `${TMDB_BACKDROP}/eeijsbymrb3pPXOB4uCKBD3CXAI.jpg`,
    trailer: "8g18jFHCLXk",
    studio: "Warner Bros.",
    cast: ["Timothée Chalamet", "Zendaya", "Oscar Isaac", "Rebecca Ferguson"],
    tags: ["Epic", "Desert", "Prophecy"],
    isTrending: true,
    isOriginal: true
  },
  {
    id: "breaking-bad",
    title: "Breaking Bad",
    type: "tv",
    genre: ["Drama", "Crime", "Thriller"],
    year: 2008,
    rating: 9.5,
    duration: "45-75m/ep",
    description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    poster: `${TMDB_POSTER}/ggFHVNu6YYI5L9pCfOacjizRGt.jpg`,
    backdrop: `${TMDB_BACKDROP}/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg`,
    trailer: "HhesaQXLuRY",
    seasons: 5,
    episodes: 62,
    studio: "AMC",
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn", "Dean Norris"],
    tags: ["Masterpiece", "Intense", "Crime Drama"],
    isTrending: true
  },
  {
    id: "stranger-things",
    title: "Stranger Things",
    type: "tv",
    genre: ["Sci-Fi", "Horror", "Drama"],
    year: 2016,
    rating: 8.7,
    duration: "50-77m/ep",
    description: "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back. A love letter to 80s sci-fi and horror.",
    poster: `${TMDB_POSTER}/49WJfeN0moxb9IPfGn8AIqMGskD.jpg`,
    backdrop: `${TMDB_BACKDROP}/56v2KjBlU4XaOv9rVYEQypROD7P.jpg`,
    trailer: "b9EkMc79ZSU",
    seasons: 4,
    episodes: 34,
    studio: "Netflix",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder", "David Harbour"],
    tags: ["80s Nostalgia", "Supernatural", "Coming-of-Age"],
    isTrending: false,
    isOriginal: true,
    watchProgress: 65
  },
  {
    id: "attack-on-titan",
    title: "Attack on Titan",
    type: "anime",
    genre: ["Action", "Dark Fantasy", "Thriller"],
    year: 2013,
    rating: 9.1,
    duration: "23m/ep",
    description: "In a world where giant humanoid titans devour humans, the last remnants of humanity live within enormous walls. Eren Yeager vows to eliminate every titan after a tragedy shatters his world.",
    poster: `${TMDB_POSTER}/hTP1DtLGFAmAr3HjGqnE4yfQ2To.jpg`,
    backdrop: `${TMDB_BACKDROP}/rqbCbjoh0lUa2KeB69BLWoQhN7V.jpg`,
    trailer: "LnHgMRRsqhI",
    seasons: 4,
    episodes: 87,
    studio: "MAPPA / WIT Studio",
    cast: ["Yuki Kaji", "Yui Ishikawa", "Marina Inoue", "Hiroshi Kamiya"],
    tags: ["Dark", "Epic", "Masterpiece", "War"],
    isTrending: true,
    watchProgress: 42
  },
  {
    id: "demon-slayer",
    title: "Demon Slayer: Kimetsu no Yaiba",
    type: "anime",
    genre: ["Action", "Fantasy", "Supernatural"],
    year: 2019,
    rating: 8.7,
    duration: "23-44m/ep",
    description: "A young boy becomes a demon slayer after his family is slaughtered and his sister is turned into a demon. A visually stunning journey of blade, fire, and brotherhood through feudal Japan.",
    poster: `${TMDB_POSTER}/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg`,
    backdrop: `${TMDB_BACKDROP}/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg`,
    trailer: "VQGCKyvzIM4",
    seasons: 4,
    episodes: 55,
    studio: "ufotable",
    cast: ["Natsuki Hanae", "Akari Kitō", "Yoshitsugu Matsuoka", "Hiro Shimono"],
    tags: ["Beautiful Animation", "Swords", "Emotional"],
    isTrending: true,
    isNew: true
  },
  {
    id: "one-piece",
    title: "One Piece",
    type: "anime",
    genre: ["Adventure", "Action", "Fantasy", "Comedy"],
    year: 1999,
    rating: 8.9,
    duration: "23m/ep",
    description: `Monkey D. Luffy and his pirate crew explore the Grand Line in search of the world's ultimate treasure known as "One Piece" in order to become the next King of the Pirates.`,
    poster: `${TMDB_POSTER}/cMD9Ygz11zjJzAovURpO75Gc78u.jpg`,
    backdrop: `${TMDB_BACKDROP}/2rmK7mnchw9Xr3XdiAwdt5inKSp.jpg`,
    trailer: "MCvtnQt_3zk",
    seasons: 21,
    episodes: 1100,
    studio: "Toei Animation",
    cast: ["Mayumi Tanaka", "Kazuya Nakai", "Akemi Okamura", "Kappei Yamaguchi"],
    tags: ["Pirates", "Adventure", "Nakama"],
    isTrending: false
  },
  {
    id: "jujutsu-kaisen",
    title: "Jujutsu Kaisen",
    type: "anime",
    genre: ["Action", "Supernatural", "Dark Fantasy"],
    year: 2020,
    rating: 8.6,
    duration: "23m/ep",
    description: "A boy swallows a cursed talisman — the finger of a demon — and becomes host to a powerful curse. He joins a secret organization of Jujutsu Sorcerers to kill demons and protect the innocent.",
    poster: `${TMDB_POSTER}/jTswp6KyDYKtvC52GbHagrZbGvD.jpg`,
    backdrop: `${TMDB_BACKDROP}/8OKmBV5BUFzmozIC3pPWKHy17kx.jpg`,
    trailer: "pkKu9hLT-t8",
    seasons: 3,
    episodes: 48,
    studio: "MAPPA",
    cast: ["Junya Enoki", "Yuma Uchida", "Asami Seto", "Yuichi Nakamura"],
    tags: ["Curses", "Power System", "Dark"],
    isTrending: true,
    isNew: true
  },
  {
    id: "the-dark-knight",
    title: "The Dark Knight",
    type: "movie",
    genre: ["Action", "Crime", "Drama"],
    year: 2008,
    rating: 9,
    duration: "2h 32m",
    description: "Batman faces the Joker, a criminal mastermind who plunges Gotham into anarchy. The finest superhero film ever made — a Greek tragedy wrapped in a crime epic.",
    poster: `${TMDB_POSTER}/qJ2tW6WMUDux911r6m7haRef0WH.jpg`,
    backdrop: `${TMDB_BACKDROP}/hqkIcbrOHL86UncnHIsHVcVmzue.jpg`,
    trailer: "EXeTwQWrcwY",
    studio: "Warner Bros.",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
    tags: ["Masterpiece", "Villain", "Chaos"],
    isTrending: false
  },
  {
    id: "oppenheimer",
    title: "Oppenheimer",
    type: "movie",
    genre: ["Drama", "History", "Thriller"],
    year: 2023,
    rating: 8.4,
    duration: "3h 0m",
    description: "The story of J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II. A sprawling epic about genius, consequence, and the weight of playing God.",
    poster: `${TMDB_POSTER}/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg`,
    backdrop: `${TMDB_BACKDROP}/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg`,
    trailer: "uYPbbksJxIg",
    studio: "Universal Pictures",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
    tags: ["Atomic", "Epic", "Historical"],
    isTrending: false,
    isNew: true
  },
  {
    id: "blade-runner-2049",
    title: "Blade Runner 2049",
    type: "movie",
    genre: ["Sci-Fi", "Drama", "Mystery"],
    year: 2017,
    rating: 8,
    duration: "2h 44m",
    description: "A young blade runner discovers a long-buried secret that has the potential to plunge what's left of society into chaos. A visual meditation on identity, memory, and what it means to be alive.",
    poster: `${TMDB_POSTER}/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg`,
    backdrop: `${TMDB_BACKDROP}/sOHnDSilFmGEJlV2k3a3gINJzeg.jpg`,
    trailer: "gCcx85zbxz4",
    studio: "Warner Bros.",
    cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas", "Jared Leto"],
    tags: ["Neo-Noir", "Cyberpunk", "Visually Stunning"],
    isTrending: false,
    isOriginal: true
  },
  {
    id: "the-mandalorian",
    title: "The Mandalorian",
    type: "tv",
    genre: ["Action", "Adventure", "Sci-Fi"],
    year: 2019,
    rating: 8.7,
    duration: "30-40m/ep",
    description: "A lone bounty hunter makes his way through the outer reaches of the galaxy, far from the authority of the New Republic. And he's protecting the most adorable creature in the universe.",
    poster: `${TMDB_POSTER}/sWgBv7LV2rebbQe7cAIVAzFsFfM.jpg`,
    backdrop: `${TMDB_BACKDROP}/9ijMGlJKqcslswWUzTEwTIDLqPKP.jpg`,
    trailer: "aOC8E8z_ifw",
    seasons: 3,
    episodes: 24,
    studio: "Disney+",
    cast: ["Pedro Pascal", "Gina Carano", "Carl Weathers"],
    tags: ["Star Wars", "Western", "Baby Yoda"],
    isTrending: false,
    isOriginal: true,
    watchProgress: 80
  },
  {
    id: "chainsaw-man",
    title: "Chainsaw Man",
    type: "anime",
    genre: ["Action", "Dark Fantasy", "Horror"],
    year: 2022,
    rating: 8.5,
    duration: "24m/ep",
    description: "Denji, a young man crushed by debt, merges with his devil pet Pochita and becomes Chainsaw Man — a human-devil hybrid who works as a devil hunter for a mysterious government agency.",
    poster: `${TMDB_POSTER}/npdB6eFzizki0WaZ1OvKcJRWkHK.jpg`,
    backdrop: `${TMDB_BACKDROP}/9uXJK5X2v1yHIm1j5wGMKpBWMRZ.jpg`,
    trailer: "FHpMh2Bfknc",
    seasons: 1,
    episodes: 12,
    studio: "MAPPA",
    cast: ["Kikunosuke Toya", "Tomori Kusunoki", "Shogo Sakata"],
    tags: ["Hyper Violence", "Style", "Cult Favorite"],
    isTrending: false,
    isNew: true
  },
  {
    id: "elden-ring-series",
    title: "The Witcher",
    type: "tv",
    genre: ["Fantasy", "Action", "Adventure"],
    year: 2019,
    rating: 8.2,
    duration: "60m/ep",
    description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts. Based on the beloved fantasy saga.",
    poster: `${TMDB_POSTER}/7vjaCdMw15FEbXyLQTVa04URsPm.jpg`,
    backdrop: `${TMDB_BACKDROP}/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg`,
    trailer: "ndl8BNlAMlQ",
    seasons: 3,
    episodes: 24,
    studio: "Netflix",
    cast: ["Henry Cavill", "Freya Allan", "Anya Chalotra"],
    tags: ["Fantasy", "Monsters", "Magic"],
    isTrending: false,
    isOriginal: true
  },
  {
    id: "spy-x-family",
    title: "SPY x FAMILY",
    type: "anime",
    genre: ["Action", "Comedy", "Spy"],
    year: 2022,
    rating: 8.5,
    duration: "23m/ep",
    description: "A spy on an undercover mission gets married and adopts a child as part of his cover. But his wife is a trained assassin and his daughter is a telepath. And none of them know the others' secrets.",
    poster: `${TMDB_POSTER}/Ans3ICgjXMrVnrCDwQMqSNAHSLF.jpg`,
    backdrop: `${TMDB_BACKDROP}/5geQMGlVkGpT3O0Wl3CSmI7VxUe.jpg`,
    trailer: "oaHSZ-C-Vz4",
    seasons: 2,
    episodes: 37,
    studio: "Wit Studio / CloverWorks",
    cast: ["Takuya Eguchi", "Saori Hayami", "Atsumi Tanezaki"],
    tags: ["Family", "Comedy", "Wholesome"],
    isTrending: false,
    isNew: true
  },
  {
    id: "house-of-dragon",
    title: "House of the Dragon",
    type: "tv",
    genre: ["Fantasy", "Drama", "Action"],
    year: 2022,
    rating: 8.4,
    duration: "60m/ep",
    description: "The story of House Targaryen set 200 years before the events of Game of Thrones. Dragons, succession wars, and the seeds of a dynasty in flames.",
    poster: `${TMDB_POSTER}/z2yahl2uefxDCl0nogcRBstwruJ.jpg`,
    backdrop: `${TMDB_BACKDROP}/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg`,
    trailer: "DotnJ7tTA34",
    seasons: 2,
    episodes: 18,
    studio: "HBO",
    cast: ["Matt Smith", "Emma D'Arcy", "Olivia Cooke", "Paddy Considine"],
    tags: ["Dragons", "Epic", "Political"],
    isTrending: true,
    isNew: true
  }
];
const getContentById = (id) => contentDatabase.find((item) => item.id === id);
const getContentByType = (type) => contentDatabase.filter((item) => item.type === type);
const getTrending = () => contentDatabase.filter((item) => item.isTrending);
const getOriginals = () => contentDatabase.filter((item) => item.isOriginal);
const getNewReleases = () => contentDatabase.filter((item) => item.isNew);
const getContinueWatching = () => contentDatabase.filter((item) => item.watchProgress && item.watchProgress > 0);
const getTopRated = () => [...contentDatabase].sort((a, b) => b.rating - a.rating).slice(0, 10);
const searchContent = (query) => {
  const q = query.toLowerCase();
  return contentDatabase.filter(
    (item) => item.title.toLowerCase().includes(q) || item.genre.some((g) => g.toLowerCase().includes(q)) || item.tags?.some((t) => t.toLowerCase().includes(q)) || item.description.toLowerCase().includes(q)
  );
};
function ContentCard({ item, width = 180, height = 270 }) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);
  return /* @__PURE__ */ jsx(Link, { to: `/watch/${item.id}`, style: { textDecoration: "none" }, children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "poster-card holo-border",
      style: { width, height, flexShrink: 0 },
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      children: [
        !imgError ? /* @__PURE__ */ jsx(
          "img",
          {
            src: item.poster,
            alt: item.title,
            onError: () => setImgError(true),
            style: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
            loading: "lazy"
          }
        ) : /* @__PURE__ */ jsxs("div", { style: {
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, var(--surface) 0%, var(--surface2) 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px"
        }, children: [
          /* @__PURE__ */ jsx("div", { style: { fontSize: "36px", opacity: 0.3 }, children: "🎬" }),
          /* @__PURE__ */ jsx("span", { style: { fontSize: "11px", color: "var(--text-muted)", textAlign: "center", padding: "0 8px" }, children: item.title })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "poster-card-overlay" }),
        item.watchProgress && /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "rgba(255,255,255,0.1)", zIndex: 3 }, children: /* @__PURE__ */ jsx("div", { className: "progress-bar", style: { width: `${item.watchProgress}%` } }) }),
        item.isNew && /* @__PURE__ */ jsx("div", { style: {
          position: "absolute",
          top: "8px",
          left: "8px",
          zIndex: 3,
          background: "var(--crimson)",
          color: "white",
          fontSize: "9px",
          fontWeight: "700",
          letterSpacing: "0.12em",
          padding: "2px 8px",
          borderRadius: "3px",
          boxShadow: "0 0 12px rgba(220,38,38,0.5)"
        }, children: "NEW" }),
        /* @__PURE__ */ jsxs("div", { className: "poster-card-info", children: [
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }, children: [
            /* @__PURE__ */ jsx("span", { className: `type-badge ${item.type}`, children: item.type }),
            /* @__PURE__ */ jsxs("span", { className: "rating-badge", children: [
              /* @__PURE__ */ jsx(Star, { size: 9, fill: "currentColor" }),
              " ",
              item.rating
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { style: { fontSize: "12px", fontWeight: "600", color: "var(--text-primary)", marginBottom: "4px", lineHeight: "1.3" }, className: "line-clamp-2", children: item.title }),
          /* @__PURE__ */ jsxs("div", { style: { fontSize: "10px", color: "var(--text-muted)", marginBottom: "10px" }, children: [
            item.year,
            " · ",
            item.genre[0]
          ] }),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "6px" }, children: [
            /* @__PURE__ */ jsxs("button", { style: {
              flex: 1,
              background: "var(--crimson)",
              border: "none",
              color: "white",
              fontSize: "11px",
              fontWeight: "600",
              padding: "7px",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              fontFamily: "var(--font-body)"
            }, children: [
              /* @__PURE__ */ jsx(Play, { size: 10, fill: "white" }),
              " Play"
            ] }),
            /* @__PURE__ */ jsx("button", { style: {
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
              fontSize: "11px",
              padding: "7px 10px",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }, children: /* @__PURE__ */ jsx(Plus, { size: 12 }) })
          ] })
        ] })
      ]
    }
  ) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { style: {
    background: "linear-gradient(to bottom, var(--void), var(--abyss))",
    borderTop: "1px solid rgba(255,255,255,0.04)",
    padding: "64px 48px 40px",
    marginTop: "80px"
  }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: "1600px", margin: "0 auto" }, children: [
    /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "48px", marginBottom: "64px" }, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }, children: [
          /* @__PURE__ */ jsx("div", { style: { width: "32px", height: "32px", background: "var(--crimson)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsx(Play, { size: 14, fill: "white", color: "white" }) }),
          /* @__PURE__ */ jsx("span", { style: { fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: "700", letterSpacing: "0.08em" }, children: "CINEVERSE" })
        ] }),
        /* @__PURE__ */ jsx("p", { style: { fontSize: "13px", color: "var(--text-muted)", lineHeight: "1.7", maxWidth: "240px" }, children: "The ultimate cinematic streaming experience. Hollywood, anime, and beyond — all in one universe." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { style: { fontSize: "11px", fontWeight: "700", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--crimson)", marginBottom: "20px" }, children: "Browse" }),
        /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [["/", "Home"], ["/movies", "Movies"], ["/anime", "Anime"], ["/tv", "TV Shows"], ["/originals", "Originals"]].map(([href, label]) => /* @__PURE__ */ jsx(
          Link,
          {
            to: href,
            style: { fontSize: "13px", color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" },
            onMouseEnter: (e) => e.currentTarget.style.color = "var(--text-primary)",
            onMouseLeave: (e) => e.currentTarget.style.color = "var(--text-secondary)",
            children: label
          },
          href
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { style: { fontSize: "11px", fontWeight: "700", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--crimson)", marginBottom: "20px" }, children: "Discover" }),
        /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [["/trending", "Trending Now"], ["/top-rated", "Top Rated"], ["/search", "Search"], ["/watch/dune", "New Releases"]].map(([href, label]) => /* @__PURE__ */ jsx(
          Link,
          {
            to: href,
            style: { fontSize: "13px", color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" },
            onMouseEnter: (e) => e.currentTarget.style.color = "var(--text-primary)",
            onMouseLeave: (e) => e.currentTarget.style.color = "var(--text-secondary)",
            children: label
          },
          href
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { style: { fontSize: "11px", fontWeight: "700", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--crimson)", marginBottom: "20px" }, children: "Genres" }),
        /* @__PURE__ */ jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px" }, children: ["Action", "Drama", "Sci-Fi", "Thriller", "Fantasy", "Horror", "Comedy", "Adventure"].map((genre) => /* @__PURE__ */ jsx(
          "span",
          {
            style: {
              fontSize: "11px",
              color: "var(--text-muted)",
              padding: "4px 10px",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              cursor: "pointer",
              transition: "all 0.2s"
            },
            onMouseEnter: (e) => {
              e.currentTarget.style.borderColor = "rgba(220,38,38,0.4)";
              e.currentTarget.style.color = "var(--text-primary)";
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.color = "var(--text-muted)";
            },
            children: genre
          },
          genre
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }, children: [
      /* @__PURE__ */ jsx("p", { style: { fontSize: "12px", color: "var(--text-muted)" }, children: "© 2026 CINEVERSE. A cinematic universe. All rights reserved." }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: "16px" }, children: ["Privacy", "Terms", "Cookies", "Help"].map((item) => /* @__PURE__ */ jsx(
        "span",
        {
          style: { fontSize: "12px", color: "var(--text-muted)", cursor: "pointer", transition: "color 0.2s" },
          onMouseEnter: (e) => e.currentTarget.style.color = "var(--text-secondary)",
          onMouseLeave: (e) => e.currentTarget.style.color = "var(--text-muted)",
          children: item
        },
        item
      )) })
    ] })
  ] }) });
}
export {
  ContentCard as C,
  Footer as F,
  getContentByType as a,
  getContinueWatching as b,
  contentDatabase as c,
  getNewReleases as d,
  getOriginals as e,
  getTopRated as f,
  getContentById as g,
  getTrending as h,
  searchContent as s
};
