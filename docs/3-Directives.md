# Directives

Angular Fullstory is proud to offer some directives to assist with development, and reduce the amount of code you actually have to write.

### [fullstoryHide](../src/directives/hide.directive.ts)
Hides the open fullstory messenger window.

```html
<!-- Preferred -->
<button fullstoryHide></button>
<!-- OR --> 
<button [fullstoryHide]="true"></button>
```


### [fullstoryShowMessages](../src/directives/show-messages.directive.ts)
Shows the messenger window with a list of the user's messages.

```html
<!-- Preferred -->
<button fullstoryShowMessages></button> 
<!-- OR --> 
<button [fullstoryShowMessages]="true"></button>
```


### [fullstoryShowNewMessage](../src/directives/show-new-message.directive.ts)
Open up a new message window.
*Optional:* preconceived message

```html
<!-- Preferred -->
<button fullstoryShowNewMessage></button> 
<button [fullstoryShowNewMessage]="yourMessage"></button>
<!-- OR --> 
<button fullstoryShowNewMessage [message]="yourMessage"></button>
<button fullstoryShowNewMessage message="Your message in normal old string format..."></button>
```


### [fullstoryShow](../src/directives/show.directive.ts)
Open up a fullstory window.
*Optional:* preconceived message. If a message is defined, it serves as an alias for `showNewMessage`.

```html
<!-- Preferred -->
<button fullstoryShow></button> 
<button [fullstoryShow]="yourMessage"></button>
```


### [fullstoryShutdown](../src/directives/shutdown.directive.ts)
End an Fullstory session. Great for logout buttons.
*Optional:* preconceived message

```html
<!-- Preferred -->
<button fullstoryShutdown></button> 
<button [fullstoryShutdown]="true"></button>
```


### [fullstoryTrackEvent](../src/directives/track-event.directive.ts)
Track an event.
*Optional:* event metadata

```html
<!-- Preferred -->
<button fullstoryTrackEvent="buttonClick" [metadata]="yourData"></button> 
<!--OR-->
<button fullstoryTrackEvent event="buttonClick" [metadata]="yourData"></button> 
<button fullstoryTrackEvent [event]="eventNameVariable" [metadata]="yourData"></button> 
```
