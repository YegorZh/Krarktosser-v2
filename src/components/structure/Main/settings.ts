type Settings = {
    value: string,
    name: string,
    dependancy?: { execute: (settings: StateSettings) => boolean },
    validation?: { execute: (value: string) => string },
    options?: string[]
}

type StateSettings = {
    [key: string]: Settings;
}

const defaultDependancy = { execute: (settings: StateSettings) => Number(settings.krarkAmount?.value) <= 0 };
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
        name: 'Amount',
        validation: defaultValidation,
    },
    krarkAmount: {
        value: '0',
        name: `Krark's Thumb`,
        validation: {
            execute: (value: string) => {
                let out = value;
                out = removeLimiters(out);
                if (Number(out) > 10) out = "10";
                if (out === '' || Number(out) < 0) out = '0';
                return out;
            }
        }
    },
    side: {
        value: 'None',
        name: 'Priority',
        options: ['None', 'True', 'False'],
        dependancy: defaultDependancy,
    },
    evenSpread: {
        value: 'False',
        name: 'Even spread',
        options: ['True', 'False'],
        dependancy: defaultDependancy,
    },
    minPrio: {
        value: '0',
        name: 'Min priority',
        dependancy: defaultDependancy,
    },
    maxPrio: {
        value: '0',
        name: 'Max priority',
        dependancy: defaultDependancy,
    },
    minSecond: {
        value: '0',
        name: 'Min secondary',
        dependancy: defaultDependancy,
    },
    maxSecond: {
        value: '0',
        name: 'Max secondary',
        dependancy: defaultDependancy,
    },
}

export default settingsData;
export { Settings, StateSettings };