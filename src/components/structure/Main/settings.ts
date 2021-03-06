type Settings = {
    value: string,
    default: string,
    name: string,
    dependancy?: { execute: (settings: StateSettings) => boolean },
    validation?: { execute: (value: string) => string },
    options?: string[]
}

type StateSettings = {
    [key: string]: Settings;
}

const defaultDependancy = {
    execute: (settings: StateSettings) =>
        Number(settings.krarkAmount?.value) <= 0
        ||
        Number(settings.coinsPerFlip?.value) <= 1
};
const removeLimiters = (value: string) => value.replace(/(\D+|^0+(?=[0-9]))/, '');
const defaultValidation = {
    execute: (value: string) => {
        let out = value;
        out = removeLimiters(out);
        if (Number(out) > 1000000) out = "1000000";
        if (out === '' || Number(out) < 0) out = '0';
        return out;
    }
};

const settingsData: StateSettings = {
    amount: {
        value: '1',
        default: '1',
        name: 'Amount',
        validation: defaultValidation,
    },
    flipUntilLose: {
        value: 'Off',
        default: 'Off',
        name: 'Flip until you lose',
        options: ['Off', 'Heads', 'Tails']
    },
    // krarkAmount: {
    //     value: '0',
    //     default: '0',
    //     name: `Krark's Thumb`,
    //     validation: {
    //         execute: (value: string) => {
    //             let out = value;
    //             out = removeLimiters(out);
    //             if (Number(out) > 10) out = "10";
    //             if (out === '' || Number(out) < 0) out = '0';
    //             return out;
    //         }
    //     }
    // },
    coinsPerFlip: {
        value: '1',
        default: '1',
        name: `Coins per flip`,
        validation: {
            execute: (value: string) => {
                let out = value;
                out = removeLimiters(out);
                if (Number(out) > 1024) out = "1024";
                if (out === '' || Number(out) < 0) out = '0';
                return out;
            }
        }
    },
    side: {
        value: 'None',
        default: 'None',
        name: 'Priority',
        options: ['None', 'Heads', 'Tails'],
        dependancy: defaultDependancy,
    },
    evenSpread: {
        value: 'Off',
        default: 'Off',
        name: 'Even spread',
        options: ['Off', 'On'],
        dependancy: defaultDependancy,
    },
    minPrio: {
        value: '0',
        default: '0',
        name: 'Min priority',
        dependancy: defaultDependancy,
        validation: defaultValidation,
    },
    maxPrio: {
        value: '0',
        default: '0',
        name: 'Max priority',
        dependancy: defaultDependancy,
        validation: defaultValidation,
    },
    minSecond: {
        value: '0',
        default: '0',
        name: 'Min secondary',
        dependancy: defaultDependancy,
        validation: defaultValidation,
    },
    maxSecond: {
        value: '0',
        default: '0',
        name: 'Max secondary',
        dependancy: defaultDependancy,
        validation: defaultValidation,
    },
}

export default settingsData;
export { Settings, StateSettings };