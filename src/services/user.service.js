import { httpService } from "./http.service.js";

const BASE_URL = "/api/user";

export const userService = {
  save,
};

async function save(user) {
  let savedStation;
  const status = await httpService.post(BASE_URL, user);
  savedStation = { ...user, _id: status.insertedId };
  return savedStation;
}
