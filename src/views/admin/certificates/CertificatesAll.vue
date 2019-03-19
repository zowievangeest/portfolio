<template>
  <div>
    <hr />
    <div class="box content">
      <div class="columns">
        <div class="column">
          <b-table :data="getAllCertificates" ref="table">
            <template slot-scope="props">
              <b-table-column field="show" width="20">
                <Published :condition="props.row.show" />
              </b-table-column>
              <b-table-column
                field="authority"
                label="Autoriteit"
                width="175"
                sortable
              >
                <template>
                  <a :href="props.row.authorityUrl" target="_blank">
                    {{ props.row.authority }}
                  </a>
                </template>
              </b-table-column>

              <b-table-column
                field="title"
                label="Certificaat titel"
                width="350"
                sortable
              >
                <template>
                  <a :href="props.row.website" target="_blank">
                    {{ props.row.title }}
                  </a>
                </template>
              </b-table-column>

              <b-table-column
                field="achievedDate"
                label="Behaald op"
                sortable
                centered
              >
                <span class="button is-success is-small">
                  {{ $moment(props.row.achievedDate).format('YYYY') }}
                </span>
              </b-table-column>

              <b-table-column
                field="expireDate"
                label="Verval datum"
                sortable
                centered
              >
                <span
                  v-if="!props.row.expirable"
                  class="button is-success is-small"
                >
                  Verloopt nooit
                </span>
                <span v-else class="button is-danger is-small">
                  {{ $moment(props.row.expireDate).format('YYYY') }}
                </span>
              </b-table-column>

              <b-table-column label="Acties" centered>
                <router-link
                  type="button"
                  tag="button"
                  class="button is-success is-small margin-left-10"
                  :to="{name: 'certificates/edit', params: {id: props.row._id}}"
                  exact
                  ><b-icon
                    icon="square-edit-outline"
                    type="is-light"
                    custom-size="mdi-18px"
                  ></b-icon
                ></router-link>
                <button
                  class="button is-danger is-small margin-left-10"
                  @click="confirm(props.row._id)"
                >
                  <b-icon
                    icon="delete-outline"
                    type="is-light"
                    custom-size="mdi-18px"
                  ></b-icon>
                </button>
              </b-table-column>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.margin-left-10 {
  margin-left: 10px;
}
</style>

<script>
import {mapGetters} from 'vuex'
import Published from '../../../components/dashboard/published/Published'

export default {
  name: 'CertificatesAll',
  middleware: 'auth',
  components: {
    Published
  },
  async mounted() {
    const vm = this
    await vm.$store.watch(() => {
      vm.$store.dispatch('certificates/fetchAllCertificates')
    })
  },
  computed: {
    ...mapGetters({
      certificates: 'certificates/certificates'
    }),
    getAllCertificates() {
      return this.certificates ? this.certificates : ''
    }
  },
  methods: {
    confirm(id) {
      this.$dialog.confirm({
        message: 'Weet je zeker dat je het wilt verwijderen?',
        onConfirm: () => {
          this.$store.dispatch('certificates/deleteCertificate', id)
          this.$toast.open({
            duration: 5000,
            message: 'Certificaat verwijderd',
            position: 'is-bottom-right',
            type: 'is-danger'
          })
        }
      })
    }
  }
}
</script>
