type Mods = Record<string, string | boolean>;
interface ClassNames {
    (cls: string, mods?: Mods, additional?: string[]) : string
}

export const classNames: ClassNames = function (cls, mods = {}, additional = []) {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([classname]) => classname),
    ]
        .join(' ');
};
