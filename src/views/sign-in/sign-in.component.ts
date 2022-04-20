import UserService from '@/service/user.service';
import { LoginModel } from '@/model/login.model';
import AccountService from '@/service/account.service';
import ImageLogin from '@/assets/images/image-login.svg';
import logo2 from '@/assets/icon/Logo2.svg';
import { Inject, Vue } from 'vue-property-decorator';
import Component from 'vue-class-component';

@Component
export default class SignInComponent extends Vue {
  @Inject('userService') private userService: () => UserService;
  @Inject('accountService') private accountService: () => AccountService;
  private ImageLogin = ImageLogin;
  private logo2 = logo2;

  public formState: LoginModel = {
    username: '',
    password: '',
    rememberMe: true,
  };

  onFinish(): void {
    this.userService()
      .login(this.formState)
      .then(() => {
        this.accountService()
          .retrieveAccount()
          .then(() => {
            const requestedUrl = sessionStorage.getItem('requested-url');
            if (requestedUrl) {
              this.$router.replace(requestedUrl).then();
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
