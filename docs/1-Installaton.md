# Installation

Installing ng-fullstory is easy. Make sure you have your App ID nearby for this process.

First, install ng-fullstory from NPM.

```sh
npm install --save ng-fullstory@beta
```

Then, in your root `app.module.ts`, include `FullstoryModule`.

```ts
import { FullstoryModule } from 'ng-fullstory';

@NgModule({
  imports: [
    ...
    FullstoryModule.forRoot(YOUR_APP_ID)
    ...
  ]
})
export class AppModule{}
```

If you have child modules or lazy loaded modules and you want to use the directives, import `FullstoryModule`, but don't call `forRoot()` on it.

```ts
import { FullstoryModule } from 'ng-fullstory';


@NgModule({
  imports: [
    ...
    FullstoryModule
    ...
  ]
})
export class ChildModule{}
```

Now, you can use the [providers](2-Providers.md) and [directives](3-Directives.md) wherever you like!
