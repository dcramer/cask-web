// the distillery
export type Producer = {
  id: string;
  name: string;
  // e.g. Scotland
  country: string;
  // e.g. Speyside
  region?: string;
};

// these are %'s, so floating point
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
// if Brand is empty it uses the Producer instead and is considered their base
// Producer=Hibiki Brand=Hibiki, Name=12, Series=None, DisplayName=Hibiki 12
// Producer=Macallan, Brand=Blended Malt, Series=Mythic Journey, DisplayName=Macallan Blended Malt Mythic Journey
export type Bottle = {
  id: string;
  name: string;
  brand?: Brand;
  bottler?: Bottler;
  producer: Producer;
  category?: Category;

  // floating point as percentage
  abv?: number;

  // e.g. 12 [years]
  statedAge?: number;

  // TODO: should vintage and bottling be full dates? optional month/day?
  // the distillation date
  vintageYear?: number;
  // the bottle date
  bottleYear?: number;

  // e.g. the limited release/collection
  series?: string;

  // e.g. Plum Liqueur Barrels
  caskType?: string;
  caskNumber?: string;
  // total number of bottles in line
  totalBottles?: number;
  mashBill?: MashBill;
};

export type User = {
  id: string;
  displayName: string;
};

export type Checkin = {
  id: string;
  bottle: Bottle;
  // optional location for check-in
  location?: Location;
  tastingNotes: string;
  // e.g. "Bold", "Peaty", more or less tags
  tags: string[];
  // people that you're with
  friends: string[];
  // 1-5, floating point to make half ratings possible
  rating: number;
};

// locations are where you're checking-in from (e.g. a bar, a distillery)
export type Location = {
  id: string;
  name: string;
};
