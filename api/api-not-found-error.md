# ApiNotFoundError

`import { ApiNotFoundError } from '@kairo-js/router'`

**extends** `Error`

Thrown when the specified API name does not exist in the routing table. Occurs when the `apiName` passed to `router.request()` is not registered on the target addon.

Not directly instantiable — received as a thrown exception.
