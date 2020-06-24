import { PORT } from './init/config';
import { server, app } from './init/server';

app.listen({ port: PORT }, () => {
  console.log(`Listening on http://localhost:${PORT}${server.graphqlPath}`);
});
