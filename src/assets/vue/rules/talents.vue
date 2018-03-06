<template>
    <v-card raised>
        <v-card-text>
            <p>Talents are a homebrew replacement for Savage World's Edges. Since everything is in a tree, we do not need to track each Edge's specific requirements; the character just needs to meet the basic requirements of the whole tree.</p>
            <p>There are three types of Talents:</p>
            <ul class="proper-list">
                <li><strong>Base</strong> Talents are automatically given when the character first unlocks a Tree. You only need to meet one of the requirements.</li>
                <li><strong>Branch</strong> Talents are split into two or more paths. You must unlock each Branch Talent in the order listed.</li>
                <li><strong>Capstone</strong> Talents can only be unlocked after completing a Branch path. You can still unlock the other paths if you so wish.</li>
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
                :items="talents"
                :search="search"
                hide-actions
                item-key="name"
            >
                <template slot="items" slot-scope="props">
                    <tr>
                        <td class="pull-center grey"><h3>{{ props.item.name | capitalize }}</h3></td>
                    </tr>
                    <tr>
                        <td>
                            <p><strong>Requirements:</strong></p>
                            <ul class="proper-list">
                                <li v-for="r in props.item.requirement" :key="r.trait">{{r.trait | capitalize}} = {{r.min}}</li>
                            </ul>
                            <table>
                                <tr>
                                    <td class="bottom-border" :colspan="props.item.talents.length">
                                        <p class="pull-center"><strong>{{props.item.base.name | capitalize}}:</strong></p>
                                        <p>{{props.item.base.effect}}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bottom-border" v-for="i in props.item.talents.length " :key="props.item.base.name + '0' + i">
                                        <p class="pull-center"><strong>{{props.item.talents[i-1][0].name | capitalize}}:</strong></p>
                                        <p>{{props.item.talents[i-1][0].effect}}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bottom-border" v-for="i in props.item.talents.length " :key="props.item.base.name + '1' + i">
                                        <p class="pull-center"><strong>{{props.item.talents[i-1][1].name | capitalize}}:</strong></p>
                                        <p>{{props.item.talents[i-1][1].effect}}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bottom-border" :colspan="props.item.talents.length">
                                        <p class="pull-center"><strong>{{props.item.capstone.name | capitalize}}:</strong></p>
                                        <p>{{props.item.capstone.effect}}</p>
                                    </td>
                                </tr>  
                            </table>
                        </td>
                    </tr>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
    import Talents from "../../../data/templates/player/talents"
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
                talents: Talents.list
            }
        }
    }
</script>