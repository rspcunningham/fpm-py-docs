# Iteration Terminators

In the **fpm-py** library, iteration terminators are functions that control when the iterative reconstruction process should stop. These functions are passed as arguments to the `reconstruct()` function in the `algorithm.py` module and can be easily customized to meet specific criteria for terminating the iteration.

### Terminator Function Interface

All iteration terminator functions must accept a single positional argument of type `TerminatorInputs`. This data structure contains all necessary information about the current state of the iteration and is passed to the terminator function by the reconstruction algorithm.

The terminator functions must match the following type alias:

```python
TerminatorType = Callable[[TerminatorInputs], bool]
```

This means the function should accept a single `TerminatorInputs` argument and return a boolean value:
- **`True`**: To stop the iteration process.
- **`False`**: To continue iterating.

### Example Terminator

The `iter_ceil` function is an example of a built-in iteration terminator that stops the process after a fixed number of iterations. Here’s how it works:

```python
def iter_ceil(inputs: TerminatorInputs, max_iters: int = 10) -> bool:
    return inputs.i >= max_iters
```

**Behavior:**
- The function returns `True` if the current iteration number `inputs.i` is greater than or equal to `max_iters`, causing the reconstruction process to stop.
- Otherwise, it returns `False`, allowing the process to continue.

:::tip
For information on all available built-in iteration terminators, check out [iteration_terminators](../reference/iteration_terminators.md)
:::

### Lambda Function Iteration Terminators

Let's say you want to use the `iter_ceil` terminator, but want the ceiling to be placed at 20 iterations rather than 10. To change the keyword argument `i` while still fitting the `TerminatorType` structure, you can use a lambda function:

```python
import fpm_py as fpm
from from_py.iteration_terminators import iter_ceil

iter_ceil_20 = lambda inputs: iter_ceil(inputs, max_iter=20)

# assuming image_series is a defined ImageSeries
output = fpm.reconstruct(
    image_series, 
    iteration_terminator=iter_ceil_20
)
```

### Custom Iteration Terminators

You can easily define your own iteration terminator functions too, by adhering to the `TerminatorType` interface. By utilizing the `TerminatorInputs` structure, you have access to various parameters of the reconstruction process, which allows for more sophisticated stopping criteria.

You can pass your custom terminator function to the `reconstruct()` function in place of `iter_ceil`.

For example:

```python
def converged_terminator(inputs: TerminatorInputs, tolerance: float = 1e-6) -> bool:
    if inputs.i == 0:
        return False

    change = torch.norm(inputs.wave_fourier_new - inputs.wave_fourier)
    return change < tolerance

output = fpm.reconstruct(image_series, iteration_terminator=converged_terminator)
```

:::tip
If you develop an effective iteration_terminator, you can make a contribution to the [library](https://www.github.com/rspcunningham/fpm-py)!
:::

By using iteration terminators, you can control and customize the behavior of the reconstruction algorithm to suit your specific needs and ensure efficient processing.
