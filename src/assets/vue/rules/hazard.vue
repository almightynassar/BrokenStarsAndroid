<template>
    <v-card raised>
        <v-card-text>
            <p>There are multiple hazards you can encounter on your adventures. The following table outlines how to handle them in-game. Some notes on the table:</p>
            <ul class="proper-list">
                <li><strong>Requirement</strong> describes a hazardous environment or a need that has to be met. If you enter a hazardous environment or cannot meet the need, then you must follow the <strong>Effect</strong></li>
                <li><strong>Effect</strong> describes the mechanics of how to handle the Hazard. Failure will incur 1 Fatigue level.</li>
                <li><strong>Recovery</strong> describes how you can gain back Fatigue levels once the Hazard has passed.</li>
                <li><strong>Incapacitation</strong> describes what happens when you run out of Fatigue levels.</li>
            </ul>
            <v-text-field
                append-icon="search"
                label="Search"
                single-line
                hide-details
                v-model="search"
            ></v-text-field>
            <v-data-table
                :headers="fields"
                :items="hazards"
                :search="search"
                hide-actions
                item-key="name"
            >
                <template slot="items" slot-scope="props">
                    <tr>
                        <td class="grey"><h3>{{ props.item.name | capitalize }}</h3></td>
                    </tr>
                    <tr>
                        <td>
                            <div><strong>Requirement</strong></div>
                            <div class="ml-4 mt-1 mb-1 bottom-border">{{ props.item.requirement }}</div>
                            <div><strong>Effect</strong></div>
                            <div class="ml-4 mt-1 mb-1 bottom-border">{{ props.item.effect }}</div>
                            <div><strong>Recovery</strong></div>
                            <div class="ml-4 mt-1 mb-1 bottom-border">{{ props.item.recovery }}</div>
                            <div><strong>Incapacitation</strong></div>
                            <div class="ml-4 mt-1 mb-1 bottom-border">{{ props.item.incapacitation }}</div>
                        </td>
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
                    }
                ],
                hazards: [
                    {
                        name: "Asphyxiation",
                        requirement: "The average human requires a suitable atmosphere to breath (and uninterrupted airways).",
                        effect: "Make a Vigor Check every turn.",
                        recovery: "Every 5 minutes of breathing in a suitable atmosphere recovers a Fatigue level.",
                        incapacitation: "You will die in half your Vigor dice in rounds.",
                    },
                    {
                        name: "Cold",
                        requirement: "You are in below 0°C temperatures.",
                        effect: "Make a Vigor Check (with a -1 penalty for every 10 degrees below) every 4 hours. \
                        Add an additional -2 penalty if you are not wearing suitable clothing.",
                        recovery: "Every 30 minutes in warmth and shelter allows you to recover 1 Fatigue level.",
                        incapacitation: "Make a Vigor Check every hour or you die.",
                    },
                    {
                        name: "Heat",
                        requirement: "You are in above 35°C temperatures.",
                        effect: "Make a Vigor Check (with a -1 penalty for every 5 degrees above) every 4 hours. \
                        Add an additional -2 penalty if they do not drink double the normal amount of water (see Thirst).",
                        recovery: "Every 30 minutes in shade and shelter allows you to recover 1 Fatigue level.",
                        incapacitation: "You suffer heat stroke. Make a Vigor Check; on a failure, your Smarts and Strength \
                        take a permanent -2 penalty.",
                    },
                    {
                        name: "Hunger",
                        requirement: "An average human roughly requires half a kilo of food every 24 hours.",
                        effect: "Make a Vigor Check (with a -2 penalty if you had less than half the required \
                        amount of food). Repeat every 12 hours.",
                        recovery: "Half a kilo of decent food allows you to recover a Fatigue level every hour \
                        (or every 12 hours if you reached Incapacitated).",
                        incapacitation: "Death in 3d6 hours.",
                    },
                    {
                        name: "Radiation",
                        requirement: "You enter a radioactive environment.",
                        effect: "Make a Vigor Check every hour in low radiation, and every minute in high radiation.",
                        recovery: "One Fatigue level fades away evey 24 hours.",
                        incapacitation: "You have radiation sickness. You always have 2 levels of Fatigue; gaining \
                        another Fatigue will make you Incapacitated. At the start of every session you make a Vigor \
                        Check; if it is 1 or less then you will die that session from the sickness.",
                    },
                    {
                        name: "Sleep",
                        requirement: "An average human roughly requires 6 hours sleep every 24 hours.",
                        effect: "Make a Vigor check. Repeat every 12 hours with a cumulative -2 penalty.",
                        recovery: "Every four hours of restful sleep removes a level of Fatigue.",
                        incapacitation: "Simply fall into a deep sleep for 2d10 hours.",
                    },
                    {
                        name: "Thirst",
                        requirement: "An average human roughly requires 2 litres of water per day.",
                        effect: "Make a Vigor Check (with a -2 penalty if you had less than 1 litre of water). \
                        Repeat every 6 hours.",
                        recovery: "Two litres of water allows you to recover a Fatigue level every hour.",
                        incapacitation: "Death in 2d6 hours.",
                    },
                ]
            }
        }
    }
</script>