<template>
  <div>
    <hr />
    <div class="box content">
      <div class="columns">
        <div class="column">
          <b-table
            :data="getAllEducations"
            ref="table"
            :opened-detailed="defaultOpenedDetails"
            detailed
            detail-key="_id"
            @details-open="
              (row, index) => $toast.open(`Expanded ${row.institution}`)
            "
          >
            <template slot-scope="props">
              <b-table-column field="show" width="20">
                <Published :condition="props.row.show" />
              </b-table-column>
              <b-table-column
                field="institution"
                label="Onderwijsinstelling"
                width="175"
                sortable
              >
                <template>
                  <a @click="toggle(props.row)">
                    {{ props.row.institution }}
                  </a>
                </template>
              </b-table-column>

              <b-table-column
                field="specialization"
                label="Studierichting"
                sortable
              >
                {{ props.row.specialization }}
              </b-table-column>

              <b-table-column
                field="startDate"
                label="Beginjaar"
                sortable
                centered
              >
                <span class="button is-success is-small">
                  {{ $moment(props.row.startDate).format('YYYY') }}
                </span>
              </b-table-column>

              <b-table-column
                field="endDate"
                label="Eindjaar"
                sortable
                centered
              >
                <span
                  v-if="props.row.current"
                  class="button is-success is-small"
                >
                  Huidig
                </span>
                <span v-else class="button is-danger is-small">
                  {{ $moment(props.row.endDate).format('YYYY') }}
                </span>
              </b-table-column>

              <b-table-column label="Acties" centered>
                <router-link
                  type="button"
                  tag="button"
                  class="button is-success is-small margin-left-10"
                  :to="{name: 'educations/edit', params: {id: props.row._id}}"
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

            <template slot="detail" slot-scope="props">
              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <div v-if="props.row.description">
                      <strong>Beschrijving:</strong><br />
                      {{ props.row.description }}
                    </div>
                  </div>
                </div>
              </article>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import Published from '../../../components/dashboard/published/Published'

export default {
  name: 'EducationsAll',
  middleware: 'auth',
  components: {
    Published
  },
  data() {
    return {
      defaultOpenedDetails: [1],
      showDetailIcon: true
    }
  },
  async mounted() {
    const vm = this
    await vm.$store.watch(() => {
      vm.$store.dispatch('educations/fetchAllEducations')
    })
  },
  computed: {
    ...mapGetters({
      educations: 'educations/educations'
    }),
    getAllEducations() {
      return this.educations ? this.educations : ''
    }
  },
  methods: {
    toggle(row) {
      this.$refs.table.toggleDetails(row)
    },
    confirm(id) {
      this.$dialog.confirm({
        message: 'Weet je zeker dat je het wilt verwijderen?',
        onConfirm: () => {
          this.$store.dispatch('educations/deleteEducation', id).then(() => {
            this.$store.dispatch('educations/fetchAllEducations')
            this.$toast.open({
              duration: 5000,
              message: 'Opleiding verwijderd',
              position: 'is-bottom-right',
              type: 'is-danger'
            })
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.margin-left-10 {
  margin-left: 10px;
}
</style>
