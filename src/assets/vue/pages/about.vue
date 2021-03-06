<template>
	<v-container fluid>
		<v-layout column>
			<p><em>Broken Stars</em> is a homebrew sci-fi campaign setting that is inspired by various tabletop rulebooks.</p>
			<v-expansion-panel>
				<v-expansion-panel-content>
					<div slot="header"><strong>Inspiration</strong></div>
					<v-card>
						<v-card-text>
							<p>A Tabletop RPG reference app for the homebrew "Broken Stars" sci-fi campaign.</p>
							<p>Inspired by the following Tabletop RPG rulesets:</p>
							<p>
								<ul class="proper-list">
									<li><a href="https://www.peginc.com/product-category/savage-worlds/"><em>Savage Worlds</em></a> by Pinnacle</li>
									<li><a href="https://www.peginc.com/store/science-fiction-companion-le-bundle/"><em>Savage Worlds - Science Fiction Companion</em></a> by Pinnacle</li>
									<li><a href="http://www.drivethrurpg.com/product/86467/Stars-Without-Number-Free-Edition"><em>Stars Without Number</em></a> by Kevin Crawford</li>
									<li><a href="http://www.drivethrurpg.com/product/114950/Suns-of-Gold-Merchant-Campaigns-for-Stars-Without-Number"><em>Stars Without Number - Suns of Gold</em></a> by Kevin Crawford</li>
									<li><a href="https://chaosmeister.wordpress.com/savage-worlds-character-sheet-savage-space-downloads/"><em>Savage Space</em></a> by Marcus Burggraf</li>
									<li><a href="http://www.sjgames.com/gurps/traveller/books.html"><em>GURPS Traveller</em> and various additional source books</a> by Steve Jackson Games</li>
								</ul>
							</p>
							<p>We wholeheartedly endorse these products and recommend that you purchase the core materials from the respective publishers!</p>
						</v-card-text>
					</v-card>
				</v-expansion-panel-content>
				<v-expansion-panel-content>
					<div slot="header"><strong>Technologies</strong></div>
					<v-card>
						<v-card-text>
							<p>This app was built using the following technologies:</p>
							<ul class="proper-list">
								<li><a href="https://cordova.apache.org/"><em>Cordova</em></a> by Apache</li>
								<li><a href="https://vuetifyjs.com/"><em>Vuetify</em></a> by Vuetify LLC</li>
								<li><a href="http://svgjs.com/"><em>SVG.js</em></a> by Wout Fierens</li>
								<li><a href="https://vuejs.org/"><em>Vue.js</em></a> by Evan You</li>
							</ul>
						</v-card-text>
					</v-card>
				</v-expansion-panel-content>
				<v-expansion-panel-content>
					<div slot="header"><strong>License</strong></div>
					<v-card>
						<v-card-text>
							<p>This app is licensed under the Apache License Version 2.0. To learn more, please visit <a href="https://www.apache.org/licenses/LICENSE-2.0">the Apache License page</a>.</p>
							<p>The short version is that you can download and modify the source, and redistribute your modifications. You must retain the original copyright and state any changes within the NOTICE file. A better summary can be found <a hef="https://tldrlegal.com/license/apache-license-2.0-(apache-2.0)">here</a>.</p>
						</v-card-text>
					</v-card>
				</v-expansion-panel-content>
				<v-expansion-panel-content>
					<div slot="header"><strong>Database</strong></div>
					<v-card>
						<v-card-text>
							<p>Use the following to control your local data. You are currently running on the "<strong>{{ platform }}</strong>" platform.</p>
							<v-subheader>Powers</v-subheader>
							<v-alert color="success" icon="check_circle" v-model="alerts.powers.clear" dismissible>
								All powers are cleared.
							</v-alert>
							<v-alert color="success" icon="check_circle" v-model="alerts.powers.reset" dismissible>
								All powers are reset to the factory default.
							</v-alert>
							<v-alert color="success" icon="check_circle" v-model="alerts.powers.export" dismissible>
								All powers are exported.
							</v-alert>
							<v-alert color="error" icon="indeterminate_check_box" v-model="alerts.powers.unsupported" dismissible>
								Unfortunately this feature is not supported for your platform.
							</v-alert>
							<v-btn small outline color="primary" @click="clear('power')"><v-icon>clear</v-icon> Clear</v-btn>
							<v-btn small outline color="primary" @click="reset('power')"><v-icon>replay</v-icon> Reset</v-btn>
							<v-btn small outline color="primary" @click="outFile('power')"><v-icon>file_download</v-icon> Export</v-btn>
						</v-card-text>
					</v-card>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		data() {
      		return {
				platform: "",
				alerts: {
					powers: {
						clear: false,
						reset: false,
						export: false,
						unsupported: false
					}
				}
			}
		},
		methods: {
			/**
			 * Resets to factory defaults
			 */
			reset(store) {
				let s = this.$bsFactory.getStore(store)
				let table = this.$bsFactory.getTable(store)
				let t = s.clear()
				let self = this
				t.onsuccess = function() {
					table.populate(s)
					self.alerts.powers.reset = true
				}
			},
			clear(store) {
				let s = this.$bsFactory.getStore(store)
				let t = s.clear()
				let self = this
				t.onsuccess = function() {
					self.alerts.powers.clear = true
				}
			},
			outFile(store) {
				let result = this.$bsFactory.getStore(store).getAll()
				let self = this
				switch(this.platform) {
					case 'browser':
						let element = document.createElement('a')
						result.onsuccess = function(e) {
							element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(result.result, null, 2)))
							element.setAttribute('download', store + '.json')
							element.style.display = 'none'
							document.body.appendChild(element)
							element.click()
							document.body.removeChild(element)
							self.alerts.powers.export = true
						}
						break
					default:
						this.alerts.powers.unsupported = true
				}
				
			}
		},
		mounted() {
			let self = this
			document.addEventListener("deviceready", function() {
				self.platform = device.platform
			}, false);
		}
	}
</script>