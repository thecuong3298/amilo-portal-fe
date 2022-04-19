import UserManagementService from '../../../service/user-management.service';
import AlertService from '@/shared/alert/alert.service';
import { Options, Vue } from 'vue-class-component';

@Options({
  inject: ['userManagementService', 'alertService'],
})
export default class JhiUserManagementComponent extends Vue {
  private userManagementService: UserManagementService;
  private alertService: AlertService;

  columns = [
    {
      title: 'Name',
      dataIndex: 'firstName',
      width: '20%',
    },
    {
      title: 'Custom',
      dataIndex: 'custom',
      width: '20%',
    },
  ];
}
