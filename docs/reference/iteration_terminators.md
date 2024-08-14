# iteration_terminators

This module contains functions that determine when to stop the iteration process. The functions are used as arguments in the `reconstruct` function in the `algorithm.py` module. The functions are simple and can be easily replaced with custom functions.

All functions must match the `TerminateType` type alias:
```python
TerminatorType = Callable[
    [torch.Tensor, int], 
    bool
]
```


### Function: iter_ceil

```python
fpm_py.iteration_terminators.iter_ceil(
    object: torch.Tensor,
    i: int,
    max_iters: int
):
    ...
```

Simple iteration terminator that stops after a given number of iterations.
#### Args:
- `_` (`None`): The object array. Not used in this simple terminator.
- `i` (`None`): The current iteration number.
- `max_iters` (`None`): The maximum number of iterations, default to 10.


