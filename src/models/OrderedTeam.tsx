export type OrderedTeam = {
  name: string;
  clicks: { yourClicks: number; teamClicks: number };
  order: number;
  key: string;
};
