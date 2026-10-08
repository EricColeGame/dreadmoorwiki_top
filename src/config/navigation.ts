export type NavItem = {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "release", path: "/release", isContentType: true },
  { key: "platforms", path: "/platforms", isContentType: true },
  { key: "multiplayer", path: "/multiplayer", isContentType: true },
  { key: "comparison", path: "/comparison", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
  { key: "reviews", path: "/reviews", isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
