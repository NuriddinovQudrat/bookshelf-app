import CryptoJS from "crypto-js";

export const generateSignature = (
  method: string,
  url: string,
  body: string | object,
  userSecret: string,
): string => {
  const bodyStr = typeof body === "string" ? body : JSON.stringify(body);
  const signStr = `${method}${url}${bodyStr}${userSecret}`;
  return CryptoJS.MD5(signStr).toString();
};
