import { Options, Vue } from 'vue-class-component';
import UserService from '@/service/user.service';
import { LoginModel } from '@/model/login.model';
import { reactive } from 'vue';
import AccountService from '@/service/account.service';
import router from '@/router';
import { RouteLocationRaw } from 'vue-router';
import ImageLogin from '@/assets/images/image-login.svg';
import logo2 from '@/assets/icon/Logo2.svg';

@Options({
  inject: ['userService', 'accountService'],
})
export default class SignInComponent extends Vue {
  private userService: UserService;
  private accountService: AccountService;
  private ImageLogin = ImageLogin;
  private logo2 = logo2;

  public formState = reactive<LoginModel>({
    username: '',
    password: '',
    rememberMe: true,
  });

  onFinish(): void {
    this.userService
      .login(this.formState)
      .then(() => {
        this.accountService.retrieveAccount().then(() => {
          const requestedUrl = sessionStorage.getItem('requested-url');
          if (requestedUrl) {
            router.replace(requestedUrl as RouteLocationRaw).then();
            sessionStorage.removeItem('requested-url');
          } else {
            this.$router.push('/').then();
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onFinishFailed(): void {
    console.log('fail', this.formState);
  }
}
