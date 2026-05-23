import { jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
const SplitComponent = () => /* @__PURE__ */ jsx("div", { style: {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "16px"
}, children: /* @__PURE__ */ jsx(Link, { to: "/", style: {
  color: "var(--crimson)",
  textDecoration: "none",
  fontFamily: "var(--font-body)"
}, children: "← Back to CINEVERSE" }) });
export {
  SplitComponent as component
};
