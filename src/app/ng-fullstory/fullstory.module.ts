import { ModuleWithProviders, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { Fullstory } from './fullstory/fullstory'
import { FullstoryConfig } from './shared/fullstory-config'


@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [],
  exports: [],
  providers: [
    Fullstory
  ]
})
export class FullstoryModule {
  static forRoot(config: FullstoryConfig): ModuleWithProviders {
    return {
      ngModule: FullstoryModule,
      providers: [
        { provide: FullstoryConfig, useValue: config },
      ]
    }
  }
}
