<template>
	<f7-page>
    <div class="data-table">
      <table>
        <thead>
          <tr>
            <th class="label-cell">ID</th>
            <th class="numeric-cell">Name</th>
            <th class="numeric-cell">Storage</th>
            <th class="numeric-cell">Power</th>
            <th class="numeric-cell">Crew</th>
            <th class="numeric-cell">Cost</th>
            <th>Description</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="f in fittings.fittings" :key="f.id">
            <td class="label-cell">{{ f.id }}</td>
            <td class="numeric-cell">{{ f.name }}</td>
            <td class="numeric-cell">{{ f.storage }}</td>
            <td class="numeric-cell">{{ f.power }}</td>
            <td class="numeric-cell">{{ f.crew }}</td>
            <td class="numeric-cell">{{ formatNumber( f.cost ) }}</td>
            <td colspan="4">{{ f.description }}</td>
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
        fittings: this.$bsFactory.getTemplate("fittings"),
        formatter: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0}),
			}
    },
		methods: {
			formatNumber(value) {
				return this.formatter.format(parseInt(value));
      }
		}
  }
</script>