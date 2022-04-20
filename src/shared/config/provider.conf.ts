import TranslationService from '@/service/translation.service';
import UserService from '@/service/user.service';
import UserManagementService from '@/service/user-management.service';
import AlertService from '@/shared/alert/alert.service';
import AccountService from '@/service/account.service';
import store from '@/store';

const translateService = new TranslationService(store);
const accountService = new AccountService(store, translateService);
const provide = {
  userService: () => new UserService(),
  alertService: () => new AlertService(),
  userManagementService: () => new UserManagementService(),
  translateService: () => translateService,
  accountService: () => accountService,
};

export default provide;
