# Optimizers

In the **fpm-py** library, optimizers are functions that update the object and pupil in each iteration of the reconstruction process. These functions are passed as arguments to the `reconstruct()` function in the `algorithm.py` module, and they can be customized to suit different reconstruction needs.

### Optimizer Function Interface

All optimizer functions must accept a single positional argument of type `OptimizerInputs`. This data structure provides all necessary information about the current state of the reconstruction process and is passed to the optimizer function by the algorithm.

The optimizer functions must match the following type alias:

```python
OptimizerType = Callable[[OptimizerInputs], tuple[torch.Tensor, torch.Tensor]]
```

This means the function should accept a single `OptimizerInputs` argument and return a tuple of two `torch.Tensor` objects:
- The updated object tensor.
- The updated pupil tensor.

### Example Optimizer

The `tomas` function is an example of a built-in optimizer with distinct learning rate and regularization parameters for the object and pupil.

```python
def tomas(
    inputs: OptimizerInputs, 
    alpha: float = 1, 
    beta: float = 1000
    ) -> tuple[torch.Tensor, torch.Tensor]:
```

**Behavior:**
- Updates the object and pupil using specific correction terms that incorporate the `alpha` and `beta` parameters.
- `alpha` is the learning rate for the object, and `beta` is the learning rate for the pupil.

### Lambda Function Optimizers

Just like iteration terminators can be extended with a lmbda function to change keyword parameters, optimizer functions can to. 

Let's say you wanted to adjust the learning rates to be: 
- `alpha = 100`
- `beta = 200`

That can be accomplished as follows:

```python
import fpm_py as fpm
from fpm_py.optimizers import tomas

tomas_adj = lambda inputs: tomas(inputs, alpha=100, beta=200)

# assuming image_series is a defined ImageSeries
output = fpm.reconstruct(
    image_series, 
    optimizer=tomas_adj
)
```

## Custom Optimizers

You can define your own optimizer functions by adhering to the `OptimizerType` interface. By utilizing the `OptimizerInputs` structure, you have access to the object, pupil, and the current state of the Fourier domain, which allows for creating customized update rules.

You can pass your custom optimizer function to the `reconstruct()` function in place of the built-in optimizers.

For example:

```python
def custom_optimizer(inputs: OptimizerInputs) -> tuple[torch.Tensor, torch.Tensor]:
    # Custom update logic here
    updated_object = inputs.object # Implement your custom object update
    updated_pupil = inputs.pupil # Implement your custom pupil update
    return updated_object, updated_pupil

output = fpm.reconstruct(image_series, optimizer=custom_optimizer)
```

By using optimizers, you can finely control the reconstruction process, making it more adaptable to specific imaging needs.
