export interface Rule {
    state: string;
    pattern: RegExp;
    action: Function;
    name: string;
}
