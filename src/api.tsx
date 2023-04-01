import { Bottle } from "./types";

export async function getBottle(bottleId: string): Promise<Bottle> {
  return {
    id: "1",
    brand: {
      id: "1",
      name: "Hibiki",
    },
    name: "12",
    producer: {
      id: "1",
      name: "Hibiki",
      country: "Japan",
    },
  };
}

export async function searchBottles(query: string): Promise<Bottle[]> {
  return [await getBottle("1")];
}
