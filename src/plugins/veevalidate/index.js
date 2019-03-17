import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import nl from 'vee-validate/dist/locale/nl'

Validator.localize({nl})
Vue.use(VeeValidate, {
  locale: 'nl',
  classes: true,
  classNames: {
    valid: 'is-success',
    invalid: 'is-danger'
  }
})
