import {ActionContext} from './action-context';
import {Rule} from './rule';
import {Token} from './token';

export interface Tokenizr {
    reset(): void;

    debug(enable: boolean): any;

    input(input: string): any;

    push(state: string): any;

    pop(): string;

    state(state: string): any;

    state(): string;

    tag(tag: string): any;

    tagged(tag: string): boolean;

    untag(tag: string): any;

    before(action: (ctx: ActionContext, match: string[], rule: Rule) => void): any;

    after(action: (ctx: ActionContext, match: string[], rule: Rule) => void): any;

    finish(action: (ctx: ActionContext) => void): any;

    rule(pattern: RegExp, action?: (ctx: ActionContext, match: string[]) => void): any;

    // rule(state: string, pattern: RegExp, action: (ctx: ActionContext, match: string[]) => void): any;

    token(): Token;

    tokens(): Token[];

    skip(next?: number): any;

    consume(type: string, value?: string): any;

    peek(offset?: number): Token;

    begin(): any;

    depth(): number;

    commit(): any;

    rollback(): any;
}
