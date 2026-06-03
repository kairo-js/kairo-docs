# BeforeHookExecutionError

`import { BeforeHookExecutionError } from '@kairo-js/router'`

**extends** `Error`

Thrown when a `before` hook throws. By the time this error is thrown, rollback for the failing hook has already been executed.

Not directly instantiable — received as a thrown exception.
