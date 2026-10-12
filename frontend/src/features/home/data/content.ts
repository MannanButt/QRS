export type HeroCard = {
  readonly id: string;
  readonly src: string;
  readonly alt: string;
  readonly position: string;
};

export const heroCards: readonly HeroCard[] = [
  {
    id: "ai-automation",
    src: "/assets/images/services/menu-ai-automation-robot.png",
    alt: "AI automation robot with intelligent workflow interfaces",
    position: "center center",
  },
  {
    id: "gmb-seo-aeo",
    src: "/assets/images/services/menu-marketing-seo.jpg",
    alt: "Performance analytics dashboard showing SEO and AEO growth metrics",
    position: "center center",
  },
  {
    id: "development",
    src: "/assets/images/services/menu-development.jpg",
    alt: "Modern code editor showing website development and engineering",
    position: "center center",
  },
] as const;

export const heroImages = heroCards;

