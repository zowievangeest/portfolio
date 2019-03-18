<template>
  <div>
    <hr />
    <div class="box content">
      <div class="columns">
        <div class="column">
          <b-table
            :data="getAllExperiences"
            ref="table"
            :opened-detailed="defaultOpenedDetails"
            detailed
            detail-key="_id"
            @details-open="
              (row, index) => $toast.open(`Expanded ${row.organization}`)
            "
          >
            <template slot-scope="props">
              <b-table-column
                field="organization"
                label="Bedrijf"
                width="175"
                sortable
              >
                <template>
                  <a @click="toggle(props.row)">
                    {{ props.row.organization }}
                  </a>
                </template>
              </b-table-column>

              <b-table-column field="role" label="Functie" sortable>
                {{ props.row.role }}
              </b-table-column>

              <b-table-column field="startDate" label="Van" sortable centered>
                <span class="button is-success is-small">
                  {{ $moment(props.row.startDate).format('MM-YYYY') }}
                </span>
              </b-table-column>

              <b-table-column field="endDate" label="Tot" sortable centered>
                <span
                  v-if="props.row.current"
                  class="button is-success is-small"
                >
                  Huidig
                </span>
                <span v-else class="button is-danger is-small">
                  {{ $moment(props.row.endDate).format('MM-YYYY') }}
                </span>
              </b-table-column>

              <b-table-column label="Acties" centered>
                <router-link
                  type="button"
                  tag="button"
                  class="button is-success is-small margin-left-10"
                  :to="{name: 'experiences/edit', params: {id: props.row._id}}"
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
                    <div v-if="props.row.shortDescription">
                      <strong>Korte beschrijving:</strong><br />
                      {{ props.row.shortDescription }}
                    </div>
                    <div v-if="props.row.description">
                      <strong>Beschrijving:</strong><br />
                      {{ props.row.description }}
                    </div>
                    <div v-if="props.row.url">
                      <strong>Website:</strong><br />
                      <a :href="props.row.url" target="_blank">{{
                        props.row.url
                      }}</a>
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

<style lang="scss" scoped>
.margin-left-10 {
  margin-left: 10px;
}
</style>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'ExperiencesAll',
  middleware: 'auth',
  data() {
    return {
      defaultOpenedDetails: [1],
      showDetailIcon: true
    }
  },
  async mounted() {
    const vm = this
    await vm.$store.watch(() => {
      vm.$store.dispatch('experiences/fetchAllExperiences')
    })
  },
  computed: {
    ...mapGetters({
      experiences: 'experiences/experiences'
    }),
    getAllExperiences() {
      return this.experiences ? this.experiences : ''
    }
  },
  methods: {
    toggle(row) {
      this.$refs.table.toggleDetails(row)
    },
    confirm(id) {
      console.log(id)
      this.$dialog.confirm({
        message: 'Weet je zeker dat je het wilt verwijderen?',
        onConfirm: () => {
          this.$store.dispatch('experiences/deleteExperience', id)
          this.$toast.open({
            duration: 5000,
            message: 'Ervaring verwijderd',
            position: 'is-bottom-right',
            type: 'is-danger'
          })
        }
      })
    }
  }
}
</script>
