type D = 'd' | '';
type G = 'g';
type I = 'i';
type M = 'm';
type S = 's' | '';
type U = 'u' | '';
type V = 'v' | '';
type Y = 'y' | '';

type Combinations = `${D}${G}${I}${M}${S}${U}${V}${Y}`;

type StringToTuple<S extends string> = S extends `${infer First}${infer Rest}` ? [First, ...StringToTuple<Rest>] : [];

declare const flags:  StringToTuple<Combinations>;

export = flags;
