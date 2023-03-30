export type Producer = {
  id: string;
  name: string;
  // e.g. Scotland
  country: string;
  // e.g. Speyside
  region: string;
};

export type MashBill = {
  barley: number;
  corn: number;
  rye: number;
  wheat: number;
};

export enum Category {
  Blend,
  BlendedMalt,
  SingleMalt,
  Spirit,
}

// e.g. Suntory Whisky
export type Bottler = {
  id: string;
  name: string;
};

// e.g. Hibiki
export type Brand = {
  id: string;
  name: string;
};

// DisplayName is: [Brand] [Name] [Series]
// Producer=Hibiki Brand=Hibiki, Name=12, Series=None, DisplayName=Hibiki 12
// Producer=Macallan, Brand=Blended Malt, Series=Mythic Journey, DisplayName=Macallan Blended Malt Mythic Journey
export type Bottle = {
  id: string;
  name: string;
  brand?: string;
  bottler?: Bottler;
  producer: Producer;
  category?: Category;
  abv?: number;
  statedAge?: number;
  // the distillation date
  vintageYear?: number;
  // the bottle date
  bottleYear?: number;

  series?: string;

  // e.g. Plum Liqueur Barrels
  caskType?: string;
  mashBill?: MashBill;
};

export type Location = {
  id: string;
  name: string;
};

export type User = {
  id: string;
  displayName: string;
};
