# HandlerExecutionError

`import { HandlerExecutionError } from '@kairo-js/router'`

**extends** `Error`

Thrown when the API handler throws. Propagates to the caller as a rejected `router.request()` Promise.

Not directly instantiable — received as a thrown exception.
