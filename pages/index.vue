<template>
  <div>
    <button @click="throwAsync">Throw async</button>
    <button @click="throwSync">Throw sync</button>
    <button @click="throwSyncAsAsync">Throw sync as async</button>
    <div>{{ error }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { getSampleModule } from '~/store'

@Component
export default class IndexPage extends Vue {
  error: any = ''

  async throwAsync() {
    try {
      this.error = ''
      await getSampleModule(this.$store).throwsAsync()
    } catch (err) {
      this.error = err
    }
  }

  throwSync() {
    try {
      this.error = ''
      getSampleModule(this.$store).throwsSync()
    } catch (err) {
      this.error = err
    }
  }

  async throwSyncAsAsync() {
    try {
      this.error = ''
      await getSampleModule(this.$store).throwsSync()
    } catch (err) {
      this.error = err
    }
  }
}
</script>
