<template>
	<v-container fluid>
    <v-tabs dark grow>
      <v-toolbar color="blue" dark>
        <v-tabs-bar class="blue">
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tabs-item href="#tab-background"><strong>Welcome!</strong></v-tabs-item>
          <v-tabs-item href="#tab-timeline"><strong>Timeline</strong></v-tabs-item>
        </v-tabs-bar>
      </v-toolbar>
      <v-tabs-items>
      <v-tabs-content id="tab-background" >
        <v-card flat>
          <v-card-text>
            <p>It's the 3200s, and it’s as you would expect it to be. Space flight, artificial intelligence,
          genetic modification, interstellar colonisation and laser guns. Except there isn’t an evil Empire 
          or galactic spanning Federation. Just trillions of people trying to make a living in the big ol’
          Black, anyway they can.</p>
            <p>While all of this is good, it used to be better. Intelligent life (yes, that includes humanity)
          use to explore, expand, and exploit their way across the Black (with an occasional extermination
          or two thrown in). We (sorta) controlled every inch of the galaxy, we (kinda) solved every technological
          challenge, and we (almost) wanted for nothing.</p>
            <p>That is until <b>The Surge</b> blew us all back into the stone ages.</p>
            <p>But we have recovered from the devastating effects of the Surge. We have discovered a slower but
          safer form of Faster Than Light (FTL) space flight, as well as all sorts of the other important
          technologies. The Black is once again ours to explore, budding with endless opportunity, enticing
          us to escape our planet-bound existence. It’s the only place where a person can truly be free in
          an age where everyone is constantly connected.</p>
            <p>We once again turns our hungry eyes towards the edges of the Black. Warlords and petty tyrants scheme to
          expand their stellar domain. Reclaimers plunder the ruins of worlds that did not survive. And psionics continue
          to practice their skills, under the distrustful eyes of those who see the use of trans-dimensional energy as an
          imminent threat to their way of life.</p>  
            <p><strong>Good luck and happy travels!</strong> And as the old saying goes, ”<em>once you go Black, you never go back</em>”.</p>
            <p><em>P.S: Remember: It’s dangerous to go alone! Take friends.</em></p>
          </v-card-text>
        </v-card>
      </v-tabs-content>
      <v-tabs-content id="tab-timeline" >
        <v-card flat>
          <v-card-text>
            <timeline :timeline="timeline"></timeline>
          </v-card-text>
        </v-card>
      </v-tabs-content>
    </v-tabs-items>
    </v-tabs>
	</v-container>
</template>
<script>
	export default {
    data() {
      return {
        timeline: [
          {
            date: "1970-ish",
            title: "In The Beginning",
            text: "Humanity, despite the set-backs, took their first steps into the Black. \
            We somehow managed to escape ancient Earth using only simple propulsion thrusters' \
            (engines that spewed matter out from one end to create movement in the other direction)."
          },
          {
            date: "2040-ish",
            title: "Reaching out",
            text: "While government interest in outer space waxed and waned, intrepid and daring \
            explorers blasted themselves further and further out in our local star system. Through \
            their individual efforts (at considerable personal expense) we finally managed to send \
            a human being to visit every single planet."
          },
          {
            date: "2150-ish",
            title: "Touching down",
            text: "After nearly two centuries after humanity began their space journey, Earth bid \
            farewell to it's first Mars colonisation mission. Mars had undergone decades of primitive \
            terraforming, and the first colonists were tech-heads eager to try out their theories to \
            improve the process. Their tireless efforts kickstarted a wave of terraforming projects \
            across the solar system. Other major advances during this time included real AI, \
            biological-electronic interfaces, and energy weapons."
          },
          {
            date: "2200-ish",
            title: "Trans-Dimensional Drive (TDD)",
            text: "The invention of the Trans-Dimensional Drive (or TDD) was a game-changer for humanity. \
            By using really complex science-y theory stuff, we could manipulate matter and energy across all \
            the dimensions of Space-Time. Or put more simply, we could send an object across huge distances in \
            only a short time. The TDD became humanities main form of FTL travel, and allowed us simple apes to \
            escape our local star system and really explore the big ol’ Black."
          },
          {
            date: "2222-ish",
            title: "First Contact",
            text: "It wasn't long until we found other forms of intelligent life. The first alien species that we \
            met were called the Kaj, a species who had also discovered the TDD. Sentient life was apparently common \
            enough in the galaxy, and we soon made contact with dozens of our alien neighbours."
          },
          {
            date: "2300-ish",
            title: "The Ghoan War",
            text: "Humanity made a lot of new interstellar friends with whom we traded and travelled with (we may have \
            nuked a couple of other species... but trust me, they were probably nasty). One of the earliest wars involved \
            the Ghoa, a planetless nomadic species that roamed the Black looking for easy plunder. Trade routes were plundered \
            and human colony worlds were invaded. The Ghoan horde wrecked incredible destruction before we were able to destroy \
            their capital ships and rout their fleets. We could never completely destroy the Ghoan tribes though, and they continued \
            to be a nuisance to the interstellar community."
          },
          {
            date: "2400-ish",
            title: "The Galactic Federation of Planets",
            text: "Some of the friendlier aliens, namely the bird-like Ay-Matak and the bug-like Ghantak, decided that the \
            number of aggressive species was too damn high and wanted to band together with other like-minded species. After much \
            haggling and haranguing they created the Galactic Federation of Planets (or GFP). It took another decade until humanity gained \
            acceptance to enter the brutal arena of galactic politics"
          },
          {
            date: "2500-ish",
            title: "Psionics",
            text: "There was always noticable side-effects when using TDD technology, even during the early years. Headaches, shared \
            sensations, nosebleeds, and other supernatural experiences were reported by those who are exposed to TDD technology on a \
            regular basis. Many were eventually driven mad, but most were able to lead relatively normal lives as Spacers and raised \
            Spacer families who were also exposed to TDD tech. Eventually some people developed the ability to manipulate Space-Time \
            itself. These individuals became known as psionics, paranorms, or jsingshen. The GFP created dedicated research centres to \
            study and train psionics so that they could be a carefully controlled asset."
          },
          {
            date: "2600-2800",
            title: "Galactic Golden Age",
            text: "It truely was a golden age for the galaxy during these centuries. The entire galaxy was practically united under \
            common cause. New star sectors were colonized every decade, linked together using gigantic TDD jump portals. We create \
            technological marvels, cracked cosmic puzzles, tamed toxic landscapes and even expanded the limits of our consciousness. \
            The Black slowly fell to our united insatiable curiosity."
          },
          {
            date: "2900-ish",
            title: "The Surge",
            text: "Everyone has heard of 'The Surge', but we actually know very little about the event. Most \
            tech-heads think it was a large shockwave of trans-dimensional energy that exploded from deep within the \
            galactic center around about the 2900’s, which simply overloaded all of our TDD tech. In a matter of seconds \
            we lost ourr Jump Portals, TDD engines and even psionics (accounts state that their heads literally exploded) \
            to 'The Surge'."
          },
          {
            date: "2950-ish",
            title: "The Aftermath",
            text: "The aftermath was terrible, even worse for any surviving psionics. Many worlds began to starve as they \
            were deprived of the regular food shipments the recieved from TDD trade. Other worlds simply slid into barbarism \
            as they fought over the now scarce resources. All across the Black, countless worlds struggled due to their sudden \
            isolation. The remaining psionics had to learn how to safely harness their powers without the guidance of experienced \
            mentors or prestigious institutions, while enduring the fear and loathing of the non-psionic survivors."
          },
          {
            date: "3000-ish",
            title: "Rebuilding",
            text: "The one saving grace was that primitive non-TDD tech was spared from the ravages of The Surge. 'Preppers', \
            derided for millenia, finally had a use for their stockpiles of out-dated tech and underground bunkers full of \
            canned goods. The TDD void was slowly filled by adapting older technologies, and many planets explicitly banned \
            TDD technology in fear of another Surge-like event."
          },
          {
            date: "3100-ish",
            title: "Intra-Dimensional Drive (IDD)",
            text: "Romazirash, a Kaj tech-head from the Al Taleqani sector, was studying safer forms of \
            FTL travel when he stumbled across a safer form of TDD. He coined the technology 'Intra-Dimensional Drive' or IDD, \
            and it worked on mostly the same really complex science-y theory stuff except it doesn't negatively affect Space-Time \
            like TDD. A trade-off was that it could not send an object across the whole galaxy in literal seconds, but it could travel \
            to the next star system in a matter of days. This new technology once again opened the Black to trade, exploration and \
            adventure."
          },
          {
            date: "3200-ish",
            title: "Where we are today",
            text: "It's a beautiful mess, really. Warlords try to control regions of space, merchants trying to earn a buck navigating \
            trade deals, tech-heads pushing the boundaries of science, archeaologists searching for answers to the Surge, and everyone \
            else in between."
          }
        ]
      }
    }
  }
</script>