import { Prop, Vue } from 'vue-property-decorator';
import Component from 'vue-class-component';

@Component
export default class SignUpComponent extends Vue {
  @Prop({ type: String }) msg: string;
}
