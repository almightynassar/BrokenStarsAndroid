<template>
  <v-card flat>
    <v-card-text>
      <div class="grid" :style="{'height': viewHeight + 'px', 'width': viewWidth + 'px','display': 'block', 'margin': 'auto' }"></div>
      <!-- Directional buttons -->
      <p>Page X {{page.x}} - Page Y {{page.y}}</p>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs4>
            <v-btn @click="updatePage(-1,-1)"><v-icon style="transform: rotate(-45deg);">arrow_upward</v-icon></v-btn>
          </v-flex>
          <v-flex xs4>
            <v-btn @click="updatePage(0,-1)"><v-icon>arrow_upward</v-icon></v-btn>
          </v-flex>
          <v-flex xs4>
            <v-btn @click="updatePage(1,-1)"><v-icon style="transform: rotate(45deg);">arrow_upward</v-icon></v-btn>
          </v-flex>
          <v-flex xs4>
            <v-btn @click="updatePage(-1,0)"><v-icon>arrow_back</v-icon></v-btn>
          </v-flex>
          <v-flex xs4>
            <v-btn @click="resetPage()"><v-icon>center_focus_strong</v-icon></v-btn>
          </v-flex>
          <v-flex xs4>
            <v-btn @click="updatePage(1,0)"><v-icon>arrow_forward</v-icon></v-btn>
          </v-flex>
          <v-flex xs4>
            <v-btn @click="updatePage(-1,1)"><v-icon style="transform: rotate(45deg);">arrow_downward</v-icon></v-btn>
          </v-flex>
          <v-flex xs4>
            <v-btn @click="updatePage(0,1)"><v-icon>arrow_downward</v-icon></v-btn>
          </v-flex>
          <v-flex xs4>
            <v-btn @click="updatePage(1,1)"><v-icon style="transform: rotate(-45deg);">arrow_downward</v-icon></v-btn>
          </v-flex>
        </v-layout>
      </v-container>
      <!-- Information for the map overlay -->
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs3
            v-show="overlay == 'control'" 
            :style="'background-color: '+this.colourControl('us')+';'"
          >
            <span>United Systems</span>
          </v-flex>
          <v-flex xs3
            v-show="overlay == 'control'"
            :style="'background-color: '+this.colourControl('ssr')+';'"
          >
            <span>Sakeena Stellar Republic</span>
          </v-flex>
          <v-flex xs3
            v-show="overlay == 'control'"
            :style="'background-color: '+this.colourControl('na')+';'"
          >
            <span>Independent Control</span>
          </v-flex>
          <v-flex xs3
            v-show="overlay == 'control'"
            :style="'background-color: '+this.colourControl('gq')+';'"
          >
            <span>Ghan Queendom</span>
          </v-flex>
          <v-flex xs3
            v-show="overlay == 'zone'"
            style="background-color: rgba(63, 255, 36, 0.5);"
          >
            <span>Safe</span>
          </v-flex>
          <v-flex xs3
            v-show="overlay == 'zone'"
            style="background-color: rgba(35, 35, 142, 0.5);"
          >
            <span>Low Risk</span>
          </v-flex>
          <v-flex xs3 
            v-show="overlay == 'zone'"
            style="background-color: rgba(170, 221, 0, 0.5);"
          >
            <span>Medium Risk</span>
          </v-flex>
          <v-flex xs3
            v-show="overlay == 'zone'"
            style="background-color: rgba(204, 17, 0, 0.5);"
          >
            <span>Dangerous</span>
          </v-flex>
          <v-flex xs3
            v-show="overlay == 'trade'"
            style="background-color: rgba(63, 255, 36, 0.5);"
          >
            <span>Very High Trade</span>
          </v-flex>
          <v-flex xs3
            v-show="overlay == 'trade'"
            style="background-color: rgba(35, 35, 142, 0.5);"
          >
            <span>High Trade</span>
          </v-flex>
          <v-flex xs3
            v-show="overlay == 'trade'"
            style="background-color: rgba(170, 221, 0, 0.5);"
          >
            <span>Moderate Trade</span>
          </v-flex>
          <v-flex xs3
            v-show="overlay == 'trade'"
            style="background-color: rgba(204, 17, 0, 0.5);"
          >
            <span>Low Trade</span>
          </v-flex>
        </v-layout>
      </v-container>
      <!-- Controls for the map overlay -->
      <v-radio-group v-model="overlay" :mandatory="false">
        <v-radio label="Control" value="control"></v-radio>
        <v-radio label="Zone" value="zone"></v-radio>
        <v-radio label="Trade" value="trade"></v-radio>
      </v-radio-group>
    </v-card-text>
  </v-card>
</template>
<script>
  import { Grid, Point, HEX_ORIENTATIONS } from 'honeycomb-grid'
	export default {
		data() {
			return {
        // The Grid settings
        grid: null,
        gridArray: [],
        options: {
          width: 5,
          height: 5,
          direction: 1,
        },
        // Hexagon settings
        hex: {
          size: 60,
          // Top Left corner hex relative to origin
          x: -2,
          y: -1
        },
        // Page settings (margin is for gutter AND text placement)
			  page: {
          x: 0,
          y: 0,
          margin: {
            x: 50,
            y: 50
          }
        },
        // Font Settings
        font: {
          family: 'Arial',
          size: 12,
          anchor: 'middle'
        },
        // The SVG interface
        draw: null,
        // The region interface
        regions: this.$bsFactory.getTemplate('regions'),
        overlay: "control"
			}
		},
		computed: {
			// Calculate hexagon geometry
			hexWidth() {
        return 2 * this.hex.size
      },
      hexHeight() {
        return Math.sqrt(3) * this.hex.size
      },
			hexInnerRadius() {
        return Math.sqrt(3) / 2 * this.hex.size
      },
      // A workaround to get the number of full-width columns
			hexNumOfFullColumns() {
        return Math.ceil(this.options.width / 2)
      },
      // Viewport measurements
      viewWidth() {
       return (this.hexWidth * this.hexNumOfFullColumns) + (this.hex.size * (this.options.width - this.hexNumOfFullColumns)) + this.page.margin.x
      },
			partialViewHeight() {
        return (this.hexHeight * this.options.height) + this.page.margin.y
      },
			viewHeight() {
        return this.partialViewHeight + this.hexInnerRadius
      },
      // Nation Information
      nations() {
        return this.regions.nations.powers
      }
		},
		methods: {
      /**
       * Calculates the appropriate control colour for the hex
       */
      colourControl(control) {
        switch (control) {
          case 'us':
            return "#23238E"
            break;
          case 'ssr':
            return "#CC1100"
            break;
          case 'gq':
            return "#5E2605"
            break;
          case 'ind':
            return "#AADD00"
            break;
          default:
            return '#555'
            break;
        }
      },
      /**
       * Calculates the appropriate zone colour for the hex
       */
      colourZone(zone) {
        switch (zone) {
          case 'green':
            return "#3FFF24"
            break;
          case 'amber':
            return "#AADD00"
            break;
          case 'blue':
            return "#23238E"
            break;
          case 'red':
            return "#CC1100"
            break;
          default:
            return '#555'
            break;
        }
      },
      /**
       * Calculates the appropriate trade colour for the hex
       */
      colourTrade(trade) {
        if (trade >= 125) {
          return "#3FFF24"
        } else if (trade >= 100) {
          return "#23238E"
        } else if (trade >= 50) {
          return "#AADD00"
        } else if (trade > 0) {
          return "#CC1100"
        }
        return '#555'
      },
      /**
       * Generates a list of trade lines to display
       */
      calcRouteTrade(hex, sector, start, regions) {
        let lineArray = []
        for (var index = start; index < regions.length; index++) {
          let region = regions[index]
          if (region) {
            let distance = this.grid.Hex.distance(hex, this.grid.Hex(region.x, region.y))
            let homeTrade = parseInt(this.regions.getSectorTrade(region))
            let awayTrade = parseInt(this.regions.getSectorTrade(sector))
            let bilateralTrade = homeTrade + awayTrade
            let realTrade = bilateralTrade / (distance * 2)
            if (realTrade > 50 && isFinite(realTrade)) {
              if (homeTrade > 0 && awayTrade > 0) {
                lineArray.push({target: region, trade: realTrade})
              }
            }
          }
        }
        return lineArray
      },
      updatePage(x, y) {
        this.page.x += x
        this.page.y += y
      },
      resetPage() {
        this.page.x = 0
        this.page.y = 0
      },
      findRegion(x, y) {
        return this.regions.findSector(x, y)
      },
      makeHexGrid() {
        let self = this
        // Generate the rectangular Hex Grid with flat tops
        let gridArray = this.grid.rectangle({
          width: this.options.width,
          height: this.options.height,
          direction: this.options.direction,
          start: this.startingHex()
        })
        // Get the list of valid regions
        let regionArray = []
        for (var index = 0; index < gridArray.length; index++) {
          regionArray[index] = this.findRegion(gridArray[index].x, gridArray[index].y)
        }
        // Reset our SVG image
        this.draw.clear()
        this.draw.size(this.viewWidth, this.viewHeight).style("display: block; margin: auto;")
        this.draw.plain('TRAILING').move(this.viewWidth / 2, (this.page.margin.y / 2) - (this.font.size * 2)).font(this.font).font({weight: 'bold'})
        this.draw.plain('SPINWARD').move(this.viewWidth / 2, this.viewHeight - (this.font.size * 2)).font(this.font).font({weight: 'bold'})
        this.draw.plain('COREWARD').move((this.page.margin.x / 2 - this.font.size), this.viewHeight / 2).font(this.font).font({weight: 'bold'}).rotate(90)
        this.draw.plain('RIMWARD').move(this.viewWidth - this.font.size, this.viewHeight / 2).font(this.font).font({weight: 'bold'}).rotate(90)
        // Draw our hexes
        for (var index = 0; index < gridArray.length; index++) {
          // Grab the current Hex
          let hexItem = gridArray[index]
          // x/y coordinates of top left corner
          let position = hexItem.toPoint().add(hexItem.topLeft()).add(this.midPoint())
          // Polygon points for SVG library
          let points = hexItem.corners().map(corner => corner.x + ',' + corner.y).join(' ')
          // Hex colour
          let colour = '#555'
          // Find the region that is located at this position
          let region = regionArray[index]
          // Create our Group of elements to represent the region
          let group = this.draw.group().addClass('group-'+index)
          // Draw standard information
          let hexText = group.plain(hexItem.x + ", " + hexItem.y).move(this.hexWidth / 2, (this.hexHeight / 2) + this.hexInnerRadius - (this.font.size * 2)).font(this.font)
          // Draw region information
          if (region) {
            let nameText = group.plain(region.name).move(this.hexWidth / 2, (this.hexHeight / 2) + (this.font.size) ).font(this.font)
            if (this.overlay == "zone") {
              colour = this.colourZone(region.zone)
            } else if (this.overlay == "trade") {
              colour = this.colourTrade( this.regions.getSectorTrade(region) )
            } else {
              colour = this.colourControl(region.control)
            }
            // Show the star
            let star = group.image('/static/40px-Star-Overlay.png')
              .move( (this.hexWidth / 2) - 20, (this.hexHeight / 2) - 20)
              .filter(function(add) {
                add.colorMatrix('matrix', self.regions.stars.class[region.star.spectrum].matrix)
              })
            // Add event handlers to the group
            group.on('click', function() {
              let localRegion = region
              self.$router.push('/regions/sector/view/'+region.x+'/'+region.y)
            })
            // Some trade stuff
            if (this.overlay == "trade") {
              let lineArray = this.calcRouteTrade(hexItem, region, index + 1, regionArray)
              for (var i = 0; i < lineArray.length; i++) {
                let extraHex = this.grid.Hex(lineArray[i].target.x, lineArray[i].target.y)
                let extraPosition = extraHex.toPoint().add(extraHex.topLeft()).add(this.midPoint())
                let hexHalfWidth = this.hexWidth / 2
                let hexHalfHeight = this.hexHeight /2
                let localLine = this.draw.line(position.x + hexHalfWidth, position.y + hexHalfHeight, extraPosition.x + hexHalfWidth, extraPosition.y + hexHalfHeight)
                  .stroke({
                    color: (lineArray[i].trade > 100) ? ( (lineArray[i].trade > 125) ? "green" : "blue") : ( (lineArray[i].trade > 75) ? "yellow" : "red"),
                    width: Math.round(lineArray[i].trade / 10),
                    linecap: 'round',
                    opacity: 1
                  })
                  .front()
              }
            }
          }
          // Draw the Hex and send it to the back
          let polygon = group.polygon(points).fill({ color: colour, opacity: 0.5 }).stroke({ color: '#000', opacity: 0.5, width: 2 }).back()
          // Move the group to it's relative position
          group.move(position.x, position.y).back()
        }
      },
      startingHex() {
        return Grid().Hex( this.hex.x + (this.page.x * 2), this.hex.y + (this.page.x * -1) + (this.page.y * 2))
      },
      midPoint() {
        return Point({
          x: (this.viewWidth/2) - ((this.hexWidth + this.hex.size) * this.page.x),
          y: (this.partialViewHeight/2) - (this.hexHeight * 2 * this.page.y)
        })
      },
      changeOverlay(value) {
        this.overlay = value
      }
    },
    watch: {
      page: {
        handler(value) {
          this.makeHexGrid()
        },
        deep: true
      },
      overlay: {
        handler(value) {
          this.makeHexGrid()
        },
        deep: true
      }
    },
    mounted() {
      // Initialise the grid interface
      this.grid = Grid({
				size: this.hex.size,
				orientation: HEX_ORIENTATIONS.FLAT
      })
      // Start up our SVG library
      this.draw = SVG(document.getElementsByClassName("grid")[0])
      // Set the page defaults for the map
      if (this.$route.query.x) {
        this.page.x = Math.round(this.$route.query.x / 2)
      }
      if (this.$route.query.y) {
        this.page.y = Math.ceil(0.5 * ((this.$route.query.y - 1) + this.page.x + 1))
      }
      // Draw the initial grid
      this.makeHexGrid()
    }
	}
</script>