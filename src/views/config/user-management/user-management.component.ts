import UserManagementService from '../../../service/user-management.service';
import AlertService from '@/shared/alert/alert.service';
import { Component, Inject, Vue } from 'vue-property-decorator';

@Component
export default class JhiUserManagementComponent extends Vue {
  @Inject('userManagementService')
  private userManagementService: () => UserManagementService;
  @Inject('alertService') private alertService: AlertService;

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
