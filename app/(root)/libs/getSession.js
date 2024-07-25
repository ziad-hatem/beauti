import { cache } from "react";
import { Api } from "@/libs"
export default cache(async () => {
  const session = await Api.get("session")
  session.local ??= "sa";
  session.direction ??= "rtl";
  session.current_city ??= "الرياض";
  return session
});
export const getCustomer = cache(async () => await Api.get("getCustomer"));
export const getCSRFToken = cache(async () => await Api.get("csrfToken"))
