<template>
	<!-- App -->
	<div id="app">
		
		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>
		
		<!-- Left Panel -->
		<f7-panel left reveal layout="dark">
			<f7-view id="main-menu-view" navbar-through :dynamic-navbar="true">
				<f7-navbar title="Main Menu"></f7-navbar>
				<f7-pages>
					<f7-page>
						<f7-block-title>Spacecraft</f7-block-title>
						<f7-list>
							<f7-list-item link="/ship/list/" title="List Ships" link-view="#main-view" link-close-panel></f7-list-item>
							<f7-list-item link="/ship/form/" title="New Ship" link-view="#main-view" link-close-panel></f7-list-item>
							<f7-list-item link="/ship/analyse/" title="Hull List" link-view="#main-view" link-close-panel></f7-list-item>
							<f7-list-item link="/ship/fittings/" title="Fittings" link-view="#main-view" link-close-panel></f7-list-item>
							<f7-list-item link="/ship/weapons/" title="Weapons" link-view="#main-view" link-close-panel></f7-list-item>
						</f7-list>
						<f7-block-title>Sectors</f7-block-title>
						<f7-list>
							<f7-list-item link="/regions/list/" title="Sector List" link-view="#main-view" link-close-panel></f7-list-item>
							<f7-list-item link="/regions/map/" title="Sector Map" link-view="#main-view" link-close-panel></f7-list-item>
						</f7-list>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-panel>
		
		<!-- Right Panel -->
		<f7-panel right cover layout="dark">
			<f7-view id="options-menu-view" navbar-through :dynamic-navbar="true">
				<f7-navbar title="Library" sliding></f7-navbar>
				<f7-pages>
					<f7-page>
						<f7-block-title>Information</f7-block-title>
						<f7-list>
							<f7-list-item link="/setting/" title="The Setting" link-view="#main-view" link-close-panel></f7-list-item>
						</f7-list>
						<f7-block-title>Generators</f7-block-title>
						<f7-list>
							<f7-list-item link="/generator/name/" title="Name Generator" link-view="#main-view" link-close-panel></f7-list-item>
							<f7-list-item link="/generator/quest/" title="Quest Generator" link-view="#main-view" link-close-panel></f7-list-item>
							<f7-list-item link="/generator/region/" title="Region Generator" link-view="#main-view" link-close-panel></f7-list-item>
						</f7-list>
						<f7-block-title>Credits</f7-block-title>
						<f7-list>
							<f7-list-item link="/about/" title="About" link-view="#main-view" link-close-panel></f7-list-item>
						</f7-list>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-panel>
		
		<!-- Main Views -->
		<f7-views>
			<f7-view id="main-view" navbar-through :dynamic-navbar="true" :reloadPages="true" main>
				<!-- Navbar -->
				<f7-navbar>
					<f7-nav-left>
						<f7-link icon="icon-bars" open-panel="left"></f7-link>
					</f7-nav-left>
					<f7-nav-center sliding>Broken Stars</f7-nav-center>
					<f7-nav-right>
						<f7-link icon="icon-bars" open-panel="right"></f7-link>
					</f7-nav-right>
				</f7-navbar>
				<!-- Pages -->
				<f7-pages>
					<f7-page>
						<f7-block>
							<f7-block-title>Welcome to <em>Broken Stars</em>!</f7-block-title>
							<f7-block inset>
								<p><em>Broken Stars</em> is a homebrew sci-fi campaign setting that is inspired by various tabletop rulebooks (<em>see our <f7-link href="/about/">About</f7-link> for more information</em>).</p>
								<p>Use the left hand menu to access various features such as Ship creation, Sector map, and Name generation. Use the right hand menu to access various information and details about the setting.</p>
							</f7-block>
						</f7-block>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-views>
	</div>
</template>

<script>
	export default {}
</script>
