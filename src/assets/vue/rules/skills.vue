<template>
  <v-card raised>
    <v-card-text>
      <p>We are using modified Savage Worlds skills, so you should check out the rulebooks if you need anything clarified. The following table is provided as a reference only.</p>
      <v-text-field
            append-icon="search"
            label="Search"
            single-line
            hide-details
            v-model="search"
        ></v-text-field>
        <v-data-table
            :headers="fields"
            :items="skills"
            :search="search"
            hide-actions
            item-key="name"
        >
            <template slot="items" slot-scope="props">
                <tr>
                    <td><h3>{{ props.item.name | capitalize }}</h3></td>
                    <td><h3>{{ props.item.attribute | capitalize }}</h3></td>
                </tr>
                <tr>
                    <td colspan="2">{{ props.item.description }}</td>
                </tr>
            </template>
        </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
	export default {
    data() {
      return {
        search: "",
        fields: [
          {
            text: 'Name',
            sortable: true,
            value: 'name'
          },
          {
            text: 'Attribute',
            sortable: true,
            value: 'attribute'
          },
        ],
        skills: [
          {
            name: "Athletics",
            attribute: "Strength",
            description: "Perform feats of athleticism such as climbing, jumping, swimming and endurance running."
          },
          {
            name: "Education",
            attribute: "Smarts",
            description: "You are well-studied and read. Since Common Knowledge are covered by a basic Smarts Check, \
            Education covers all other topics that may not be known to the average person. This is includes advanced \
            knowledge in maths, geography, sciences, and other stuff you would learn in school, college and university."
          },
          {
            name: "Fighting",
            attribute: "Agility",
            description: "Covers all melee attacks. The Target Number to hit an opponent is their Parry (2 plus half \
            their Fighting die type). On a hit, you deal damage. Damage is your Strength plus the weapons damage die."
          },
          {
            name: "Insight",
            attribute: "Smarts",
            description: "You know how to read people. You can scrutinize other characters to see if they are lying, \
            frightened, and so on. This skill is modified by your Charisma. To get information from people, use \
            Streetwise. To get information about a scene, use Notice. To gain information through written sources, use \
            Research."
          },
          {
            name: "Intimidation",
            attribute: "Spirit",
            description: "You are proficient in the art of frightening opponents through sheer force of will. See the Player \
            Rules for examples of how to use during play."
          },
          {
            name: "Medicine",
            attribute: "Smarts",
            description: "The art of stopping wounds and treating injuries. Does not include more advanced techniques such as surgery, etc."
          },
          {
            name: "Notice",
            attribute: "Smarts",
            description: "Your general alertness and ability to search for items and clues. This covers the use of your senses such as \
            hearing, smell, and vision. To get information from people, use Streetwise. To get information about a scene, use Notice. \
            To gain information through written sources, use Research."
          },
          {
            name: "Persuasion",
            attribute: "Spirit",
            description: "The ability to convince others to do what you want, or to make them believe what you say is true. This skill is \
            modified by your Charisma. See the Player Rules for examples of how to use during play."
          },
          {
            name: "Programming",
            attribute: "Smarts",
            description: "You understand the inner workings of computers. You can create or modify programs and other digital systems."
          },
          {
            name: "Piloting",
            attribute: "Agility",
            description: "You can pilot almost any vehicle such as spaceships, hovercars, boats, and other any thing with a stick or a \
            steering wheel."
          },
          {
            name: "Repair",
            attribute: "Smarts",
            description: "Ability to fix gadgets, vehicles, weapons, and other machines. If you do not have the proper tools you take a \
            -2 penalty to your roll. A Raise halves the time required by the task."
          },
          {
            name: "Research",
            attribute: "Smarts",
            description: "You know how to make good use of research resources such as libraries, newspapers, the internet and other written \
            sources. To get information from people, use Streetwise. To get information about a scene, use Notice. To gain information about \
            a person's mental or emotional state, use Insight."
          },
          {
            name: "Security",
            attribute: "Smarts",
            description: "The ability to bypass or disarm mechanical and electronic security systems. Also covers setting up a security system."
          },
          {
            name: "Ship Operations",
            attribute: "Smarts",
            description: "Ability to use various Space Ship systems, including Navigation, Sensors, ECM, and other miscellanous systems. You \
            still need Piloting to fly the spaceship, Shooting to use it's weapons, and Repair to fix the spaceship."
          },
          {
            name: "Shooting",
            attribute: "Agility",
            description: "Ability to hit targets with a ranged or thrown weapon. The base Target Number is 4, which is modified by cover and range, \
            among other things."
          },
          {
            name: "Stealth",
            attribute: "Agility",
            description: "Both the ability to move quietly, as well as palm objets and pick pockets. See the Player Rules for examples \
            of how to use Stealth."
          },
          {
            name: "Streetwise",
            attribute: "Smarts",
            description: "You know how to gain information from people, whether from the scene or through contacts. Methods includes bribing, \
            threats, and carousing. This skill is modified by your Charisma. To get information from written sources, use Research. To get \
            information about a scene, use Notice. To gain information about a person's mental or emotional state, use Insight."
          },
          {
            name: "Survival",
            attribute: "Smarts",
            description: "You can find food, water, shelter in a variety of environments. You can make one roll per day. A Success results in \
            you finding enough sustenance for one adult, a Raise meaning you find enough for 5 adults. Large beasts count as 2 adults. Children \
            and small beasts count as half."
          },
          {
            name: "Taunt",
            attribute: "Smarts",
            description: "You are skilled in the art of ridicule, jokes, and one-upmanship. See the Player Rules for examples of how to use \
            Taunt."
          },
          {
            name: "Tracking",
            attribute: "Smarts",
            description: "Allows you to follow the tracks of one or more individuals in any type of terrain. Each roll generally covers 2 \
            kilometres. +2 bonus when tracking a group and/or through mud or snow. -2 penalty for tracks older than 1 day and/or raining."
          },
        ]
      }
    }
  }
</script>