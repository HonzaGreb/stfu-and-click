export interface OrderedTeam {
  name: string;
  id: string;
  clicks: { yourClicks: number; teamClicks: number };
  order: number;
}
