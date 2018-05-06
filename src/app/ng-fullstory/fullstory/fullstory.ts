import { Inject, Injectable, PLATFORM_ID, Optional, isDevMode } from '@angular/core'
import { Router } from '@angular/router'
import { isPlatformBrowser } from '@angular/common'

import { FullstoryConfig } from '../shared/fullstory-config'
import { Any, BootInput } from '../types/boot-input'

/**
 * A provider with every Fullstory.JS method
 */
@Injectable()
export class Fullstory {

  private id: string

  constructor(
    @Inject(FullstoryConfig) private config: FullstoryConfig,
    @Inject(PLATFORM_ID) protected platformId: Object,
    @Optional() @Inject(Router) private router: Router
  ) {
    if (!isPlatformBrowser(this.platformId)) {
      return
    }

    // Run load and attach to window
    // this.loadFullstory(config)

    // // Subscribe to router changes
    // if (config && config.updateOnRouterChange) {
    //   this.router.events.subscribe(event => {
    //     this.update()
    //   })
    // }
    // else if (isDevMode()) {
    //   console.warn(`
    //   Common practice in single page applications is to update whenever the route changes.
    //   ng-fullstory supports this functionality out of the box just set 'updateOnRouterChange' to true in your Fullstory Module config.
    //    This warning will not appear in production, if you choose not to use router updating.
    //  `)
    // }
  }

  login (data) {
    if (!isPlatformBrowser(this.platformId)) {
      return
    }

    // This is an example script - don't forget to change it!
    (<any> window).FS.identify(data.user_id, {
      displayName: data.name,
      email: data.email
      // TODO: Add your own custom user variables here, details at
      // http://help.fullstory.com/develop-js/setuservars.
      // reviewsWritten_int: 14,
    })
  }

  logout () {
    if (!isPlatformBrowser(this.platformId)) {
      return
    }
    // This is an example script - don't forget to change it!
    (<any> window).FS.identify(false)
  }

  l(): void {
    // if (!isPlatformBrowser(this.platformId)) {
    //   return
    // }

    const d = document
    const s = d.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = `https://widget.fullstory.io/widget/${this.id}`
    const x = d.getElementsByTagName('script')[0]
    x.parentNode.insertBefore(s, x)
  }

  loadFullstory(config: FullstoryConfig): void {
    // if (!isPlatformBrowser(this.platformId)) {
    //   return
    // }

    this.id = config.fsOrg
    const w = <any>window
    const ic = w.Fullstory
    if (typeof ic === 'function') {
      ic('reattach_activator')
      ic('update', config)
    } else {
      const i: any = function () {
        i.c(arguments)
      }
      i.q = []
      i.c = function (args: any) {
        i.q.push(args)
      }
      w.Fullstory = i
      if (w.attachEvent) {
        w.attachEvent('onload', this.l)
      } else {
        w.addEventListener('load', this.l, false)
      }
    }
  }
}
