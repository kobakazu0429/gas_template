import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
import { getDayFormat } from './utils';

export class SheetService {
  public static createInitialFile(prefix: string): Spreadsheet {
    const fileName = `${prefix} ${getDayFormat()}`;
    const ss = SpreadsheetApp.create(fileName);
    const range = ss.getRange('A1');
    range.setValue('Hello, clasp!');
    return ss;
  }
}
