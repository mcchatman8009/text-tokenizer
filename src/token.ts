export interface Token {
    type: string;
    value: any;
    text: string;
    pos: number;
    line: number;
    column: number;

    toString(): string;
}
