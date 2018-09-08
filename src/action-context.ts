import {LineInfo} from './line-info';
import {Tokenizr} from './tokenizr';

export interface ActionContext {
    accept(type: string | any, value?: any): ActionContext;

    reject(): ActionContext;

    ignore(): ActionContext;

    stop(): ActionContext;

    repeat(): ActionContext;

    data(key: string, value?: any): any;

    info(): LineInfo;

    push(state: string): Tokenizr;

    pop(): string;

    state(state: string): ActionContext;

    state(): string;

    tag(tag: string): ActionContext;

    tagged(tag: string): boolean;

    untag(tag: string): ActionContext;

}
