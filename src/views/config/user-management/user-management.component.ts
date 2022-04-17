import UserManagementService from '../../../service/user-management.service'
import AlertService from '@/shared/alert/alert.service'
import { Options, Vue } from 'vue-class-component'

@Options({
  inject: ['userManagementService', 'alertService']
})
export default class JhiUserManagementComponent extends Vue {
  private userManagementService: UserManagementService
  private alertService: AlertService

  public mounted (): void {
    this.loadAll()
  }

  public loadAll (): void {
    this.userManagementService
      .retrieve({
        page: 0,
        size: 20
      })
      .then(res => {
        console.log(res)
      })
      .catch((err: any) => this.alertService.showHttpError(err))
  }
}
