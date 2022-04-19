import axios from "axios";
import { IUser } from "@/model/user.model";

export default class UserManagementService {
  public get(userId: number): Promise<any> {
    return axios.get(`api/admin/users/${userId}`);
  }

  public create(user: IUser): Promise<any> {
    return axios.post("api/admin/users", user);
  }

  public update(user: IUser): Promise<any> {
    return axios.put("api/admin/users", user);
  }

  public remove(userId: number): Promise<any> {
    return axios.delete(`api/admin/users/${userId}`);
  }

  public retrieve(params?: any): Promise<any> {
    return axios.get("api/admin/users", { params });
  }

  public retrieveAuthorities(): Promise<any> {
    return axios.get("api/authorities");
  }
}
