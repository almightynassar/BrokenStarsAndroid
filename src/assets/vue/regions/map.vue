<template>
  <f7-page>
    <div class="grid" v-bind:style="{'height': viewHeight + 'px', 'width': viewWidth + 'px','display': 'block', 'margin': 'auto' }"></div>
    <f7-buttons>
      <f7-button v-on:click="updatePage(-1,-1)"><f7-icon style="transform: rotate(-45deg);" material="arrow_upward"></f7-icon></f7-button>
      <f7-button v-on:click="updatePage(0,-1)"><f7-icon material="arrow_upward"></f7-icon></f7-button>
      <f7-button v-on:click="updatePage(1,-1)"><f7-icon style="transform: rotate(45deg);" material="arrow_upward"></f7-icon></f7-button>
    </f7-buttons>
    <f7-buttons>
      <f7-button v-on:click="updatePage(-1,0)"><f7-icon material="arrow_back"></f7-icon></f7-button>
      <f7-button v-on:click="resetPage()"><f7-icon material="center_focus_strong"></f7-icon></f7-button>
      <f7-button v-on:click="updatePage(1,0)"><f7-icon material="arrow_forward"></f7-icon></f7-button>
    </f7-buttons>
    <f7-buttons>
      <f7-button v-on:click="updatePage(-1,1)"><f7-icon style="transform: rotate(45deg);" material="arrow_downward"></f7-icon></f7-button>
      <f7-button v-on:click="updatePage(0,1)"><f7-icon material="arrow_downward"></f7-icon></f7-button>
      <f7-button v-on:click="updatePage(1,1)"><f7-icon style="transform: rotate(-45deg);" material="arrow_downward"></f7-icon></f7-button>
    </f7-buttons>
  </f7-page>
</template>
<script>
  import SVG from 'svg.js'
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
      }
		},
		methods: {
      updatePage(x, y) {
        this.page.x += x
        this.page.y += y
      },
      resetPage() {
        this.page.x = 0
        this.page.y = 0
      },
			formatNumber(value) {
				return this.formatter.format(parseInt(value));
      },
      findRegion(x, y) {
        let matching = this.regions.sectors.filter(function(s) {
          return (s.x == this.x) && (s.y == this.y)
        }, {'x': x, 'y': y})
        if (matching.length == 1) {
          return matching[0]
        }
        return null
      },
      makeHexGrid() {
        let self = this
        // Generate the rectangular Hex Grid with flat tops
        this.gridArray = this.grid.rectangle({
          width: this.options.width,
          height: this.options.height,
          direction: this.options.direction,
          start: this.startingHex()
        })
        // Reset our SVG image
        this.draw.clear()
        this.draw.size(this.viewWidth, this.viewHeight).style("display: block; margin: auto;")
        this.draw.plain('TRAILING').move(this.viewWidth / 2, (this.page.margin.y / 2) - (this.font.size * 2)).font(this.font).font({weight: 'bold'})
        this.draw.plain('SPINWARD').move(this.viewWidth / 2, this.viewHeight - (this.font.size * 2)).font(this.font).font({weight: 'bold'})
        this.draw.plain('COREWARD').move((this.page.margin.x / 2 - this.font.size), this.viewHeight / 2).font(this.font).font({weight: 'bold'}).rotate(90)
        this.draw.plain('RIMWARD').move(this.viewWidth - this.font.size, this.viewHeight / 2).font(this.font).font({weight: 'bold'}).rotate(90)
        // Draw our hexes
        for (var index = 0; index < this.gridArray.length; index++) {
          // Grab the current Hex
          let hexItem = this.gridArray[index]
          // x/y coordinates of top left corner
          let position = hexItem.toPoint().add(hexItem.topLeft()).add(this.midPoint())
          // Polygon points for SVG library
          let points = hexItem.corners().map(corner => corner.x + ',' + corner.y).join(' ')
          // Hex colour
          let colour = '#555'
          // Find the region that is located at this position
          let region = this.findRegion(hexItem.x, hexItem.y)
          // Create our Group of elements to represent the region
          let group = this.draw.group().addClass('group-'+index)
          // Draw standard information
          let hexText = group.plain(hexItem.x + ", " + hexItem.y).move(this.hexWidth / 2, (this.hexHeight / 2) + this.hexInnerRadius - (this.font.size * 2)).font(this.font)
          // Draw region information
          if (region) {
            let nameText = group.plain(region.name).move(this.hexWidth / 2, (this.hexHeight / 2) + (this.font.size) ).font(this.font)
            switch (region.control) {
              case 'us':
                colour = "#23238E"
                break;
              case 'ssr':
                colour = "#CC1100"
                break;
              case 'gq':
                colour = "#5E2605"
                break;
              case 'ind':
               colour = "#AADD00"
               break;
            }
            // Default star colour is black (to show that there has been an error)
            let starColour = "#000"
            switch (region.star.spectrum) {
              case 'O':
                starColour = "#4F94CD" // Blue
                break;
              case 'B':
                starColour = "#B0E2FF" // Blue-White
                break;
              case 'A':
                starColour = "#FFF" // White
                break;
              case 'F':
                starColour = "#FFFF7E" // Yellow-White
                break;
              case 'G':
                starColour = "#EEEE00" // Yellow
                break;
              case 'K':
                starColour = "#FF9912" // Light Orange
                break;
              case 'M':
                starColour = "#FF4500" // Orange Red
                break;
            }
            // Show the star
            let star = group.circle(this.font.size).fill({color: starColour}).stroke({ color: '#000', opacity: 0.5, width: 2 }).move( (this.hexWidth / 2) - (this.font.size / 2), (this.hexHeight / 2) - (this.font.size / 2))
            // Add event handlers to the group
            group.on('click', function() {
              let sector_index = self.regions.sectors.indexOf(region)
              self.$router.loadPage('/regions/sector/view/'+sector_index)
            })
          }
          // Draw the Hex and send it to the back
          let polygon = group.polygon(points).fill({ color: colour, opacity: 0.5 }).stroke({ color: '#000', opacity: 0.5, width: 2 }).back()
          // Move the group to it's relative position
          group.move(position.x, position.y)
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
      }
    },
    watch: {
      page: {
        handler(value) {
          this.makeHexGrid()
        },
        deep: true
      }
    },
		created() {
      // Initialise the grid interface
      this.grid = Grid({
				size: this.hex.size,
				orientation: HEX_ORIENTATIONS.FLAT
      })
    },
    mounted() {
      // Start up our SVG library
      this.draw = SVG(document.getElementsByClassName("grid")[0])
      // Set the page defaults for the map
      if (this.$route.query.x) {
        this.page.x = Math.ceil((this.$route.query.x - this.hex.x) / 2) - 1
      }
      if (this.$route.query.y) {
        this.page.y = Math.floor((this.$route.query.y - this.hex.y - (this.page.x * -1)) /2)
      }
      // Draw the initial grid
      this.makeHexGrid()
    }
	}
</script>