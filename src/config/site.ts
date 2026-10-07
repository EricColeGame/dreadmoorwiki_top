export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "DreadmoorWiki Wiki",
  shortName: "DreadmoorWiki",
  logoText: "D",
  tagline: "Guides, Items, Characters & Survival Tips",
  description: "DreadmoorWiki Wiki provides detailed guides, item information, character details, gameplay mechanics, and helpful resources for players exploring the dark fantasy world.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dreadmoorwiki.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dreadmoorwiki.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/3629430/DREADMOOR/",
  heroVideoId: "36nRuRmunQI", // DREADMOOR gameplay video
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
