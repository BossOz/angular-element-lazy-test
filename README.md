##The project
This project was create for testing the the DOM manipulation with an Angular Element.

The angular element `CustomComponent` is lazy loaded using [angular elements extensions](https://angular-extensions.github.io/elements).

For building it use the `build-element` npm script and then copy/paste the `main.js` in the `test-app` assets folder.

The `ElementContainerComponent` is created dynamically and then added to the DOM - check `loadElement(id: number, name: string)` function inside `app.component.ts` of `test-app` project.

##The issue
The issue is at line #66: `this.objectContainerRef.detach();`
Using the detach method, the angular element loaded inside the `ElementContainerComponent` is destroyed (check the console log).

Reading the official documentation:
```
/**
* Detaches a view from this container without destroying it.
* Use along with `insert()` to move a view within the current container.
* @param index The 0-based index of the view to detach.
* If not specified, the last view in the container is detached.
*/
```

So the detach method do not destroy the detached `ElementContainerComponent` but the `CustomComponent` inside it.