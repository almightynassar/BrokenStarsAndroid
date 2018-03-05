<template>
  <v-app>
	<!-- The Left side menu -->
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
	  class="blue" dark
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/" tag="p">Home</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-subheader>Tools</v-subheader>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>book</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/cards/" tag="p">Cards</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>local_play</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/powers/" tag="p">Powers</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>airplanemode_active</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/ship/" tag="p">Ships</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-subheader>Codex</v-subheader>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>map</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/regions/" tag="p">Sector Data</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>library_books</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/rules/" tag="p">The Rules</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>landscape</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/setting/" tag="p">The Setting</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>flight</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/ship/details/" tag="p">Ship Details</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-subheader>GM's Corner</v-subheader>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>cached</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/generators/" tag="p">Generators</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
	<!-- The top toolbar content -->
    <v-toolbar fixed app class="blue" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
	<!-- The actual content -->
    <v-content>
      <router-view/>
    </v-content>
	<!-- The Footer -->
    <v-footer :fixed="false" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      title: 'Broken Stars'
    }
  },
  name: 'App'
}
</script>
