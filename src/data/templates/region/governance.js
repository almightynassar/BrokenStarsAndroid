export default {
    /**
     * Types of governments
     * 
     *  - Structure defines how the government is formed
     *  - Source defines who weilds the power
     */
    government: {
        status: {
            captive: "Directly controlled by another government as a colony, an integrated state, or a conquered territory.",
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
     * Planetary - AI and Robot restrictions
     * 
     *  - Banned: Not allowed
     *  - Restricted: Allowed only in certain approved cases
     *  - Regulated: Must be Registered and adheres to additional laws
     *  - Registered: Must be made known to authorities
     */
    artificial: {
        none: "No restrictions on AI and Robots are enforced.",
        minimal: "AI are registered.",
        light: "AI are regulated.",
        moderate: "AI and Robots are regulated.",
        heavy: "AI is restricted. Robots are regulated.",
        ultra: "AI are banned. Robots are restricted.",
        extreme: "AI and Robots are banned.",
    },
    /**
     * Planetary - Level of government control
     */
    control: {
        none: "No authority exerted on the populace.",
        minimal: "Limited enforcement and crime prevention resources.",
        light: "Significant enforcement and crime prevention resources.",
        moderate: "Ubiquitous enforcement and crime prevention resources.",
        heavy: "Regulated invasion of privacy, and monitored speech & press.",
        ultra: "Limited unwarranted invasion of privacy, restricted speech & press, and monitored movement of civilians & goods.",
        extreme: "Unrestricted invasion of privacy, restricted speech & press, and restricted movement of civilians.",
    },
    /**
     * Planetary - Level of crime
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
     * Planetary - Narcotics restrictions
     * 
     *  - Banned: Not allowed
     *  - Restricted: Allowed only in certain approved cases
     *  - Regulated: Must be Registered and adheres to additional laws
     */
    narcotics: {
        none: "No restrictions on Narcotics are enforced.",
        minimal: "Only harmful Narcotics are regulated.",
        light: "Only harmful and/or addictive Narcotics are restricted.",
        moderate: "Only harmful and/or addictive Narcotics are restricted. All other Narcotics are regulated.",
        heavy: "Only harmful and/or addictive Narcotics are banned. All other Narcotics are regulated.",
        ultra: "Only harmful and/or addictive Narcotics are banned. All other Narcotics are restricted.",
        extreme: "Narcotics are banned.",
    },
    /**
     * Planetary - Psionic restrictions
     */
    psionic: {
        none: "No restrictions on Psionics are enforced.",
        minimal: "Psionics are registered.",
        light: "Psionics are registered. Use of psionic powers are regulated.",
        moderate: "Psionics are registered. Use of psionic powers are restricted.",
        heavy: "Psionics are regulated. Use of psionic powers are banned.",
        ultra: "Psionics are restricted.",
        extreme: "All Psionics are banned.",
    },
    /**
     * Planetary - Level of trade control
     */
    trade: {
        none: "Unrestricted imports/exports & immigration.",
        minimal: "Unrestricted imports/exports. Registered immigration.",
        light: "Registered imports/exports & immigration.",
        moderate: "Registered imports/exports. Regulated immigration.",
        heavy: "Regulated imports/exports & immigration.",
        ultra: "Regulated imports/exports. Restricted immigration.",
        extreme: "Restricted imports/exports & immigration.",
    },
    /**
     * Planetary - Weapon restrictions
     * 
     *  - Banned: Not allowed
     *  - Restricted: Allowed only in certain approved cases
     *  - Regulated: Must be Registered and adheres to additional laws
     *  - Registered: Must be made known to authorities
     */
    weapons: {
        none: "No restrictions on weapons or technologies are enforced.",
        minimal: "WMD and other dangerous technologies are regulated.",
        light: "WMD and other dangerous technologies are restricted. Firearms are regulated.",
        moderate: "WMD and other dangerous technologies are banned. Firearms are regulated.",
        heavy: "WMD and other dangerous technologies are banned. Firearms are restricted. Blades are regulated.",
        ultra: "WMD, Firearms and other dangerous technologies are banned. Blades are restricted.",
        extreme: "All weapons are banned.",
    },
}