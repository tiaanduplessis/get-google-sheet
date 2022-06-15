import {
  hasLabelPropsInCols,
  identity,
  mapRowsToHeaders,
  mapToProp,
  parseText,
  // @ts-ignore
} from "./utils.ts";

export const getGoogleSheet = async (sheetId: string, name: string, {
  onValue = identity,
}: {
  onValue?: typeof identity;
} = {}) => {
  const response = await fetch(
    `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?sheet=${name}`,
  );

  const data = await response.text();
  const parsed = parseText(data);

  if (hasLabelPropsInCols(parsed)) {
    const header = mapToProp(parsed.table.cols, "label");
    return mapRowsToHeaders(header, parsed.table.rows, onValue);
  } else {
    const [headerRow, ...rows] = parsed.table.rows;
    if (headerRow.c !== null) {
      const header = mapToProp(headerRow.c, "v");
      return mapRowsToHeaders(header, rows, onValue);
    } else {
      throw new Error("Failed to find header row");
    }
  }
};

export default getGoogleSheet;
