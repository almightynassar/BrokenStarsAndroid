<template>
	<f7-page>
    <div class="data-table">
      <table>
        <thead>
          <tr>
            <th class="label-cell">Name</th>
            <th>Hull</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="s in ships" :key="s.name">
            <td class="label-cell">{{ s.name }}</td>
            <td>{{ s.ship.getHull() }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </f7-page>
</template>
<script>
  export default {
    data() {
      return {
        ships: this.$bsFactory._data.ships,
      }
    }
  }
</script>