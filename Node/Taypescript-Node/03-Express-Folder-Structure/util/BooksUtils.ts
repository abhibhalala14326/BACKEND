import path, { resolve } from "path";
import { IBook } from "../models/Ibooks";

const jsonfile = require("jsonfile");

export class BooksUtils {
  private static jsonbooksPath = path.join(__dirname, "..", "db", "books.json");

  public static getAllBooksDb(): Promise<IBook[]> {
    return new Promise((resolve, rejects) => {
      jsonfile.readFile(this.jsonbooksPath, (err: any, data: any) => {
        if (err) {
          rejects(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}
