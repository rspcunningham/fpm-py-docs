# optimizers

### Type Alias: DEBUG

```python
DEBUG = False
```

'Assign' can't have docstrings

### Type Alias: OptimizerType

```python
OptimizerType = Callable[[torch.Tensor, torch.Tensor, torch.Tensor, torch.Tensor, int, int], tuple[torch.Tensor, torch.Tensor]]
```

'Assign' can't have docstrings

### Function: quasi_second_order

```python
fpm_py.optimizers.quasi_second_order(
    object: torch.Tensor,
    pupil: torch.Tensor,
    wave_fourier: torch.Tensor,
    wave_fourier_new: torch.Tensor,
    x: int,
    y: int,
    alpha_o: float,
    mu_o: float,
    alpha_p: float,
    mu_p: float
):
    ...
```

Simple gradient descent optimizer with learning rate and regularization hyperparams for object and pupil.

#### Args:
- `object` (`torch.Tensor`): The object.
- `pupil` (`torch.Tensor`): The pupil.
- `wave_fourier` (`torch.Tensor`): The Fourier domain of the wave.
- `wave_fourier_new` (`torch.Tensor`): The new Fourier domain of the wave.
- `x` (`int`): Bottom row where pupil overlaps with object.
- `y` (`int`): Leftmost column where pupil overlaps with object.
- `alpha_o` (`float`): The learning rate for the object.
- `mu_o` (`float`): The regularization parameter for the object.
- `alpha_p` (`float`): The learning rate for the pupil.
- `mu_p` (`float`): The regularization parameter for the pupil.

#### Returns:
- `None`: The updated object and pupil.


### Function: tomas

```python
fpm_py.optimizers.tomas(
    object: torch.Tensor,
    pupil: torch.Tensor,
    wave_fourier: torch.Tensor,
    wave_fourier_new: torch.Tensor,
    x: int,
    y: int,
    alpha: float,
    beta: float
):
    ...
```

Tomas' optimizer with learning rate and regularization hyperparams for object and pupil.

#### Args:
- `object` (`torch.Tensor`): The object.
- `pupil` (`torch.Tensor`): The pupil.
- `wave_fourier` (`torch.Tensor`): The Fourier domain of the wave.
- `wave_fourier_new` (`torch.Tensor`): The new Fourier domain of the wave.
- `x` (`int`): Bottom row where pupil overlaps with object.
- `y` (`int`): Leftmost column where pupil overlaps with object.

#### Returns:
- `None`: The updated object and pupil.


