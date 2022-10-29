import { format } from "date-fns";

class Formatter {
  DATE = "yyyy-MM-dd";
  DATE_TIME = "yyyy-MM-dd HH:mm:ss";

  date(value: string) {
    return format(new Date(value), this.DATE);
  }

  dateTime(value: string) {
    return format(new Date(value), this.DATE_TIME);
  }
}

export const formatter = new Formatter();
