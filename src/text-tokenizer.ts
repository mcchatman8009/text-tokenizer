import {Tokenizr} from './tokenizr';
import {Rule} from './rule';
import {Token} from './token';
import {ActionContext} from './action-context';

const TokenizrConstructor = require('tokenizr');

export class TextTokenizer implements Tokenizr {
    private tokenizer: Tokenizr;

    constructor() {
        this.tokenizer = new TokenizrConstructor();
    }

    reset(): void {
        this.tokenizer.reset();
    }

    debug(enable: boolean): TextTokenizer {
        this.tokenizer.debug(enable);
        return this;
    }

    input(input: string): TextTokenizer {
        this.tokenizer.input(input);
        return null;
    }

    push(state: string): TextTokenizer {
        this.tokenizer.push(state);
        return this;
    }

    pop(): string {
        return this.tokenizer.pop();
    }

    state(state?: string): any {
        if (state) {
            this.tokenizer.state(state);
        } else {
            return state;
        }
    }

    tag(tag: string): TextTokenizer {
        this.tokenizer.tag(tag);
        return this;
    }

    tagged(tag: string): boolean {
        return this.tokenizer.tagged(tag);
    }

    untag(tag: string): TextTokenizer {
        this.tokenizer.untag(tag);
        return this;
    }

    before(action: (ctx: ActionContext, match: string[], rule: Rule) => void): TextTokenizer {
        this.tokenizer.before(action);
        return this;
    }

    after(action: (ctx: ActionContext, match: string[], rule: Rule) => void): TextTokenizer {
        this.tokenizer.after(action);
        return this;
    }

    finish(action: (ctx: ActionContext) => void): TextTokenizer {
        this.tokenizer.finish(action);
        return this;
    }

    rule(pattern: RegExp, action?: (ctx: ActionContext, match: string[]) => void): TextTokenizer {
        this.tokenizer.rule(pattern, action);
        return this;
    }

    token(): Token {
        return this.tokenizer.token();
    }

    tokens(): Token[] {
        return this.tokenizer.tokens();
    }

    skip(next?: number): TextTokenizer {
        this.tokenizer.skip();
        return this;
    }

    consume(type: string, value?: string): TextTokenizer {
        this.tokenizer.consume(type, value);
        return this;
    }

    peek(offset?: number): Token {
        return this.tokenizer.peek(offset);
    }

    begin(): TextTokenizer {
        this.tokenizer.begin();
        return this;
    }

    depth(): number {
        return this.tokenizer.depth();
    }

    commit(): TextTokenizer {
        this.tokenizer.commit();
        return this;
    }

    rollback(): TextTokenizer {
        this.tokenizer.rollback();
        return this;
    }
}
