# optimizers

This module contains the optimizers used in the FPM reconstruction process. The optimizers are used as arguments in the `reconstruct` function in the `algorithm.py` module. Optimizers update the object and pupil in each iteration of the reconstruction process.

All Optimizer functions can only accept one positional argument of type: OptimizerInputs. This structure is created and passed in by the reconstruction algorithm.


## Class: OptimizerInputs

```python
fpm_py.optimizers.OptimizerInputs:
    ...
```

Dataclass for the inputs to the optimizer functions. All optimizer functions must accept this dataclass as the only positional argument.

Attributes:
    object (torch.Tensor): The object array.
    pupil (torch.Tensor): The pupil array.
    wave_fourier (torch.Tensor): The current Fourier domain of the wave.
    wave_fourier_new (torch.Tensor): The new Fourier domain of the wave.
    x (int): Bottom row where pupil overlaps with object.
    y (int): Leftmost column where pupil overlaps with object.


### Function: quasi_second_order

```python
fpm_py.optimizers.quasi_second_order(
    inputs: OptimizerInputs,
    alpha_o: float,
    mu_o: float,
    alpha_p: float,
    mu_p: float
):
    ...
```

Simple gradient descent optimizer with learning rate and regularization hyperparams for object and pupil.

#### Args:
- `inputs` (`OptimizerInputs`): The inputs to the optimizer function.
- `alpha_o` (`float`): Regularization hyperparameter for object.
- `mu_o` (`float`): Learning rate hyperparameter for object.
- `alpha_p` (`float`): Regularization hyperparameter for pupil.
- `mu_p` (`float`): Learning rate hyperparameter for pupil.

#### Returns:
- `tuple`: The updated object and pupil.


### Function: tomas

```python
fpm_py.optimizers.tomas(
    inputs: OptimizerInputs,
    alpha: float,
    beta: float
):
    ...
```

Tomas' optimizer with learning rate and regularization hyperparams for object and pupil.

#### Args:
- `inputs` (`OptimizerInputs`): The inputs to the optimizer function.
- `alpha` (`float`): The learning rate for the object.
- `beta` (`float`): The learning rate for the pupil.

#### Returns:
- `tuple`: The updated object and pupil.


