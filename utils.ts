// @ts-ignore
import { Parsed, Table } from "./types.ts";

export const parseText = (text: string): Parsed => {
  return JSON.parse(
    text
      .split("\n")[1]
      .replace(/google.visualization.Query.setResponse\(|\);/g, ""),
  );
}


export const hasLabelPropsInCols = (parsed: Parsed) =>
  parsed.table.cols.some(({ label }) => !!label);

export const mapToProp = (
  arr: ({ [key: string]: any } | null)[],
  prop: string,
) => arr.map((item) => (item ? item[prop] : undefined));

export const identity = (
  val: string,
  _current?: {
    headerKey: string;
    cell: {
      v: string;
    } | null;
    columnIndex: number;
    rowIndex: number;
  },
) => val;

export const mapRowsToHeaders = (
  header: (string | undefined)[],
  rows: Table["rows"],
  onValue = identity,
) => {
  return rows
    .map(({ c: rows }) => rows)
    .map((row, rowIndex) =>
      row.reduce((acc, cell, index) => {
        const headerKey: string | undefined = header[index];
        if (cell && cell.v && headerKey) {
          acc[headerKey] = onValue(cell.v, {
            headerKey,
            cell,
            rowIndex,
            columnIndex: index,
          });
        }
        return acc;
      }, {} as { [key: string]: any })
    );
};
