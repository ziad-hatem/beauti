import { Api, getSession } from "@/libs";
import Browser from "./Browser";
const page = async () => {
  await Api.get("test2")
  const browserData = {
    session: await getSession(),
    customer: await Api.get("getCustomer")
    //postResult: await Api.post("flash", { name: "froty" }),
  };
  return <Browser {...browserData} />;
};

export default page;
