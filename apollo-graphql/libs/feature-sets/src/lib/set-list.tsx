import { useSetListQuery } from './__generated__/operations';

export function SetList() {
  const { loading, data } = useSetListQuery();

  return loading ? (
    <p>Loading ...</p>
  ) : (
    <ul className='mx-6 w-full list-none'>
      {data &&
        data.allSets?.map(({ id, name, numParts, year }) => (
          <li className='p-2 even:bg-slate-200'>
            {year} - <strong>{name}</strong> ({numParts} parts)
          </li>
        ))}
    </ul>
  );
}

export default SetList;
