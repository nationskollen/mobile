export default interface FilterCheckboxesType {
    nations: {
        norrlands?: boolean
        vdala?: boolean
        kalmars?: boolean
        gotlands?: boolean
        stockholms?: boolean
        ghs?: boolean
        uplands?: boolean
        goteborgs?: boolean
        snerikes?: boolean
        ostgotas?: boolean
        vastgotas?: boolean
        smalands?: boolean
        värmlands?: boolean
    }

    categories: {
        Breakfast?: boolean
        Brunch?: boolean
        Club?: boolean
        Consert?: boolean
        Culture?: boolean
        Fika?: boolean
        Gasque?: boolean
        Lunch?: boolean
        Other?: boolean
        Pub?: boolean
        Restaurant?: boolean
        Sport?: boolean
    }

    student: {
        needscard?: boolean
        needsmembership?: boolean
    }
}
