export default {
    /**
     * Types of governments
     * 
     *  - Structure defines how the government is formed
     *  - Source defines who weilds the power
     */
    government: {
        status: {
            captive: "Directly controlled by another government as a colony, or a conquered territory.",
            contested: "Many entities hold claim to be the sole authorative central government. This may occur due to civil war, balkanization, criminals, or regional instability.",
            none: "No government.",
            stable: "A stable form of government controls the territory.",
        },
        structure: {
            anarchy: "No formal government (all men for themselves).",
            confederacy: "A collection of fully self-governing nations that operate together for mutual benefit. The central government is only required to support member states.",
            corporation: "Directly controlled by a corporation or corporations (usually for a profit). Citizens may be considered as 'shareholders'.",
            dominion: "One powerful nation holds power over one or more semi-independant nations.",
            federation: "A collection of partially self-governing nations that are under control of a central federal government.",
            feudalism: "A loose hierarchy that defines a citizen's service and obligation to a ruler, chief or lord.",
            hegemony: "One powerful nation holds power over one or more formerly indepdant nations.",
            unitary: "A single nation has ultimate power over the territory. Any sub-divisions only exercise the powers that the central government chooses to delegate.",
        },
        source: {
            autocratic: "Supreme power is concentrated into the hands of one person.",
            communist: "Supreme power is concentrated into the hands of the common worker and labourer.",
            kratocratic: "Supreme power is concentrated into the hands of those few who are strong enough to take it (either by force, coercion, or cunning).",
            military: "Supreme power is concentrated into the hands of the military.",
            oligarchic: "Supreme power is concentrated into the hands of a small minority of privileged individuals.",
            participatory: "Participatory Democracy requires that all citizens have a direct say in how the government works, and individually vote on laws.",
            representative: "Representative Democracy requires that citizens elect some of their peers to handle government business on their behalf.",
            sortition: "A type of democracy where political officials are chosen at random from a pool of eligible citizens.",
            technocratic: "Supreme power is concentrated into the hands of a small minority of highly educated individuals.",
            theocratic: "Supreme power is concentrated into the hands of the dominant religious system.",
        },
    },
    /**
     * Level of government control
     */
    control: {
        none: "No authority exerted on the populace.",
        minimal: "Only major disruptive and dangerous crimes are punished, and unrestricted imports/exports & immigration.",
        light: "Major & minor crimes are punished, and unrestricted imports/exports & immigration.",
        moderate: "Major & minor crimes are punished, and monitored imports/exports & immigration.",
        heavy: "Monitored speech & press, and restricted imports/exports & immigration.",
        ultra: "Limited unwarranted invasion of privacy, restricted speech & press, and monitored movement of civilians & goods.",
        extreme: "Unrestricted invasion of privacy, restricted speech & press, and rigid control of the movement of civilians & goods.",
    },
    /**
     * Level of crime
     */
    crime: {
        none: "Crime is virtually non-existant.",
        minimal: "Crime is rare, or heavily concentrated in a few small areas.",
        light: "Crime is uncommon, or spread across a few regions.",
        moderate: "Low-level Crime is a common occurance, with only a few major crimes.",
        heavy: "All types of Crime is a common occurance.",
        ultra: "Major crimes occur regularly over the course of a day.",
        extreme: "Unrestricted crime.",
    },
    /**
     * Narcotics restrictions
     */
    narcotics: {
        none: "No restrictions on drugs or narcotics are enforced.",
        minimal: "Sale of drugs and narcotics are regulated, but not restricted.",
        light: "Sale of drugs and narcotics are regulated, and only harmful drugs are restricted.",
        moderate: "Sale of drugs and narcotics are regulated, and only harmful and/or addictive drugs are restricted.",
        heavy: "Only government-approved drugs are sold, with punishments enforced based on the unapproved drug's harmfulness and addictiveness.",
        ultra: "Only limited government-approved drugs are sold, with punishments enforced for using or selling unapproved drugs.",
        extreme: "No drugs or narcotics are allowed, with heavy punishments for selling or using them.",
    },
    /**
     * Weapon restrictions
     */
    weapons: {
        none: "No restrictions on weapons or technologies are enforced.",
        minimal: "WMD and other dangerous technologies are restricted.",
        light: "WMD and other dangerous technologies are restricted. Explosives, machine guns, flamethrowers are regulated.",
        moderate: "WMD, explosives, machine guns, flamethrowers and other dangerous technologies are restricted. Large firearms are regulated.",
        heavy: "WMD, explosives, large firearms, flamethrowers and other dangerous technologies are restricted. Small firearms are regulated.",
        ultra: "WMD, explosives, all firearms, flamethrowers and other dangerous technologies are restricted. Blades are regulated.",
        extreme: "All weapons are restricted.",
    },
}