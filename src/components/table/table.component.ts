import AlertService from '@/shared/alert/alert.service';
import { Options, Vue } from 'vue-class-component';
import { PaginationModel } from '@/model/pagination.model';
import { PropType } from 'vue';
import { retrievePaginationFunction } from '@/type/retrievePagination.type';
import { TableColumnsType } from 'ant-design-vue';

@Options({
  inject: ['alertService'],
  props: {
    retrieveData: {
      type: Function,
      required: true,
    },
    pagination: {
      type: Object as PropType<PaginationModel>,
      default: () => ({
        total: 0,
        current: 1,
        pageSize: 2,
      }),
    },
    columns: {
      type: Object as PropType<TableColumnsType>,
      required: true,
    },
  },
})
export default class TableComponent extends Vue {
  private alertService: AlertService;
  private retrieveData: retrievePaginationFunction;
  public pagination: PaginationModel;
  public columns: TableColumnsType;

  data: any = [];
  loading = false;

  handleTableChange(pag: { pageSize: number; current: number }) {
    this.pagination.current = pag.current;
    this.pagination.pageSize = pag.pageSize;
    this.executeFunctionRetrieve();
  }

  public mounted() {
    this.executeFunctionRetrieve();
  }

  private executeFunctionRetrieve() {
    this.loading = true;
    this.retrieveData({
      page: this.pagination.current - 1,
      size: this.pagination.pageSize,
    })
      .then((res: any) => {
        this.data = res.data;
        this.pagination.total = Number(res.headers['x-total-count']);
      })
      .catch((err: any) => this.alertService.showHttpError(err))
      .finally(() => {
        this.loading = false;
      });
  }
}
