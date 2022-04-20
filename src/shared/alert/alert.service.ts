import { translate } from '@/shared/config/useI18n';
import { Notification } from 'element-ui';

export default class AlertService {
  public showError(title: string, message?: any) {
    Notification.error({ title, message });
  }

  public showHttpError(httpErrorResponse: any) {
    switch (httpErrorResponse.status) {
      case 0:
        this.showError('error.server.not.reachable');
        break;

      case 400: {
        const arr = Object.keys(httpErrorResponse.headers);
        let errorHeader: string | null = null;
        let entityKey: string | null = null;
        for (const entry of arr) {
          if (entry.toLowerCase().endsWith('app-error')) {
            errorHeader = httpErrorResponse.headers[entry];
          } else if (entry.toLowerCase().endsWith('app-params')) {
            entityKey = httpErrorResponse.headers[entry];
          }
        }
        if (errorHeader) {
          const alertData = entityKey
            ? { entityName: translate(`global.menu.entities.${entityKey}`) }
            : undefined;
          this.showError(errorHeader, alertData);
        } else if (
          httpErrorResponse.data !== '' &&
          httpErrorResponse.data.fieldErrors
        ) {
          this.showError(httpErrorResponse.data.message);
        } else {
          this.showError(httpErrorResponse.data.message);
        }
        break;
      }

      case 404:
        this.showError('error.http.404');
        break;

      default:
        this.showError(httpErrorResponse.data.message);
    }
  }
}
