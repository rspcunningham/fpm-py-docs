# iteration_terminators

### Function: iter_ceil

```python
def iter_ceil(
    _: np.ndarray,
    i: int,
    max_iters: int
):
    ...
```

Simple iteration terminator that stops after a given number of iterations.
Args:
    _: The object array. Not used in this simple terminator.
    i: The current iteration number.
    max_iters: The maximum number of iterations, default to 10.

