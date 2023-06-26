import {json, LoaderArgs} from "@remix-run/node";

export const adminLoader = async ({ request }: LoaderArgs) => {
  return json({
    message: 'Hello, world!',
  });
};
