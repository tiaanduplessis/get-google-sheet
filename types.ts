export interface Table {
  cols: {
    id: string;
    label: string;
    type: string;
  }[];
  rows: { c: ({ v: string } | null)[] }[];
}

export interface Parsed {
  version: string;
  reqId: string;
  status: string;
  sig: string;
  table: Table;
}
