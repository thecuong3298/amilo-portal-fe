import axios from "axios";
import { LoginModel } from "@/model/login.model";

export default class UserService {
  public login(form: LoginModel): Promise<boolean | string> {
    console.log(form);
    return new Promise((resolve, reject) => {
      axios
        .post("api/authenticate", form)
        .then((result) => {
          const bearerToken = result.headers.authorization;
          if (bearerToken && bearerToken.slice(0, 7) === "Bearer ") {
            const jwt = bearerToken.slice(7, bearerToken.length);
            if (form.rememberMe) {
              localStorage.setItem("jhi-authenticationToken", jwt);
              sessionStorage.removeItem("jhi-authenticationToken");
            } else {
              sessionStorage.setItem("jhi-authenticationToken", jwt);
              localStorage.removeItem("jhi-authenticationToken");
            }
          }
          resolve(bearerToken);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
