import cookies from "next-cookies";
import { Cookies } from "react-cookie";
import { Cookie, CookieGetOptions, CookieSetOptions } from "universal-cookie";

const clientCookies = new Cookies();

export const CustomCookies = {
  setCookies: (name: string, value: Cookie, option?: CookieSetOptions) => {
    return clientCookies.set(name, value, { ...option });
  },

  getCookies: (name: string) => {
    return clientCookies.get(name);
  },

  removeCookies: (name: string) => {
    return clientCookies.remove(name);
  },

  getSSRCookies: (
    context: { req?: { headers: { cookie?: string } } },
    key: string,
    options?: CookieGetOptions,
  ) => {
    return cookies(context, options)[key];
  },
};
