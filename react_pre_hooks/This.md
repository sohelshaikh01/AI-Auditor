## Some Optimization Techniques: Ft. useCallback, useRef and useEffect Hook.

Learning Methods that change password and its optimization

Using useCallback Hook: useCallback(fn, dependencies);
- Const sum = useCallback(() => {}, [])
- Recall function based on its dependencies

Only used state and variable used in callback function are used in dependency array.

### It is reponsible for optimize and memoize method and it also store them into caches.

It is not comparable with useEffect hook, it optimize the method and useEffect re-runs the methods
<!-- Optimization in sense getting result from latest updated value -->

Using useEffect Hook to call function, method in components

- useEffect(callback fn, dependencies);
- useEffect is a React Hook that lets you synchronize a component with an external system.

## Creating the copy button with proper logic

useRef Hook: useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

Whenever want to take reference of anything then useRef Hook get comes work
