import * as types from "@nx-apollo/models-graphql"
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AddSetMutationVariables = types.Exact<{
  name: types.Scalars['String']['input'];
  year: types.Scalars['String']['input'];
  numParts: types.Scalars['Int']['input'];
}>;


export type AddSetMutation = { __typename?: 'Mutation', addSet?: { __typename?: 'Set', id: number, name?: string | null, numParts?: number | null, year?: string | null } | null };

export type SetListQueryVariables = types.Exact<{ [key: string]: never; }>;


export type SetListQuery = { __typename?: 'Query', allSets?: Array<{ __typename?: 'Set', id: number, name?: string | null, numParts?: number | null, year?: string | null } | null> | null };


export const AddSetDocument = gql`
    mutation addSet($name: String!, $year: String!, $numParts: Int!) {
  addSet(name: $name, year: $year, numParts: $numParts) {
    id
    name
    numParts
    year
  }
}
    `;
export type AddSetMutationFn = Apollo.MutationFunction<AddSetMutation, AddSetMutationVariables>;

/**
 * __useAddSetMutation__
 *
 * To run a mutation, you first call `useAddSetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSetMutation, { data, loading, error }] = useAddSetMutation({
 *   variables: {
 *      name: // value for 'name'
 *      year: // value for 'year'
 *      numParts: // value for 'numParts'
 *   },
 * });
 */
export function useAddSetMutation(baseOptions?: Apollo.MutationHookOptions<AddSetMutation, AddSetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddSetMutation, AddSetMutationVariables>(AddSetDocument, options);
      }
export type AddSetMutationHookResult = ReturnType<typeof useAddSetMutation>;
export type AddSetMutationResult = Apollo.MutationResult<AddSetMutation>;
export type AddSetMutationOptions = Apollo.BaseMutationOptions<AddSetMutation, AddSetMutationVariables>;
export const SetListDocument = gql`
    query setList {
  allSets {
    id
    name
    numParts
    year
  }
}
    `;

/**
 * __useSetListQuery__
 *
 * To run a query within a React component, call `useSetListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSetListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSetListQuery({
 *   variables: {
 *   },
 * });
 */
export function useSetListQuery(baseOptions?: Apollo.QueryHookOptions<SetListQuery, SetListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SetListQuery, SetListQueryVariables>(SetListDocument, options);
      }
export function useSetListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SetListQuery, SetListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SetListQuery, SetListQueryVariables>(SetListDocument, options);
        }
export function useSetListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SetListQuery, SetListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SetListQuery, SetListQueryVariables>(SetListDocument, options);
        }
export type SetListQueryHookResult = ReturnType<typeof useSetListQuery>;
export type SetListLazyQueryHookResult = ReturnType<typeof useSetListLazyQuery>;
export type SetListSuspenseQueryHookResult = ReturnType<typeof useSetListSuspenseQuery>;
export type SetListQueryResult = Apollo.QueryResult<SetListQuery, SetListQueryVariables>;