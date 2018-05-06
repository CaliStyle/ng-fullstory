# Providers

The `Fullstory` provider has all the available Fullstory.JS methods available in the documentation. For a detailed overview of what each method does, see the [API Documentation](4-API.md).

```ts
import { Fullstory } from 'ng-fullstory';

@Component()
export class AppComponent {
    constructor (
        public fullstory:Fullstory
    ) {
        this.fullstory.boot(myFullstoryConfig)
    }
}
```

You can inject the Fullstory provider into any of your components, directives, services, etc. However, make sure you have called `boot()` before calling any methods. Typically, putting this in your `app.component.ts` will prevent conflicts.
