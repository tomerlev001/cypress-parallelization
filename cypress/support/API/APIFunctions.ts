import { StatusCodes } from "http-status-codes";

const BASE_URL = "https://httpbin.org";

type Encodings =
  | "ascii"
  | "base64"
  | "binary"
  | "hex"
  | "latin1"
  | "utf8"
  | "utf-8"
  | "ucs2"
  | "ucs-2"
  | "utf16le"
  | "utf-16le"
  | null;

interface RequestOptions {
  baseUrl: string;
  endpoint: string;
  url: string;
  body: string | object;
  method: string;
  headers: object;
  qs: object;
  auth: object;
  encoding: Encodings;
  followRedirect: boolean;
  form: boolean;
  gzip: boolean;
}

export function getAll(options: Partial<RequestOptions>) {
  return cy
    .request({
      method: "GET",
      url: `${BASE_URL}${options.endpoint}`,
      ...options,
    })
    .then((response) => {
      expect(response.status).to.eq(StatusCodes.OK);
      return response;
    });
}

export function post(options: Partial<RequestOptions>) {
  return cy
    .request({
      method: "POST",
      url: `${BASE_URL}${options.endpoint}`,
      ...options,
    })
    .then((response) => {
      expect(response.status).to.eq(StatusCodes.OK);
      return response;
    });
}
