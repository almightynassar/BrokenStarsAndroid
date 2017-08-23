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
							<f7-list-item link="/shipForm/" title="New Ship" link-view="#main-view" link-close-panel></f7-list-item>
							<f7-list-item link="/shipAnalyse/" title="Hull List" link-view="#main-view" link-close-panel></f7-list-item>
							<f7-list-item link="/fittingsList/" title="Fittings" link-view="#main-view" link-close-panel></f7-list-item>
							<f7-list-item link="/weaponsList/" title="Weapons" link-view="#main-view" link-close-panel></f7-list-item>
						</f7-list>
						<f7-block-title>Misc.</f7-block-title>
						<f7-list>
							<f7-list-item link="/nameGenerator/" title="Name Generator" link-view="#main-view" link-close-panel></f7-list-item>
						</f7-list>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-panel>
		
		<!-- Right Panel -->
		<f7-panel right cover layout="dark">
			<f7-view id="options-menu-view" navbar-through :dynamic-navbar="true">
				<f7-navbar title="Options" sliding></f7-navbar>
				<f7-pages>
					<f7-page>
						<f7-list>
							<f7-list-item link="/about/" title="About" link-view="#main-view" link-close-panel></f7-list-item>
						</f7-list>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-panel>
		
		<!-- Main Views -->
		<f7-views>
			<f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
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
						<f7-block-title>Welcome to <em>Broken Stars</em>!</f7-block-title>
						<f7-block inner>
							<p><em>Broken Stars</em> is a homebrew sci-fi campaign setting that is based upon the <em>Savage Worlds</em> and <em>Stars Without Number</em> rulebooks.</p>
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
