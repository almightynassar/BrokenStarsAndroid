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
            <th class="numeric-cell">Damage</th>
            <th class="numeric-cell">Range</th>
            <th class="numeric-cell">Rate Of Fire</th>
            <th class="numeric-cell">Hardpoints</th>
            <th class="numeric-cell">Cost</th>
            <th>Description</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="f in weapons.weapons" :key="f.id">
            <td class="label-cell">{{ f.id }}</td>
            <td class="numeric-cell">{{ f.name }}</td>
            <td class="numeric-cell">{{ f.storage }}</td>
            <td class="numeric-cell">{{ f.power }}</td>
            <td class="numeric-cell">{{ f.damage }}</td>
            <td class="numeric-cell">{{ f.range }}/{{f.range*2}}/{{(f.range*2)*2}}</td>
            <td class="numeric-cell">{{ f.rof }}</td>
            <td class="numeric-cell">{{ f.hardpoints }}</td>
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
        weapons: this.$bsFactory.getTemplate("weapons"),
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