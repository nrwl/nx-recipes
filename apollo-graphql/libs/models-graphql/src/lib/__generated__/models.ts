export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  addSet: Maybe<Set>;
};


export type MutationAddSetArgs = {
  name: InputMaybe<Scalars['String']['input']>;
  numParts: InputMaybe<Scalars['Int']['input']>;
  year: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  allSets: Maybe<Array<Maybe<Set>>>;
};

export type Set = {
  __typename?: 'Set';
  id: Scalars['Int']['output'];
  name: Maybe<Scalars['String']['output']>;
  numParts: Maybe<Scalars['Int']['output']>;
  year: Maybe<Scalars['String']['output']>;
};
