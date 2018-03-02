<template>
	<v-container grid-list-md>
        <v-layout row wrap>
			<v-flex sm12 md6 lg4>
				<v-card flat>
					<v-card-title class="small-caps">{{nation.name}}</v-card-title>
					<v-card-text>
						<dl class="list">
							<dt>Status</dt>
							<dd>{{ nation.governance.status | capitalize }} <help-generic :popover="'status-details'">{{statusDescription}}</help-generic></dd>
							<dt>Government</dt>
							<dd>{{ nation.governance.source | capitalize}}<help-generic :popover="'source-details'">{{sourceDescription}}</help-generic>  {{ nation.governance.structure | capitalize}}<help-generic :popover="'structure-details'">{{structureDescription}}</help-generic></dd>
						</dl>
					</v-card-text>
				</v-card>
                <v-card flat>
					<v-card-title class="small-caps">Description</v-card-title>
					<v-card-title>{{nation.description}}</v-card-title>
				</v-card>
			</v-flex>
        </v-layout>
	</v-container>
</template>

<script>
	export default {
		data() {
			return {
				nation: {},
				regions: this.$bsFactory.getTemplate('regions'),
			}
        },
        computed: {
            statusDescription() {
                return this.regions.governance.government.status[this.nation.governance.status]
            },
            sourceDescription() {
                return this.regions.governance.government.source[this.nation.governance.source]
            },
            structureDescription() {
                return this.regions.governance.government.structure[this.nation.governance.structure]
            }
        },
		created() {
            let query = (this.$route.query.nation) ? this.$route.query.nation : 'na'; 
			let tempNation = this.regions.nations.get(query)
			if (tempNation) {
				this.nation = tempNation
			} else {
				console.error("NATION NOT FOUND")
			}
		}
	}
</script>